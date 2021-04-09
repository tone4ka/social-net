import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink className={s.item} activeClassName={s.active} to='/profile'>Profile</NavLink>
      </div>
      <div>
        {/* <NavLink className={`${s.item} ${s.active}`} to='/messages'>Messages</NavLink> */}
        <NavLink className={s.item} activeClassName={s.active} to='/messages'>Messages</NavLink>
      </div>
      <div>
        <NavLink className={s.item} activeClassName={s.active} to='/news'>News</NavLink>
      </div>
      <div>
        <NavLink className={s.item} activeClassName={s.active} to='/music'>Music</NavLink>
      </div>
      <div>
        <NavLink className={s.item} activeClassName={s.active} to='/settings'>Settings</NavLink>
      </div>
    </nav>
  );
}
