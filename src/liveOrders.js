import React from "react";
import "./App.css";

const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};

export function LiveOrders() {
  return (
    <div className="App">
      <Row spacing={32}>
        <div style={{ color: "red", width: 50, height: 50 }}>
          pizza Margarita
        </div>
        <div style={{ color: "blue", width: 50, height: 50 }}>2</div>
        <div style={{ color: "green", width: 50, height: 50 }}>
          30$
        </div>
        <div style={{ color: "GrayText", width: 50, height: 50 }}>
          18:30
        </div>
        <div style={{ color: "pink", width: 50, height: 50 }}>
          John
        </div>
      </Row>
    </div>
  );
}
