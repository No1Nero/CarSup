import React, {useState, useEffect} from "react";
import carsApi from "services/cars-api";
import CarCard from "./CarCard";
import s from './CarList.module.css';

export default function CarList({nameLink, fetchId, buttonCount = null}) {
    const [autos, setAutos] = useState([]);

    useEffect(() => {
        if (fetchId === 99999) {
            carsApi.fetchAllCars({setState: setAutos});
        }
    }, [fetchId]);
    return (
        <div className={s.list_container}>
            <ul className={s.ul}>
                {autos.map(({id, brand, vehicleType, engine, carYear, odometrValue, imageLinks}) => (
                    <li className={s.li} key={id}>
                        <CarCard odometrValue={odometrValue} carYear={carYear} engine={engine} vehicleType={vehicleType} brand={brand} img={imageLinks[0].link} carLink={`${nameLink}${id}`} />
                    </li>
                ))}
            </ul>
        </div>
    );
};