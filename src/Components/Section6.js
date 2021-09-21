import React from 'react';
import './Section6.css';
import { Link } from 'react-router-dom';
import product from './Images/product.png';

function Section6() {
    return (
        <div className='Section6' id='Section6' name='Section6'>
            <div className='Section6-container'>
                <h3>Lorem Ipsum dolor sit amet</h3>
                <div className='section6-links'>
                    <button className='section6-btn'>Watch demo</button>
                    <Link className='learn-link'>Learn more<i class="fas fa-chevron-right"></i></Link>
                    
                </div>
            </div>
            <figure>
                <img
                    className='section6_img'
                    alt='section6 image'
                    src={product}
                />
            </figure>
        </div>
    );
}

export default Section6;