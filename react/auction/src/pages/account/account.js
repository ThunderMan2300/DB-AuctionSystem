import { useHistory, useParams, Link } from "react-router-dom";
import { useStateValue } from '../../Context/StateContext';
import BidList from '../../Components/BidList/BidList'
import AuctionList from '../../Components/AuctionList/AuctionList'
import TransactionList from '../../Components/TransactionList/TransactionList'

function Account() {


    return (
        <div>
          <div>
              <BidList />
          </div>
          <div>
              <AuctionList />
          </div>
          <div>
              <TransactionList />
          </div>
        </div>
    )
}

export default Account;
