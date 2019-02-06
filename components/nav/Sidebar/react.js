import React, { Component } from "react";
import style from "./style.module.scss";
// import { mChevronRight } from "@masonite/svg-icons";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.links = props.links || [];

    this.state = {
      expanded: true
    };
  }

  links() {
    return this.links.map(({ image, text }) => <li>{link}</li>);
  }

  render() {
    return (
      <aside className={cx("sidebar")}>
        <div>icon</div>
        <ul>{this.links}</ul>
      </aside>
    );
  }
}
