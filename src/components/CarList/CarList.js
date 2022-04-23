import React, {useState, useEffect} from "react";
import carsApi from "services/cars-api";
import CarCard from "./CarCard";
import s from './CarList.module.css';

export default function CarList({nameLink, fetchId}) {
    const [autos, setAutos] = useState([]);

    useEffect(() => {
        if (fetchId === 99999) {
            carsApi.fetchAllCars({setState: setAutos});
        }
    }, [fetchId]);
    return (
        <div className={s.list_container}>
            <ul className={s.ul}>
                {autos.map(({id, brand, img}) => (
                    <li className={s.li} key={id}>
                        <CarCard brand={brand} img={img} carLink={`${nameLink}${id}`} />
                    </li>
                ))}
            </ul>
        </div>
    );
};