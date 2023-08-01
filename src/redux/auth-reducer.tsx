
export type InitialStateType = {
    isAuth: boolean,
}

let initialState: InitialStateType = {
    isAuth: false,
}

const authReducer = (state = initialState, action:any): InitialStateType => {
    switch (action.type) {

        default:
            return state;
    }
}




export default authReducer;