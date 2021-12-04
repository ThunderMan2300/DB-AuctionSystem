import { Provider } from 'react-redux';
import store from './Store';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './pages/home';
import Sell from './pages/Sell';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Account from './pages/account/account';
import Redirect from './pages/redirect';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
  <Provider store={store}>
    <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route exact path="/sell" >
                <Sell />
            </Route>
            <Route exact path="/login" >
                <Login />
            </Route>
            <Route exact path="/register" >
                <Signup />
            </Route>
            <Route exact path="/red" >
                <Redirect />
            </Route>
            <Route exact path="/account" >
                <Account />
            </Route>
        </Switch>
    </Router>
  </Provider>
  )
}

export default App;