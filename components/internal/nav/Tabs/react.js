import React, { Component } from "react";
import s from "./style.module.scss";

export const Tab = ({ active, children, id, onTabClick = () => false }) => {
  const className = [s.tab, active && s["tab--active"]]
    .filter(v => v)
    .join(" ");

  return (
    <li onClick={() => onTabClick(id)} className={className}>
      {children}
    </li>
  );
};

export default function Tabs(props) {
  const { activeTab, onTabClick } = props;
  const tabs = () =>
    props.tabs.map(({ id, children }) => (
      <Tab active={id === activeTab} key={id} id={id} onTabClick={onTabClick}>
        {children}
      </Tab>
    ));

  return <ul className={s.tabs}>{tabs()}</ul>;
}
