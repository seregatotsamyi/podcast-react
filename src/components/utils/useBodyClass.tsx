import {useEffect} from "react";

const addBodyClass = (className: any) => document.body.classList.add(className)
const removeBodyClass = (className: any) => document.body.classList.remove(className)

export default function useBodyClass(className:  Array<string>) {
    useEffect(
        () => {
            className instanceof Array ? className.map(addBodyClass) : addBodyClass(className)

            return () => {
                className instanceof Array ? className.map(removeBodyClass) : removeBodyClass(className)
            }
        },
        [className]
    );
}
