import React from 'react'
import IconState from './IconState'

export default {
    title: "IconState",
    component: IconState
}

export const CloudIconStateExample = () => (<IconState state="clouds" />)
export const CloudyIconStateExample = () => (<IconState state="clouds" />)
export const SunnyIconStateExample = () => (<IconState state="clear" />)
export const RainIconStateExample = () => (<IconState state="rain" />)
export const FogIconStateExample = () => (<IconState state="clear" />)