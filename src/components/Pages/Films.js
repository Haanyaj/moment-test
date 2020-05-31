import React, { Component } from 'react';
import { getMovies, getPages } from '../tools/ApiCalls';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import InfiniteScroll from "react-infinite-scroller";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


//Material ui styles
const useStyles = makeStyles((theme) => ({
    root: {

    },

}));

//styles
const styles = {
    movieColumn: {
        marginBottom: 40
    },

    cardMedia: {
        width: 300,
    },
    card: {
        height: '427px',
        width: '300px',
        position: 'relative'
    },
    bgImage: {
        width: '100%'
    },
    overlay: {
        position: 'absolute',
        width: '300px',
        color: 'white',
        fontSize: '22px',
        backgroundColor: 'rgba(0, 0, 0, 0.60)',
        textAlign: 'center',
    },
    load: {
        fontSize: '30px',
        textAlign: 'center',
    },
}

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            hasMore: true,
            totalPages: 0,
            pages: 1,
            language: "fr-FR",
        };

    }

    //display movies
    showItems() {
        return this.state.data.map(movie => (
            <Grid item xs={12} sm={4} md={4} lg={4} key={movie.id} spacing={3} style={styles.movieColumn}>
                <Card style={styles.card}>
                    <CardMedia style={styles.cardMedia}
                        alt={movie.title}
                        title={movie.title}
                    >
                        <Typography style={styles.overlay}>
                            {movie.title}
                        </Typography>
                        <img style={styles.bgImage} src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                    </CardMedia>
                </Card>
            </Grid>


        ))
    }


    async getTotalPages() {
        this.state.totalPages = await getPages();
    }

    // Load films by page continously
    async loadMore() {
        if (this.state.pages === 4 /*this.state.totalPages*/) {
            this.setState({ hasMore: false });
        } else {
            const response = await getMovies("fr-FR", this.state.pages);
            setTimeout(() => {
                const add = this.state.data;
                const to_add = add.concat(response);
                this.setState({ data: to_add })
            }, 3000);
        }
        this.state.pages += 1
    }

    render() {
        const { classes } = this.props;
        return (
            <div
                loader={this.getTotalPages()}
            >
                <Container className={classes.root}>

                    <InfiniteScroll
                        loadMore={this.loadMore.bind(this)}
                        hasMore={this.state.hasMore}
                        loader={<div className="loader" style={styles.load}> Loading... </div>}
                        useWindow={false}
                    >
                        <Grid container spacin={1} className={classes.bodyContent}>
                            {this.showItems()}{" "}
                        </Grid>
                    </InfiniteScroll>{" "}

                </Container>
            </div>
        );
    }
}

export default withStyles(useStyles)(Films);