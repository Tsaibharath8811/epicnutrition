import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import HomePage from "./components/home";
import BasicExample from "./components/navbar";
import Age from "./components/age";
import Bmi from "./components/bmi";
import Nutrients from "./components/nutrients";
import AboutUs from "./components/Aboutus";



function App() {
  return (
    <Router>
    <div>
     
    <BasicExample/>
    
  

  <Switch>
  <Route exact path="/age">
    <Age/>
  </Route>
  <Route exact path="/">
  <HomePage/>
  </Route>
  <Route exact path="/bmi">
  <Bmi/>
  </Route>
  <Route exact path="/requirednutrientschart">
  <Nutrients/>
  </Route>
  <Route exact path="/aboutus">
  <AboutUs/>
  </Route>
  </Switch>
  
    </div>
    </Router>

  );
}

export default App;
