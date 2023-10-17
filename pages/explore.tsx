import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ExploreGrid from '@/components/datalist/ExploreGrid'
import { Post } from '@/interfaces'
import { AllNFTs, CategorisedNFTs } from '@/services'
  
interface PageProps {
    active: string | null;
    nfts: Array<Post>;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async(context: GetServerSidePropsContext) => {
const { query } = context;
  const initialTab = (query.category === undefined ? null : query.category);

  if (initialTab == null) {
      const allnfts = await AllNFTs(8, 0);
      return {
        props: {
          active: initialTab,
          nfts: allnfts,
        }
      }
  } else if (initialTab == "art") {
      const art = await CategorisedNFTs("art", 0, 8);
      return {
        props: {
          active: initialTab,
          nfts: art,
        }
      }
  } else if (initialTab == "photography") {
      const photos = await CategorisedNFTs("photography", 0, 8);
      return {
        props: {
          active: initialTab,
          nfts: photos,
        }
      }
  } else if (initialTab == "books") {
      const books = await CategorisedNFTs("book", 0, 8);
      return {
        props: {
          active: initialTab,
          nfts: books,
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

const Explore  = ({ active, nfts }: PageProps) => {
    return (
        <>
            <Navbar />
            <ExploreGrid active={active} nfts={nfts} />
            <Footer />
        </>
    )
}

export default Explore