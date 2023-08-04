import React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  const handleChange = (newValueSelected) => {
    onChange(newValueSelected);
  };

  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange: handleChange,
      checked: child.props.value === selected,
    });
  });

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  const handleChange = () => {
    onChange(value);
  };

  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name={value}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
