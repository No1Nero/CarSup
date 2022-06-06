import React from "react";
import s from './CarConditionInfo.module.css';

export default function CarConditionInfo({car}) {
    const {conditionValue, primaryDamage, secondaryDamage, odometrValue, location} = car;
    
    return (
        <div className={s.wrapper_conditional}>
            <div className={s.header_container}>
                <h2 className={s.h2}>Стан автомобіля</h2>
            </div>
            <div className={s.container}>
                <section className={s.section}>
                    <label>Загальний стан:</label>
                    <label>{conditionValue}</label>
                </section>
                <section className={s.section}>
                    <label>Головні пошкодження:</label>
                    <label>{primaryDamage}</label>
                </section>
                <section className={s.section}>
                    <label>Вторинні пошкодження:</label>
                    <label>{secondaryDamage}</label>
                </section>
                <section className={s.section}>
                    <label>Пробіг:</label>
                    <label>{odometrValue} mi</label>
                </section>
                <section className={s.section}>
                    <label>Розташування:</label>
                    <label>{location}</label>
                </section>
            </div>
        </div>
    );
};