import {gql, DocumentNode} from 'apollo-boost';

export const ADD_SONG: DocumentNode = gql`
    mutation addSong($title: String!, $artist: String!, $thumbnail: String!, $duration: Float!, $url: String!) {
        insert_songs(objects: {title: $title, artist: $artist, thumbnail: $thumbnail, duration: $duration, url: $url}) {
            affected_rows
        }
    }
`

export const ADD_OR_REMOVE_FROM_QUEUE: DocumentNode = gql`
    mutation addOrRemoveFromQueue($input: SongInput!){
        addOrRemoveFromQueue(input: $input) @client    
    }
`