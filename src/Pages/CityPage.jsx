import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppFrame from './../Components/AppFrame'
import CityInfo from './../Components/CityInfo'
import Weather from './../Components/Weather'
import WeatherDetails from './../Components/WeatherDetails'
import ForecastChart from './../Components/ForecastChart'
import Forecast from './../Components/Forecast'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]

const forecastExample = [
    {hour: 20, state: "rain", temperature: 2, weekDay: "Lunes"},
    {hour: 8, state: "fog", temperature: 4, weekDay: "Martes"},
    {hour: 12, state: "cloud", temperature: 18, weekDay: "Martes"},
    {hour: 10, state: "sunny", temperature: 18, weekDay: "Miércoles"},
    {hour: 19, state: "cloudy", temperature: 11, weekDay: "Miércoles"},
    {hour: 17, state: "sunny", temperature: 34, weekDay: "Jueves"}
]

const CityPage = () => {
    const city = "Murcia"
    const country = "España"
    const state = "sunny"
    const temperature = 30
    const humidity = 10
    const wind = 10
    const data = dataExample
    const forecastItemList = forecastExample

    return (
        <AppFrame>
            <Grid
                container
                justify="space-around"
                direction="column"
                spacing={2}>
                <Grid
                    item
                    container
                    xs={12}
                    justify="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    justify="center">
                    <Weather 
                        state={state} 
                        temperature={temperature}
                    />
                    <WeatherDetails
                        humidity={humidity}
                        wind={wind}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}>
                    <ForecastChart data={data} />
                </Grid>
                <Grid
                    item
                    xs={12}>
                    <Forecast forecastItemList={forecastItemList} />
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage
