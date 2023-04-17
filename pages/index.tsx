import React, { FC } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Timeline from '@/components/datalist/Timeline'
import axios from 'axios';

interface User {
  id: number;
  address: string;
  dp: string;
  cover: string;
  username: string;
  email: string;
  gender: string;
  description: string;
  balance: number,
  verified: boolean
}

interface Posts {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  currency: string;
  price: number;
  likes: number;
  liked: boolean;
  created: string;
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
  const allnfts = await axios(`${api}/content`);
  const art = await axios(`${api}/content?category=art`);
  const photos = await axios(`${api}/content?category=photography`);
  const books = await axios(`${api}/content?category=books`);
  const creators = await axios(`${api}/creators`);

  if (initialTab == null || initialTab == "art" || initialTab == "photography" || initialTab == "books") {
    return {
      props: {
        active: initialTab,
        allnfts: allnfts.data, 
        art: art.data,
        photos: photos.data,
        books: books.data,
        creators: creators.data
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