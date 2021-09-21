import React from 'react';

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <figure className='cards__item__pic-wrap'>
                <img
                    className='cards__item__img'
                    alt='Travel Image'
                    src={props.src}
                />
                </figure>
                <div className='cards__item__info'>
                    <h6 className='cards__item__title'>{props.title}</h6>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </li>
        </>
);
    } 

export default CardItem;