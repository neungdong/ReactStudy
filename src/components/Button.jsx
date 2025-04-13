import React from "react";

const Button = ({ styleType, children }) => {
  let className = "Button";
  if (styleType) {
    className += ` ${styleType}`;
    console.log(className);
  }

  return <button className={className}>{children}</button>;
};

export default Button;
