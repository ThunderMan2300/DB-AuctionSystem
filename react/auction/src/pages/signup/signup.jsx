import { React, useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useStateValue } from '../../Context/StateContext';

import classes from './signup.module.css';

const BASE_URL = "http://localhost:8080";

function Signup() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ homeAddress, setAddress ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ validEmail, setValidEmail  ] = useState(true);
    const [ validPassword, setValidPassword ] = useState(true);
    const [ validName, setValidName ] = useState(true);
    const [ validAddress, setValidAddress ] = useState(true);
    const [ validPhone, setValidPhone ] = useState(true);
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

    const signup = async data => {
        const response = await callAPI(POST, `/api/signup/`, data);
        return response;
    }

    const submit = async (e) => {
        e.preventDefault();
        if (!email || !password)
            alert("Please enter all fields to signup");
        else if ( (!validEmail || !validPassword) && false)
            alert("Please verify your fields");
        else {
            const body = {
                email, 
                password,
                name,
                homeAddress,
                phone
            }
            const { status, data } = await signup(body);
            
            // Route to the homepage after signup
            if(status === 200) {
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
                alert(data.error);
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

    const onNameChange = (value) => {
        EMAIL_REGEX.test(value) ? setValidName(true) : setValidName(false);
        setName(value);
    }

    const onAddressChange = (value) => {
        EMAIL_REGEX.test(value) ? setValidAddress(true) : setValidAddress(false);
        setAddress(value);
    }

    const onPhoneChange = (value) => {
        EMAIL_REGEX.test(value) ? setValidPhone(true) : setValidPhone(false);
        setPhone(value);
    }

    return(
        <div className={ classes.signup }>
            <div className={ classes.outerCard }>
                <div className={ classes.cardContainer }>
                    <div id={classes.cardId }>
                        <h2>Signup</h2>
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
                            <FormGroup className={ classes.formFields }>
                                <Label for="exampleName"><strong>Name:</strong></Label>
                                <Input
                                    className={ classes.inputField }
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    value={ name }
                                    onChange={ e => onNameChange(e.target.value) }
                                    valid={ !name ? null : validName }
                                    invalid={ !name ? null : !validName }
                                />
                            </FormGroup>
                            <FormGroup className={ classes.formFields }>
                                <Label for="exampleAddress"><strong>Address:</strong></Label>
                                <Input
                                    className={ classes.inputField }
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={ homeAddress }
                                    onChange={ e => onAddressChange(e.target.value) }
                                    valid={ !homeAddress ? null : validAddress }
                                    invalid={ !homeAddress ? null : !validAddress }
                                />
                            </FormGroup>
                            <FormGroup className={ classes.formFields }>
                                <Label for="examplePhone"><strong>Phone:</strong></Label>
                                <Input
                                    className={ classes.inputField }
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    value={ phone }
                                    onChange={ e => onPhoneChange(e.target.value) }
                                    valid={ !phone ? null : validPhone }
                                    invalid={ !phone ? null : !validPhone }
                                />
                            </FormGroup>
                            <Button outline className="submit" id={ classes.button }><strong>signup</strong></Button>
                            <br />
                            <div id={ classes.registerLink }>
                                <Link to="/login">Already have an account? Log in here</Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;