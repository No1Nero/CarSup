import React from "react";
import { NavLink } from "react-router-dom";
import s from './CarCard.module.css';

export default function CarCard({brand, img, carLink, vehicleType, engine, carYear, odometrValue}) {
    return (
        <div className={s.card_container}>
            <div>
                <NavLink className={s.img_navlink} to={carLink}><img className={s.img} alt="#" src={img} /></NavLink>
            </div>
            <div className={s.navlink_container}>
                <NavLink className={s.navlink} to={carLink}>{brand}</NavLink>
            </div>
            <div className={s.card_info_container}>
                <section className={s.section}>
                    <label>Тип ТЗ:</label>
                    <label>{vehicleType}</label>
                </section>
                <section className={s.section}>
                    <label>Об'єм двигуна:</label>
                    <label>{engine && engine.toFixed(1)} L</label>
                </section>
                <section className={s.section}>
                    <label>Рік випуску:</label>
                    <label>{carYear}</label>
                </section>
                <section className={s.section}>
                    <label>Пробіг:</label>
                    <label>{odometrValue} mi</label>
                </section>
            </div>
        </div>
    );
};