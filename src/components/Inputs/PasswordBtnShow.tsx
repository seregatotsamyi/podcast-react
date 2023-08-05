import IconStore from "../media/iconStore";
import React from "react";

type PropsType = {
    classN: string,
    toggleShowPass: () => void
}

const PasswordBtnShow:React.FC<PropsType> =({classN, toggleShowPass}) => {

    return(
        <button className={classN} type="button" onClick={toggleShowPass}>
            <img className="input__btn-show-off input__icon-img"
                 src={IconStore.EyeOffImg} width="24" height="24" alt="pass-off"/>
            <img className="input__btn-show-on input__icon-img"
                 src={IconStore.EyeImg} width="24" height="24" alt="pass-on"/>
        </button>
    )
}
export default PasswordBtnShow