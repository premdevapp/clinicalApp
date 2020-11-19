import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [patientData, setPatientData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/clinicalapi/patients").then((res) => {
      setPatientData(res.data);
    });
  }, patientData);
  return (
    <div>
      <h2>Patients:</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {patientData.map((patient) => (
            <RowCreater item={patient} />
          ))}
        </tbody>
      </table>
      <Link to={"/addPatient"}>Register Patient</Link>
    </div>
  );
}

class RowCreater extends React.Component {
  render() {
    let patient = this.props.item;
    return (
      <tr>
        <td>{patient.firstName}</td>
        <td>{patient.lastName}</td>
        <td>{patient.age}</td>
        <td>
          <Link to={"/AddClinicalData/" + patient._id}>Add Data</Link>
        </td>
      </tr>
    );
  }
}

export default Home;
