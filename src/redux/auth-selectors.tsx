import {AppStateType} from "./redux-store";

export const isAuth = (state: AppStateType) => {
    return state.auth.isAuth
}

export const userMe = (state: AppStateType) => {
    return {
        username: state.auth.username,
        id: state.auth.id,
        email: state.auth.email
    }

}