import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import carsApi from "services/cars-api";
import s from './CarDetailsView.module.css';
import CarFront from "components/CarDetailsComponents/CarFront";
import Calculator from "components/Сalculator/Calculator";
import { useSelector } from "react-redux";

export default function CarDetailsView() {
    const{id} = useParams();
    const token = useSelector((state) => state.auth.user.token);

    const [car, setCar] = useState();

    const addToFav = () => {
        carsApi.addCarToFavourite({idCar: car.id, token: token, setState: setCar});
    };

    const removeFromFav = () => {
        carsApi.removeCarFromFavourite({idCar: car.id, token: token, setState: setCar});
    };

    useEffect(() => {
        carsApi.fetchCar({id: id, setState: setCar, token: token});
    }, [id, token]);
    
    return (
        <div className={s.wrapper}>
            {car && <CarFront addToFav={addToFav} removeFromFav={removeFromFav} car={car} />}
            <div className={s.calculator}>
                {car && <Calculator car={car} />}
            </div>
        </div>
    );
};