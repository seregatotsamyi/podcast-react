import axios from "axios";

export const authAPI = {
    me() {
        return instance.get(`users/me`);
    },
    login(username: string, password: string, rememberMe = false) {
        return instance.post(`auth/jwt/login`, {
            username,
            password
        });
    },
    register(email: string, password: string, username: string) {
        return instance.post('auth/register', {
            email,
            password,
            username
        })
    },
    logout() {
        return instance.post(`auth/jwt/logout`);
    }
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/',
});