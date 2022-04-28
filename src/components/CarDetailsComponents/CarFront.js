import React from "react";
import CarConditionInfo from "./CarConditionInfo/CarConditionInfo";
import CarInfo from "./CarInfo/CarInfo";
import CarGallery from "./CarGallery/CarGallery";
import s from './CarFront.module.css';

export default function CarFront({car, addToFav, removeFromFav}) {
    return (
        <div className={s.front_div}>
            <div>
                <CarGallery imageLinks={car.links} />
                <CarConditionInfo car={car} />
            </div>
            <div>
                <CarInfo addToFav={addToFav} removeFromFav={removeFromFav} car={car} />
            </div>
        </div>
    );
};