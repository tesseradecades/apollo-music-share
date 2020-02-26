export const PAUSE_SONG = "PAUSE_SONG"
export const PLAY_SONG = "PLAY_SONG"
export const SET_SONG = "SET_SONG"

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