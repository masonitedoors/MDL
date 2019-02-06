import React from "react";
import Lottie from "react-lottie";
import animationData from "./data.json";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

export default props => {
  const { centered } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={cx({ centered })}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};
