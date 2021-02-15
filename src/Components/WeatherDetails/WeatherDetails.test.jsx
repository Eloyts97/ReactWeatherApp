import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

// findByText: Permite encontrar un componente por el texto que muestre
test("WeatherDetails render", async () => {
    const { findByText } = render(<WeatherDetails wind={10} humidity={45} />)

    const wind = await findByText(/10/)
    const humidity = await findByText(/45/)

    expect(wind).toHaveTextContent("Viento: 10 km/h")
    expect(humidity).toHaveTextContent("Humedad: 45%")
})