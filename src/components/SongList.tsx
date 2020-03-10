import React from 'react';
import { Card, CardActions, CircularProgress, CardContent, CardMedia, Typography, IconButton, makeStyles } from '@material-ui/core';
import { PlayArrow, Save, Pause } from '@material-ui/icons';
import { useSubscription, useMutation } from '@apollo/react-hooks';
import { GET_SONGS } from '../graphql/subscriptions';
import {SongCommand, SongContext} from '../reducer';
import { ADD_OR_REMOVE_FROM_QUEUE } from '../graphql/mutations';

function SongList(){
    const {data, loading, error} = useSubscription(GET_SONGS)

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
    if(error){return (<div>error fetching songs</div>);}
    return (
        <div>
            {data.songs.map(song=>(
                <Song key={song.id} song={song}/>
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
    const {id} = song;
    const classes = useStyles();
    const {state, dispatch} = React.useContext(SongContext);
    const {artist,thumbnail,title} = song;
    const [currentSongPlaying, setCurrentSongPlaying] = React.useState(false);
    const [addOrRemoveFromQueue] = useMutation(ADD_OR_REMOVE_FROM_QUEUE,{
        onCompleted: data =>{
            localStorage.setItem('queue',JSON.stringify(data.addOrRemoveFromQueue))
        }
    });

    React.useEffect(()=>{
        const isSongPlaying = state.isPlaying && id===state.song.id;
        setCurrentSongPlaying(isSongPlaying);
    },[id,state.song.id, state.isPlaying])

    function handleAddOrRemoveFromQueue(){
        addOrRemoveFromQueue({
            variables: {
                input: {...song, __typename: 'Song'}
            }
        });
    }

    function handleTogglePlay(){
        dispatch({type: SongCommand.SET_SONG, payload: {song}})
        dispatch({type: state.isPlaying ? SongCommand.PAUSE_SONG : SongCommand.PLAY_SONG});
    }

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
                        <IconButton onClick={handleTogglePlay} size="small" color="primary">
                            {currentSongPlaying ? <Pause/> :<PlayArrow/>}
                        </IconButton>
                        <IconButton onClick={handleAddOrRemoveFromQueue} size="small" color="secondary">
                            <Save/>
                        </IconButton>
                    </CardActions>
                </div>
            </div>
        </Card>
    );
}

export default SongList;