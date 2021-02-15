import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Murcia", country: "España"},
    {city: "Valencia", country: "España"},
    {city: "Barcelona", country: "España"}
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />