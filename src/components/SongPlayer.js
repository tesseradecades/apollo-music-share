import React from 'react';
import QueuedSongList from './QueuedSongList';
import { Card, CardContent, Typography, IconButton, Slider, CardMedia, makeStyles } from '@material-ui/core';
import { SkipPrevious, SkipNext, PlayArrow, Pause } from '@material-ui/icons';
import { SongContext } from '../App';
import { PAUSE_SONG, PLAY_SONG} from '../reducer';

const useStyles = makeStyles(theme=>({
    container:{
        display:'flex',
        justifyContent:'space-between'
    },
    content:{
        flex:'1 0 auto'
    },
    controls:{
        alignItems:'center',
        display:'flex',
        paddingLeft:theme.spacing(1),
        paddingRight:theme.spacing(1),
    },
    details:{
        display:'flex',
        flexDirection:'column',
        padding:'0px 15px'
    },
    playIcon:{
        height:38,
        width:38
    },
    thumbnail:{
        width:150
    },
}));
function SongPlayer(){
    const {state, dispatch} = React.useContext(SongContext);
    const classes = useStyles();

    function handleTogglePlay(){
        dispatch({type: state.isPlaying ? PAUSE_SONG : PLAY_SONG});
    }

    return (
        <>
            <Card className={classes.container} variant="outlined">
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="h5" component="h3">
                            {state.song.title}
                        </Typography>
                        <Typography variant="subtitle1" component="p" color="textSecondary">
                            {state.song.artist}
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <IconButton>
                            <SkipPrevious/>
                        </IconButton>
                        <IconButton onClick={handleTogglePlay}>
                            {state.isPlaying ? <Pause className={classes.playIcon}/> : <PlayArrow className={classes.playIcon}/>}
                        </IconButton>
                        <IconButton>
                            <SkipNext/>
                        </IconButton>
                        <Typography variant="subtitle1" component="p" color="textSecondary">
                            00:00:00
                        </Typography>
                    </div>
                    <Slider
                        max={1}
                        min={0}
                        step={0.01}
                        type="range"
                    />
                </div>
                <CardMedia
                    className={classes.thumbnail}
                    image={state.song.thumbnail}
                />
            </Card>
            <QueuedSongList/>
        </>

    );
}

export default SongPlayer;