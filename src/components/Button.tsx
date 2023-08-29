import { ButtonProps } from "../types/button"

import { RiSendPlaneFill } from "react-icons/ri"

import classes from "./Button.module.css"

function Button({handleClick}: ButtonProps) {

    return(
        <button className={classes.sendButton} onClick={() => handleClick()}>
            Send message
            <RiSendPlaneFill />
        </button>
    )
}

export default Button