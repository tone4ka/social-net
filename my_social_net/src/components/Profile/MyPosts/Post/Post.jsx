import React from "react";
import s from "./Post.module.css";

export default function Post(props) {
  return (
<div>
<img className={s.ava} src="https://img.strana.ua/img/article/2625/70_main.jpeg" />
{props.message}
<div>{props.likeCount} Like</div>
</div>
  );
}


