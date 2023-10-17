import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Upload from '@/components/modals/Upload';
import { User, Post } from '@/interfaces';
import { CreatedNFTs, GetCreator, ListedNFTs } from '@/services';
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Banner from '@/components/user/Banner';
import Details from '@/components/user/Details'
import UserContent from '@/components/user/Content';

interface PageProps {
    user: User,
    minted: Array<Post>,
    listed: Array<Post>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async(context: GetServerSidePropsContext) => {

    const { params } = context;
    const user = await GetCreator(params?.nickname as string);
    const minted = await CreatedNFTs(6, 0, params?.nickname as string)
    const listed = await ListedNFTs(6, 0, params?.nickname as string)

    if (!user) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            user: user,
            minted: minted,
            listed: listed
        }
    }
}

const Profile = ({ user, minted, listed }: PageProps) => {
    return (
        <>
            <Navbar />
            <Banner coverPhoto={user.cover as string} />
            <section>
                <div className="container">
                    <div className="row gx-4 gy-4">
                        <Details dp={user.dp} verified={user.verified} username={user.name} balance={user.balance as string} address={user.id} bio={user.bio as string}  />
                        <UserContent minted={minted} listed={listed} user={user} />
                    </div>
                </div>
            </section>
            <Footer />
            <Upload />
        </>
    )
}

export default Profile