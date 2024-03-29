import { Post, User } from "@/interfaces";
import { GraphQLClient, gql } from "graphql-request";

const key = process.env.NEXT_PUBLIC_API_KEY;
const bearer = process.env.NEXT_PUBLIC_GRAPH_BEARER;

export const hygraph = new GraphQLClient(`${key}`,
    {
      headers: {
        Authorization: `${bearer}`
      }
}
);

//Get All NFTs
export const AllNFTs = async(limit: number, skip: number) => {
    const QUERY = gql`
    {
        contents(first: ${limit}, skip: ${skip}) {
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
    const result: { contents: Array<Post> } = await hygraph.request(QUERY);
    return result.contents;
}

//Art NFTs
export const CategorisedNFTs = async(category: string, skip: number, limit: number) => {
    const QUERY = gql`
        {
            contents(where: {category: "${category}"}, skip: ${skip}, first: ${limit}) {
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
    const result: { contents: Array<Post> } = await hygraph.request(QUERY);
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
    const result: { creators: Array<User> } = await hygraph.request(QUERY);
    return result.creators;
}

export const ItemDetails = async(address: string) => {
    const QUERY = gql`
        {
            content(where: {id: "${address}"}) {
                id
                image
                likes
                price
                slug
                title
                description
                category
                creator {
                  dp
                  id
                  name
                  verified
                }
            }
        }`;
    const result: { content: Post } = await hygraph.request(QUERY);
    return result.content;
}

//other NFTs
export const OtherNFTs = async(category: string, id: string, max: number) => {
    const QUERY = gql`
        {
            contents(
                where: {category: "${category}", id_not: "${id}"}
                first: ${max}
              ) {
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
    const result: { contents: Array<Post> } = await hygraph.request(QUERY);
    return result.contents;
}

//GetCreator
export const GetCreator = async(username: string) => {
    const QUERY = gql`
        {
            creators(where: {name: "${username}"}) {
                id
                name
                email
                dp
                cover
                bio
                verified
                balance
            }
        }`;
    const result: { creators: Array<User> } = await hygraph.request(QUERY);
    return result.creators[0];
}

//SearchCreator
export const SearchCreators = async(username: string) => {
    const QUERY = gql`
    {
        creators(where: {name_contains: "${username}"}) {
          id
          name
          email
          dp
          cover
          bio
          verified
          balance
        }
      }`;
    const result: { creators: Array<User> } = await hygraph.request(QUERY);
    return result.creators;
}

//CreatedNFTs
export const CreatedNFTs = async(limit: number, skip: number, username: string) => {
    const QUERY = gql`
        {
            contents(first: ${limit}, skip: ${skip}, where: {creator: {name: "${username}"}}) {
                id
                image
                likes
                price
                slug
                title
                category
              }
        }`;
    const result: { contents: Array<Post> } = await hygraph.request(QUERY);
    return result.contents;
}

//ListedNFTs
export const ListedNFTs = async(limit: number, skip: number,  username: string) => {
    const QUERY = gql`
        {
            contents(
                first: ${limit},
                skip: ${skip},
                where: {creator: {name: "${username}"}},
                orderBy: publishedAt_DESC
              ) {
                id
                image
                likes
                price
                slug
                title
                category
            }
        }`;
    const result: { contents: Array<Post> } = await hygraph.request(QUERY);
    return result.contents;
}