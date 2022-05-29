import React from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "Redux/auth/auth-operations";
import HandCalculator from "components/HandCalculator/HandCalculator";
import profile from '../img/profile.png';
import s from './ProfileView.module.css';

export default function ProfileView() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const {username, email} = user;

    const logout = () => {
        dispatch(authOperations.logout());
    };

    return (
        <div className={s.wrapper}>
            <div className={s.left_container}>
                <img className={s.img} alt="#" src={profile} />
                <div className={s.user_info}>
                    <div className={s.header_wrapper}>
                        <h2 className={s.h2}>Личная информация</h2>
                    </div>
                    <div className={s.user_card}>
                        <section className={s.section}>
                            <label className={s.label_name}>Имя пользователя:</label>
                            <label className={s.label_value}>{username}</label>
                        </section>
                        <section className={s.section}>
                            <label className={s.label_name}>Почта:</label>
                            <label className={s.label_value}>{email}</label>
                        </section>
                    </div>
                </div>
                <div>
                    <button type="button" onClick={logout} className={s.profile_button}>Выйти из профиля</button>
                </div>
            </div>
            <div className={s.calculate_wrapper}>
                <form action="/chosen">
                    <button className={s.button}>Избранное</button>
                </form>
                <div className={s.calculate}>
                    <HandCalculator />
                </div>
            </div>
        </div>
    );
};