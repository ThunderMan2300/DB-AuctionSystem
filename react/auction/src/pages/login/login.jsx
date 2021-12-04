import { React, useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useStateValue } from '../../Context/StateContext';

import classes from './login.module.css';

const BASE_URL = "http://localhost:8080";

function Login() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ validEmail, setValidEmail  ] = useState(true);
    const [ validPassword, setValidPassword ] = useState(true);
    const history = useHistory();
    const [{login}, dispatch] = useStateValue();

    useEffect(() => {
        if (login) {
            history.push("/");
        }
    }, [login, history]);

    const GET = 'GET';
    const POST = 'POST';
    const PATCH = 'PATCH';
    const DELETE = 'DELETE';

    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const PWD_REGEX = /^[A-Z][a-z0-9]{6,11}$/;
    
    const buildReqHeader = (type, data) => {
        return {
            method: type,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '',
                'Authorization': `Bearer`
            },
            body: JSON.stringify(data)
        }
    }
    
    const callAPI = async (requestType, endpoint, data) => {
        let request;
        if (requestType === GET || requestType === DELETE)
            request = buildReqHeader(requestType);
        else
            request = buildReqHeader(requestType, data);
        // const request = (requestType === GET) ? buildReqHeader(requestType) :
        //     buildReqHeader(requestType, data);
        const rawResponse = await fetch(BASE_URL + endpoint, request);
        const response = await rawResponse.json();
        return {
            status: rawResponse.status,
            data: response
        };
    }

    const loginFunction = async data => {
        const response = await callAPI(POST, `/api/login/`, data);
        return response;
    }

    const submit = async (e) => {
        e.preventDefault();
        if (!email || !password)
            alert("Please enter all fields to login");
        else if ((!validEmail || !validPassword) & false)
            alert("Please verify your fields");
        else {
            const body = {
                email, 
                password 
            }
            const { status, data } = await loginFunction(body);
            
            // Route to the homepage after login
            if(status === 200 && data.data !== null ) {
                dispatch({
                  type: "AUTHORIZE",
                  item: {
                    name: data.data.name,
                    email: data.data.email,
                    password: data.data.password,
                    userid: data.data.id,
                  },
                });
                history.push('/');
            }
            else {
                alert("User doesn't exists");
            }
            console.log(data);
        }
    }

    // State variables setting
    const onEmailChange = (value) => {
        EMAIL_REGEX.test(value) ? setValidEmail(true) : setValidEmail(false);
        setEmail(value);
    }

    const onPasswordChange = (value) => {
        PWD_REGEX.test(value) ? setValidPassword(true) : setValidPassword(false);
        setPassword(value);
    }

    return(
        <div className={ classes.login }>
            <div className={ classes.outerCard }>
                <div className={ classes.cardContainer }>
                    <div id={classes.cardId }>
                        <h2>Login</h2>
                        <Form className="UserFormContainer" onSubmit={ e => submit(e) }>
                            <FormGroup className={ classes.formFields }>
                                <Label for="exampleEmail"><strong>Email:</strong></Label>
                                <Input
                                    className={ classes.inputField }
                                    type="email" 
                                    name="email" 
                                    placeholder="example@example.com" 
                                    value={ email }
                                    onChange={ e => onEmailChange(e.target.value) }
                                    // onBlur={ () => checkUser() }
                                    valid={ !email ? null : validEmail }
                                    invalid={ !email ? null : !validEmail }
                                />
                            </FormGroup>
                            <FormGroup className={ classes.formFields }>
                                <Label for="examplePassword"><strong>Password:</strong></Label>
                                <Input
                                    className={ classes.inputField }
                                    type="password" 
                                    name="password" 
                                    placeholder="password"
                                    value={ password }
                                    onChange={ e => onPasswordChange(e.target.value) } 
                                    valid={ !password ? null : validPassword }
                                    invalid={ !password ? null : !validPassword }
                                />
                            </FormGroup>
                            <Button outline className="submit" id={ classes.button }><strong>Login</strong></Button>
                            <br />
                            <div id={ classes.registerLink }>
                                <Link to="/register">New User? Register Here</Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;