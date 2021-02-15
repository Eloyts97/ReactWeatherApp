import React from 'react'
import CityList from './CityList'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const cities = [
    {city: "Murcia", country: "España"},
    {city: "Valencia", country: "España"},
    {city: "Barcelona", country: "España"},
]
test("CityList renders", async () => {

    const { findAllByRole } = render(<CityList cities={cities}/>)

    const items = await findAllByRole("button")

    expect(items).toHaveLength(3)
})

test("City List click on item", async () => {
    // Debemos simular una acción del usuario: click sobre un item
    // Para eso vamos a utilizar una función "mock"
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    // Ahora, para simular la acción, vamos a utilizar fireEvent
    // fireEvent es parte de la librería testing-library
    fireEvent.click(items[0])

    // ¿Ahora que tuvo que suceder?
    // Se debió llamar a la función fnClickOnItem una única vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})