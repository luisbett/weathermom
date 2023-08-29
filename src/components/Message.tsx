import { TypeAnimation } from "react-type-animation"

import { MessageProps } from "../types/message"

import classes from "./Message.module.css"

function Message({message, velocity, delay, nextMessage, setLoading}: MessageProps) {

    return (
        <div className={classes.message}>
            <TypeAnimation
				sequence={[
					message, //Message
					() => { setLoading(true) }, //Loading icon activate
					delay, //Delay time
					() => { nextMessage(true) }, //Next message activate
				]}
				wrapper="span"
				cursor={false}
				repeat={1}
				speed={velocity}
			/>
        </div>
    )
}

export default Message