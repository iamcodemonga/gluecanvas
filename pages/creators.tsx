import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Navbar from '@/components/Navbar'
import CreatorsGrid from '@/components/datalist/Creators'
import Footer from '@/components/Footer'
import { User } from '@/interfaces'
import { GetAllCreators } from '@/services'

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

const creators  = ({ creators }: PageProps) => {
    return (
        <>
            <Navbar />
            <CreatorsGrid creators={creators} />
            <Footer />
        </>
    )
}

export default creators