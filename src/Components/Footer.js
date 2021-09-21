import React from "react";
import SFlogo from './Images/logo-salesforce.svg';
import './Footer.css';

function Footer(){
    return(
    <div className='Footer-container'>
        <div className='line1'>
            <p>BUILT ON</p>
        </div>
            <figure>
                <img
                    className='SF_logo'
                    alt='SF logo'
                    src={SFlogo}
                />
            </figure>
        <div className='line2'>
            <p>For further questions, contact:</p>
        </div>
        <div className='line3'>
            <p>FIRST NAME LAST NAME</p>
        </div>
        <div className='line4'>
            <p>Account Executive</p>
        </div>
        <div className='line5'>
            <p>
            email@salesforce.com
            </p>
        </div>
        <div className='line6'>
            <p>
            Powered by Q Branch
            </p>
        </div>
    </div> 
    )
}
export default Footer;