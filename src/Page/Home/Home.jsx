// Import React
import React from "react";


// Import Components 
import Hero from "../../Components/Hero/Hero";
import Forwhat from "../../Components/Forwhat/Forwhat";
import Addressing from "../../Components/Addressing/Addressing";
import Features from "../../Components/Features/Features";
import Service from "../../Components/Service/Service";

function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Forwhat />
            <Service />
            <Addressing />
        </>
    )
}

export default Home