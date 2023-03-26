import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Records from './components/Records';
import Logout from "./components/Logout";
function App() {
  return (
  
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Welcome
            </Link>
            <div className="">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse justify-content-end" >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/Logout'}>
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<Registration />} />
              <Route path="/Records" element={<Records />} />
              <Route path="/Logout" element={<Logout />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
 
}

export default App;
