import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import axios from "axios";
import { useStateValue } from '../../Context/StateContext';
import { useHistory, useParams } from "react-router-dom";
import './MainGrid.css';

function MainGrid() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const history = useHistory();
    const [{ email, login }, dispatch] = useStateValue();

    const getAuction = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/items/'); // Variable goes here
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAuction();
    }, []);

    function MyGrid(props) {
        const data = props.data;
        const listItems = data.map((item) =>
            <div className="gridItem">
                <h2>{item.title}</h2>
                <img className="auctionImage" src={item.imgURL} alt={item.title} />
                <p>{item.description}</p>
                <CalcBid data={item}/>
                <p>Start Price: ${item.startPrice}</p>
                <Countdown date={item.endTime} />
            </div>
        );
        return (
            <div className="displayGrid">{listItems}</div>
        );
    }

    function CalcBid(props) {

        const makeBid = async (e) => {
            if(!login) {
                history.push("/login");
            }
            else {
                e.preventDefault();
                const itemID = props.data.itemID;
                axios
                    .post( 'http://localhost:8080/api/auction/bid', {
                        itemID,
                        display,
                        email
                    })
                    .catch((err) => {alert(err)});
                history.push("/red");
            }
        };

        console.log(props);
        var max = 0

        if(props.data.bidList != null ){
            for(let [id, bid] of Object.entries(props.data.bidList)) {
                if(bid === undefined)
                    console.log('skip');
                else {
                    if(bid.price>max) {
                        max = bid.price;
                    }
                }
            }
        }
        const display = (max + parseFloat(props.data.bidIncrement)) < parseFloat(props.data.startPrice) ?
            parseFloat(props.data.startPrice) : (max + parseFloat(props.data.bidIncrement));

        return (
            <div>
                <p>Current Bid: ${max}</p>
                <button value={display}
                    onClick={(e) => {
                        makeBid(e, display);
                }}
                >Quick Bid: ${display}</button>
            </div>
        );
    }

    return (
        <div>
            <MyGrid data={data} />
        </div>
    )
}

export default MainGrid;