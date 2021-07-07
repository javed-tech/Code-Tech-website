import './App.css';
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import {Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
   <>
   <Navbar />
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Service" component={Service}/>
    <Route exact path="/Contact" component={Contact}/>
    <Redirect to="/" />
  </Switch>
  <Footer/>
   </>
  );
}

export default App;
