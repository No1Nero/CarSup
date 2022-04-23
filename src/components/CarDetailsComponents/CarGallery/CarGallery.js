import React from "react";
import mockModel from '../../../img/model.jpg';
import s from './CarGallery.module.css';

export default function CarGallery() {
    return (
        <div>
            <img className={s.img} alt="#" src={mockModel} />
            <section className={s.photo_gallery}>
                <p>Галерея фото</p>
            </section>
        </div>
    );
};