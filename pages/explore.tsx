import { FC } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import axios from 'axios';
import ExploreGrid from '@/components/datalist/ExploreGrid'
import { AllNFTs, ArtNFTs, BookNFTs, GetAllCreators, PhotoNFTs } from '@/services'

interface User {
    id: string;
    cover?: string;
    dp: string;
    bio?: string;
    name: string;
    verified: boolean;
  }
  
  interface Posts {
    id: string;
    image: string;
    title: string;
    category: string;
    slug: string;
    price: number;
    likes: number;
    creator: User
  }
  
  interface PageProps {
    active: string | string[] | null;
    allnfts: Array<Posts>;
    art: Array<Posts>;
    photos: Array<Posts>;
    books: Array<Posts>;
  }

export const getServerSideProps: GetServerSideProps<PageProps> = async(context: GetServerSidePropsContext) => {
    const { query } = context;
    const api = process.env.API_ROOT;
    const initialTab = (query.category === undefined ? null : query.category);
    console.log(initialTab)
    const allnfts = await AllNFTs();
    const art = await ArtNFTs();
    const photos = await PhotoNFTs();
    const books = await BookNFTs();
    const creators = await GetAllCreators();

    if (initialTab == null || initialTab == "art" || initialTab == "photography" || initialTab == "books") {
        return {
            props: {
                active: initialTab,
                allnfts: allnfts, 
                art: art,
                photos: photos,
                books: books,
            }
        }
    } else {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
}

const Explore: FC<PageProps> = ({ active, allnfts, art, photos, books }) => {
    return (
        <>
            <Navbar />
            <ExploreGrid active={active} all={allnfts} art={art} photos={photos} books={books} />
            <Footer />
        </>
    )
}

export default Explore