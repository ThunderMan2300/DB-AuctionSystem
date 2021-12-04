import React, {useEffect, useState} from 'react';
import { useHistory, useParams, Link } from "react-router-dom";
import { useStateValue } from '../../Context/StateContext';
import './BidList.css';

function BidList() {
    const [data, setData] = useState([]);
    const history = useHistory();
    const [{ email, login, password }, dispatch] = useStateValue();

    if(!login) {
        history.push("/login");
    }

    const getBids = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/auction/bids?email=' + email + '&password=' + password);
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
        getBids();
        const script = document.createElement('script');
        script.src = "https://www.kryogenix.org/code/browser/sorttable/sorttable.js";
        script.async = true;
        document.body.appendChild(script);

    }, []);
    console.log(data);
    const bidList = data.map((bid) =>
         <tr>
            <td>{bid.bidID}</td>
            <td>{bid.price}</td>
            <td><TimeSlot data={bid.bidTime} /></td>
            <td>Outbid</td>
         </tr>
    );

    return(
        <div id="tableContainer">
            <h1>My Bids:</h1>
            <table className="sortable" id="customers">
            <thead>
                <tr>
                    <th>Bid ID</th>
                    <th>Price</th>
                    <th>Bid Time</th>
                    <th>Bid Status</th>
                </tr>
            </thead>
            <tbody>
                {bidList}
            </tbody>
            </table>
        </div>
    )
}

export default BidList;