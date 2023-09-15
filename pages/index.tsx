import React, { FC } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Timeline from '@/components/datalist/Timeline'
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
  creators: Array<User>;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async(context: GetServerSidePropsContext) => {

  const { query } = context;
  const api = process.env.API_ROOT;
  const initialTab = (query.category === undefined ? null : query.category);
  console.log(initialTab)
  // const allnfts = await axios(`${api}/content`);
  // const art = await axios(`${api}/content?category=art`);
  // const photos = await axios(`${api}/content?category=photography`);
  // const books = await axios(`${api}/content?category=books`);
  // const creators = await axios(`${api}/creators`);
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
        creators: creators
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

const Home: FC<PageProps> = ({ active, allnfts, art, photos, books, creators }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <Timeline active={active} all={allnfts} art={art} photos={photos} books={books} creators={creators} />
      <Footer />
    </>
  )
}

export default Home