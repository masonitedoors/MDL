import React from "react";
import s from "./style.module.scss";
import svg from "lib/_micons/check.svg";

const Checkbox = props => {
  const { checked, onChange, disabled } = props;
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
          className={[
            s["Checkbox__svg-icon"],
            s["Checkbox__svg-icon--checked"]
          ].join(" ")}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </div>
    </div>
  );
};

export default Checkbox;
