import React from "react";
import s from "./News.module.css";
import newsImg from "../../assets/img/news.png";

export default function Dialogs() {
  return (
    <div>
      <div className={s.img_box}>
        <img className={s.img} src={newsImg} />
      </div>
      <div>news</div>
    </div>
  );
}
