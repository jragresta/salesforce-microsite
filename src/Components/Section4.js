import React from 'react';
import './Section4.css';
import image01 from './Images/image01.png';
import image02 from './Images/image02.png';
import image03 from './Images/image03.png';
import image04 from './Images/image04.png';
import CardItem from './CardItem';

function Section4() {
    return (
        <div className='cards' id='Section4' name='Section4'>
            <div className="cards__container">
                <div className="main-card">
                    <figure>
                        <img
                            className='cards__item__img_main'
                            alt='Main Card'
                            src={image01}
                        />
                    </figure>
                    <h6>EYEBROW</h6>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum </p>
                    <p>dolor sit amet, consectetur adipiscing elit, sed doad. dolor sit.</p>
                    <div className='btn'>
                        <button className='btns'>Learn more</button>
                    </div>
                </div>
                <div className="cards__wrapper">
                        <ul className="card_list">
                        <CardItem 
                        src={image02}
                        title="EYEBROW"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing"
                        />
                        <CardItem 
                        src={image03}
                        title="EYEBROW"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing"
                        />
                        <CardItem 
                        src={image04}
                        title="EYEBROW"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing"
                        />                   
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Section4;
