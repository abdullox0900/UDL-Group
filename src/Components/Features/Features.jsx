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

    const featuresData = [
        {
            img: landingIcon,
            title: "Целевая страница",
        },
        {
            img: corImg,
            title: "Корпоративные сайты",
        },
        {
            img: inMarket,
            title: "Интернет-магазин",
        },
        {
            img: texPod,
            title: "Техническая поддержка",
        },
        {
            img: Ness,
            title: "Сложные системы",
        },
    ]

    return (
        <>
            <Container>
                <section className="features">
                    <ul className="features__list">
                        {
                            featuresData.map((data) => {
                                return (
                                    <>
                                        <li className="features__item" data-aos="zoom-in" data-aos-duration="2000">
                                            <img className="features__icon" src={data.img} alt="landing" />
                                            <p className="features__desc">{data.title}</p>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </section>
            </Container>
        </>
    )
}

export default Features