import { GraphQLClient, gql } from "graphql-request";

const key = process.env.NEXT_PUBLIC_API_KEY;
const bearer = process.env.NEXT_PUBLIC_GRAPH_BEARER;

console.log(bearer)

export const hygraph = new GraphQLClient(`${key}`,
    {
      headers: {
        Authorization: `${bearer}`
      }
    }
);

//Get All NFTs
export const AllNFTs = async() => {
    const QUERY = gql`
        {
            contents(first: 35) {
                id
                image
                likes
                price
                slug
                title
                category
                creator {
                  dp
                  id
                  name
                  verified
                }
            }
        }`;
    const result:any = await hygraph.request(QUERY);
    return result.contents;
}

//Art NFTs
export const ArtNFTs = async() => {
    const QUERY = gql`
        {
            contents(where: {category: "art"}) {
                category
                id
                image
                likes
                price
                slug
                title
                creator {
                    dp
                    id
                    name
                    verified
                  }
            }
        }`;
    const result:any = await hygraph.request(QUERY);
    return result.contents;
}

//PhotoNFTs
export const PhotoNFTs = async() => {
    const QUERY = gql`
        {
            contents(where: {category: "photography"}) {
                category
                id
                image
                likes
                price
                slug
                title
                creator {
                    dp
                    id
                    name
                    verified
                  }
            }
        }`;
    const result:any = await hygraph.request(QUERY);
    return result.contents;
}

//BookNFTs
export const BookNFTs = async() => {
    const QUERY = gql`
        {
            contents(where: {category: "book"}) {
                category
                id
                image
                likes
                price
                slug
                title
                creator {
                    dp
                    id
                    name
                    verified
                  }
            }
        }`;
    const result:any = await hygraph.request(QUERY);
    return result.contents;
}
  
//Get All Creators
export const GetAllCreators = async() => {
    const QUERY = gql`
        {
            creators {
                id
                cover
                dp
                bio
                name
                verified
            }
        }`;
    const result:any = await hygraph.request(QUERY);
    return result.creators;
}





//CreatedNFTs
//ListedNFTs
//GetCreator