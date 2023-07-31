
export type InitialStateType = {
    isAuth: boolean,
}

let initialState: InitialStateType = {
    isAuth: true,
}

const authReducer = (state = initialState, action:any): InitialStateType => {
    switch (action.type) {

        default:
            return state;
    }
}




export default authReducer;