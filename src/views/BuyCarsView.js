import React, {useState} from "react";
import { CSSTransition } from "react-transition-group";
import CarList from "components/CarList/CarList";
import './BuyCarsView.css';
import FilterPanel from "components/FilterPanel/FilterPanel";
import authActions from "Redux/auth/auth-actions";
import filter from '../img/filter.png';
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

const buttonCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function BuyNowView() {
    const [toggler, setToggler] = useState(true);
    const [carsFetchId, setCarsFetchId] = useState(99999);
    const [credentials, setCredentials] = useState(null);

    const dispatch = useDispatch();
    const selectPage = useSelector((state) => state.auth.page);

    const onPageChange = num => {
        dispatch(authActions.selectPage(num));
    };
    
    const handleChange = () => {
        setToggler(toggler => !toggler);
    };

    return (
        <div className="buyNow__wrapper">
            <div className='buyNow__title'>
                <h2>Каталог авто</h2>
            </div>
            <div className='buyNow__content'>
                <img onClick={handleChange} className='buyNow__img' alt="#" src={filter} />
                <CSSTransition in={toggler} timeout={300} unmountOnExit classNames="fade" >
                    <FilterPanel setCredentials={setCredentials} setCarsFetchId={setCarsFetchId} />
                </CSSTransition>
                <CarList selectPage={selectPage} fetchId={carsFetchId} credentials={credentials} nameLink={'/autos/'}/>
            </div>
            {carsFetchId === 99999 &&
                <ul className="buy_cars_ul">
                    {buttonCount.map((num) => (
                        <label className={classNames('buy_cars_page', selectPage === num ? 'buy_cars_chosen_page' : null)} key={num} onClick={() => onPageChange(num)}>{num + 1}</label>
                    ))}
                </ul>
            }
        </div>
    );
};