import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: "ForecastIem",
    component: ForecastItem
}

export const SunnyMondayExample = () => (
<ForecastItem 
    state="clear" hour={10} weekDay="Lunes" temperature={26} />
)