import React from "react";
import logoImg from "../../images/logo.svg";
import {Link, NavLink} from 'react-router-dom';

const Footer = (props: any) => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <Link className="footer__logo logo" to="/">
                        <img className="logo__img" src={logoImg} alt="logo" width="151" height="61"/>
                    </Link>
                    <nav className="footer__nav">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <NavLink className="footer__link" to="/">
                                    Главная
                                </NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink className="footer__link" to="/recommendations">
                                    Рекомендации
                                </NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink className="footer__link" to="/podcasts">
                                    Подкасты
                                </NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink className="footer__link" to="/authors">
                                    Авторы
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__bottom">
                    <ul className="footer__bottom-list">
                        <li className="footer__bottom-item">
                             <span className="footer__bottom-text footer__bottom-text_copyright">
                                © Podcast 2023. All right reserved
                             </span>
                        </li>
                        <li className="footer__bottom-item">
                            <Link className="footer__bottom-text" to="/">
                                Terms and Conditions
                            </Link>
                        </li>
                    </ul>
                    <ul className="footer__bottom-list">
                        <li className="footer__bottom-item">
                            <Link className="footer__bottom-text" to="mailto:example@gmail.com">
                                Support Email
                            </Link>
                        </li>
                        <li className="footer__bottom-item">
                            <Link className="footer__bottom-text" to="https://www.youtube.com/">
                                YouTube
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;