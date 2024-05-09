import React from "react";
import { Link } from "react-router-dom";
import Submit from "./components/Button/submit";
const containerStyle = {
  display: "flex",
  color: "red",
  flexDirection: "column",
  border: "none",
  gap: "10px",
  width: "500px",
  border: "1px solid black",
  padding: "16px",
  borderRadius: "5px",
};

const inputStyle = {
  width: "97%",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "black",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const Input = () => {
  return (
    <div style={containerStyle}>
      {/* <Link style={link} to="/"></Link> */}
      <input style={inputStyle} type="text" placeholder="Title" />
      <input style={inputStyle} type="date" placeholder="Year" />
      <input style={inputStyle} type="text" placeholder="Image" />
      <Submit />
    </div>
  );
};

export default Input;
