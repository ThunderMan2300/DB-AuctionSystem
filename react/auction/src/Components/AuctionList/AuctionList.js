import React, {useEffect, useState} from 'react';
import { useHistory, useParams, Link } from "react-router-dom";
import { useStateValue } from '../../Context/StateContext';
import './AuctionList.css';

function AuctionList() {
    const [data, setData] = useState([]);
    const history = useHistory();
    const [{ email, login, password }, dispatch] = useStateValue();

    if(!login) {
        history.push("/login");
    }

    const getAuctions = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/auction/items?email=' + email + '&password=' + password);
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
        getAuctions();
        const script = document.createElement('script');
        script.src = "https://www.kryogenix.org/code/browser/sorttable/sorttable.js";
        script.async = true;
        document.body.appendChild(script);

    }, []);
    console.log(data);
    const auctionList = data.map((auction) =>
         <tr>
            <td>{auction.itemID}</td>
            <td>{auction.title}</td>
            <td>{auction.startPrice}</td>
            <td>{auction.bidIncrement}</td>
            <td><TimeSlot data={auction.startTime} /></td>
            <td><TimeSlot data={auction.endTime} /></td>
         </tr>
    );

    return(
        <div id="auctiontableContainer">
            <h1>My Auctions:</h1>
            <table className="sortable" id="myauctions">
            <thead>
                <tr>
                    <th>Item ID</th>
                    <th>Name</th>
                    <th>Start Price</th>
                    <th>Bid Increment</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                </tr>
            </thead>
            <tbody>
                {auctionList}
            </tbody>
            </table>
        </div>
    )
}

export default AuctionList;
