import React from "react";
import "./Header.css";
import { dumpMessage } from "../utilities";

const Header = (props) => {
  dumpMessage(props);
  return (
    <div className="header">
      <h4 className="header">{props.headerone}</h4>
      <h2>{props.headertwo}</h2>
      <small>{props.smallheader}</small>
    </div>
  );
};
export default Header;
