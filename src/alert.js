import React from "react";
import "./App.css";

const hadelDeletion = (props) => {
    alert("You account deleled succusfuly")
};
const hadelCancelation = (props) => {
    alert("You deletion process canceled")
};

const Button = ({ children, backgroundColor,message }) => {
  return (
    <button style={{ backgroundColor }} onClick={message}>
      {children}
    </button>
  );
};

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};

const DeleteButton = (props) => {

  return <Button backgroundColor="red" message={hadelDeletion}>Delete</Button>;
};

const CancelButton = () => {
  return <Button backgroundColor="blue" message={hadelCancelation}>Cancel</Button>;
};

export default function AlertMessage() {
  return (
    <div className="App">
      <header>Little Lemon Restaurant </header>
      <Alert>
        <h4>Delete Account</h4>
        <p>Are you sure you want to delete your account?</p>
        <div className="Buttons">
          <DeleteButton />
          <CancelButton />
        </div>
      </Alert>
    </div>
  );
}
