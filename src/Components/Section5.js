import React from "react";
import './Section5.css';
import einstein from './Images/einstein.png';


function Section5(){
    return (
        <>
        <div className='Section5' id='Section5' name='Section5'> 
            <div className='Section5-Container' >
                <div className='image-einstein'>
                    <img src={einstein} alt='einstein'/> 
                </div>
                <h1>Section Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lacus id dolor dictum volutpat. Donec id lorem nec lorem facilisis tempus. In commodo sapien sed nulla mattis, in auctor dolor varius. Vivamus dignissim ac tortor commodo fringilla. In cursus est eget lacus scelerisque congue. Aenean vel finibus nulla. Etiam suscipit metus non gravida venenatis. Quisque vitae volutpat lorem. Nullam aliquam ante nisi, vel egestas erat bibendum a. Nam eu nulla nisl.
                    </p>
            </div>
        </div>
        </>
    );
}
export default Section5;