import React from "react";
import MultiRangeSlider from "multi-range-slider-react";
import './Slider.css';

export default function Slider({min, max, OnMinChange, OnMaxChange, absMin, absMax, step}) {
    const handleInput = (e) => {
        OnMinChange(e.minValue);
        OnMaxChange(e.maxValue);
    };

    return (
        <>
        <MultiRangeSlider
            min={absMin}
            max={absMax}
            step={step}
            ruler={false}
            label={false}
            preventWheel={false}
            minValue={min}
            maxValue={max}
            onInput={handleInput}
        />
        </>
    );
}