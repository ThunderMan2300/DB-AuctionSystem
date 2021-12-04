import { useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function Redirect() {
    const [isLoading, setLoading] = useState(1);
    const history = useHistory();
    setTimeout(function () {
        console.log(isLoading);
        if(isLoading === 2) {
            history.push('/');
        } else {
            setLoading(2);
        }
    }, 6);

    useEffect(() => {
    }, []);

    return (
        <div>Reloading...</div>
    );
}

export default Redirect;