import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1542365887-1149961dccc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#E5BF56",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));



function App() {
  const classes = useStyles();

  return (
    <div className="App">
     <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Chef's Corner Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>Steak & Wine</Box>
      </Box>
   <Container maxWidth="lg" className={classes.blogsContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        Articles
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/1105325/bbq-meet-eating-diner-1105325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              title="Fresh Off the Grill"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                The Grillmaster
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Is there really anything more delicious than a perfectly-cooked steak? ... perfectly-cooked steak in your mouth is nearly impossible to describe.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
              <Avatar
                src="https://images.pexels.com/photos/3031391/pexels-photo-3031391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                 <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Chef Stephon Miller
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    September 12, 2020
                  </Typography>
                 </Box>
            </Box>
            <Box>
              <BookmarkBorderIcon />
            </Box>
          </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              title="Perfect Seasoning"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                The Perfect Seasoning
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              This steak seasoning is perfect for taking your simple grilled steak to the next level! We all know salt and pepper is all a good steak really needs ...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
              <Avatar
                src="https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                 <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Chef Ray Douglas
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    August 31, 2020
                  </Typography>
                 </Box>
            </Box>
            <Box>
              <BookmarkBorderIcon />
            </Box>
          </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/4946455/pexels-photo-4946455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              title="Fresh Off the Grill"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                A Perfect Match
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Learn how to pair steak and wine together properly to elevate flavors and textures with this helpful guide.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
              <Avatar
                src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                 <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Chef Linda Byers
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    August 15, 2020
                  </Typography>
                 </Box>
            </Box>
            <Box>
              <BookmarkBorderIcon />
            </Box>
          </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/4015400/pexels-photo-4015400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              title="Rookie's Guide"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                A Rookie's Guide
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              In this steak-grilling guide, we'll cover the following: How to pick the best steaks to grill for intimate dinners, the family, or large gatherings. How best to prepare ...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
              <Avatar
                src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                 <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Chef Kirk Wilson
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    July 29, 2020
                  </Typography>
                 </Box>
            </Box>
            <Box>
              <BookmarkBorderIcon />
            </Box>
          </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box my={4} className={classes.paginationContainer}>
        <Pagination count={10} />
      </Box>
   </Container>
    </div>
  );
        }
        export default App;
