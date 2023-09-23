import { useState } from "react"

import { useTranslation } from "react-i18next"

import Button from "./components/Button"
import Message from "./components/Message"
import Location from "./components/Location"
import LoadingIcon from "./components/LoadingIcon"

import classes from "./App.module.css"

import { RiSendPlaneFill } from "react-icons/ri"

function App() {

	//State from i18next
	const { t } = useTranslation()

	//States used to define the messages sequence
	const [location, setLocation] = useState("")
	const [message1, setMessage1] = useState(false)
	const [message2, setMessage2] = useState(false)
	const [message3, setMessage3] = useState(false)
	const [message4, setMessage4] = useState(false)
	const [message5, setMessage5] = useState(false)
	const [message6, setMessage6] = useState(false)

	//States used to control the loading icon
	const [loading1, setLoading1] = useState(false)
	const [loading2, setLoading2] = useState(false)
	const [loading3, setLoading3] = useState(false)

	//States to save the weather data
	const [name, setName] = useState("")
	const [temp, setTemp] = useState("")
	const [desc, setDesc] = useState("")
	const [country, setCountry] = useState("")
	const [humidity, setHumidity] = useState("")
	const [wind, setWind] = useState("")

	//Function to init the messages presentation
	const activateMessages = () => { 
		setMessage1(true)
	}

	//Function to receive and manipulate weather data
	const loadLocation = async (location: string) => {

		const data = await callApi(location)

		data.main.temp = Math.round(Number(data.main.temp))

		setName(data.name)
		setTemp(data.main.temp.toString())
		setDesc(data.weather[0].description)
		setCountry(data.sys.country)
		setHumidity(data.main.humidity)
		setWind(data.wind.speed)

		setLocation(location)
		setMessage3(false)
		setMessage4(true)
	}

	//Function to call api and return weather data
	const callApi = async (location: string) => {

		const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`)

		const data = await res.json()

		return data
	}

	return (
		<div className={classes.app}>
			<h1>👵🏻 Weathermom 🌦️</h1>
			{ !message1
			? <Button buttonTitle={t('sendMessageBtn')} buttonIcon={RiSendPlaneFill} buttonClick={activateMessages} />
			: <Message customClass='son' message={t('sentence1')} delay={5000} velocity={25} nextMessage={setMessage2} setLoading={setLoading1}/> }
			{ message2 
			? <Message customClass='mom' message={t('sentence2')} delay={1000} velocity={10} nextMessage={setMessage3} setLoading={() => {}}/>
			: ( loading1 && !message2 && ( <LoadingIcon /> ) ) }
			{ message3 && <Location loadLocation={loadLocation}/> }
			{ message4 
			&& <Message customClass='son' message={t('sentence3') + location} delay={5000} velocity={25} nextMessage={setMessage5} setLoading={setLoading2}/> }
			{ message5
			? <Message customClass='mom' message={t('sentence4')} delay={1000} velocity={10} nextMessage={setMessage6} setLoading={setLoading3}/>
			: ( loading2 && !message5 && <LoadingIcon /> ) }
			{ message6
			? <Message customClass='mom' message={`The name is ${name}\nThe temp is ${temp}\nThe desc is ${desc}\nThe country is ${country}\nThe humidity is ${humidity}\nThe wind is ${wind}`} delay={4000} velocity={10} nextMessage={setMessage4} setLoading={() => {}}/>
			: ( loading3 && !message6 && <LoadingIcon /> ) }
		</div>
	)
}

export default App
