import React, {useEffect, useState} from "react";
import s from './FilterPanel.module.css';
import carsApi from "services/cars-api";
import Slider from "./Slider";

const mockMark = [
    'TOYOTA',
    'PORSCHE',
    'AUDI',
    'MAZDA',
    'RENAULT',
    'FORD'
];

export default function FilterPanel() {
    const [minValue, setMinValue] = useState(30000);
    const [maxValue, setMaxValue] = useState(80000);

    const [vehicleTypes, setVehicleTypes] = useState([]);

    useEffect(() => {
        carsApi.fetchVehicleTypes({setState: setVehicleTypes});
    }, []);

    const handleChange = e => {
        const {name, value} = e.target;
        switch(name) {
            case 'minValue':
                setMinValue(value);
                break;
            
            case 'maxValue':
                setMaxValue(value);
                break;

            default:
                return;
        };
    };
    
    return (
        <div className={s.container}>
            <form className={s.form}>
                <section className={s.section}>
                    <span>Тип  </span>
                    <select>
                        {vehicleTypes.map((type) => {
                            return (
                                <option key={type}>
                                    {type}
                                </option>
                            );
                        })}
                    </select>
                </section>
                <section className={s.section}>
                    <span>Марка  </span>
                    <select>
                        {mockMark.map((mark) => {
                            return (
                                <option key={mark}>
                                    {mark}
                                </option>
                            );
                        })}
                    </select>
                </section>
                <section className={s.section}>
                    <span>Цена  </span>
                    <div className={s.price_container}>
                        <section>
                            <span>От  </span>
                            <input className={s.price_input} onChange={handleChange} name="minValue" value={minValue} type='number'></input>
                        </section>
                        <section>
                            <span>До  </span>
                            <input className={s.price_input} onChange={handleChange} name="maxValue" value={maxValue} type='number'></input>
                        </section>
                    </div>
                    <Slider min={minValue} max={maxValue} OnMinChange={setMinValue} OnMaxChange={setMaxValue} />
                </section>
            </form>
        </div>
    );
};