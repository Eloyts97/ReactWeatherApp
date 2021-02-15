import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from './../ForecastItem'
import { validValues } from './../IconState'

const renderForecastItem = forecast => {
    const {weekday, hour, state, temperature} = forecast
    // hay que poner un identificador único
    return (
        <Grid item
            data-testid="forecast-item-container" 
            key={`${weekday}${hour}`}
            >
            <ForecastItem 
                hour={hour} 
                weekDay={weekday} 
                state={state} 
                temperature={temperature}>
            </ForecastItem>
        </Grid>
    )
}

const Forecast = ({forecastItemList}) => {
    return (
        <Grid container
            justify="space-around"
            alignItems="center">
            {
                forecastItemList.map(forecast => renderForecastItem(forecast))
            }
        </Grid>
    )
}

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired
    })).isRequired,
}

export default Forecast
