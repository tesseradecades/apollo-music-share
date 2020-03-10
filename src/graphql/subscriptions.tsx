import {gql, DocumentNode} from 'apollo-boost';

export const GET_SONGS: DocumentNode = gql`
    subscription getSongs {
        songs(order_by: {created_at: desc}) {
            artist
            duration
            id
            thumbnail
            title
            url
        }
    }
`