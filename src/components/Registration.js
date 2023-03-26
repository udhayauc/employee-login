import React, { Fragment, useState } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
function Registration() {
    const [EmpName, setName] = useState('');
    const [Department, setDept] = useState('');
    const [MailID, setMail] = useState('');
    const [DOJ, setDOJ] = useState('');

    const handleNameChange = (value) => {
        setName(value);
    }
    const handleDeptChange = (value) => {
        setDept(value);
    }
    const handleMailChange = (value) => {
        setMail(value);
    }
    const handleDOJChange = (value) => {
        setDOJ(value);
    }
    const handleSave = () => {
        const data = {
            EmployeeName: EmpName,
            Department: Department,
            MailID: MailID,
            DOJ: DOJ
        };
        const url = 'https://localhost:44331/api/Test/Registration';
        axios.post(url, data).then((result) => {
            alert(result.data);
        }).catch((error) => {
            alert(error);
        })
    }
    return (
        <Fragment>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-sm-9 col-md-8 col-lg-6 mx-auto">
                        <div className="shadow rounded-5 my-5">
                            <div className="card-body p-4 p-sm-6">
                                <div className="mb-3">
                                    <h3 className="mb-3">Registration Page</h3>
                                    <input type="text" className="form-control" placeholder="Employee-Name" onChange={(e) => handleNameChange(e.target.value)} /><br />
                                    <input type="text" className="form-control" placeholder="Department" onChange={(e) => handleDeptChange(e.target.value)} /><br />
                                    <input type="text" className="form-control" placeholder="MailID" onChange={(e) => handleMailChange(e.target.value)} /><br />
                                    <input type="text" className="form-control" placeholder="DateofJoining" onChange={(e) => handleDOJChange(e.target.value)} /><br />
                                    <button className="btn btn-primary" onClick={() => handleSave()}>Sign Up</button><br />
                                </div>
                                <div>
                                    <Link className="nav-link active" to={'/sign-in'}>
                                        Already registered? Sign in 
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

        </Fragment>
    )
}
export default Registration;
