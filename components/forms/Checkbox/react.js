import React, { PureComponent } from "react";
import s from "./style.module.scss";
import { mCheck } from "@masonite/svg-icons";
import classNames from "classnames/bind";

const cx = classNames.bind(s);

class Checkbox extends PureComponent {
  constructor(props) {
    super(props);

    const checked =
      typeof props.checked !== "undefined" ? props.checked : false;

    this.state = { checked };
  }

  onChange = () => {
    const { stateful } = this.props;
    const isStateful = typeof stateful !== "undefined" ? stateful : true;
    if (isStateful) this.setState({ checked: !this.state.checked });
    if (typeof this.props.onChange === "function") this.props.onChange();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.checked !== this.props.checked)
      this.setState({ checked: this.props.checked });
  }

  render() {
    const { onChange } = this;
    const { disabled } = this.props;
    const { checked } = this.state;

    return (
      <div className={s.Checkbox} onClick={onChange}>
        <input
          className={s.Checkbox__checkbox}
          type="checkbox"
          checked={checked}
          readOnly
        />
        <div className={s["Checkbox__svg-wrapper"]}>
          <svg
            className={cx(
              ["Checkbox__svg-icon"],
              ["Checkbox__svg-icon--checked"]
            )}
            dangerouslySetInnerHTML={{ __html: mCheck }}
          />
        </div>
      </div>
    );
  }
}

export default Checkbox;
