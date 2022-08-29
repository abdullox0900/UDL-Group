// Import React 
import React from "react";

// Import Components
import "../Header/Header.scss";
import logo from "../../Assets/Icons/logo.svg"
import Button from "../Button/Button";

function Header() {
    return(
        <>
            <header className="header">
                <a className="header__link-logo" href="#">
                    <img className="header__logo" src={logo} alt="" />
                </a>

                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#service" className="nav__link">Услуги</a>
                        </li>
                        <li className="nav__item">
                            <a href="#benefits" className="nav__link">Плюсы</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Портфолио</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Цены на сайты</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Контакты</a>
                        </li>
                    </ul>
                </nav>

                <Button />
            </header>
        </>
    )
}

export default Header