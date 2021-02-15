import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, labore laborum aliquid accusamus eos omnis quidem, sed exercitationem magnam commodi, a quis alias veniam odio harum distinctio necessitatibus architecto odit?
        </AppFrame>
    </Router>
)