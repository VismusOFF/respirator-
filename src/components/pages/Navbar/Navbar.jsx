import React from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.scss'

const Navbar = () => (
    <div className={style.container}>
        <h2>Респиратор</h2>
        <Link to='/'>
            <h3>Войти</h3>
        </Link>
        <Link to='/request'>
            <h3>Заявки</h3>
        </Link>
    </div>
);

export default Navbar;