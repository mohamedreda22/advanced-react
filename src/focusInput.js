import React from "react";
import './App.css';
import { useRef } from "react";
export  function Foucs() {   
const formInputRef = useRef(null);
const FocusInput = () => {
    formInputRef.current.focus();}

    return(
        <div>
            <h1>
                  Using useRef Hook to focus on input element in React 
            </h1>
            <input type="text" ref={formInputRef}/>
            <button onClick={FocusInput}>Focus Input</button>
        </div>
    )}
