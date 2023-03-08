import logo from "./logo.svg";
import "./App.css";
import Input from "./component/Input";
import Button from "./component/Buttons";
import Header from "./component/Header";
import { Component } from "react";
import { ReactDOM } from "react-dom";
import Form from "./component/Form";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Navlink,
} from "react-router-dom";
import { sxdumpMessage, isArrayEmpty } from "./utilities";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Signin from "./pages/Signin";

function App() {
  return (
    // <div className="App">
    //   <div className="headers">
    //     <h4>Sign up</h4>
    //     <h2 className="h2">Create an Account.</h2>
    //     <small className="welcome">Welcome to Onigs Where maic happens</small>
    //     <hr />
    //   </div>
    //   <div className="formsection">
    //     <form>
    //       <label>
    //         <div className="firstRow">
    //           <Input labels="First Name" display="flex" width="90%" />

    //           <Input labels="Last Name" width="100%" display="flex" />
    //         </div>
    //         <Input labels="Email Address" />
    //         <Input labels="Password" />
    //         <Button bgColor="#35A7AB" labels="CREAT ACCOUNT" color="#FFFFFF" />
    //         <small className="terms">
    //           I have read and agrees to the
    //           <span className="services">Terms of Service</span>
    //         </small>
    //       </label>
    //     </form>
    //   </div>
    //   <span className="signin">
    //     Already have an account?
    //     {/* <Link to={"/Signin"}>
    //       <small className="services">Sign in</small>
    //     </Link> */}
    //     <small className="services">Sign in</small>
    //   </span>
    //   <Router>
    //     <Routes>
    //       <Route path="/Signin" Component={<Signin />} />
    //       <Route path="/Signin" Component={<h2>here i am</h2>} />
    //     </Routes>
    //   </Router>
    // </div>
    <div>
      <Routes>
        <Route path="/ " Component={<Signin />} />
        <Route path="/Signin" Component={<h2>here i am</h2>} />
      </Routes>
    </div>
  );
}
export default App;
