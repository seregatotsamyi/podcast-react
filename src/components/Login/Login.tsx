import {Link, Navigate, redirect} from "react-router-dom";
import {useForm, SubmitHandler} from "react-hook-form"
import {emailField, passwordField} from "../../utils/validators/validators";
import React, {useState} from "react";
import PasswordBtnShow from "../Inputs/PasswordBtnShow";
import Navbar from "../Navbar/Navbar";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {isAuth} from "../../redux/auth-selectors";


interface IFormInput {
    email: string,
    password: string,
    rememberMe: boolean
}


const Login: any = ({isAuth, login}: any) => {


    const windowWidth = window.innerWidth;

    const {register, handleSubmit, formState: {errors}} = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        login(data.email, data.password, data.rememberMe)
    }

    let [showPass, setShowPass] = useState(false)

    const toggleShowPass = () => {
        if (showPass) {
            setShowPass(false)
        } else {
            setShowPass(true)
        }
    }

    const isShowPass = showPass ? "_show" : ""
    const classShowPass = `input__icon ${isShowPass}`

    if (isAuth) {
        return <Navigate to="/"/>
    }
    return (
        <section className="login">
            {windowWidth < 1025 ? <Navbar/> : ""}
            <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="login__title title">
                    Вход
                </div>
                <div className="login__text">
                    Введите данные для входа
                </div>
                <div className="login__grid">
                    <div className="input">
                        <label className="input__label" htmlFor="name">
                            Почта
                        </label>
                        <div className="input__input-wrap">
                            <input className="input__input" type="text" id="name" {...register("email", emailField)} />
                            {errors.email && (
                                <div className="input__error">
                                    {errors.email.message}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="input">
                        <label className="input__label" htmlFor="pass">
                            Пароль
                        </label>
                        <div className="input__input-wrap">
                            <input className="input__input _pass" type={showPass ? "text" : "password"}
                                   id="pass" {...register("password", passwordField)}/>

                            <PasswordBtnShow class={classShowPass} toggleShowPass={toggleShowPass}/>
                            {errors.password && (
                                <div className="input__error">
                                    {errors.password.message}
                                </div>
                            )}

                        </div>

                    </div>
                    <div className="input">
                        <input className="input__input _check" type="checkbox"
                               id="checkbox" {...register("rememberMe")}/>
                        <label className="input__label _check" htmlFor="checkbox">
                            Запомнить меня
                        </label>

                    </div>
                    <button className="login__btn btn" type="submit">
                        Войти
                    </button>
                    <div className="login__bottom">
                        <Link className="login__link-pass" to="/forgot-password">
                            Забыли пароль?
                        </Link>
                        <div className="login__bottom-right">
                            <span>Нет аккаунта? </span><Link to="/register">Зарегистрироваться!</Link>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

const mapStateToProps = (state: any) => {
    return {
        isAuth: isAuth(state)
    }
}

export default connect(mapStateToProps, {login})(Login)

