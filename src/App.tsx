import React from 'react';
import Header from './components/Header';
import AddSong from './components/AddSong';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import {Grid, Hidden, useMediaQuery, Theme} from '@material-ui/core';
import songReducer, {SongContext, SongContextProps} from './reducer';

function App() {
  // reactive ui
  const greaterThanMd =useMediaQuery((theme: Theme)=>theme.breakpoints.up('md'));
  const greaterThanSm =useMediaQuery((theme: Theme)=>theme.breakpoints.up('sm'));

  // manage song state
  /*
  const initialSongState = React.useContext(SongContext);
  const [state, dispatch] = React.useReducer(SongReducer,initialSongState);
  */
  const initialContext: SongContextProps = React.useContext(SongContext);
  const [state,dispatch] = React.useReducer(songReducer,initialContext.state);
  const songProviderContext = {state,dispatch};

  return (
    <SongContext.Provider value={songProviderContext}>
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
    </SongContext.Provider>
  );
}

export default App;