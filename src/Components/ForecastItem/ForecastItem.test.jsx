import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'

test("ForescastItem render", async () => {
    const { findByText } = render(
        <ForecastItem 
            state="clear" 
            hour={10} 
            temperature={26}
            weekDay="Lunes"
        />
    )

    // const state = await findByText(/sunny/)
    const hour = await findByText(/10/)
    const temperature = await findByText(/26/)
    const weekDay = await findByText(/Lunes/)

    // expect(state).toHaveTextContent("sunny")
    expect(hour).toHaveTextContent("10")
    expect(temperature).toHaveTextContent("26 º")
    expect(weekDay).toHaveTextContent("Lunes")
})