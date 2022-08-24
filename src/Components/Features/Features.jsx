// Import React 
import React from "react";

// Import Components
import "../Features/Features.scss";
import Container from "../Container/Container";

// Import Icon
import landingIcon from "../../Assets/Icons/landing.svg";
import corImg from "../../Assets/Icons/cor.svg";
import inMarket from "../../Assets/Icons/market.svg";
import texPod from "../../Assets/Icons/textpod.svg";
import Ness from "../../Assets/Icons/ness.svg";


function Features() {
    return (
        <>
            <Container>
                <section className="features">
                    <ul className="features__list">
                        <li className="features__item"  data-aos="zoom-in" data-aos-duration="400">
                            <img className="features__icon" src={landingIcon} alt="landing" />
                            <p className="features__desc">Целевая страница</p>
                        </li>
                        <li className="features__item" data-aos="zoom-in" data-aos-duration="600">
                            <img className="features__icon" src={corImg} alt="icon" />
                            <p className="features__desc">Корпоративные сайты</p>
                        </li>
                        <li className="features__item" data-aos="zoom-in" data-aos-duration="800">
                            <img className="features__icon" src={inMarket} alt="icon" />
                            <p className="features__desc">Интернет-магазин</p>
                        </li>
                        <li className="features__item" data-aos="zoom-in" data-aos-duration="1000">
                            <img className="features__icon" src={texPod} alt="icon" />
                            <p className="features__desc">Техническая поддержка</p>
                        </li>
                        <li className="features__item" data-aos="zoom-in" data-aos-duration="1200">
                            <img className="features__icon" src={Ness} alt="icon" />
                            <p className="features__desc">Сложные системы</p>
                        </li>
                    </ul>
                </section>
            </Container>
        </>
    )
}

export default Features