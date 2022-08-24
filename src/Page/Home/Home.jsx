// Import React
import React from "react";
import Addressing from "../../Components/Addressing/Addressing";
import Features from "../../Components/Features/Features";

// Import Components 
import Hero from "../../Components/Hero/Hero";

function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Addressing />
        </>
    )
}

export default Home