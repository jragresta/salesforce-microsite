import React from "react";
import './App.css';
import Navbar from './Components/Navbar';
import Section2 from './Components/Section2';
import Footer from './Components/Footer';
import {BrowserRouter as Router } from 'react-router-dom';
import Herosection from "./Components/HeroSection";
import Section5 from "./Components/Section5";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section6 from "./Components/Section6";

function App(){
    return (
        <>
            <Router basename="/salesforce-microsite">
                <Navbar />
                <Herosection />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Footer />
            </Router>
        </>
    );
}
export default App;