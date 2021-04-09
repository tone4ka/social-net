import React from "react";
import s from "./Settings.module.css";
import setImg from "../../assets/img/set.png";

export default function Dialogs() {
  return (
    <div>
      <div className={s.img_box}>
        <img className={s.img} src={setImg} />
      </div>
      <div>settings</div>
    </div>
  );
}
