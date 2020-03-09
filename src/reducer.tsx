import {createContext} from 'react';

export enum SongCommand{
    PAUSE_SONG,
    PLAY_SONG,
    SET_SONG
}

type ISong ={
    artist:string
    duration:number
    id:string
    thumbnail:string
    title:string
    url:string
}

interface SongState{
    isPlaying:boolean
    song:ISong
}

interface SongReducerActions{
    payload:{
        song:ISong
    }
    type:SongCommand
}

export interface SongContextProps{
    dispatch: React.Dispatch<SongReducerActions>;
    state:SongState;
}

export const SongContext = createContext({
    state:{
        isPlaying:false,
        song:{
            id:"501e4e2c-2c43-44a8-b3f4-27d0e5a3bb57",
            title: "The Race Freestyle (Tay-K)",
            artist: "Isaiah Rashad",
            thumbnail : "http://img.youtube.com/vi/Rf4S_44jkAY/0.jpg",
            duration: 116,
            url: "https://www.youtube.com/watch?v=Rf4S_44jkAY",
        } as ISong
    } as SongState
} as SongContextProps);

/*export const SongContext = createContext({
    song:{
      id:"501e4e2c-2c43-44a8-b3f4-27d0e5a3bb57",
      title: "The Race Freestyle (Tay-K)",
      artist: "Isaiah Rashad",
      thumbnail : "http://img.youtube.com/vi/Rf4S_44jkAY/0.jpg",
      duration: 116,
      url: "https://www.youtube.com/watch?v=Rf4S_44jkAY",
    },
    isPlaying: false
  });*/

function songReducer(state: SongState, action:SongReducerActions){
    switch(action.type){
        case SongCommand.PAUSE_SONG:{
            return {
                ...state,
                isPlaying:false
            }
        }
        case SongCommand.PLAY_SONG:{
            return {
                ...state,
                isPlaying:true
            }
        }
        case SongCommand.SET_SONG:{
            return {
                ...state,
                song: action.payload.song
            }
        }
        default:
            return state
    }

}

export default songReducer