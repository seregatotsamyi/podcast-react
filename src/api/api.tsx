import axios from "axios";

export const authAPI = {
    me() {
        return instance.get(`users/me`);
    },
    login(username: string, password: string, rememberMe = false) {
        const params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        return instance.post('auth/jwt/login', params);
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