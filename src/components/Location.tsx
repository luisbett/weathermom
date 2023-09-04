import { KeyboardEvent, useState } from "react"

import { LocationProps } from "../types/location"

import { ImSearch } from "react-icons/im"

import classes from "./Location.module.css"

function Location({ loadLocation }: LocationProps) {

    //States
    const [location, setLocation] = useState("")

    //Enter key function
    const handleKeyDown = (e: KeyboardEvent) => {

        if(e.key === "Enter") {
            loadLocation(location)
        }
    }

    return (
        <div className={classes.location}>
            <input
                type="text"
                placeholder="Type the city..." 
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => loadLocation(location)}>
                <ImSearch />
            </button>
        </div>
    )
}

export default Location