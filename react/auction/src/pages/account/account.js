import { useHistory, useParams, Link } from "react-router-dom";
import { useStateValue } from '../../Context/StateContext';
import BidList from '../../Components/BidList/BidList'

function Account() {


    return (
        <div>
            <BidList />
        </div>
    )
}

export default Account;