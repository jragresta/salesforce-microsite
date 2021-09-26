import React from "react";
import './Section2.css';
import astro from './Images/astro.png';

function Section2(){
    return (
        <>
        <div className='Section2' id='Section2' name='Section2'>
            <div className='Section2-Container' >
                <h1>Section Title</h1>
                <div className='Section2-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lacus id dolor dictum volutpat. Donec id lorem nec lorem facilisis tempus. In commodo sapien sed nulla mattis, in auctor dolor varius. Vivamus dignissim ac tortor commodo fringilla. In cursus est eget lacus scelerisque congue. Aenean vel finibus nulla. Etiam suscipit metus non gravida venenatis. Quisque vitae volutpat lorem. Nullam aliquam ante nisi, vel egestas erat bibendum a. Nam eu nulla nisl.
                    </p>
                </div>
                <div className='image-astro'>
                    <img src={astro} alt='astro'/> 
                </div>
            </div>
        </div>
        </>
    );
}
export default Section2;