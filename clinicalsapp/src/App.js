import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddPatients from "./components/AddPatients";
import AddClinicalData from "./components/AddClinicalData";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addPatient" component={AddPatients} />
        <Route
          exact
          path="/AddClinicalData/:patientId"
          component={AddClinicalData}
        />
      </Switch>
    </div>
  );
}

export default App;
