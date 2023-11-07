import { useTranslation } from "react-i18next"

import { LocationProps } from "../types/location"
import { PlaceProps } from "../types/place"

import classes from "./Location.module.css"

import AutoComplete from "react-google-autocomplete"

function Location({ loadLocation }: LocationProps) {

    //Const used to get the language choosed
    const { i18n } = useTranslation()

    //Function to get the name and lat/lng of the place selected
    const handleSelection = (place: PlaceProps) => {

        const name = place.address_components[0].long_name
        const lat = place.geometry.location.lat()
        const lng = place.geometry.location.lng()

        loadLocation(name, lat, lng)
    }

    return (
        <div className={classes.location}>
            <AutoComplete 
                apiKey={import.meta.env.VITE_PLACESAPI_KEY} 
                onPlaceSelected={(place) => handleSelection(place)}
                language={i18n.language}/>
        </div>
    )
}

export default Location