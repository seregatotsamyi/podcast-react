import IconStore from "../media/iconStore";

const Preloader = () => {
    return (
        <div className="preloader">
            <img className="preloader__img" src={IconStore.PreloadImg} alt="preloader" width="200" height="200"/>
        </div>
    )
}
export default Preloader