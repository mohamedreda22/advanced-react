//Using HOC to track mouse position
import "./App.css";
import { useState,useEffect } from "react";
const withMousePosition = (WrappedComponent) => {
    return () => {
        const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
        useEffect(() => {
                const handelMousePositionChange = (e) => {
                setMousePosition({ x: e.clientX, y: e.clientY });       
              };
                window.addEventListener("mousemove", handelMousePositionChange);
                return () => {
                window.removeEventListener("mousemove", handelMousePositionChange);
                };
        }, []);



        return (
            <WrappedComponent {...props}  mousePosition={mousePosition} />
        );
    };
};

const PanelMouseLogger = ({mousePosition}) => {
    if (!mousePosition) return null;
    return (
        <div className="BasicTracker">
            <h1>Mouse Position</h1>
            <div className="Row">
            <span>X: {mousePosition.x}</span>
            <span>Y: {mousePosition.y}</span>
            </div>
        </div>
    );
};
const PointMouseLogger = ({mousePosition}) => {
    if(!mousePosition) return null;
    return (
        <p>
            ({mousePosition.x}, {mousePosition.y})

        </p>
    );
};
const PanelMouseTracker=withMousePosition(PanelMouseLogger);
const PointMouseTracker=withMousePosition(PointMouseLogger);
function MousePosationApp(){
    return(
        <div>
            <PanelMouseTracker/>
            <PointMouseTracker/>
        </div>
    );
}
export default MousePosationApp;

