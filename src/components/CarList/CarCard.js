import React from "react";
import { NavLink } from "react-router-dom";
import s from './CarCard.module.css';

export default function CarCard({brand, img, carLink}) {
    return (
        <div className={s.card_container}>
            <div>
                <NavLink className={s.img_navlink} to={carLink}><img className={s.img} alt="#" src={img} /></NavLink>
            </div>
            <NavLink className={s.navlink} to={carLink}>{brand}</NavLink>
        </div>
    );
};