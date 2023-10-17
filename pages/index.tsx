import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Timeline from '@/components/datalist/Timeline'
import { AllNFTs, CategorisedNFTs, GetAllCreators } from '@/services'
import { Post, User  } from '@/interfaces'

interface PageProps {
  active: string | null;
  nfts: Array<Post>;
  creators: Array<User>;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async(context: GetServerSidePropsContext) => {

  const { query } = context;
  const initialTab = (query.category === undefined ? null : query.category);
  const creators = await GetAllCreators();

  if (initialTab == null) {
      const allnfts = await AllNFTs(8, 0);
      return {
        props: {
          active: initialTab,
          nfts: allnfts,
          creators: creators
        }
      }
  } else if (initialTab == "art") {
      const art = await CategorisedNFTs("art", 0, 8);
      return {
        props: {
          active: initialTab,
          nfts: art,
          creators: creators
        }
      }
  } else if (initialTab == "photography") {
      const photos = await CategorisedNFTs("photography", 0, 8);
      return {
        props: {
          active: initialTab,
          nfts: photos,
          creators: creators
        }
      }
  } else if (initialTab == "books") {
      const books = await CategorisedNFTs("book", 0, 8);
      return {
        props: {
          active: initialTab,
          nfts: books,
          creators: creators
        }
      }
  } else  {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
  }
}

const Home = ({ active, nfts, creators }: PageProps) => {
  return (
    <>
      <Navbar />
      <Banner />
      <Timeline active={active} nfts={nfts} creators={creators} />
      <Footer />
    </>
  )
}

export default Home