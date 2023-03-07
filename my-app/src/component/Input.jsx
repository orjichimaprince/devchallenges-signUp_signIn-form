import React from "react";
import "./Input.css";

function Input({ labels, display, width, borderColor }) {
  return (
    <div>
      <form>
        <label>
          <span className="placeholders"> {labels}</span>
          {/* {labels} */}
          {/* <div className="inputs"> */}
          <input
            style={{
              display: display,
              width: width,
              borderColor: borderColor,
            }}
          ></input>
          {/* </div> */}
        </label>
      </form>
    </div>
  );
}
export default Input;
