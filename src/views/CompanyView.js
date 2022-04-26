import React from "react";
import companyview from '../img/companyview.png';
import handshake from '../img/handshake.png';
import s from './CompanyView.module.css';

export default function Company() {
    return (
        <div className={s.wrapper}>
            <div className={s.left_side}>
                <h2 className={s.main_h2}>Carsup - Ваш выбор авто</h2>
                <form action="/autos">
                    <button className={s.button}>Выбрать авто</button>
                </form>
                <div className={s.left_info}>
                    <div className={s.left_header_wrapper}>
                        <h2>Общая информация о компании</h2>
                    </div>
                    <div className={s.company_info_div}>
                        <label className={s.logo_label}>CarSup</label> - компания, основанная в 2022 году в Украине, в городе Одесса. 
                        Компания сотрудничает с аукционными сервисами авторынка США, такими как: IAAI и Copart.
                        Компания предоставляет широкий ассортимент автомобилей из США, информацию о транспортировке и растаможиванию.
                    </div>
                </div>
                <img className={s.handshake_img} alt="#" src={handshake} />
            </div>
            <div className={s.right_side}>
                <img alt="#" src={companyview} />
                <div className={s.info_box}>
                    <div className={s.info_box_header_wrapper}>
                        <h2>Информация о сервисе</h2>
                    </div>
                    <div className={s.info_box_info_div}>
                        Данная веб-платформа создана для подбора автомобиля пользователям по всем заданым критериям.
                        Также сервис предоставляет всю информацию об автомобиле, его характеристиках, повреждениях,
                        аукционе и стоимости растаможивания в Украине.
                    </div>
                </div>
                <div className={s.info_box}>
                    <div className={s.info_box_header_wrapper_dop}>
                        <h2>Информация о дополнительных возможностях</h2>
                    </div>
                    <div className={s.info_box_info_div}>
                        Также на сайте есть функция вычисления растаможивания вручную для легковых дизельных и
                        бензиновых автомобилей, электрических, гибридных автомобилей и мото транспорта.
                    </div>
                </div>
            </div>
        </div>
    );
};