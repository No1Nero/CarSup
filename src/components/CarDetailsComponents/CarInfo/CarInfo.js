import React from "react";
import s from './CarInfo.module.css';
 export default function CarInfo({car}) {
    const {brand, model, series, engine, fuelType, vehicleType, 
        auctionName, carYear, saleDate, lotNumber, auctionDate, 
        buyNowPrice, ukrainianDate, canBuyNow, url} = car;

     return (
        <>
        <div className={s.wrapper_params}>
            <div className={s.header_container}>
                <h2 className={s.h2}>Характеристики автобомиля</h2>
            </div>
            <div className={s.container}>
                <section className={s.section}>
                    <label>Бренд:</label>
                    <label>{brand ? brand : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Модель:</label>
                    <label>{model ? model : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Тип транспортного средства:</label>
                    <label>{vehicleType ? vehicleType : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Серия:</label>
                    <label>{series ? series : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Двигатель:</label>
                    <label>{engine ? engine : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Тип топлива:</label>
                    <label>{fuelType ? fuelType : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Год выпуска:</label>
                    <label>{carYear ? carYear : '—'}</label>
                </section>
             </div>
        </div>
        <div className={s.wrapper_conditional}>
            <div className={s.header_container}>
                <h2 className={s.h2}>Информация о продаже</h2>
            </div>
            <div className={s.container}>
                <section className={s.section}>
                    <label>Возможность купить сразу:</label>
                    <label>{canBuyNow ? 'Да' : 'Нет'}</label>
                </section>
                <section className={s.section}>
                    <label>Цена покупки:</label>
                    <label>{buyNowPrice ? buyNowPrice : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Дата продажи:</label>
                    <label>{saleDate ? saleDate : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Дата аукциона:</label>
                    <div>
                        <p>{auctionDate ? auctionDate : '—'}</p>
                        <p>{ukrainianDate ? ukrainianDate : '—'}</p>
                    </div>
                </section>
                <section className={s.section}>
                    <label>Номер лота:</label>
                    <label>{lotNumber ? lotNumber : '—'}</label>
                </section>
            </div>
         </div>
         <div className={s.wrapper_conditional}>
             <div className={s.header_container}>
                <h2 className={s.h2}>Источник</h2>
             </div>
            <div className={s.container}>
                <section className={s.section}>
                    <label>Название:</label>
                    <label>{auctionName ? auctionName : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Ссылка на источник:</label>
                    <a target="_blank" rel="noreferrer" href={`https://www.iaai.com/${url.url}`}>Перейти на сайт-источник</a>
                </section>
            </div>
         </div>
         </>
     );
 };