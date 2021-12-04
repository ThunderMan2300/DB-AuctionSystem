import CreateForm from '../Components/CreateItem/Insert';
import { useSelector } from 'react-redux';
import { useStateValue } from '../Context/StateContext';
import { useHistory } from "react-router-dom";

function Sell() {
    const history = useHistory();
    const [{ login }, dispatch] = useStateValue();
    if (!login) {
        history.push("/login");
    }

    return (
        < CreateForm />
    );
}

export default Sell;