import React, {useState} from 'react';
import classNames from 'classnames';
import CalculateField from './CalculateField';
import './HandCalculator.css';

const categories = [
    {title: 'Легковые', id: 1},
    {title: 'Электро', id: 2},
    {title: 'Гибрид', id: 3},
    {title: 'Мото', id: 4},
];

export default function HandCalculator() {
    const [chosenId, setChosenId] = useState(1);
    const [calculateToggler, setCalculateToggler] = useState(false);

    const [carPrice, setCarPrice] = useState('');
    const [carEngineValue, setCarEngineValue] = useState('');
    const [carEngineType, setCarEngineType] = useState('');
    const [carYear, setCarYear] = useState('');
    const [electroCarPower, setElectroCarPower] = useState('');
    const [motoEngineValue, setMotoEngineValue] = useState('');

    const handleChange = e => {
        const {name, value} = e.target;
        switch (name) {
            case 'carPrice':
                setCarPrice(value);
                break;

            case 'carEngineValue':
                setCarEngineValue(value);
                break;

            case 'carEngineType':
                setCarEngineType(value);
                break;

            case 'carYear':
                setCarYear(value);
                break;

            case 'electroCarPower':
                setElectroCarPower(value);
                break;

            case 'motoEngineValue':
                setMotoEngineValue(value);
                break;

            default:
                return;
        };
    };

    const clearAllFields = () => {
        setCarPrice('');
        setCarEngineValue('');
        setCarEngineType('');
        setCarYear('');
        setElectroCarPower('');
        setMotoEngineValue('');
    };

    const handleClick = id => {
        setChosenId(id);
        setCalculateToggler(false);
        clearAllFields();
    };

    return (
        <div>
            <div className='calculator_section_div'>
                {categories.map(({title, id}) => (
                    <section onClick={() => handleClick(id)} className={classNames('calculator_section', chosenId === id ? 'chosen' : null)} key={id}>{title}</section>
                ))}
            </div>
            <div className='calculator_input_div'>
                {chosenId === 1 && 
                    <>
                    <section className='calculator_section_value'>
                        <label>Стоимость автомобиля, USD</label>
                        <input className='calculator_input' onChange={handleChange} value={carPrice} name='carPrice' type="number"></input>
                    </section>
                    <section className='calculator_section_value'>
                        <label>Объем двигателя, куб.дм</label>
                        <input className='calculator_input' onChange={handleChange} value={carEngineValue} name='carEngineValue' type="number"></input>
                    </section>
                    <section className='calculator_section_value'>
                        <label>Тип двигателя</label>
                        <div className='calculator_radio_wrapper'>
                            <section>
                                <input onChange={handleChange} value="Бензин" name='carEngineType' type="radio"></input>
                                <label>Бензин</label>
                            </section>
                            <section>
                                <input onChange={handleChange} value="Дизель" name='carEngineType' type="radio"></input>
                                <label>Дизель</label>
                            </section>
                        </div>
                    </section>
                    <section className='calculator_section_value'>
                        <label>Год выпуска</label>
                        <input className='calculator_input' onChange={handleChange} value={carYear} name='carYear' type="number"></input>
                    </section>
                    </>
                }
                {chosenId === 2 && 
                    <>
                    <section className='calculator_section_value'>
                        <label>Стоимость автомобиля, USD</label>
                        <input className='calculator_input' onChange={handleChange} value={carPrice} name='carPrice' type="number"></input>
                    </section>
                    <section className='calculator_section_value'>
                        <label>Мощность, кВт</label>
                        <input className='calculator_input' onChange={handleChange} value={electroCarPower} name='electroCarPower' type="number"></input>
                    </section>
                    </>
                }
                {chosenId === 3 && 
                    <>
                    <section className='calculator_section_value'>
                        <label>Стоимость автомобиля, USD</label>
                        <input className='calculator_input' onChange={handleChange} value={carPrice} name='carPrice' type="number"></input>
                    </section>
                    </>
                }
                {chosenId === 4 && 
                    <>
                    <section className='calculator_section_value'>
                        <label>Стоимость автомобиля, USD</label>
                        <input className='calculator_input' onChange={handleChange} value={carPrice} name='carPrice' type="number"></input>
                    </section>
                    <section className='calculator_section_value'>
                        <label>Объем двигателя, куб.см</label>
                        <input className='calculator_input' onChange={handleChange} value={motoEngineValue} name='motoEngineValue' type="number"></input>
                    </section>
                    </>
                }
                <button onClick={() => setCalculateToggler(true)} className='calculator_submit_button' type='button'>Рассчитать</button>
            </div>
            {calculateToggler && 
                <CalculateField 
                    chosenId={chosenId}
                    carPrice={carPrice}
                    carEngineValue={carEngineValue}
                    carEngineType={carEngineType}
                    carYear={carYear}
                    electroCarPower={electroCarPower}
                    motoEngineValue={motoEngineValue}
                />
            }
        </div>
    );
};