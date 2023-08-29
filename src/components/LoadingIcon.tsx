import { ThreeDots } from "react-loading-icons"

import classes from "./LoadingIcon.module.css"

function LoadingIcon () {

    return (
        <div className={classes.icon}>
            <ThreeDots speed={.75} />
        </div>
    )
}

export default LoadingIcon