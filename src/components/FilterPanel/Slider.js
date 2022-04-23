import React from "react";
import MultiRangeSlider from "multi-range-slider-react";
import './Slider.css';

export default function Slider({min, max, OnMinChange, OnMaxChange}) {
    const handleInput = (e) => {
        OnMinChange(e.minValue);
        OnMaxChange(e.maxValue);
    };

    return (
        <>
        <MultiRangeSlider
            min={10000}
            max={100000}
            step={1}
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