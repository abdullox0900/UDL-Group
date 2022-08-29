// Import React 
import React from "react";

// Import Components
import "../Service/Service.scss";
import Container from "../Container/Container";
import Brend from "../Brend/Brend";

//Import Img and Icon
import WebIcon from "../../Assets/Icons/web.svg";
import MobilIcon from "../../Assets/Icons/mobile.svg";
import LoupeIcon from "../../Assets/Icons/loupe.svg";
import TelegramBotIcon from "../../Assets/Icons/telegram-bot.svg";


function Service() {

    const serviceData = [
        {
            id: 1,
            img: WebIcon,
            title: "Разработка сайтов",
            desc: "Создание продающих сайтов для вашего бизнеса. От сайта-визитки до онлайн-магазина.",
        },
        {
            id: 2,
            img: MobilIcon,
            title: "Разработка моб. приложений",
            desc: "Автоматизация работы компании и сотрудников, коммуникация с аудиторией. Приложение можно создать в зависимости от Ваших предпочтений и целей.",
        },
        {
            id: 3,
            img: TelegramBotIcon,
            title: "Разработка ботов Telegram",
            desc: "Экономьте Ваше время! Бот сделает всю рутинную работу за Вас и приводит к Вам клиентов готовых к покупке, мессенджеры отвечают на вопросы пользователей и подталкивают их к покупке 24/7.",
        },
        {
            id: 4,
            img: LoupeIcon,
            title: "Seo продвижение сайта",
            desc: "Продвижение сайта в топ 10 на первой странице Яндекса и Google в поиске. Люди сами найдут Вас, а Вам остаётся только принимать звонки от своих будущих клиентов.",
        }
    ]

    return (
        <>
            <Container>
                <section className="service" id="service">
                    <Brend />
                    <h2 className="service__title">Наши услуги</h2>
                    <p className="service__desc">UDL - Group - Студия, которая занимается разработкой сайтов и Также наши услуги включают техподдержку и модернизацию существующих сайтов.</p>

                    <ul className="service__list">
                        {
                            serviceData.map((data) => {
                                return (
                                    <>
                                        <li className="service__item" key={data.id} data-aos="fade-up"
                                            data-aos-duration="1000">
                                            <img className="service__icon" src={data.img} alt="icon" />
                                            <h5 className="service__item-header">{data.title}</h5>
                                            <p className="service__text">{data.desc}</p>
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

export default Service