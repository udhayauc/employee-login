import React, { useState } from "react";
import axios from "axios";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Records from "./Records";
import Registration from "./Registration";
function Login() {
    const [MailID, setMail] = useState('');
    const [DOJ, setDOJ] = useState('');
    const navigate = useNavigate();
    const handleMailChange = (value) => {
        setMail(value);
    }
    const handleDOJChange = (value) => {
        setDOJ(value);
    }
    const handleSave = () => {
        const data = {
            MailID: MailID,
            DOJ: DOJ
        };
        const url = 'https://localhost:44331/api/Test/Login';
        axios.post(url, data).then((result) => {
            if (result.data === 'Logged in Successfully') {
                navigate('/Records')
            }

            else {
                alert(result.data);
            }
        }).catch((error) => {
            alert(error);
        })
    }
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-sm-9 col-md-8 col-lg-6 mx-auto">
                    <div className="shadow rounded-5 my-5">
                        <div className="card-body p-4 p-sm-6">
                            <h3 className="card-title text-center mb-5">Log In</h3>
                            <div className="mb-3">
                                <input type="text" id="txtName" className="form-control" placeholder="Email-address" onChange={(e) => handleMailChange(e.target.value)} /><br />
                            </div>
                            <div className="mb-3">
                                <input type="password" id="txtPass" className="form-control" placeholder="Password" onChange={(e) => handleDOJChange(e.target.value)} /><br />
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary" id="btnSave" onClick={() => handleSave()}>LOGIN</button><br />
                                <Routes>
                                    <Route path="./components/Records" element={<Records />} />
                                </Routes>
                            </div>
                            <div>
                                <Link className="nav-link active" to={'/sign-up'}>
                                    Don't have an account? Register here
                                </Link>
                                <Routes>
                                    <Route path="/sign-in" element={<Registration />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Login;

