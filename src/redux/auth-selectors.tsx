
export const isAuth = (state:any) => {
    return state.auth.isAuth
}

export const userMe = (state:any) => {
    return {
        username: state.auth.username ,
        id: state.auth.userId,
        email: state.auth.email
    }

}