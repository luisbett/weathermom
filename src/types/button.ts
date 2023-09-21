import { IconType } from "react-icons"

export type ButtonProps = {
    buttonTitle: string,
    buttonIcon?: IconType,
    buttonClick: (location: string) => void
}