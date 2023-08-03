export const emailField = {
    required: "Поле обязательно для заполнение",
    pattern: {
        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        message: "Недопустимый формат"
    }
}

export const requiredField = {
    required: "Поле обязательно для заполнение"
}

export const passwordField = {
    required: "Поле обязательно для заполнение",
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/,
        message: "Пароль должен содержать заглавные и строчные латинские буквы, цифры, спец. символы. Длина от 8 символов"
    }
}

export const nameField = {
    required: "Поле обязательно для заполнение",
    pattern: {
        value: /^[a-zA-Zа-яА-ЯёЁ ]+$/g,
        message: "Только буквы"
    },
    minLength: {
        value: 6,
        message: "Минимальная длина 6 символов"
    }
}