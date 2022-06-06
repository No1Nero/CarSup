import React from "react";
import s from './CarInfo.module.css';
import fav from '../../../img/fav.png';
import no_fav from '../../../img/no_fav.png';
import { useSelector } from "react-redux";

 export default function CarInfo({car, addToFav, removeFromFav}) {
    const {brand, model, series, engine, fuelType, vehicleType, 
        auctionName, carYear, saleDate, lotNumber, auctionDate, 
        buyNowPrice, ukrainianDate, canBuyNow, currentBid, url, favForUser} = car;

    const token = useSelector((state) => state.auth.user.token);

    return (
        <>
        <div className={s.wrapper_params}>
            <div className={s.header_container}>
                <section>
                    <h2 className={s.h2}>Характеристики автомобіля</h2>
                    {token &&
                        <>
                        {favForUser ? 
                            <img onClick={removeFromFav} className={s.fav_img} alt="#" src={fav} /> : 
                            <img onClick={addToFav} className={s.no_fav_img} alt="#" src={no_fav} />
                        }
                        </>
                    }
                </section>
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
                    <label>Тип транспортного засобу:</label>
                    <label>{vehicleType ? vehicleType : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Серія:</label>
                    <label>{series ? series : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Об'єм двигуна:</label>
                    <label>{engine ? engine : '—'} L</label>
                </section>
                <section className={s.section}>
                    <label>Тип палива:</label>
                    <label>{fuelType ? fuelType : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Рік випуску:</label>
                    <label>{carYear ? carYear : '—'}</label>
                </section>
             </div>
        </div>
        <div className={s.wrapper_conditional}>
            <div className={s.header_container}>
                <h2 className={s.h2}>Інформація продажу</h2>
            </div>
            <div className={s.container}>
                <section className={s.section}>
                    <label>Можливість моментального придбання:</label>
                    <label>{canBuyNow ? 'Да' : 'Нет'}</label>
                </section>
                <section className={s.section}>
                    <label>Ціна придбання:</label>
                    <label>{buyNowPrice ? buyNowPrice : '—'} $</label>
                </section>
                <section className={s.section}>
                    <label>Дата продажу:</label>
                    <label>{saleDate ? saleDate : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Дата аукціону:</label>
                    <div>
                        <p>{auctionDate ? auctionDate : '—'}</p>
                        <p>{ukrainianDate ? ukrainianDate : '—'}</p>
                    </div>
                </section>
                <section className={s.section}>
                    <label>Поточна ставка:</label>
                    <label>{currentBid ? currentBid : '—'} $</label>
                </section>
                <section className={s.section}>
                    <label>Номер лоту:</label>
                    <label>{lotNumber ? lotNumber : '—'}</label>
                </section>
            </div>
         </div>
         <div className={s.wrapper_conditional}>
             <div className={s.header_container}>
                <h2 className={s.h2}>Джерело</h2>
             </div>
            <div className={s.container}>
                <section className={s.section}>
                    <label>Назва:</label>
                    <label>{auctionName ? auctionName : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Посилання на джерело:</label>
                    <a target="_blank" rel="noreferrer" href={`https://www.iaai.com/${url}`}>Перейти на сайт-джерело</a>
                </section>
            </div>
         </div>
         </>
     );
 };