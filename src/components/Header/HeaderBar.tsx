import {useState} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hoc/useOutsideClick";
import IconStore from "../media/iconStore";
import {logout} from "../../redux/auth-reducer";

// type HeaderBarType = {
//     userImg: string,
//     logout: any | undefined
// }

const HeaderBar = (props: any) => {

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
        toggleBar()
    }

    const ref = useOutsideClick(() => {
        if (showBar) {
            toggleBar()
        }
    });

    return (
        <div className="header__auth" ref={ref}>
            <div className="header__auth-top js-auth-list" onClick={toggleBar}>
                <img className="header__auth-img" src={IconStore.DefaultAvatarIcon} alt="avatar"
                     width="36" height="36"/>
                <div className="header__auth-name">Сергей Москалев</div>
            </div>
            <div className={classBar} >
                <ul className="header__auth-list">
                    <li className="header__auth-item">
                        <Link className="header__auth-link" to="/my/podcasts" onClick={toggleBar}>
                            <img className="header__auth-link-img" src={IconStore.UserIcon}
                                 alt="icon" width="20" height="20"/>
                            <span>Кабинет автора</span>
                        </Link>
                    </li>
                    <li className="header__auth-item">
                        <Link className="header__auth-link" to="/my/playlists" onClick={toggleBar}>
                            <img className="header__auth-link-img"
                                 src={IconStore.HeartIcon} alt="icon" width="20"
                                 height="20"/>
                            <span>Избранное</span>
                        </Link>
                    </li>
                    <li className="header__auth-item">
                        <Link className="header__auth-link" to="/my/profile" onClick={toggleBar}>
                            <img className="header__auth-link-img"
                                 src={IconStore.SettingsIcon} alt="icon" width="20"
                                 height="20"/>
                            <span>Мой профиль</span>
                        </Link>
                    </li>
                    <li className="header__auth-item">
                        <button className="header__auth-link"  onClick={onLogout}>
                            <img className="header__auth-link-img"
                                 src={IconStore.LogoutIcon} alt="icon" width="20"
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
export default connect(mapStateToProps, logout)(HeaderBar)