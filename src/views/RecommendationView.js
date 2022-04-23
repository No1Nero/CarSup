import React from "react";
import CarList from "components/CarList/CarList";
import s from './RecommendationView.module.css';

export default function RecommendationView() {
    return (
        <div>
            <h1 className={s.header}>Рекомендации</h1>
            <CarList nameLink={'/recommendation/'}/>
        </div>
    );
};