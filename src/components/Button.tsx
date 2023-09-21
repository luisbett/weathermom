import React from "react"

import { ButtonProps } from "../types/button"

import classes from "./Button.module.css"

function Button({buttonTitle, buttonIcon, buttonClick}: ButtonProps) {

    const handleClick = () => {
        buttonClick('')
    }

    return(
        <button className={classes.buttonStyle} onClick={handleClick}>
            {buttonTitle}
            { buttonIcon && <span>{React.createElement(buttonIcon)}</span> }
        </button>
    )
}

export default Button