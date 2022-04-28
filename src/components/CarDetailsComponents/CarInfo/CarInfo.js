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
                    <h2 className={s.h2}>Характеристики автобомиля</h2>
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
                    <label>Тип транспортного средства:</label>
                    <label>{vehicleType ? vehicleType : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Серия:</label>
                    <label>{series ? series : '—'}</label>
                </section>
                <section className={s.section}>
                    <label>Объем двигателя:</label>
                    <label>{engine ? engine : '—'} L</label>
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
                    <label>{buyNowPrice ? buyNowPrice : '—'} $</label>
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
                    <label>Текущая ставка:</label>
                    <label>{currentBid ? currentBid : '—'} $</label>
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
                    <a target="_blank" rel="noreferrer" href={`https://www.iaai.com/${url}`}>Перейти на сайт-источник</a>
                </section>
            </div>
         </div>
         </>
     );
 };