// Import React
import React from "react";

// Import Components
import "../Prices/Prices.scss";
import Container from "../Container/Container";
import Brend from "../Brend/Brend";

function Prices() {

    const pricesLandingData = [
        {
            service: "Срок от 15 дней",
        },
        {
            service: "Хостинг 500mb",
        },
        {
            service: "Домен есть",
        },
        {
            service: "SSL сертификат есть",
        },
        {
            service: "Адаптивный дизайн",
        },
        {
            service: "Включенные языки Узб,Рус,Анг (по желанию)",
        },
        {
            service: "Размещение на карте Google, Яндекс",
        },
    ]

    const pricesCorData = [
        {
            service: "Срок от 15 дней",
        },
        {
            service: "Хостинг 500mb",
        },
        {
            service: "Домен есть",
        },
        {
            service: "SSL сертификат есть",
        },
        {
            service: "Адаптивный дизайн",
        },
        {
            service: "Включенные языки Узб,Рус,Анг (по желанию)",
        },
        {
            service: "Админка есть",
        },
        {
            service: "Онлайн чат",
        },
        {
            service: "Установка и настройка счетчиков статистики Google Analytics, Яндекс.Метрика",
        },
        {
            service: "Размещение на карте Google, Яндекс",
        },
    ]

    return (
        <>
            <Container>
                <section className="prices">
                    <Brend />
                    <h2 className="prices__title">Цены на услуги</h2>

                    <ul className="prices__list">
                        <li className="prices__item">
                            <h4 className="prices__item-title">Landing page</h4>
                            <p className="prices__desc">от <span>1 000 000</span> uzs</p>
                            <ul className="prices__item-list list-de">
                                {
                                    pricesLandingData.map((data) => {
                                        return (
                                            <>
                                                <li className="list-de__item">{data.service}</li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                        <li className="prices__item">
                            <h4 className="prices__item-title">Corporate</h4>
                            <p className="prices__desc">от <span>4 000 000</span> uzs</p>
                            <ul className="prices__item-list list-de">
                                {
                                    pricesCorData.map((data) => {
                                        return (
                                            <>
                                                <li className="list-de__item">{data.service}</li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                        <li className="prices__item">
                            <h4 className="prices__item-title">Online Shop</h4>
                            <p className="prices__desc">от <span>1 000 000</span> uzs</p>
                            <ul className="prices__item-list list-de">
                                <li className="list-de__item">
                                    Адаптивный дизайн
                                </li>
                                <li className="list-de__item">
                                    Наполнение сайта
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </Container>
        </>
    )
}

export default Prices