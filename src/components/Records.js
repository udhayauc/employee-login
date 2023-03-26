import React, { Fragment } from 'react'
import { Table } from 'react-bootstrap'

class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rec: [] }
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch('https://localhost:44331/api/Employee')
      .then(response => response.json())
      .then(data => {
        this.setState({ rec: data });
      });
  }
  render() {
    const { rec } = this.state;
    return (
      <Fragment>
        <div className='container pt-5'>
        <div className='row'>
        <div className="col-sm-4 col-md-8 col-lg-10 mx-auto">
        <h3 className="container mt-5">Welcome to Employee Management Records </h3>
        <Table className="container mt-3" striped border hover size="sm">
          <thead className='bg-primary'>
            <tr>
              <th>EmployeeID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {rec.map(dep =>
              <tr key={dep.DepartmentID}>
                <td>{dep.EmployeeID}</td>
                <td>{dep.EmployeeName}</td>
                <td>{dep.Department}</td>
                <td>{dep.MailID}</td>
              </tr>)}
          </tbody>
        </Table>
        </div>
        </div>
        </div>
      </Fragment>
    )
  }
}
export default Records;