import {getAuthUserData} from "./auth-reducer"

const TOGGLE_SHOW_MENU = 'TOGGLE_SHOW_MENU'
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"


export type InitialStateType = {
    isShowMenu: boolean,
    initialized: boolean
}

let initialState: InitialStateType = {
    isShowMenu: false,
    initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case TOGGLE_SHOW_MENU: {
            return {
                ...state,
                isShowMenu: action.isShow,
            }
        }
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state
    }
}

type toggleShowMenuType = {
    type: typeof TOGGLE_SHOW_MENU,
    isShow: boolean
}

export const toggleShowMenu = (isShow: boolean): toggleShowMenuType => {
    return ({
        type: TOGGLE_SHOW_MENU,
        isShow
    })
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const setInitializedSuccess = (): InitializedSuccessActionType => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise]).then(() => {
        dispatch(setInitializedSuccess())
    })

}

export default appReducer