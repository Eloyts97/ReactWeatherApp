import React from 'react'
import { BrowserRouter as Router,
    Switch,
    Route } from 'react-router-dom'
import CityPage from './Pages/CityPage'
import MainPage from './Pages/MainPage'
import NotFoundPage from './Pages/NotFoundPage'
import WelcomePage from './Pages/WelcomePage'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route path="/main">
                    <MainPage />
                </Route>
                <Route path="/city">
                    <CityPage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
