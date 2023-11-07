import { useState } from "react"

import { useTranslation } from "react-i18next"

import useFetch from "./hooks/useFetch.ts"
import useProcessData from "./hooks/useProcessData.ts"
import useWeatherDesc from "./hooks/useWeatherDesc.ts"

import LanguageSwitcher from './components/LanguageSwitcher.tsx'
import Button from "./components/Button"
import Message from "./components/Message"
import Location from "./components/Location"
import LoadingIcon from "./components/LoadingIcon"

import classes from "./App.module.css"

import { RiSendPlaneFill } from "react-icons/ri"
import { VscDebugRestart } from "react-icons/vsc"

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
	const [message7, setMessage7] = useState(false)
	const [message8, setMessage8] = useState(false)

	//States used to control the loading icon
	const [loading1, setLoading1] = useState(false)
	const [loading2, setLoading2] = useState(false)
	const [loading3, setLoading3] = useState(false)
	const [loading4, setLoading4] = useState(false)

	//States to save the weather data
	const [itemsMom, setItemsMom] = useState("")

	//Function to receive and manipulate weather data
	const loadLocation = async (name: string, lat: number, lng: number) => {

		//Variable used to hold the mom message
		let momMessage = ""

		//Hook used to fetch the weather API
		const data = await useFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=${import.meta.env.VITE_WEATHERAPI_KEY}`)

		//Consts used to save the temperatures
		const temp = Math.round(Number(data.main.temp))
		const feelsLike = Math.round(Number(data.main.feels_like))

		//Hooked used to return the weather description
		const weatherDsc = useWeatherDesc(data.weather[0].id)

		//Hook used to process data
		const itemsToTake = useProcessData(data)

		//Add the descriptions to the variable
		momMessage += t('weatherDesc') + t(weatherDsc) + "\n"

		//Add the temperature to the variable
		momMessage += t('weatherTemp1') + temp.toString() + t("weatherTemp2") + t("weatherTemp3") + feelsLike.toString() + t("weatherTemp2") + "\n"
		
		for(let i = 0; i < itemsToTake.length; i++) {
			momMessage += t(itemsToTake[i]) + "\n"
		}

		setLocation(name)
		setItemsMom(momMessage)
		setMessage3(false)
		setMessage4(true)
	}

	return (
		<div>
			<div className={classes.langButton}>
				{ !message1 && <LanguageSwitcher /> }
			</div>
			<div className={classes.container}>
				<h1>👵🏻 Weathermom 🌦️</h1>
				{ !message1
				? <Button buttonTitle={t('sendMessageBtn')} buttonIcon={RiSendPlaneFill} buttonClick={() => {setMessage1(true)}} />
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
				? <Message customClass='mom' message={itemsMom} delay={4000} velocity={10} nextMessage={setMessage7} setLoading={setLoading4}/>
				: ( loading3 && !message6 && <LoadingIcon /> ) }
				{ message7
				? <Message customClass='mom' message={t('enjoy1') + location + t('enjoy2')} delay={1000} velocity={10} nextMessage={setMessage8} setLoading={() => {}}/>
				: ( loading4 && !message7 && <LoadingIcon /> ) }
				{ message8 && <Button buttonTitle={t('restartBtn')} buttonIcon={VscDebugRestart} buttonClick={() => {window.location.reload()}} /> }
			</div>
		</div>
	)
}

export default App
