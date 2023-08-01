import IconStore from "../media/iconStore";
import {Link} from "react-router-dom";
import {useForm, SubmitHandler} from "react-hook-form"
import {emailField, nameField, passwordField} from "../../utils/validators/validators";
import React, {useState} from "react";
import PasswordBtnShow from "../Inputs/PasswordBtnShow";
import Navbar from "../Navbar/Navbar";

interface ICreateFormInput {
    email: string,
    name: string,
    password: string,
    passwordSecond: string,
    accept: boolean
}

const Create = () => {

    const windowWidth = window.innerWidth;

    const {register, handleSubmit, formState: {errors}} = useForm<ICreateFormInput>()

    const onSubmit: SubmitHandler<ICreateFormInput> = (data) => {
        console.log(data)
    }

    let [showPass, setShowPass] = useState(false)
    let [showPassSecond, setShowPassSecond] = useState(false)

    const toggleShowPass = () => {
        if (showPass) {
            setShowPass(false)
        } else {
            setShowPass(true)
        }
    }
    const toggleShowPassSecond = () => {
        if (showPassSecond) {
            setShowPassSecond(false)
        } else {
            setShowPassSecond(true)
        }
    }

    const isShowPass = showPass ? "_show" : ""
    const classShowPass = `input__icon ${isShowPass}`

    const isShowPassSecond = showPassSecond ? "_show" : ""
    const classShowPassSecond = `input__icon ${isShowPassSecond}`

    return (
        <section className="login">
            {windowWidth < 1025 ? <Navbar/> : ""}
            <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="login__title title">
                    Регистрация
                </div>
                <div className="login__text">
                    Заполните все поля
                </div>
                <div className="login__grid">
                    <div className="input">
                        <label className="input__label" htmlFor="name">
                            Почта
                        </label>
                        <div className="input__input-wrap">
                            <input className="input__input" type="text" id="name" {...register("email", emailField)}/>
                            {errors.email && (
                                <div className="input__error">
                                    {errors.email.message}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="input">
                        <label className="input__label" htmlFor="name2">
                            Имя и фамилия
                        </label>
                        <div className="input__input-wrap">
                            <input className="input__input" type="text" id="name2" {...register("name", nameField)}/>
                            {errors.name && (
                                <div className="input__error">
                                    {errors.name.message}
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
                        <label className="input__label" htmlFor="pass2">
                            Повторите пароль
                        </label>
                        <div className="input__input-wrap">
                            <input className="input__input _pass" type={showPassSecond ? "text" : "password"}
                                   id="pass2" {...register("passwordSecond", passwordField)}/>
                            <PasswordBtnShow class={classShowPassSecond} toggleShowPass={toggleShowPassSecond}/>
                            {errors.passwordSecond && (
                                <div className="input__error">
                                    {errors.passwordSecond.message}
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="input">
                        <input className="input__input _check" type="checkbox"
                               id="checkbox" {...register("accept", {required: true})}/>
                        <label className="input__label _check" htmlFor="checkbox">
                            <span>Я ознакомился(-ась) с </span> <Link to="/">соглашением на обработку персональных
                            данных</Link> и принимаю его условия
                        </label>
                        {errors.accept && (
                            <div className="input__error">
                                Необходимо принять соглашения, чтобы продолжить
                            </div>
                        )}


                    </div>
                    <button className="login__btn btn" type="submit">
                        Отправить
                    </button>
                    <div className="login__bottom">
                        <div className="login__bottom-right">
                            <span>Уже зарегистрированы? </span><Link to="/login">Войти!</Link>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Create