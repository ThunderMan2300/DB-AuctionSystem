import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Home } from './pages/home';
import { Login } from './pages/login/login'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <NavBar />
        {/* <Routes>
            <Route path="/" element={<Home />} />
        </Routes> */}
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/" component={ Home } />
        </Switch>
    </Router>
  )
}

export default App;
