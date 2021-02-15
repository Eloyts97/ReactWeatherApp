import React from 'react'
import { render } from '@testing-library/react'
import Forecast from './Forecast'

const forecastItemList = [
    {hour: 20, state: "rain", temperature: 2, weekDay: "Lunes"},
    {hour: 8, state: "clear", temperature: 4, weekDay: "Martes"},
    {hour: 12, state: "clouds", temperature: 18, weekDay: "Martes"},
    {hour: 10, state: "sunny", temperature: 18, weekDay: "Miércoles"},
    {hour: 19, state: "clouds", temperature: 11, weekDay: "Miércoles"},
    {hour: 21, state: "clear", temperature: 34, weekDay: "Jueves"}
]

test("Test de forecast", async () => {
    // ¿Cómo encontrar los items?
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList} />)

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(6)
})