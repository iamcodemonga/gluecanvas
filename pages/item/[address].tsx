import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { ItemDetails, OtherNFTs } from '@/services'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { Post } from '@/interfaces';
import Image from 'next/image';

interface PageProps {
    item: Post
    others: Array<Post>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async(context: GetServerSidePropsContext) => {
    const params: ParsedUrlQuery | undefined = context.params;
    const item = await ItemDetails(params?.address as string);
    const otherItems = await OtherNFTs(item.category, item.id, 6);
    return {
        props: {
            item: item,
            others: otherItems
        }
    }
}

const Item = ({ item, others }: PageProps) => {

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
        <>
            <Navbar />
            <section className="py-5" style={{overflowX: 'hidden'}}>
                <div className="container">
                    <ol className="breadcrumb mb-5">
                        <li className="breadcrumb-item"><a href="/"><span>Home</span></a></li>
                        <li className="breadcrumb-item active"><span>Item</span></li>
                    </ol>
                    <div className="row gx-5 gy-4">
                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                            <div className="card bg-dark border-dark px-4 pt-4 item-card">
                                <img alt='nft_image' className="card-img-top w-100 d-block bg-dark" src={item.image}/>
                                <div className="card-body d-flex align-items-center justify-content-between px-0">
                                    <button className="btn btn-dark" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-link mb-1 me-1">
                                            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                                            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                                        </svg>copy link
                                    </button>
                                    <button className="btn text-light" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart mb-1 me-1">
                                            <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                        </svg>{item.likes}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="h-100 w-100 d-flex align-items-center">
                                <div>
                                    <h5 className="mt-0">{item.title}</h5>
                                    <p className="text-white-50">{item.description}</p>
                                    <hr /><span className="text_small text-white-50">Creator</span>
                                    <div className="d-flex align-items-center mt-1 mb-3">
                                        <div className="position-relative me-2" style={{height: 40, width: 40}}>
                                            <Image width={40} height={40} style={{objectFit: 'cover', borderRadius: 10}} src={item.creator?.dp as string} alt='profile-picture' />
                                            {item.creator?.verified && <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" className="bi bi-patch-check-fll card-batch position-absolute text-primary">
                                                <path fillRule="evenodd" d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984a.5.5 0 0 0-.708-.708L7 8.793 5.854 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                            </svg>}
                                        </div>
                                        <Link href={`/${item.creator?.name}`}>@{item.creator?.name}</Link>
                                    </div>
                                    <span className="text-white-50 text_small">Created at</span>
                                    <h6 className="mt-1">12-10-2022</h6>
                                    <button className="btn btn-primary btn-lg w-100 mt-3" type="button">BUY - {item.price}ETH</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div className="d-flex align-items-center justify-content-between mb-5">
                        <h4 className="my-0">Similar Items</h4>
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
                        {others && others.map((nft: Post) => <div className="card bg-dark border-dark nft-card slide" key={nft.id}>
                            <div className="px-3 pt-3">
                                <Link href={`/item/${nft.id}`}>
                                    <Image width={298} height={350} alt='image' src={nft.image} />
                                </Link>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title mt-1 mb-3">
                                    <Link className="text-decoration-none text-light" href={`/item/${nft.id}`}>{nft.title}</Link>
                                </h6>
                                <div className="d-flex align-items-center">
                                    <div className="me-2 position-relative">
                                        <Image width={30} height={30} src={nft.creator?.dp as string} style={{borderRadius: 10, objectFit: 'cover'}} alt='profile-picture'/>
                                        {nft.creator?.verified && <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-patch-check-fill text-primary position-absolute card-batch" style={{fontSize: 15}}>
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                        </svg>}
                                    </div>
                                    <div>
                                        <p className="my-0">
                                            <Link className="username text-white-50 text-decoration-none" href={`/${nft.creator?.name}`}>@{nft.creator?.name}</Link>
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <p className="my-0 text_small">Current Price</p>
                                        <h6 className="my-0">{nft.price} ETH</h6>
                                    </div>
                                    <div>
                                        <button className="btn text-light" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart mb-1 me-1">
                                                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                            </svg>{nft.likes}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Item