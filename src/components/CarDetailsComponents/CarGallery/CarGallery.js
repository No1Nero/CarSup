import React, {useEffect, useState} from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classNames from 'classnames';
import arrowRight from '../../../img/arrow_right.png';
import arrowLeft from '../../../img/arrow_left.png';
import './CarGallery.css';


export default function CarGallery({imageLinks}) {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [activeImage, setActiveImage] = useState({});

    useEffect(() => {
        setActiveImage(imageLinks[activeSlideIndex]);
    }, [imageLinks, activeSlideIndex]);

    const showNext = () => {
        setActiveSlideIndex(activeSlideIndex => activeSlideIndex + 1);
    };

    const showPrev = () => {
        setActiveSlideIndex(activeSlideIndex => activeSlideIndex - 1);
    };

    const handleIndex = index => {
        setActiveSlideIndex(index);
    };

    return (
        <div>
            <div className="car-gallery-photos-div">
                <button className="car-gallery-change-button" onClick={showPrev} disabled={activeSlideIndex === 0}><img className="car-gallery-change-image" alt="#" src={arrowLeft} /></button>
                <TransitionGroup className="car_gallery_photo_container">
                    <CSSTransition key={activeImage.id} timeout={250} classNames="photo-slider">
                        <img className='car_gallery_img' alt="#" src={activeImage.link} />
                    </CSSTransition>
                </TransitionGroup>
                <button className="car-gallery-change-button-right" onClick={showNext} disabled={activeSlideIndex === imageLinks.length - 1}><img  className="car-gallery-change-image" alt="#" src={arrowRight} /></button>
            </div>
            <ul className="car_gallery_photo_gallery">
                {imageLinks.map(({id, link}, index) => (
                    <li className="car_gallery_photo_gallery_li" key={id}>
                        <img onClick={() => handleIndex(index)} className={classNames("car_gallery_photo_gallery_img", activeSlideIndex === index ? 'car_gallery_chosen_photo' : null)} alt="#" src={link} />
                    </li>
                ))}
            </ul>
        </div>
    );
};