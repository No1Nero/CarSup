import React from "react";
import CarConditionInfo from "./CarConditionInfo/CarConditionInfo";
import CarInfo from "./CarInfo/CarInfo";
import CarGallery from "./CarGallery/CarGallery";
import s from './CarFront.module.css';

export default function CarFront({car}) {
    return (
        <div className={s.front_div}>
            <div>
                <CarGallery imageLinks={car.imageLinks} />
                <CarConditionInfo car={car} />
            </div>
            <div>
                <CarInfo car={car} />
            </div>
        </div>
    );
};