// Import React 
import React from "react";

// Import Components
import "../Addressing/Addressing.scss";
import Brend from "../Brend/Brend";
import Container from "../Container/Container";

// Import Icon
import ClentIcon from "../../Assets/Icons/klent.svg";
import CodeIcon from "../../Assets/Icons/cod.svg";
import AdabIcon from "../../Assets/Icons/adabtiv.svg";
import AdminIcon from "../../Assets/Icons/amin.svg";
import OptimIcon from "../../Assets/Icons/optimation.svg";
import texIcon from "../../Assets/Icons/met.svg";


function Addressing() {

    const addressingData = [
        {
            img: ClentIcon,
            title: "Клиент",
            desc: "Индивидуальный подход к каждому клиенту",
        },
        {
            img: CodeIcon,
            title: "Чистый код",
            desc: "Чистый код с комментариями, легко при изменении или при добавлении новых функций.",
        },
        {
            img: AdabIcon,
            title: "Адаптивный дизайн",
            desc: "Создание сайтов с адаптивным дизайном, которые адаптируются для каждого устройства.",
        },
        {
            img: AdminIcon,
            title: "Сайты с админ-панелью",
            desc: "Создание сайтов для лёгкого управления сайтом и заполнения контентом без участия программиста.",
        },
        {
            img: OptimIcon,
            title: "Оптимизация сайта",
            desc: "Оптимизация сайта для быстрой загрузки.",
        },
        {
            img: texIcon,
            title: "24/7 поддержка",
            desc: "Вы можете связаться с нами в любое время, когда вам удобно! Мы всегда рады вам помочь!",
        },

    ]

    return (
        <>
            <Container>
                <section className="addressing">
                    <Brend />
                    <h2 className="addressing__title">Что Вы получаете обращаясь к нам</h2>

                    <ul className="addressing__list">
                        {
                            addressingData.map((data) => {
                                return (
                                    <>
                                        <li className="addressing__item" data-aos="fade-zoom-in"
                                            data-aos-easing="ease-in-back"
                                            data-aos-delay="300"
                                            data-aos-duration="1500"
                                            data-aos-offset="0">
                                            <img className="addressing__icon" src={data.img} alt="icon-img" />
                                            <h4 className="addressing__item-title">{data.title}</h4>
                                            <p className="addressing__desc">{data.desc}</p>
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

export default Addressing