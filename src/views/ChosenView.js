import React from "react";
import CarList from "components/CarList/CarList";
import s from './ChosenView.module.css';

export default function ChosenView() {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Избранные авто</h1>
            <div className={s.content}>
                <CarList fetchId={88888} nameLink={'/chosen/'}/>
            </div>
        </div>
    );
};