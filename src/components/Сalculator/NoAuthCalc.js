import React from "react";
import s from './NoAuthCalc.module.css';

export default function NoAuthCalc() {
    return (
        <div className={s.wrapper}>
            <p className={s.alert}>Авторизуйтесь для возможности вычисления растаможивания</p>
        </div>
    );
};