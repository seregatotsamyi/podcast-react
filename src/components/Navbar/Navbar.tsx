import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {isAuth} from "../../redux/auth-selectors";
import IconStore from "../media/iconStore";
import {isShowMenu} from "../../redux/app-selectors";
import {toggleShowMenu} from "../../redux/app-reducer";
import {useOutsideClick} from "../../hoc/useOutsideClick";
import useBodyClass from "../utils/useBodyClass";

type NavBarType = {
    isAuth: boolean,
    isShowMenu: boolean,
    toggleShowMenu: any
}

const Navbar = (props: NavBarType) => {

    const toggleShowMenu = () => {
        props.toggleShowMenu(false)
    }

    const ref = useOutsideClick(() => {
        if (props.isShowMenu) {
            props.toggleShowMenu(false)
        }
    });

    let [showBar, setShowBar] = useState(false)

    const isShowMenu = props.isShowMenu ? "_open" : ""
    const classMenu = `menu ${isShowMenu}`

    const toggleBar = () => {
        if (showBar) {
            setShowBar(false)

        } else {
            setShowBar(true)
        }
    }
    const isShow = showBar ? "_open" : ""
    const classBar = `header__auth-bottom ${isShow}`

    return (
        <nav className={classMenu} ref={ref}>
            <button className="menu__burger burger js-toggle-menu" onClick={toggleShowMenu}>
                <img className="burger__img" src={IconStore.BurgerIcon} alt="close" width="24" height="24"/>
            </button>
            <ul className="menu__list">
                <li className="menu__item">
                    <NavLink to="/" className='menu__link' onClick={toggleShowMenu}>
                        <img className="menu__link-img" src={IconStore.HomeIcon} alt="Главная" width="24"
                             height="24"/>
                        <span>Главная</span>
                    </NavLink>

                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/recommendations" onClick={toggleShowMenu}>
                        <img className="menu__link-img" src={IconStore.FlashlightIcon} alt="Рекомендации" width="24"
                             height="24"/>
                        <span>Рекомендации</span>
                    </NavLink>

                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/podcasts" onClick={toggleShowMenu}>
                        <img className="menu__link-img" src={IconStore.BroadcastIcon} alt="podcasts"
                             width="24" height="24"/>
                        <span>Подкасты</span>
                    </NavLink>

                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/episodes" onClick={toggleShowMenu}>
                        <img className="menu__link-img" src={IconStore.VoicePrintIcon} alt="Эпизоды"
                             width="24" height="24"/>
                        <span>Эпизоды</span>
                    </NavLink>

                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to="/authors" onClick={toggleShowMenu}>
                        <img className="menu__link-img" src={IconStore.MicIcon} alt="Авторы" width="24"
                             height="24"/>
                        <span>Авторы</span>
                    </NavLink>

                </li>
                <li className="menu__item">
                    <NavLink className="menu__link" to={'/playlists'} onClick={toggleShowMenu}>
                        <img className="menu__link-img" src={IconStore.PlayListIcon} alt="Плейлисты"
                             width="24" height="24"/>
                        <span>Плейлисты</span>
                    </NavLink>

                </li>
            </ul>
            {props.isAuth ? <ul className="menu__list-auth">
                <li className="menu__item-auth menu__item">
                    <NavLink className="menu__link-auth menu__link" to="/my/podcasts">
                        <img className="menu__link-img" src={IconStore.UserIcon} alt="Кабинет автора" width="24"
                             height="24"/>
                        <span>Кабинет автора</span>
                    </NavLink>
                </li>
                <li className="menu__item-auth menu__item">
                    <NavLink className="menu__link-auth menu__link" to="/my/profile">
                        <img className="menu__link-img" src={IconStore.SettingsIcon} alt="Мой профиль"
                             width="24" height="24"/>
                        <span>Мой профиль</span>
                    </NavLink>
                </li>
            </ul> : ""}

            <div className="menu__mob">
                {props.isAuth ?
                    <div className="menu__mob-auth">
                        <div className="header__auth-top js-auth-list" onClick={toggleBar}>
                            <img className="header__auth-img" src={IconStore.DefaultAvatarIcon} alt="avatar" width="36"
                                 height="36"/>
                            <div className="header__auth-name">Сергей Москалев</div>
                        </div>
                        <div className={classBar}>
                            <ul className="header__auth-list">
                                <li className="header__auth-item">
                                    <NavLink className="header__auth-link" to="/my/podcasts" onClick={toggleShowMenu}>
                                        <img className="header__auth-link-img" src={IconStore.UserIcon}
                                             alt="Кабинет автора" width="20"
                                             height="20"/>
                                        <span>Кабинет автора</span>
                                    </NavLink>
                                </li>
                                <li className="header__auth-item">
                                    <NavLink className="header__auth-link" to="/my/playlists" onClick={toggleShowMenu}>
                                        <img className="header__auth-link-img" src={IconStore.HeartIcon}
                                             alt="Избранное" width="20"
                                             height="20"/>
                                        <span>Избранное</span>
                                    </NavLink>
                                </li>
                                <li className="header__auth-item">
                                    <NavLink className="header__auth-link" to="/my/profile" onClick={toggleShowMenu}>
                                        <img className="header__auth-link-img" src={IconStore.SettingsIcon}
                                             alt="Мой профиль" width="20"
                                             height="20"/>
                                        <span>Мой профиль</span>
                                    </NavLink>
                                </li>
                                <li className="header__auth-item">
                                    <button className="header__auth-link" onClick={toggleShowMenu}>
                                        <img className="header__auth-link-img" src={IconStore.LogoutIcon}
                                             alt="Выход" width="20"
                                             height="20"/>
                                        <span>Выход</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div> :
                    <div className="menu__mob-unAuth">
                        <Link className="header__btn btn  btn_3" to='/login' onClick={toggleShowMenu}>
                            Войти
                        </Link>
                        <Link className="header__btn btn btn_2" to="/create" onClick={toggleShowMenu}>
                            Регистрация
                        </Link>
                    </div>}


            </div>
        </nav>
    )
}

const mapStateToProps = (state: any) => ({
    isAuth: isAuth(state),
    isShowMenu: isShowMenu(state)
})

let mapDispatchToProps = (dispatch: any) => {
    return {
        toggleShowMenu: (isShow: boolean) => {
            dispatch(toggleShowMenu(isShow));
        },
    }
}

let NavbarContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)(Navbar)
)

export default NavbarContainer