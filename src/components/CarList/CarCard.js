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
                    <label>Тип ТС:</label>
                    <label>{vehicleType}</label>
                </section>
                <section className={s.section}>
                    <label>Объем двигателя:</label>
                    <label>{engine} L</label>
                </section>
                <section className={s.section}>
                    <label>Год выпуска:</label>
                    <label>{carYear}</label>
                </section>
                <section className={s.section}>
                    <label>Пробег:</label>
                    <label>{odometrValue} км</label>
                </section>
            </div>
        </div>
    );
};