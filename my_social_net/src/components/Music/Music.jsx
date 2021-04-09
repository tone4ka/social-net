import React from "react";
import s from "./Music.module.css";
import musicImg from "../../assets/img/music.png";

export default function Dialogs() {
  return (
    <div>
      <div className={s.img_box}>
        <img className={s.img} src={musicImg} />
      </div>
      <div>music</div>
    </div>
  );
}
