import React from "react";
import s from "./style.module.scss";

const Button = props => {
  const { children, onClick = null, variant = null } = props;

  const classes = [
    s.btn,
    variant === "light" && s["btn--light"],
    variant === "dark" && s["btn--dark"]
  ]
    .filter(v => v)
    .join(" ");
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
