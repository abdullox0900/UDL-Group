// Import React 
import React from "react";

// Import Components
import "../Forwhat/Forwhat.scss";
import Container from "../Container/Container";
import Brend from "../Brend/Brend";

// Import Img
import OneImg from "../../Assets/ilustration/amico.svg";
import TwoImg from "../../Assets/ilustration/pana.svg";
import Three from "../../Assets/ilustration/rafiki.svg";
import RotBg from "../../Assets/Icons/sivel.svg";

function Forwhat() {
    return (
        <>
            <Container>
                <section className="forwhat">
                    <Brend />
                    <h2 className="forwhat__title">Для чего мне сайт?</h2>

                    <ul className="forwhat__list">
                        <li className="forwhat__item">
                            <img src={OneImg} alt="icon" />
                            <img className="animate-rotate forwhat__icon" src={RotBg} alt="icon" />
                            <div className="forwhat__box" data-aos="fade-left"
                                data-aos-offset="500"
                                data-aos-duration="1000">
                                <h4 className="forwhat__item-title">Продажа в интернете</h4>
                                <p className="forwhat__desc">
                                    Чтобы начать продавать в интернете, хорошо подойдёт интернет-магазин с
                                    каталогом, если у вас тысячи товаров, или одностраничный сайт, если товаров не так много.
                                </p>
                            </div>
                        </li>
                        <li className="forwhat__item">
                            <img src={TwoImg} alt="icon" />
                            <img className="animate-rotate forwhat__icon" src={RotBg} alt="icon" />
                            <div className="forwhat__box" data-aos="fade-right"
                                data-aos-offset="500"
                                data-aos-duration="1000">
                                <h4 className="forwhat__item-title">Повышение узнаваемости</h4>
                                <p className="forwhat__desc">
                                    Сайт-визитка, одностраничник или корпоративный сайт с оригинальным дизайном и
                                    УТП увеличат узнаваемость, помогут клиенту легче найти информацию о вас и связаться с ва
                                </p>
                            </div>
                        </li>
                        <li className="forwhat__item">
                            <img src={Three} alt="icon" />
                            <img className="animate-rotate forwhat__icon" src={RotBg} alt="icon" />
                            <div className="forwhat__box" data-aos="fade-left"
                                data-aos-offset="500"
                                data-aos-duration="1000">
                                <h4 className="forwhat__item-title">Продвижение услуг</h4>
                                <p className="forwhat__desc">
                                    Впечатляющий лендинг или корпоративный сайт станут вашей визитной карточкой в интернете. Здесь вы сможете разместить
                                    полную информацию об услугах, заявить о себе и получить заявки от клиентов.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
            </Container>
        </>
    )
}

export default Forwhat