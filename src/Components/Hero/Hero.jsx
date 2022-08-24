// Import React 
import React from "react";

// Import Components
import "../Hero/Hero.scss";
import Container from "../Container/Container";
import Header from "../Header/Header";
import heroImg from "../../Assets/Img/hero365.svg";
import Button from "../Button/Button";
import Brend from "../Brend/Brend";

function Hero() {
    return (
        <>
            <section className="hero">
                <Container>
                    <Header />
                    <div className="hero__bg-effect"></div>
                    <div className="hero__box">
                        <div className="hero__content">
                            <Brend />
                            <h1 className="hero__title">Разработка и создание <span>сайтов</span></h1>
                            <Button />
                        </div>
                        <img className="hero__img" src={heroImg} alt="" width={700} height={700} />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Hero