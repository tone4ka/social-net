import React from "react";
import s from './Profile.module.css';
import profileImg from '../../assets/img/profile.png';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfor"

export default function Profile() {
  return (
    <div>
      <div className={s.img_box}>
        <img
          className={s.img}
          src={profileImg}
        />
      </div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}
