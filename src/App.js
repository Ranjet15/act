import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import NotFound from './Components/NotFound';
import Counter from './Components/Counter';





function App() {
    return (
        <Router>
            <nav>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="contactUs">Contact Us</Link></li>
                <li><Link to="counter">Counter</Link></li>
              </ul>
            </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="*" element={<NotFound />} />
                
            </Routes>
        </Router>

    );
};

export default App;
