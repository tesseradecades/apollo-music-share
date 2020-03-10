import ApolloClient from 'apollo-client';
import {WebSocketLink} from 'apollo-link-ws';
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';
import {gql} from 'apollo-boost';
import { GET_QUEUED_SONGS } from './queries';

type TSong={ id: string; }

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: new WebSocketLink({
        uri: 'wss://nwe8978-apollo-music-share.herokuapp.com/v1/graphql',
        options: {
            reconnect: true
        }
    }),
    cache: new InMemoryCache(),
    typeDefs: gql`
        type Song {
            id: uuid!,
            title: String!,
            artist: String!,
            thumbnail: String!,
            url: String!,
            duration: Float!
        }

        input SongInput {
            id: uuid!,
            title: String!,
            artist: String!,
            thumbnail: String!,
            url: String!,
            duration: Float!
        }

        type Query{
            queue: [Song]!
        }

        type Mutation{
            addOrRemoveFromQueue(input: SongInput): [Song]!
        }
    `,
    resolvers: {
        Mutation: {
            addOrRemoveFromQueue: (_, {input}, {cache})=>{
                const queryResult = cache.readQuery({
                    query: GET_QUEUED_SONGS
                })
                if(queryResult){
                    const { queue } =queryResult;
                    const isInQueue = queue.some((song: TSong)=> song.id === input.id);
                    const newQueue = isInQueue ? 
                        queue.filter((song: TSong)=>song.id !== input.id)
                        : [...queue,input]
                    cache.writeQuery({
                        query: GET_QUEUED_SONGS,
                        data:{queue:newQueue}
                    })
                    return newQueue
                }
                return [];
            }
        }
    }
});

const localQueue: string = localStorage.getItem('queue') || '';
const hasQueue: boolean = Boolean(localQueue);

const data = {
    queue: hasQueue ? JSON.parse(localQueue) : []
}

client.writeData({data});

export default client;