import React, {useState} from 'react';
import s from './Calculator.module.css';

export default function Calculator() {
    const [toggler, setToggler] = useState(true);

    const handleToggler = () => {
        setToggler(toggler => !toggler);
    };

    return (
        <div className={s.wrapper}>
            {toggler ? <button onClick={handleToggler}>Расчитать стоимость</button> : <p>Стоимость расчитана!</p>}
        </div>
    );
};