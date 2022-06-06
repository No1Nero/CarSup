import React from "react";
import companyview from '../img/companyview.png';
import handshake from '../img/handshake.png';
import s from './CompanyView.module.css';

export default function Company() {
    return (
        <div className={s.wrapper}>
            <div className={s.left_side}>
                <h2 className={s.main_h2}>Carsup - Ваш вибір авто</h2>
                <form action="/autos">
                    <button className={s.button}>Вибрати авто</button>
                </form>
                <div className={s.left_info}>
                    <div className={s.left_header_wrapper}>
                        <h2>Загальна інформація про компанію</h2>
                    </div>
                    <div className={s.company_info_div}>
                        <label className={s.logo_label}>CarSup</label> - компанія, яка заснована у 2022 році в Україні, в місті Одесі. 
                        Компанія співпрацює с аукціонними сервісами авторинку ЗША, такими як: IAAI та Copart.
                        Компанія надає широкий асортимент автомобилів із ЗША, інформацію щодо транспортування та розтаможування.
                    </div>
                </div>
                <img className={s.handshake_img} alt="#" src={handshake} />
            </div>
            <div className={s.right_side}>
                <img alt="#" src={companyview} />
                <div className={s.info_box}>
                    <div className={s.info_box_header_wrapper}>
                        <h2>Інформація сервісів</h2>
                    </div>
                    <div className={s.info_box_info_div}>
                        Даний веб-ресурс створений для підбору автомобілів користувачам по всім заданим критеріям.
                        Також сервіс надає усю інформацию щодо авто, його характеристик, пошкоджень,
                        аукціонів та вартості розтаможування в Україні.
                    </div>
                </div>
                <div className={s.info_box}>
                    <div className={s.info_box_header_wrapper_dop}>
                        <h2>Інформація додаткових можливостей</h2>
                    </div>
                    <div className={s.info_box_info_div}>
                        Також на сайті є функція обчислення розтаможування вручну для легкових дизельних та
                        бензинових автомобілів, электричних, гібридних автомобілів та мото транспорту.
                    </div>
                </div>
            </div>
        </div>
    );
};