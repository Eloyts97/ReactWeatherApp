import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../Components/AppFrame'
import CityList from './../Components/CityList'

const cities = [
    {city: "Murcia", country: "España"},
    {city: "Valencia", country: "España"},
    {city: "Barcelona", country: "España"}
]

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = () => {
        // history,push() nos permite trabajar con la url por programación
        history.push("/city")
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList 
                    cities={cities}
                    onClickCity={onClickHandler}
                    />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
