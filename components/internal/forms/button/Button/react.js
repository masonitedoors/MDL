import React from "react";
import s from "./style.module.scss";

const Button = props => {
  const { children, variant = null } = props;

  const classes = [
    "btn",
    variant === s["light"] && s["btn--light"],
    variant === s["dark"] && s["btn--dark"]
  ].join(" ");
  return <button className={classes}>{children}</button>;
};

export default Button;
