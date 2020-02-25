import React from 'react';
import QueuedSongList from './QueuedSongList';
import { Card, CardContent, Typography, IconButton, Slider, CardMedia, makeStyles } from '@material-ui/core';
import { SkipPrevious, SkipNext, PlayArrow } from '@material-ui/icons';

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
    const classes = useStyles();
    return (
        <>
            <Card className={classes.container} variant="outlined">
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="h5" component="h3">
                            Title
                        </Typography>
                        <Typography variant="subtitle1" component="p" color="textSecondary">
                            Artist
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <IconButton>
                            <SkipPrevious/>
                        </IconButton>
                        <IconButton>
                            <PlayArrow className={classes.playIcon}/>
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
                    image="https://upload.wikimedia.org/wikipedia/en/7/7d/ISHEREAL.jpg"
                />
            </Card>
            <QueuedSongList/>
        </>

    );
}

export default SongPlayer;