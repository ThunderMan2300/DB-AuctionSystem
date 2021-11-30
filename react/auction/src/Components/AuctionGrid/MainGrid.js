import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import './MainGrid.css';

function MainGrid() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

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
                <CalcBid data={item.bidList} />
                <p>Start Price: ${item.startPrice}</p>
                <Countdown date={item.endTime} />
            </div>
        );
        return (
            <div className="displayGrid">{listItems}</div>
        );
    }

    function CalcBid(props) {
        var max = 0;
        for(let [id, bid] of Object.entries(props)) {
            if(bid[0] === undefined)
                console.log('skip');
            else {
                for(let [a, b] of Object.entries(bid)) {
                    console.log(b.price);
                    if(b.price>max) {
                        max = b.price;
                    }
                }
            }
        }

        return (
            <p>Current Bid: ${max}</p>
        );
    }

    return (
        <div>
            <MyGrid data={data} />
        </div>
    )
}

export default MainGrid;