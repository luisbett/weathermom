import { KeyboardEvent, useState } from "react"

import { useTranslation } from "react-i18next"

import { LocationProps } from "../types/location"

import { ImSearch } from "react-icons/im"

import classes from "./Location.module.css"

import Button from "./Button"

function Location({ loadLocation }: LocationProps) {

    //State from i18next
    const { t } = useTranslation()

    //States
    const [location, setLocation] = useState("")

    //Enter key function
    const handleKeyDown = (e: KeyboardEvent) => {

        if(e.key === "Enter") {
            loadLocation(location)
        }
    }

    //Click function
    const handleClick = () => {
        loadLocation(location)
    }

    return (
        <div className={classes.location}>
            <input
                type="text"
                placeholder={t('typeCityBtn')}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button buttonTitle="" buttonIcon={ImSearch} buttonClick={handleClick} />
        </div>
    )
}

export default Location