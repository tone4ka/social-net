import React from 'react';
import logo from '../../assets/img/2972006.svg';
import s from './Header.module.css'

export default function Header() {
    return  <header className={s.header}>
    <div className={s.logo_box}>
      <img src={logo} />
    </div>
    
  </header>
};