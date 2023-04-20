import { FC } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Navbar from '@/components/Navbar'
import CreatorsGrid from '@/components/datalist/Creators'
import Footer from '@/components/Footer'
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

interface PageProps {
    creators: Array<User>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async(context: GetServerSidePropsContext) => {

    const api = process.env.API_ROOT;
    const creators = await axios(`${api}/creators`);
    return {
        props: {
            creators: creators.data
        }
    }
  
  }

const creators: FC<PageProps> = ({ creators }) => {
    return (
        <>
            <Navbar />
            <CreatorsGrid creators={creators} />
            <Footer />
        </>
    )
}

export default creators