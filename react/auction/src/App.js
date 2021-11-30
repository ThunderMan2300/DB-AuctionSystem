import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App;
