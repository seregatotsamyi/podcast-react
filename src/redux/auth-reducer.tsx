import {authAPI} from "../api/api"

const SET_USER_DATA = "SET_USER_DATA"

export type InitialStateType = {
    isAuth: boolean,
    id: number | null,
    email: string | null,
    username: string | null
}

let initialState: InitialStateType = {
    isAuth: false,
    id: null,
    email: null,
    username: null
}

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

type SetAuthUserDataACType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataACPayloadType
}

type SetAuthUserDataACPayloadType = {
    userId: number | null,
    email: string | null,
    username: string | null,
    isAuth: boolean
}

export const setAuthUserDataAC = (userId: number | null, email: string | null, username: string | null, isAuth: boolean): SetAuthUserDataACType => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            username,
            isAuth
        }
    }
}


export const getAuthUserData = () => async (dispatch: any) => {
    try {
        let response = await authAPI.me()
        console.log("getAuthUserData", response)
        let {id, email, username} = response.data
        dispatch(setAuthUserDataAC(id, email, username, true))


    } catch (err: any) {
        if (err.status === 401) {
            console.log("error 401")
        }

    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    try {
        let response = await authAPI.login(email, password, rememberMe)
        dispatch(getAuthUserData())
        console.log("login", response)

    } catch (err: any) {
        if (err.response.status === 422) {
            console.log("error 422 validation")
        }
        console.log(err)
    }
}

export const register = (email: string, password: string, username: string) => async (dispatch: any) => {
    try {
        let response = await authAPI.register(email, password, username)
        dispatch(getAuthUserData())
        console.log("register", response)

    } catch (err: any) {
        if (err.response.status === 422) {
            console.log("error 422 validation")
        }
        console.log(err)
    }
}

export const logout = () => async (dispatch: any) => {
    try {
        let response = await authAPI.logout()
        console.log("logout", response)
        dispatch(setAuthUserDataAC(null, null, null, false))

    } catch (err: any) {
        if (err.status === 401) {
            console.log("error 401 Missing token or inactive user.")
        }

    }
}


export default authReducer