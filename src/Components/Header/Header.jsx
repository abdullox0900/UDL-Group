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
                            <a href="#" className="nav__link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Home</a>
                        </li>
                    </ul>
                </nav>

                <Button />
            </header>
        </>
    )
}

export default Header