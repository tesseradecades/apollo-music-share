import React from 'react';
import Header from './components/Header';
import AddSong from './components/AddSong';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import {Grid, Hidden, useMediaQuery} from '@material-ui/core';

function App() {
  const greaterThanMd =useMediaQuery(theme=>theme.breakpoints.up('md'));
  const greaterThanSm =useMediaQuery(theme=>theme.breakpoints.up('sm'));
  return (
    <>

      <Hidden only="xs">
        <Header/>
      </Hidden>
      <Grid 
        container 
        spacing={3}
        style={{
          paddingTop: greaterThanSm ? 80 : 10
        }}
      >
        <Grid item xs={12} md={7}>
          <AddSong/>
          <SongList/>
        </Grid>
        <Grid item xs={12} md={5} style={
          greaterThanMd ? {
            position:'fixed',
            right: 0,
            top:70,
            width:'100%',
          } : {
            bottom:0,
            left:0,
            position:'fixed',
            width:'100%',
          }
        }>
          <SongPlayer/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
