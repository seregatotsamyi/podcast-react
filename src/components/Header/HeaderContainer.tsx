import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {isAuth} from "../../redux/auth-selectors";
import {isShowMenu} from "../../redux/app-selectors";
import { toggleShowMenu } from "../../redux/app-reducer";


const HeaderContainer = (props: any) => {

    return (
        <Header isAuth={props.isAuth} isShowMenu={props.isShowMenu} toggleShowMenu={props.toggleShowMenu}/>

    )


}

const mapStateToProps = (state: any) => {
    return {
        isAuth: isAuth(state),
        isShowMenu:  isShowMenu(state)
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        toggleShowMenu: (isShow:boolean) => {
            dispatch(toggleShowMenu(isShow));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)