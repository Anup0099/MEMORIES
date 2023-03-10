import React,{useEffect} from 'react'

import { AppBar, Typography, Grow, Grid, Container } from '@mui/material'
import memories from './images/memories.jpg'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import useStyles from './styles'
export const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }  , [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img src={memories} className={classes.image} alt="memories"  height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}
export default App
