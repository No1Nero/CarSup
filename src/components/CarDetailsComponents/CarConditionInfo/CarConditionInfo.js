import React from "react";
import s from './CarConditionInfo.module.css';

export default function CarConditionInfo({car}) {
    const {conditionValue, primaryDamage, secondaryDamage, odometrValue, location} = car;
    
    return (
        <div className={s.wrapper_conditional}>
            <div className={s.header_container}>
                <h2 className={s.h2}>Состояние автобомиля</h2>
            </div>
            <div className={s.container}>
                <section className={s.section}>
                    <label>Общее состояние:</label>
                    <label>{conditionValue}</label>
                </section>
                <section className={s.section}>
                    <label>Главные повреждения:</label>
                    <label>{primaryDamage}</label>
                </section>
                <section className={s.section}>
                    <label>Вторичные повреждения:</label>
                    <label>{secondaryDamage}</label>
                </section>
                <section className={s.section}>
                    <label>Пробег:</label>
                    <label>{odometrValue} км</label>
                </section>
                <section className={s.section}>
                    <label>Расположение:</label>
                    <label>{location}</label>
                </section>
            </div>
        </div>
    );
};