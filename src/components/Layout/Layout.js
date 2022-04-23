import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import s from './Layout.module.css';
import profile from '../../img/profile.png';
import logo from '../../img/logo.png';
import { useSelector } from "react-redux";

export default function Layout() {
    const token = useSelector((state) => state.auth.user.token);
    const username = useSelector((state) => state.auth.user.username);

    return (
        <>
        <header className={s.header}>
            <div className={s.img_wrapper}>
                <NavLink to='/'><img className={s.logo} alt="#" src={logo} /></NavLink>
            </div>
            <div className={s.navigation}>
                <NavLink className={s.navlink} to='/'>Главная</NavLink>
                <NavLink className={s.navlink} to='/autos'>Каталог авто</NavLink>
                <NavLink className={s.navlink} to='/company'>О компании</NavLink>
                {token ? 
                    <div className={s.profile_div}>
                        <NavLink className={s.profile_link} to='/profile'><img className={s.profile_img} alt="#" src={profile} /></NavLink>
                        <NavLink className={s.profile_username} to='/profile'>{username}</NavLink>
                    </div> : 
                    <form className={s.form} action="/">
                        <button className={s.login_button}>Войти</button>
                    </form>
                }
                
            </div>
        </header>
        <Outlet />
        </>
    );
};