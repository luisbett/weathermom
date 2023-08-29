import { useState } from "react"

import Button from "./components/Button"
import Message from "./components/Message"
import Location from "./components/Location"
import LoadingIcon from "./components/LoadingIcon"

import classes from "./App.module.css"

function App() {

	//States used to define the messages sequence
	const [location, setLocation] = useState("")
	const [message1, setMessage1] = useState(false)
	const [message2, setMessage2] = useState(false)
	const [message3, setMessage3] = useState(false)
	const [message4, setMessage4] = useState(false)
	const [message5, setMessage5] = useState(false)

	//States used to control the loading icon
	const [loading1, setLoading1] = useState(false)
	const [loading2, setLoading2] = useState(false)

	//Function to init the messages presentation
	const activateMessages = () => { 
		setMessage1(true)
	}

	//Function to return the weather status
	const loadLocation = async (location: string) => {

		const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`)

		const data = await res.json()

		console.log(data)

		setLocation(location)
		setMessage4(true)
		setMessage3(false)
	}

	return (
		<div className={classes.app}>
			<h1>👵🏻 Weathermom 🌦️</h1>
			{ !message1
			? <Button handleClick={activateMessages}/>
			: <div className={classes.son}>
				<Message message="I am leaving, mom!" delay={5000} velocity={30} nextMessage={setMessage2} setLoading={setLoading1}/>
			</div> }
			{ message2 ? ( 
			<div className={classes.mom}>
				<Message message="Where are you going to, honey?" delay={1000} velocity={10} nextMessage={setMessage3} setLoading={() => {}}/>
			</div> ) : ( loading1 && !message2 && (
				<LoadingIcon />
			) ) }
			{ message3 && (
			<div className={classes.son}>
				<Location loadLocation={loadLocation}/>
			</div>
			) }
			{ message4 && (
			<div className={classes.son}>
				<Message message={"I am going to " + location} delay={5000} velocity={30} nextMessage={setMessage5} setLoading={setLoading2}/>
			</div> ) }
			{ message5 ? (
			<div className={classes.mom}>
				<Message message="Ok, so this is what you need to take:" delay={1000} velocity={30} nextMessage={setMessage4} setLoading={() => {}}/>
			</div>
			) : ( loading2 && !message5 && (
				<LoadingIcon />
			) ) }
		</div>
	)
}

export default App
