import React, {useState} from "react";
import { CSSTransition } from "react-transition-group";
import CarList from "components/CarList/CarList";
import './BuyCarsView.css';
import FilterPanel from "components/FilterPanel/FilterPanel";
import filter from '../img/filter.png';

export default function BuyNowView() {
    const [toggler, setToggler] = useState(true);

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
                <CarList fetchId={99999} nameLink={'/autos/'}/>
            </div>
        </div>
    );
};