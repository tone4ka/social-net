import React from "react";
import s from "./Dialogs.module.css";
import lettersImg from "../../assets/img/letters.png";
import avaImg from "../../assets/img/41NP2h3kNML.jpg";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog} >
    <NavLink to={`/messages/${props.urlNum}`} activeClassName={s.active}>{props.name}</NavLink>
  </div>
  );
}
const Message = (props) => {
  return (
    <div className={s.message}>
    <div>
      <img className={s.ava} src={avaImg} />
      fgejkrghjergiuerghjrehgjdfhgjgf
    </div>
  </div>
  );
}

export default function Dialogs() {
  return (
    <div>
      <div className={s.img_box}>
        <img className={s.img} src={lettersImg} />
      </div>
      <div className={s.content}>
        <div className={s.dialogs}>
          <h5>Dialogs</h5>
          <div className={s.dialogs_items}>
          <DialogItem urlNum='1' name='Dusia'/>
          <DialogItem urlNum='2' name='Vasia'/>
          <DialogItem urlNum='3' name='Petia'/>
          <DialogItem urlNum='4' name='Zulfia'/>
          <DialogItem urlNum='5' name='Zuhra'/>
          </div>
        </div>
        <div className={s.messages}>
          <h5>Messages</h5>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
      </div>
    </div>
  );
}
