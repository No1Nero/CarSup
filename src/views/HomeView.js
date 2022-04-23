import React, { useState } from "react";
import Registration from "components/Auth/Registration";
import Authorization from "components/Auth/Authorization";
import s from './HomeView.module.css';
import { useDispatch, useSelector } from "react-redux";
import profile from '../img/profile.png';
import authActions from "Redux/auth/auth-actions";

export default function HomeView() {
    const [toggle, setToggle] = useState(true);

    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.user.token);
    const username = useSelector((state) => state.auth.user.username);

    const resetError = () => {
        dispatch(authActions.resetError());
    };

    const toggleChanger = () => {
        setToggle(toggle => !toggle);
        resetError();
    };

    return (
        <div>
            <section className={s.section_button}>
                <form className={s.form_button} action="/autos">
                    <button className={s.button}>Выбрать авто</button>
                </form>
            </section> 
            <div>
                {token ?
                    <section className={s.section_authed}>
                        <img alt="#" src={profile} />
                        <h2 className={s.h2_authed}>Добро пожаловать, {username}</h2>
                    </section> :
                    <section  className={s.home_auth_div}>
                        <div className={s.div_buttons}>
                            <button className={s.toggle_left_button} disabled={toggle === true} type="button" onClick={toggleChanger}>Регистрация</button>
                            <button className={s.toggle_right_button} disabled={toggle === false} type="button" onClick={toggleChanger}>Авторизация</button>
                        </div>
                        {toggle ? <Registration /> : <Authorization />}
                    </section>
                }
            </div>
        </div>
    );
};