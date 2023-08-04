import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useOutsideClick } from "../../hoc/useOutsideClick";
import IconStore from "../media/iconStore";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

type HeaderBarType = {
    userImg: string,
    logout: any
}

const HeaderMobBar = (props: HeaderBarType) => {

    let [showBar, setShowBar] = useState(false)

    const toggleBar = () => {
        if (showBar) {
            setShowBar(false)
        } else {
            setShowBar(true)
        }
    }

    const isShow = showBar ? "_open" : ""
    const classBar = `header__auth-bottom ${isShow}`

    const onLogout = () => {
        props.logout()
    }

    return (
        <div className="menu__mob-auth">
            <div className="header__auth-top js-auth-list" onClick={toggleBar}>
                <img className="header__auth-img" src={IconStore.DefaultAvatarIcon} alt="avatar" width="36"
                     height="36"/>
                <div className="header__auth-name">Сергей Москалев</div>
            </div>
            <div className="header__auth-bottom">
                <ul className="header__auth-list">
                    <li className="header__auth-item">
                        <NavLink className="header__auth-link" to="/my/podcasts">
                            <img className="header__auth-link-img" src={IconStore.UserIcon}
                                 alt="Кабинет автора" width="20"
                                 height="20"/>
                            <span>Кабинет автора</span>
                        </NavLink>
                    </li>
                    <li className="header__auth-item">
                        <NavLink className="header__auth-link" to="/my/playlists">
                            <img className="header__auth-link-img" src={IconStore.HeartIcon}
                                 alt="Избранное" width="20"
                                 height="20"/>
                            <span>Избранное</span>
                        </NavLink>
                    </li>
                    <li className="header__auth-item">
                        <NavLink className="header__auth-link" to="/my/profile">
                            <img className="header__auth-link-img" src={IconStore.SettingsIcon}
                                 alt="Мой профиль" width="20"
                                 height="20"/>
                            <span>Мой профиль</span>
                        </NavLink>
                    </li>
                    <li className="header__auth-item">
                        <button className="header__auth-link" onClick={onLogout}>
                            <img className="header__auth-link-img" src={IconStore.LogoutIcon}
                                 alt="Выход" width="20"
                                 height="20"/>
                            <span>Выход</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
const mapStateToProps = (state:any) => ({})
export default connect(mapStateToProps, {logout})(HeaderMobBar)