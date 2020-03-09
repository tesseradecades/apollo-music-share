import {gql, DocumentNode} from 'apollo-boost';

export const GET_QUEUED_SONGS: DocumentNode = gql`
    query getQueuedSongs{
        queue @client {
            id
            duration
            title
            artist
            thumbnail
            url
        }
    }
`