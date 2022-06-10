import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import authOperations from '../../Redux/auth/auth-operations';
import s from './Registration.module.css';

export default function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);
    const message = useSelector((state) => state.auth.message);

    const handleRegistration = user => {
        dispatch(authOperations.register(user));
    };

    const handleChange = e => {
        const {name, value} = e.target;
        switch(name) {
            case 'name':
                setName(value);
                break;

            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;

            case 'confirmPassword':
                setConfirmPassword(value);
                break;

            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        const user = {
            userName: name,
            email: email,
            password: password,
        };
        handleRegistration(user);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className={s.form_wrapper}>
            <h2>Реєстрація</h2>
            <form className={s.form} onSubmit={handleSubmit}>
                {message && <p className={s.message}>{message}</p>}
                {error && <p className={s.error}>{error}</p>}
                <p className={s.p}>Ім'я</p>
                <input className={s.input} onChange={handleChange} type="text" name="name" value={name} placeholder="Введите имя"></input>
                <p className={s.p}>Пошта</p>
                <input className={s.input} onChange={handleChange} type="email" name="email" value={email} placeholder="Введите почту"></input>
                <p className={s.p}>Пароль</p>
                <input className={s.input} onChange={handleChange} type="password" name="password" value={password} placeholder="Введите пароль"></input>
                {password.length < 6 && <p className={s.alert}>Пароль повинен складатися мінімум з 6 символів</p>}
                <p className={s.p}>Повторіть пароль</p>
                <input className={s.input} onChange={handleChange} type="password" name="confirmPassword" value={confirmPassword} placeholder="Повторите пароль"></input>
                {password !== confirmPassword && <p className={s.alert}>Паролі повинні співпадати</p>}
                <button className={s.button} type="submit" disabled={password !== confirmPassword || !password || !confirmPassword} >Зареєструватися</button>
            </form>
        </div>
    );
}; 