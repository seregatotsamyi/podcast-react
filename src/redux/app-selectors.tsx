import {AppStateType} from "./redux-store";

export const isShowMenu = (state: AppStateType) => {
    return state.app.isShowMenu
}