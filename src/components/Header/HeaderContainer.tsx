import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {isAuth} from "../../redux/auth-selectors";
import {isShowMenu} from "../../redux/app-selectors";
import {toggleShowMenu} from "../../redux/app-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean,
    isShowMenu: boolean
}

type MapDispatchType = {
    toggleShowMenu: (isShow: boolean) => void
}

type PropsType = MapStatePropsType & MapDispatchType

const HeaderContainer = (props: PropsType) => {

    return (
        <Header isAuth={props.isAuth} isShowMenu={props.isShowMenu} toggleShowMenu={props.toggleShowMenu}/>
    )


}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: isAuth(state),
        isShowMenu: isShowMenu(state)
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        toggleShowMenu: (isShow: boolean) => {
            dispatch(toggleShowMenu(isShow));
        },
    }
}

export default connect<MapStatePropsType, MapDispatchType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(HeaderContainer)