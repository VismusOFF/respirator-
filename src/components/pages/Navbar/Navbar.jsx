import React from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.scss'

const Navbar = () => (
    <div className={style.container}>
        <Link to='/register'>
            <h3>Registration </h3>
        </Link>
        <Link to='/'>
            <h3>Login</h3>
        </Link>
        <Link to='/main'>
            <h3>CrudApp</h3>
        </Link>
    </div>
);

export default Navbar;