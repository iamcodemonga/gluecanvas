import { FC } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Navbar from '@/components/Navbar'
import CreatorsGrid from '@/components/datalist/Creators'
import Footer from '@/components/Footer'
import { GetAllCreators } from '@/services'

interface User {
    id: string;
    cover?: string;
    dp: string;
    bio?: string;
    name: string;
    verified: boolean;
  }

interface PageProps {
    creators: Array<User>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async(context: GetServerSidePropsContext) => {

    const creators = await GetAllCreators();
    return {
        props: {
            creators: creators
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