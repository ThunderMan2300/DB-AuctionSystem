import React, {useEffect, useState} from 'react';
import { useHistory, useParams, Link } from "react-router-dom";
import { useStateValue } from '../../Context/StateContext';
import './TransactionList.css';

function TransactionList() {
    const [data, setData] = useState([]);
    const history = useHistory();
    const [{ email, login, password }, dispatch] = useStateValue();

    if(!login) {
        history.push("/login");
    }

    const getTransactions = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/auction/transactions?email=' + email + '&password=' + password);
            const json = await response.json();
            setData(json.data);
        }
        catch (error) {
            console.error(error);
        }
    }

    function TimeSlot(props) {
        const date = new Date(props.data);
        const tmp = date.toString();
        const cut = tmp.indexOf("GMT");
        const final = tmp.substring(0, cut-1);

        return (
            <p>{final}</p>
        );
    }

    useEffect(() => {
        getTransactions();
        const script = document.createElement('script');
        script.src = "https://www.kryogenix.org/code/browser/sorttable/sorttable.js";
        script.async = true;
        document.body.appendChild(script);

    }, []);
    console.log(data);
    const transactionList = data.map((transaction) =>
         <tr>
            <td>{transaction.transactionID}</td>
            <td><TimeSlot data={transaction.transactionTime} /></td>
         </tr>
    );

    return(
        <div id="transactiontableContainer">
            <h1>My Transactions:</h1>
            <table className="sortable" id="mytransactions">
            <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Transaction Time</th>
                </tr>
            </thead>
            <tbody>
                {transactionList}
            </tbody>
            </table>
        </div>
    )
}

export default TransactionList;
