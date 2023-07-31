const TOGGLE_SHOW_MENU = 'TOGGLE_SHOW_MENU';


export type InitialStateType = {
    isShowMenu: boolean,
}

let initialState: InitialStateType = {
    isShowMenu: false,
}

const appReducer = (state = initialState, action:any): InitialStateType => {
    switch (action.type) {
        case TOGGLE_SHOW_MENU: {
            return {
                ...state,
                isShowMenu: action.isShow
            }
        }
        default:
            return state;
    }
}

export const toggleShowMenu = (isShow:boolean) => {
    return ({
        type: TOGGLE_SHOW_MENU,
        isShow
    })
}


export default appReducer;