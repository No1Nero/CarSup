import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "Redux/auth/auth-operations";
import s from './Authorization.module.css';

export default function Authorization() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);

    const handleAuthorization = user => {
        dispatch(authOperations.login(user));
    };

    const handleChange = e => {
        const {name, value} = e.target;
        switch(name) {
            case 'name':
                setName(value);
                break;

            case 'password':
                setPassword(value);
                break;

            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        const user = {
            username: name,
            password: password,
        };
        handleAuthorization(user);
        setName('');
        setPassword('');
    };

    return (
        <div className={s.form_wrapper}>
            <h2>Авторизация</h2>
            <form className={s.form} onSubmit={handleSubmit}>
                {error && <p className={s.error}>{error}</p>}
                <p className={s.p}>Имя</p>
                <input className={s.input} onChange={handleChange} type="text" name="name" value={name} placeholder="Введите имя"></input>
                <p className={s.p}>Пароль</p>
                <input className={s.input} onChange={handleChange} type="password" name="password" value={password} placeholder="Введите пароль"></input>
                <button className={s.button} type="submit" disabled={!name || !password} >Войти</button>
            </form>
        </div>
    );
}; 