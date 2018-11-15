import React from "react";
import s from "./style.module.scss";
import svg from "lib/micons/MIcons.svg";

const Checkbox = props => {
  const useTag = `<use xlink:href="${svg}#check" />`;
  return (
    <div className={s.Checkbox}>
      <input className={s.Checkbox__checkbox} type="checkbox" />
      <div className={s["Checkbox__svg-wrapper"]}>
        <svg
          className={[
            s["Checkbox__svg-icon"],
            s["Checkbox__svg-icon--checked"]
          ].join(" ")}
          dangerouslySetInnerHTML={{ __html: useTag }}
        />
      </div>
    </div>
  );
};

export default Checkbox;
