import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, IconButton, Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    mainCenter: {
        display: 'flex',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
        flexGrow: 1,
    },
    main: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
    },
    title: {
        textAlign: 'center',
        color: theme.palette.secondary.main,
        marginBottom: theme.spacing(3),
        textTransform: 'uppercase'
    }
}));

export default function Page(props) {
    const classes = useStyles()
    return (
        <Container className={props.center ? classes.mainCenter : classes.main}>
            {props.center ?
                <Box
                    display="flex"
                    flexDirection="column"
                    flex="1"
                >
                    {(props.back || props.title) && <Box
                        flex={1}
                        justifyContent="flex-start"
                    >
                        {props.back && <Box style={{ position: 'absolute' }}>
                            <IconButton color="secondary" component={Link} to={props.back}>
                                <ArrowBackIcon fontSize="large" />
                            </IconButton>
                        </Box>}
                        {props.title && <Box>
                            <h1 className={classes.title}>{props.title}
                            </h1>
                        </Box>}
                    </Box>}
                    <Box
                        display="flex"
                        flex={1}
                        alignItems="center"
                        alignSelf="center"
                    >
                        <Grid item >
                            {props.children}
                        </Grid>
                    </Box >
                    {(props.back || props.title) && <Box
                        display="flex"
                        flex={1}
                    />}
                </Box>
                :
                <div>
                    {(props.back || props.title) && <Box>
                        {props.back && <Box style={{ position: 'absolute' }}>
                            <IconButton color="secondary" component={Link} to={props.back}>
                                <ArrowBackIcon fontSize="large" />
                            </IconButton>
                        </Box>}
                        {props.title && <Grid container justify="center">
                            <h1 className={classes.title}>{props.title}
                            </h1>
                        </Grid>}
                    </Box>}
                    {props.children}
                </div>
            }
        </Container>


    );
}