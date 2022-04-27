import React, { useEffect, useState } from "react";
import s from './CalculateField.module.css';

export default function CalculateField({chosenId, carPrice, carEngineValue, carEngineType, carYear, electroCarPower, motoEngineValue}) {
    const [nds, setNds] = useState(0);
    const [duty, setDuty] = useState(0);
    const [excise, setExcise] = useState(0);
    const [allCustomDuty, setAllCustomDuty] = useState(0);
    const [finalCost, setFinalCost] = useState(0);

    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (chosenId === 1) {
            if (!carPrice || !carEngineValue || !carEngineType || carYear) {
                setError("Введите все необходимые данные");
            } else {
                let basebid;
                if (carEngineType === 'Бензин') {
                    if (Number(carEngineValue) < 3) {
                        basebid = 54.2;
                    } else if (Number(carEngineValue) >= 3) {
                        basebid = 108.5;
                    }
                } else if (carEngineType === 'Дизель') {
                    if (Number(carEngineValue) <= 3.5) {
                        basebid = 81.4;
                    } else if (Number(carEngineValue) > 3.5) {
                        basebid = 162.7;
                    }
                }
            const coefficientAge = 2022 - (Number(carYear) + 1);
            const carExcise = basebid * Number(carEngineValue) * coefficientAge;
            const carDuty = Number(carPrice) / 10;
            const carNds = (Number(carPrice) + carDuty + carExcise) / 5;
            const carCustomDuty = carExcise + carDuty + carNds;
            setExcise(carExcise);
            setDuty(carDuty);
            setNds(carNds);
            setAllCustomDuty(carCustomDuty);
            setFinalCost(carCustomDuty + Number(carPrice));
            }
        } else if (chosenId === 2) {
            if (!electroCarPower || !carPrice) {
                setError("Введите все необходимые данные");
            } else {
                const electroExcise = Number(electroCarPower) + (Number(electroCarPower) / 4.6);
                setExcise(electroExcise);
                setDuty(0);
                setNds(0);
                setAllCustomDuty(electroExcise);
                setFinalCost(Number(carPrice) + electroExcise);
            }
        } else if (chosenId === 3) {
            if (!carPrice) {
                setError("Введите все необходимые данные");
            } else {
                const hybridDuty = Number(carPrice) / 10;
                const hybridCustomDuty = hybridDuty + 108.5;
                setExcise(108.5);
                setDuty(hybridDuty);
                setNds(0);
                setAllCustomDuty(hybridCustomDuty);
                setFinalCost(Number(carPrice) + hybridCustomDuty);
            }
        } else if (chosenId === 4) {
            if (!carPrice || !motoEngineValue) {
                setError("Введите все необходимые данные");
            } else {
                const motoExcise = Number(motoEngineValue) * 0.75;
                const motoDuty = Number(carPrice) / 10;
                const motoNds = (Number(carPrice) + motoDuty + motoExcise) / 5;
                const motoCustomDuty = motoExcise + motoDuty + motoNds;
                setExcise(motoExcise);
                setDuty(motoDuty);
                setNds(motoNds);
                setAllCustomDuty(motoCustomDuty);
                setFinalCost(Number(carPrice) + motoCustomDuty);
            }
        }
    }, [carEngineType, carEngineValue, carPrice, carYear, chosenId, electroCarPower, motoEngineValue]);

    return (
        <div>
            {error ? 
                <p className={s.error}>{error}</p> : 
                <>
                <section className={s.info_section}>
                    <section className={s.section_label}>
                        <label className={s.label_label}>НДС</label>
                    </section>
                    <section className={s.section_value}>
                        <label>{nds} $</label>
                    </section>
                </section>
                <section className={s.info_section}>
                    <section className={s.section_label}>
                        <label className={s.label_label}>Пошлина</label>
                    </section>
                    <section className={s.section_value}>
                        <label>{duty} $</label>
                    </section>
                </section>
                <section className={s.info_section}>
                    <section className={s.section_label}>
                        <label className={s.label_label}>Акцизный сбор</label>
                    </section>
                    <section className={s.section_value}>
                        <label>{excise} $</label>
                    </section>
                </section>
                <section className={s.info_section}>
                    <section className={s.section_label}>
                        <label className={s.label_custom}>Всего таможенных платежей</label>
                    </section>
                    <section className={s.section_value}>
                        <label className={s.label_value_duty}>{allCustomDuty} $</label>
                    </section>
                </section>
                <section className={s.info_section}>
                    <section className={s.section_label}>
                        <label className={s.label_custom}>Полная стоимость с растаможиванием</label>
                    </section>
                    <section className={s.section_value_last_child}>
                        <label className={s.label_value_duty}>{finalCost} $</label>
                    </section>
                </section>
                </>
            }
        </div>
    );
};