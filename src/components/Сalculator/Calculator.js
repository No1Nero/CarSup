import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import NoAuthCalc from './NoAuthCalc';
import s from './Calculator.module.css';

export default function Calculator({car}) {
    const token = useSelector((state) => state.auth.user.token);

    const {engine, fuelType, vehicleType, carYear, buyNowPrice} = car;
    const [error, setError] = useState(null);
    const [toggler, setToggler] = useState(false);

    const [nds, setNds] = useState(0);
    const [duty, setDuty] = useState(0);
    const [excise, setExcise] = useState(0);
    const [allCustomDuty, setAllCustomDuty] = useState(0);
    const [finalCost, setFinalCost] = useState(0);

    useEffect (() => {
        if (!engine || !fuelType || ! vehicleType || !carYear || !buyNowPrice) {
            setError('Відсутні необхідні дані');
            return;
        } else {
            if (vehicleType === 'Automobile') {
                let basebid;
                if (fuelType === 'Gasoline') {
                    if (Number(engine) < 3) {
                        basebid = 54.2;
                    } else if (Number(engine) >= 3) {
                        basebid = 108.5;
                    }
                    const coefficientAge = 2022 - (Number(carYear) + 1);
                    const gasolineExcise = basebid * Number(engine) * coefficientAge;
                    const gasolineDuty = Number(buyNowPrice) / 10;
                    const gasolineNds = (Number(buyNowPrice) + gasolineDuty + gasolineExcise) / 5;
                    const gasolineCustomDuty = gasolineExcise + gasolineDuty + gasolineNds;
                    setExcise(gasolineExcise);
                    setDuty(gasolineDuty);
                    setNds(gasolineNds);
                    setAllCustomDuty(gasolineCustomDuty);
                    setFinalCost(gasolineCustomDuty + Number(buyNowPrice));
                } else if (fuelType === 'Diesel') {
                    if (Number(engine) <= 3.5) {
                        basebid = 81.4;
                    } else if (Number(engine) > 3.5) {
                        basebid = 162.7;
                    }
                    const coefficientAge = 2022 - (Number(carYear) + 1);
                    const dieselExcise = basebid * Number(engine) * coefficientAge;
                    const dieselDuty = Number(buyNowPrice) / 10;
                    const dieselNds = (Number(buyNowPrice) + dieselDuty + dieselExcise) / 5;
                    const dieselCustomDuty = dieselExcise + dieselDuty + dieselNds;
                    setExcise(dieselExcise);
                    setDuty(dieselDuty);
                    setNds(dieselNds);
                    setAllCustomDuty(dieselCustomDuty);
                    setFinalCost(dieselCustomDuty + Number(buyNowPrice));
                } else if (fuelType === 'Electric') {
                    const electroExcise = 263.4 + (263.4 / 4.6);
                    setExcise(electroExcise);
                    setDuty(0);
                    setNds(0);
                    setAllCustomDuty(electroExcise);
                    setFinalCost(Number(buyNowPrice) + electroExcise);
                } else if (fuelType === 'Flexible Fuel') {
                    const hybridDuty = Number(buyNowPrice) / 10;
                    const hybridCustomDuty = hybridDuty + 108.5;
                    setExcise(108.5);
                    setDuty(hybridDuty);
                    setNds(0);
                    setAllCustomDuty(hybridCustomDuty);
                    setFinalCost(Number(buyNowPrice) + hybridCustomDuty);
                } else if (fuelType === 'Other') {
                    const otherDuty = Number(buyNowPrice) / 10;
                    const otherCustomDuty = otherDuty + 108.5;
                    setExcise(108.5);
                    setDuty(otherDuty);
                    setNds(0);
                    setAllCustomDuty(otherCustomDuty);
                    setFinalCost(Number(buyNowPrice) + otherCustomDuty);
                } else if (fuelType === 'Unknown') {
                    setError('Відсутні необхідні дані');
                }
            } else if (vehicleType === 'Truck') {
                let basebid = 230.4;
                const coefficientAge = 2022 - (Number(carYear) + 1);
                const truckExcise = basebid * Number(engine) * coefficientAge;
                const truckDuty = Number(buyNowPrice) / 10;
                const truckNds = (Number(buyNowPrice) + truckDuty + truckExcise) / 5;
                const truckCustomDuty = truckExcise + truckDuty + truckNds;
                setExcise(truckExcise);
                setDuty(truckDuty);
                setNds(truckNds);
                setAllCustomDuty(truckCustomDuty);
                setFinalCost(Number(buyNowPrice) + truckCustomDuty);
            } else if (vehicleType === 'Boat') {
                let basebid = 214.7;
                const coefficientAge = 2022 - (Number(carYear) + 1);
                const boatExcise = basebid * Number(engine) * coefficientAge;
                const boatDuty = Number(buyNowPrice) / 10;
                const boatNds = (Number(buyNowPrice) + boatDuty + boatExcise) / 5;
                const boatCustomDuty = boatExcise + boatDuty + boatNds;
                setExcise(boatExcise);
                setDuty(boatDuty);
                setNds(boatNds);
                setAllCustomDuty(boatCustomDuty);
                setFinalCost(Number(buyNowPrice) + boatCustomDuty);
            } else if (vehicleType === 'Trailer') {
                let basebid = 192;
                const coefficientAge = 2022 - (Number(carYear) + 1);
                const trailerExcise = basebid * Number(engine) * coefficientAge;
                const trailerDuty = Number(buyNowPrice) / 10;
                const trailerNds = (Number(buyNowPrice) + trailerDuty + trailerExcise) / 5;
                const trailerCustomDuty = trailerExcise + trailerDuty + trailerNds;
                setExcise(trailerExcise);
                setDuty(trailerDuty);
                setNds(trailerNds);
                setAllCustomDuty(trailerCustomDuty);
                setFinalCost(Number(buyNowPrice) + trailerCustomDuty);
            } else if (vehicleType === 'Motorcycle') {
                const motoExcise = Number(engine) * 0.75;
                const motoDuty = Number(buyNowPrice) / 10;
                const motoNds = (Number(buyNowPrice) + motoDuty + motoExcise) / 5;
                const motoCustomDuty = motoExcise + motoDuty + motoNds;
                setExcise(motoExcise);
                setDuty(motoDuty);
                setNds(motoNds);
                setAllCustomDuty(motoCustomDuty);
                setFinalCost(Number(buyNowPrice) + motoCustomDuty);
            }
        }
    }, [buyNowPrice, carYear, engine, fuelType, vehicleType]);

    return (
        <div className={s.wrapper}>
            {token ?
                <>
                <div className={s.header_container}>
                    <h2 className={s.h2}>Розрахунок вартості розтаможування</h2>
                </div>
                <div className={s.container}>
                    <section className={s.section}>
                        <label>Тип транспортного засобу:</label>
                        <label>{vehicleType ? vehicleType : '—'}</label>
                    </section>
                    <section className={s.section}>
                        <label>Тип двигуна:</label>
                        <label>{fuelType ? fuelType : '—'}</label>
                    </section>
                    <section className={s.section}>
                        <label>Об'єм двигуна:</label>
                        <label>{engine ? engine : '—'} L</label>
                    </section>
                    <section className={s.section}>
                        <label>Рік випуску:</label>
                        <label>{carYear ? carYear : '—'}</label>
                    </section>
                    <section className={s.section}>
                        <label>Ціна придбання:</label>
                        <label>{buyNowPrice ? buyNowPrice : '—'} $</label>
                    </section>
                </div>
                {!toggler && <button className={s.button} onClick={() => setToggler(true)} type="button">Розрахувати</button>}
                {toggler &&
                    <div className={s.calculated_container}>
                        {error ? 
                            <p className={s.error}>{error}</p> :
                            <>
                            <section className={s.info_section}>
                                <section className={s.section_label}>
                                    <label className={s.label_label}>ПДВ</label>
                                </section>
                                <section className={s.section_value}>
                                    <label>{nds.toFixed(2)} $</label>
                                </section>
                            </section>
                            <section className={s.info_section}>
                                <section className={s.section_label}>
                                    <label className={s.label_label}>Податок</label>
                                </section>
                                <section className={s.section_value}>
                                    <label>{duty.toFixed(2)} $</label>
                                </section>
                            </section>
                            <section className={s.info_section}>
                                <section className={s.section_label}>
                                    <label className={s.label_label}>Акцизний сбір</label>
                                </section>
                                <section className={s.section_value}>
                                    <label>{excise.toFixed(2)} $</label>
                                </section>
                            </section>
                            <section className={s.info_section}>
                                <section className={s.section_label}>
                                    <label className={s.label_custom}>Усього митних платежів</label>
                                </section>
                                <section className={s.section_value}>
                                    <label className={s.label_value_duty}>{allCustomDuty.toFixed(2)} $</label>
                                </section>
                            </section>
                            <section className={s.info_section}>
                                <section className={s.section_label}>
                                    <label className={s.label_custom}>Повна вартість з розтаможуванням</label>
                                </section>
                                <section className={s.section_value_last_child}>
                                    <label className={s.label_value_duty}>{finalCost.toFixed(2)} $</label>
                                </section>
                            </section>
                            </>
                        }
                    </div>
                }
                </> : 
                <NoAuthCalc />
            }
        </div>
    );
};