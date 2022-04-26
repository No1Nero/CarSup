import React, {useState, useEffect} from "react";
import { CSSTransition } from "react-transition-group";
import CarList from "components/CarList/CarList";
import carsApi from "services/cars-api";
import './BuyCarsView.css';
import FilterPanel from "components/FilterPanel/FilterPanel";
import filter from '../img/filter.png';

export default function BuyNowView() {
    const [toggler, setToggler] = useState(true);
    const [countCars, setCountCars] = useState(0);

    useEffect(() => {
        carsApi.countCars({setState: setCountCars});
    }, [countCars]);

    const handleChange = () => {
        setToggler(toggler => !toggler);
    };

    return (
        <div className="buyNow__wrapper">
            <h1 className='buyNow__title'>Каталог авто</h1>
            <div className='buyNow__content'>
                <img onClick={handleChange} className='buyNow__img' alt="#" src={filter} />
                <CSSTransition in={toggler} timeout={300} unmountOnExit classNames="fade" >
                    <FilterPanel />
                </CSSTransition>
                <CarList buttonCount={Math.ceil(countCars/100)} fetchId={99999} nameLink={'/autos/'}/>
            </div>
        </div>
    );
};