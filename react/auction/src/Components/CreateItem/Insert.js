import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useStateValue } from '../../Context/StateContext';
import "./Insert.css"

function Insert() {
    const [title, setTitle] = useState();
    const [startPrice, setStartPrice] = useState();
    const [category, setCategory] = useState();
    const [imgURL, setImageURL] = useState();

    const history = useHistory();
    const [{ password, email }, dispatch] = useStateValue();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8080/api/items/new', {
                email,
                password,
                title,
                startPrice,
                category,
                imgURL,
            })
            .then((res) => {
                alert('Item added successfully!');
            })
            .catch((err) => {
                alert('Insert Item Failed');
            });
    };

    const topTitle = "Submit new Item";

    return (
        <div className="formContainer">
            <form className="insertForm">
                <div className="formGroup" id="title-form">
                    <label for="title">Item Name*</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>
                <div className="formGroup" id="price-form">
                    <label for="price">Start Price*</label>
                    <input
                        id="price"
                        type="number"
                        min="0"
                        pattern="\d*"
                        value={startPrice}
                        onChange={(e) => setStartPrice(e.target.value)}
                    ></input>
                </div>
                <div className="formGroup" id="category-form">
                    <label for="category">Category*</label>
                    <input
                        id="category"
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    ></input>
                </div>
                <div className="formGroup" id="image-form">
                    <label for="image">Image*</label>
                    <input
                        id="image"
                        type="text"
                        value={imgURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    ></input>
                </div>
                <button
                  type="submit"
                  className="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >Submit</button>
            </form>
        </div>
    );
}

export default Insert;