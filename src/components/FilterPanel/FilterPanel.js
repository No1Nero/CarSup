import React, {useEffect, useState} from "react";
import s from './FilterPanel.module.css';
import carsApi from "services/cars-api";
import Slider from "./Slider";

export default function FilterPanel({setCredentials, setCarsFetchId}) {
    const [filterVehicleType, setFilterVehicleType] = useState('');
    const [filterFuelType, setFilterFuelType] = useState('');
    const [engineSizeMinValue, setEngineSizeMinValue] = useState('0');
    const [engineSizeMaxValue, setEngineSizeMaxValue] = useState('8');
    const [carYearMinValue, setCarYearMinValue] = useState('1970');
    const [carYearMaxValue, setCarYearMaxValue] = useState('2021');
    const [carPriceMinValue, setCarPriceMinvalue] = useState('500');
    const [carPriceMaxValue, setCarPriceMaxvalue] = useState('100000');
    const [carOdometrMinValue, setCarOdometrMinValue] = useState('0');
    const [carOdometrMaxValue, setCarOdometrMaxValue] = useState('999999');

    const [vehicleTypes, setVehicleTypes] = useState([]);
    const [fuelTypes, setFuelTypes] = useState([]);

    useEffect(() => {
        carsApi.fetchVehicleTypes({setState: setVehicleTypes});
        carsApi.fetchFuelTypes({setState: setFuelTypes});
    }, []);

    const handleChange = e => {
        const {name, value} = e.target;
        switch(name) {
            case 'engineSizeMinValue':
                setEngineSizeMinValue(value);
                break;
            
            case 'engineSizeMaxValue':
                setEngineSizeMaxValue(value);
                break;

            case 'filterVehicleType':
                setFilterVehicleType(value);
                break;

            case 'filterFuelType':
                setFilterFuelType(value);
                break;

            case 'carYearMinValue':
                setCarYearMinValue(value);
                break;

            case 'carYearMaxValue':
                setCarYearMaxValue(value);
                break;

            case 'carPriceMinValue':
                setCarPriceMinvalue(value);
                break;

            case 'carPriceMaxValue':
                setCarPriceMaxvalue(value);
                break;

            case 'carOdometrMinValue':
                setCarOdometrMinValue(value);
                break;

            case 'carOdometrMaxValue':
                setCarOdometrMaxValue(value);
                break;

            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        let onStringVehicleType;
        let onStringFuelType;
        let andOperator;
        let filteredVehicleType;
        if (filterVehicleType) {
            if (filterVehicleType.includes(' ')) {
                filteredVehicleType = filterVehicleType.split(' ')[0] + "*";
            } else {
                filteredVehicleType = filterVehicleType;
            }
            onStringVehicleType = `vehicleType:${filteredVehicleType}`;
        } else {
            onStringVehicleType = '';
        }

        if (filterFuelType) {
            onStringFuelType = `fuelType:${filterFuelType}`;
        } else {
            onStringFuelType = '';
        }

        if (filterVehicleType && filterFuelType) {
            andOperator = 'AND';
        } else {
            andOperator = '';
        }

        const filterString = `((buyNowPrice>${carPriceMinValue} OR buyNowPrice:${carPriceMinValue}) AND (buyNowPrice<${carPriceMaxValue} OR buyNowPrice:${carPriceMaxValue})) AND ((carYear>${carYearMinValue} OR carYear:${carYearMinValue}) AND (carYear<${carYearMaxValue} OR carYear:${carYearMaxValue})) AND ((odometrValue>${carOdometrMinValue} OR odometrValue:${carOdometrMinValue}) AND (odometrValue<${carOdometrMaxValue} OR odometrValue:${carOdometrMinValue})) AND ((engine>${engineSizeMinValue} OR engine:${engineSizeMinValue}) AND (engine<${engineSizeMaxValue} OR engine:${engineSizeMaxValue})) AND ${onStringVehicleType} ${andOperator} ${onStringFuelType}`;
        setCarsFetchId(77777);
        setCredentials(filterString);
    };
    
    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit} className={s.form}>
                <div className={s.header_wrapper}>
                    <h2>Фільтр за характеристиками</h2>
                </div>
                <div className={s.info_wrapper}>
                    <section className={s.section}>
                        <label className={s.label}>Тип ТЗ</label>
                        <select className={s.select} onChange={handleChange} name="filterVehicleType" value={filterVehicleType}>
                            {vehicleTypes.map((type) => {
                                return (
                                    <option value={type} key={type}>
                                        {type}
                                    </option>
                                );
                            })}
                        </select>
                    </section>
                    <section className={s.wraper_with_slider}>
                        <section className={s.section_with_slider}>
                            <label className={s.label}>Об'єм двигуна</label>
                            <div className={s.div_diapason}>
                                <section>
                                    <label className={s.label_diapason}>Від</label>
                                    <input className={s.price_input} onChange={handleChange} name="engineSizeMinValue" value={engineSizeMinValue} type='number'></input>
                                </section>
                                <section>
                                    <label className={s.label_diapason}>До</label>
                                    <input className={s.price_input} onChange={handleChange} name="engineSizeMaxValue" value={engineSizeMaxValue} type='number'></input>
                                </section>
                            </div>
                        </section>
                        <Slider absMin={0} absMax={8} step={1} min={engineSizeMinValue} max={engineSizeMaxValue} OnMinChange={setEngineSizeMinValue} OnMaxChange={setEngineSizeMaxValue} />
                    </section>
                    <section className={s.section}>
                        <label className={s.label}>Тип палива</label>
                        <select className={s.select} onChange={handleChange} name="filterFuelType" value={filterFuelType}>
                            {fuelTypes.map((type) => {
                                return (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                );
                            })}
                        </select>
                    </section>
                    <section className={s.wraper_with_slider}>
                        <section className={s.section_with_slider}>
                            <label className={s.label}>Рік випуску</label>
                            <div className={s.div_diapason}>
                                <section>
                                    <label className={s.label_diapason}>Від</label>
                                    <input className={s.price_input} onChange={handleChange} name="carYearMinValue" value={carYearMinValue} type='number'></input>
                                </section>
                                <section>
                                    <label className={s.label_diapason}>До</label>
                                    <input className={s.price_input} onChange={handleChange} name="carYearMaxValue" value={carYearMaxValue} type='number'></input>
                                </section>
                            </div>
                        </section>
                        <Slider absMin={1970} absMax={2021} step={1} min={carYearMinValue} max={carYearMaxValue} OnMinChange={setCarYearMinValue} OnMaxChange={setCarYearMaxValue} />
                    </section>
                    <section className={s.wraper_with_slider}>
                        <section className={s.section_with_slider}>
                            <label className={s.label}>Ціна</label>
                            <div className={s.div_diapason}>
                                <section>
                                    <label className={s.label_diapason}>Від</label>
                                    <input className={s.price_input} onChange={handleChange} name="carPriceMinValue" value={carPriceMinValue} type='number'></input>
                                </section>
                                <section>
                                    <label className={s.label_diapason}>До</label>
                                    <input className={s.price_input} onChange={handleChange} name="carPriceMaxValue" value={carPriceMaxValue} type='number'></input>
                                </section>
                            </div>
                        </section>
                        <Slider absMin={500} absMax={100000} step={1} min={carPriceMinValue} max={carPriceMaxValue} OnMinChange={setCarPriceMinvalue} OnMaxChange={setCarPriceMaxvalue} />
                    </section>
                    <section className={s.wraper_with_slider}>
                        <section className={s.section_with_slider}>
                            <label className={s.label}>Пробіг</label>
                            <div className={s.div_diapason}>
                                <section>
                                    <label className={s.label_diapason}>Від</label>
                                    <input className={s.price_input} onChange={handleChange} name="carOdometrMinValue" value={carOdometrMinValue} type='number'></input>
                                </section>
                                <section>
                                    <label className={s.label_diapason}>До</label>
                                    <input className={s.price_input} onChange={handleChange} name="carOdometrMaxValue" value={carOdometrMaxValue} type='number'></input>
                                </section>
                            </div>
                        </section>
                        <Slider absMin={0} absMax={999999} step={1} min={carOdometrMinValue} max={carOdometrMaxValue} OnMinChange={setCarOdometrMinValue} OnMaxChange={setCarOdometrMaxValue} />
                    </section>
                    <button className={s.submit_button} type="submit">Застосувати</button>
                </div>
            </form>
        </div>
    );
};