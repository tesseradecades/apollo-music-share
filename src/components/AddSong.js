import React from 'react';
import { Dialog, DialogActions, TextField, InputAdornment, Button, DialogTitle, DialogContent, makeStyles } from '@material-ui/core';
import { Link, AddBoxOutlined } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    container:{
        display: 'flex',
        alignItems:'center'
    },
    urlInput:{
        margin: theme.spacing(1)
    },
    addSongButton:{
        margin: theme.spacing(1)
    },
    dialog:{
        textAlign:'center'
    },
    thumbnail:{
        width:'90%'
    }
}));

function AddSong(){
    const classes=useStyles();
    const [dialog,setDialog] = React.useState(false);

    function handleCloseDialog(){
        setDialog(false);
    }
    return (
        <div className={classes.container}>
            <Dialog
                className={classes.dialog}
                onClose={handleCloseDialog}
                open={dialog}
            >
                <DialogTitle>Edit Song</DialogTitle>
                <DialogContent>
                    <img 
                        alt="Song Thumbnail"
                        className={classes.thumbnail}
                        src={"https://www.dmsguild.com/images/8135/239925-thumb140.jpg"}
                    />
                    <TextField
                        margin="dense"
                        label="Title"
                        name="title"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Artist"
                        name="artist"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Thumbnail"
                        name="thumbnail"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button 
                        color="secondary"
                        onClick={handleCloseDialog}
                    >
                        Cancel
                    </Button>
                    <Button 
                        color="primary"
                        variant="outlined"
                    >
                        Add Song
                    </Button>
                </DialogActions>

            </Dialog>
            <TextField 
                className={classes.urlInput}
                fullWidth
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <Link/>
                        </InputAdornment>
                    )
                }}
                margin="normal"
                placeholder="Add Soundcloud or YouTube url"
                type="url"
            />
            <Button
                className={classes.addSongButton}
                color="primary"
                endIcon={<AddBoxOutlined/>}
                onClick={()=>setDialog(true)}
                variant="contained"
            >
                Add
            </Button>
        </div>
    );
}

export default AddSong;