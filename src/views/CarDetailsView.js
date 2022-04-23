import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import carsApi from "services/cars-api";
import s from './CarDetailsView.module.css';
import CarFront from "components/CarDetailsComponents/CarFront";
import Calculator from "components/Сalculator/Calculator";
import Statistics from "components/Statistics/Statistics";

export default function CarDetailsView() {
    const{id} = useParams();

    const [car, setCar] = useState();

    useEffect(() => {
        carsApi.fetchCar({id: id, setState: setCar});
    }, [id]);
    
    return (
        <div className={s.wrapper}>
            {car && <CarFront car={car} />}
            <div className={s.calculator}>
                <Calculator />
            </div>
            <div>
                <Statistics />
            </div>
        </div>
    );
};