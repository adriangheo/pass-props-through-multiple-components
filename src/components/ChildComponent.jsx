import React from "react";
import "./ChildComponent.css";

function ChildComponent(props) {
  return (
    <div className="child-component">
      <h4>ChildComponent.jsx</h4>
      <p> {props.title}</p>
    </div>
  );
}

export default ChildComponent;
