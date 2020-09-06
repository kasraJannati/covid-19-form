import React from 'react';
import './Header.css';
import headerImg from '../../assets/img/header.png'
import HeaderForm from '../HeaderForm/HeaderForm';

function Header() {

  return (
    <header>
       <img src={headerImg} alt="headerImg" />
       <p>Please complete the following questions before beginning your work today.</p>
       <HeaderForm></HeaderForm>
    </header>
  );
}

export default Header;
