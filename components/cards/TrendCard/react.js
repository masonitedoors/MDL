import React, { Component } from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export default function TrendCard(props) {
  const { title, content, image, to } = props;

  return (
    <article className={cx("trend-card")}>
      <a
        href={to}
        onClick={e => {
          e.preventDefault();
          action(to);
        }}
      >
        <div className={cx("trend-card__content")}>
          <h2 className={cx("trend-card__title")}>{title}</h2>
          {content}
        </div>
      </a>
    </article>
  );
}
