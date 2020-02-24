import React from 'react';
import { Card, CardActions, CircularProgress, CardContent, CardMedia, Typography, IconButton, makeStyles } from '@material-ui/core';
import { PlayArrow, Save } from '@material-ui/icons';

function SongList(){
    let loading = false;

    const song = {
        title: 'Lilly',
        artist: 'IDK',
        thumbnail: "https://www.dmsguild.com/images/8135/239925-thumb140.jpg",
    }

    if(loading){
        return (
            <div style={{
                alignItems:'center',
                display:'flex',
                flexDirection:'column',
                marginTop: 50
            }}>
                <CircularProgress/>
            </div>
        );
    }
    return (
        <div>
            {Array.from({length:10},()=>song).map((song,i)=>(
                <Song key={i} song={song}/>
            ))}
        </div>
    );
}

const useStyles = makeStyles(theme=>({
    container:{
        margin:theme.spacing(5)
    },
    songInfoContainer:{
        alignItems:'center',
        display:'flex',
        
    },
    songInfo:{
        display:'flex',
        justifyContent:'space-between',
        width:'100%',
    },
    thumbnail:{
        height:140,
        objectFit:'cover',
        width:140,
    }
}));

function Song({song}){
    const classes = useStyles();
    const {artist,thumbnail,title} = song;
    return (
        <Card className={classes.container}>
            <div className={classes.songInfoContainer}>
                <CardMedia className={classes.thumbnail} image={thumbnail}/>
                <div className={classes.songInfo}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="p" color="textSecondary">
                            {artist}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton size="small" color="primary">
                            <PlayArrow/>
                        </IconButton>
                        <IconButton size="small" color="secondary">
                            <Save/>
                        </IconButton>
                    </CardActions>
                </div>
            </div>
        </Card>
    );
}

export default SongList;