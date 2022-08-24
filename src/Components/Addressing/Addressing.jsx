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

    return(
        <>
            <Container>
                <section className="addressing">
                    <div className="addressing__text"><span>UDL</span>Group</div>
                    <h2 className="addressing__title">Что Вы получаете обращаясь к нам</h2>

                    <ul className="addressing__list">
                        <li className="addressing__item">
                            <img className="addressing__icon" src={ClentIcon} alt="icon-img" />
                            <h4 className="addressing__item-title">Клиент</h4>
                            <p className="addressing__desc">Индивидуальный подход к каждому клиенту</p>
                        </li>

                        <li className="addressing__item">
                            <img className="addressing__icon" src={CodeIcon} alt="icon-img" />
                            <h4 className="addressing__item-title">Чистый код</h4>
                            <p className="addressing__desc">Чистый код с комментариями, легко при изменении или при добавлении новых функций.</p>
                        </li>

                        <li className="addressing__item">
                            <img className="addressing__icon" src={AdabIcon} alt="icon-img" />
                            <h4 className="addressing__item-title">Адаптивный дизайн</h4>
                            <p className="addressing__desc">Создание сайтов с адаптивным дизайном, которые адаптируются для каждого устройства.</p>
                        </li>

                        <li className="addressing__item">
                            <img className="addressing__icon" src={AdminIcon} alt="icon-img" />
                            <h4 className="addressing__item-title">Сайты с админ-панелью</h4>
                            <p className="addressing__desc">Создание сайтов для лёгкого управления сайтом и заполнения контентом без участия программиста.</p>
                        </li>

                        <li className="addressing__item">
                            <img className="addressing__icon" src={OptimIcon} alt="icon-img" />
                            <h4 className="addressing__item-title">Оптимизация сайта</h4>
                            <p className="addressing__desc">Оптимизация сайта для быстрой загрузки.</p>
                        </li>

                        <li className="addressing__item">
                            <img className="addressing__icon" src={texIcon} alt="icon-img" />
                            <h4 className="addressing__item-title">24/7 поддержка</h4>
                            <p className="addressing__desc">Вы можете связаться с нами в любое время, когда вам удобно! Мы всегда рады вам помочь!</p>
                        </li> 
                    </ul>
                </section>
            </Container> 
        </>
    )
}

export default Addressing