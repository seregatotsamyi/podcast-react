import React, {useEffect, useState} from "react";
import BurgerIcon from "../../images/icon/menu-3-line.svg";
import {Link} from 'react-router-dom';
import HeaderBar from "./HeaderBar";
import IconStore from "../media/iconStore";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";


const Header = (props: any) => {

    const userImg = IconStore.DefaultAvatarIcon


    useEffect(() => {
        if (props.isShowMenu) {
            document.body.classList.add('_fixed')
        } else {
            document.body.classList.remove('_fixed')
        }
    }, [props.isShowMenu])


    const toggleShowMenu = () => {
        props.toggleShowMenu(true)
    }


    return (
        <header className="header">
            <div className="container">

                <div className="header__inner">
                    <Link className="header__logo logo" to="/">
                        <img className="logo__img" width="151" height="61" src={IconStore.LogoImg} alt="logo"/>
                    </Link>
                    <div className="header__right-wrap">

                        <form className="header__search search ">
                            <div className="search__inner">
                                <button className="search__btn-open" type="button">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z"
                                            fill="#fff"/>

                                        <clipPath>
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </svg>
                                </button>
                                <button className="search__btn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z"
                                            fill="#fff"/>

                                        <clipPath>
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </svg>
                                </button>
                                <input className="search__input" type="text" placeholder="Подкасты, авторы, эпизоды"/>
                            </div>
                        </form>

                        <div className="header__right">
                            {props.isAuth ?
                                <HeaderBar userImg={userImg}/>
                                : <div className="header__unAuth">
                                    <Link className="header__btn btn  btn_3" to="/login">
                                        Войти
                                    </Link>
                                    <Link className="header__btn btn btn_2" to="/register">
                                        Регистрация
                                    </Link>
                                </div>
                            }


                            <button className="header__burger burger js-toggle-menu" type="button"
                                    onClick={toggleShowMenu}>
                                <img className="burger__img" src={BurgerIcon} alt="menu-3-line.svg"
                                     width="24" height="24"/>
                            </button>
                        </div>

                    </div>


                </div>

            </div>
        </header>
    );
}
const mapStateToProps = (state: any) => ({

})
export default connect(mapStateToProps, {})(Header)