import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'

test("CityInfo render", async () => {
    // AAA
    // Arrange
    // Act
    const city = "Murcia"
    const country = "España"

    // Render: renderiza el componente y retorna una serie de funciones de utilidad
    // En este caso utilizamos "findAllByRole" para "consultar" a nuestro componente
    // Vamos a analizar su estado en el "Assert"
    const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo>)

    // Assert
    // findAllByRole nos va a buscar (en este caso) todos los componentes que sean
    // "heading" => h1, h2, h3...
    // El resultado es un array de componentes (cityAndCountryComponent)
    const cityAndCountryComponenet = await findAllByRole("heading")

    // ¿Cuándo se pasa el test?
    // Cuando en el primer elemento (heading) se encuentre la ciudad Murcia
    // y cuando en el segundo elemento se encuentre el país España

    expect(cityAndCountryComponenet[0]).toHaveTextContent(city)
    expect(cityAndCountryComponenet[1]).toHaveTextContent(country)
})