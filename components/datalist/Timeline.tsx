import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, NextRouter } from 'next/router'
import { AllNFTs, CategorisedNFTs } from '@/services'
import HomePosts from './HomePosts'
import { User, Post } from '@/interfaces'

interface HomeFeeds {
    active: string | null;
    nfts: Array<Post>;
    creators: Array<User>
}

const Timeline = ({ active, nfts, creators }: HomeFeeds) => {
    const [ activetab, setActivetab ] = useState<string | null>(active)
    const [ contents, setContents ] = useState<Post[]>(nfts)
    const router: NextRouter = useRouter()

    const handleTab = async(category: string | null) => {
        if (category == null){
            router.push("/", undefined, { shallow: true });
            const getposts = await AllNFTs(8, 0);
            setContents(getposts)
            setActivetab(null)
        } else if (category == "art") {
            router.push("/?category=art", undefined, { shallow: true })
            const getposts = await CategorisedNFTs("art", 0, 8);
            setContents(getposts)
            setActivetab(category)
        } else if (category == "photography") {
            router.push("/?category=photography", undefined, { shallow: true })
            const getposts = await CategorisedNFTs("photography", 0, 8);
            setContents(getposts)
            setActivetab("photography")
        } else if (category == "books") {
            router.push("/?category=books", undefined, { shallow: true })
            const getposts = await CategorisedNFTs("book", 0, 8);
            setContents(getposts)
            setActivetab("books")
        } else {
            router.push("/")
            setActivetab(null)
        } 
        return;
    }
      
    const handleSlideRight = (): void => {
    const container = document.querySelector('.items-container') as HTMLElement;
    const containerWidth = container.getBoundingClientRect().width;
    container.scrollLeft += containerWidth;
    };

    const handleSlideLeft = (): void => {
    const container = document.querySelector('.items-container') as HTMLElement;
    const containerWidth = container.getBoundingClientRect().width;
    container.scrollLeft -= containerWidth;
    };
    
    return (
        <section className="pt-4">
            <div className="container">
                <h4 className="mt-0">Exclusive Digital Assets</h4>
                <ul className="nav nav-box">
                    <li className="nav-item me-2">
                        <Link className={activetab == null ? "nav-link active py-1" :  "nav-link py-1"} href="/" 
                            onClick={(e) => {
                                e.preventDefault(); 
                                handleTab(null)
                            } 
                        }>All</Link>
                    </li>
                    <li className="nav-item me-2">
                        <Link className={activetab == 'art' ? "nav-link active py-1" :  "nav-link py-1"} href="/?category=art" 
                            onClick={(e) => {
                                e.preventDefault(); 
                                handleTab("art")
                            } 
                        }>Art</Link>
                    </li>
                    <li className="nav-item me-2"><Link className={activetab == 'photography' ? "nav-link active py-1" :  "nav-link py-1"} href="/?category=photography"
                            onClick={(e) => {
                                e.preventDefault(); 
                                handleTab("photography")
                            } 
                        }>Photography</Link>
                    </li>
                    <li className="nav-item"><Link className={activetab == 'books' ? "nav-link active py-1" :  "nav-link py-1"} href="/?category=books"
                            onClick={(e) => {
                                e.preventDefault();
                                handleTab("books")
                            } 
                        }>Books</Link>
                    </li>
                </ul>
                <HomePosts activetab={activetab as string} contents={contents} />
                <p className="my-5 text-center">
                    {activetab == null ? <Link className="btn btn-primary btn-lg px-3" href="/explore">Explore NFTs</Link> :
                    activetab== 'art' ?  <Link className="btn btn-primary btn-lg px-3" href="/explore/?category=art">Explore NFTs</Link> :
                    activetab== 'photography' ?  <Link className="btn btn-primary btn-lg px-3" href="/explore/?category=photography">Explore NFTs</Link> :
                    activetab== 'books' ?  <Link className="btn btn-primary btn-lg px-3" href="/explore/?category=books">Explore NFTs</Link> : null }
                </p>
            </div>
            <div className={creators.length > 0 ? "container pt-3 mb-4" : "container pt-3 mb-4 d-none"}>
                <div className="d-flex align-items-center justify-content-between mb-5">
                    <h4 className="my-0">Top creators</h4>
                    <div>
                        <button className="btn text-light me-2 prev-btn" type="button" onClick={handleSlideLeft}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-left" style={{fontSize: 30}}>
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                        </button>
                        <button className="btn text-light next-btn" type="button" onClick={handleSlideRight}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right" style={{fontSize: 30}}>
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="items-container d-flex pb-3">
                    {creators.length > 0 && creators.map((creator:any) => <div className="card bg-dark border-dark user-card" key={creator.id} style={{borderRadius: 20}}>
                        <Image className="card-img-top w-100 d-block cover-img bg-dark" src={creator.cover} alt='cover_image' width={298} height={100} />
                        <div className="card-body">
                            <div style={{marginTop: '-55px'}}>
                                <div className="position-relative d-flex justify-content-center align-items-center user-pix-cover">
                                    <Image style={{objectFit: 'cover', borderRadius: 15}} src={creator.dp} alt='creator_dp' width={60} height={60} className='bg-dark' />
                                    {creator.verified && <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" className="bi bi-patch-check-fll card-batch position-absolute text-primary">
                                    <path fillRule="evenodd" d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984a.5.5 0 0 0-.708-.708L7 8.793 5.854 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                    </svg>}
                                </div>
                                <h5 className="mt-3 mb-3">
                                    <Link className="stretched-link text-decoration-none" href={`/${creator.name}`}>@{creator.name}</Link>
                                </h5>
                                <p>{creator.bio}</p>
                                <a className="btn btn-primary mb-2" role="button" href="/profile">Visit Profile</a>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default Timeline