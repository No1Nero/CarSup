import React from "react";
import CarList from "components/CarList/CarList";
import s from './ChosenView.module.css';

export default function ChosenView() {
    return (
        <div>
            <h1 className={s.header}>Избранное</h1>
            <CarList nameLink={'/chosen/'}/>
        </div>
    );
};