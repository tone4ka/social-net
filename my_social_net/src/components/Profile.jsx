import React from "react";
import s from './Profile.module.css'

export default function Profile() {
  return (
    <div className={s.content}>
      <div className={s.tiger_img_box}>
        <img
          className={s.tiger_img}
          src="http://bm.img.com.ua/img/prikol/images/large/3/9/315193.jpg"
        />
      </div>
      <div>ava+description</div>
      <div>
        my posts
        <div>new post</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
          <div>post 3</div>
          <div>post 4</div>
        </div>
      </div>
    </div>
  );
}
