import {createContext} from 'react';

export const PAUSE_SONG = "PAUSE_SONG"
export const PLAY_SONG = "PLAY_SONG"
export const SET_SONG = "SET_SONG"

export const SongContext = createContext({
    song:{
      id:"501e4e2c-2c43-44a8-b3f4-27d0e5a3bb57",
      title: "The Race Freestyle (Tay-K)",
      artist: "Isaiah Rashad",
      thumbnail : "http://img.youtube.com/vi/Rf4S_44jkAY/0.jpg",
      duration: 116,
      url: "https://www.youtube.com/watch?v=Rf4S_44jkAY",
    },
    isPlaying: false
  });

function SongReducer(state, action){
    switch(action.type){
        case PAUSE_SONG:{
            return {
                ...state,
                isPlaying:false
            }
        }
        case PLAY_SONG:{
            return {
                ...state,
                isPlaying:true
            }
        }
        case SET_SONG:{
            return {
                ...state,
                song: action.payload.song
            }
        }
        default:
            return state
    }

}

export default SongReducer