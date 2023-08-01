import IconStore from "../media/iconStore";

type PasswordBtnShowType = {
    class: string,
    toggleShowPass: any
}

const PasswordBtnShow =(props:PasswordBtnShowType) => {

    return(
        <button className={props.class} type="button" onClick={props.toggleShowPass}>
            <img className="input__btn-show-off input__icon-img"
                 src={IconStore.EyeOffImg} width="24" height="24" alt="pass-off"/>
            <img className="input__btn-show-on input__icon-img"
                 src={IconStore.EyeImg} width="24" height="24" alt="pass-on"/>
        </button>
    )
}
export default PasswordBtnShow