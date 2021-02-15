import React from 'react'
import Forecast from './Forecast'

export default {
    title: "ForecastComponent",
    component: Forecast
}

const forecastItemList = [
    {hour: 20, state: "rain", temperature: 2, weekDay: "Lunes"},
    {hour: 8, state: "clouds", temperature: 4, weekDay: "Martes"},
    {hour: 12, state: "clouds", temperature: 18, weekDay: "Martes"},
    {hour: 10, state: "clear", temperature: 18, weekDay: "Miércoles"},
    {hour: 19, state: "clouds", temperature: 11, weekDay: "Miércoles"},
    {hour: 17, state: "clear", temperature: 34, weekDay: "Jueves"}
]
export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)