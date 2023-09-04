import { TypeAnimation } from "react-type-animation"

import { MessageProps } from "../types/message"

import classes from "./Message.module.css"

function Message({messageSon, message, velocity, delay, nextMessage, setLoading}: MessageProps) {

	//Const to define the style of the message
	const messageStyle = messageSon ? classes.son : classes.mom

	return (
		<div className={messageStyle}>
            <TypeAnimation
				style={{whiteSpace: 'pre-line'}}
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