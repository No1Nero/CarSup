import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import carsApi from "services/cars-api";
import CarCard from "./CarCard";
import s from './CarList.module.css';

export default function CarList({nameLink, fetchId, buttonCount = null, credentials = null}) {
    const token = useSelector((state) => state.auth.user.token);

    const [autos, setAutos] = useState([]);

    useEffect(() => {
        if (fetchId === 99999) {
            carsApi.fetchAllCars({setState: setAutos});
        } else if (fetchId === 88888) {
            carsApi.fetchFavouriteCars({token: token, setState: setAutos});
        } else if (fetchId === 77777) {
            carsApi.filterCars({credentials: credentials, setState: setAutos});
        }
    }, [fetchId, token, credentials]);
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