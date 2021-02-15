import React from 'react'
import WelcomeScreen from './../Components/WelcomeScreen'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'


export const NotFoundPage = () => {
    return (
        <WelcomeScreen>
            <Grid container
                direction="column"
                justify="center"
                className="full">
                <div className="highlight">
                    <Grid item
                        container
                        xs={12}
                        justify="center"
                        alignItems="center">
                        <Grid item>
                            <IconContext.Provider value={{size: "6em"}}>
                                <WiDaySunny />
                            </IconContext.Provider>
                        </Grid>
                        <Grid item
                            container
                            direction="column"
                            justify="center"
                            alignItems="center">
                            <Typography variant="h4" color="inherit">
                                Error 404
                            </Typography>
                            <Link color="inherit"
                                aria-label="menu"
                                component={RouterLink}
                                to="/main">
                                    Volver a main
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </WelcomeScreen>
    )
}

export default NotFoundPage