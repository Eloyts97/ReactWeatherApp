import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy, 
        WiDaySunny, 
        WiRain, 
        WiSnow,
        WiRaindrop,
        WiThunderstorm } from 'react-icons/wi'
import { IconContext } from 'react-icons'

export const validValues = [
    "clouds",
    "clear",
    "rain",
    "snow",
    "drizzle",
    "thunderstorm"
]

const stateByName = {
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzel: WiRaindrop,
    thunderstorm: WiThunderstorm
}

const renderState = state => {
    let IconState = stateByName[state]
    return <IconState />
}

const IconState = ({state}) => {
    return (
        <IconContext.Provider value={{ size: '5em'}}>
            {renderState(state)}
        </IconContext.Provider>
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired
}

export default IconState
