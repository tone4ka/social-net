import React from "react";
import s from "./ProfileInfo.module.css";
import avaImg from "../../../assets/img/41NP2h3kNML.jpg";

export default function ProfileInfo() {
  return (
    <div>
        <img className={s.ava} src={avaImg} />
      Description
    </div>
  );
}
