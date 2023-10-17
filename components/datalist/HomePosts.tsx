import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/interfaces';

const HomePosts = ({ activetab, contents }: { activetab: string | null, contents: Post[] }) => {
    return (
        <div className="row gx-4 gy-4 mt-1">
            {activetab == null && contents.length > 0 && contents.slice(0,8).map((nft, index) => <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" key={nft.id}>
                <div className="card bg-dark border-dark nft-card">
                    <div className="px-3 pt-3">
                        <Link href={`/item/${nft.id}`}>
                            <Image src={nft.image} alt='nft_image' width={500} height={400} className='bg-dark' />
                        </Link>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title mt-1 mb-3">
                            <Link className="text-decoration-none text-light" href={`/item/${nft.id}`}>{nft.title}</Link>
                        </h6>
                        <div className="d-flex align-items-center">
                            <div className="me-2 position-relative">
                                <Image width={30} height={30} src={nft.creator?.dp as string} style={{borderRadius: 10, objectFit: 'cover'}} alt='profile_picture' className='bg-dark' />
                                {nft.creator?.verified && <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-patch-check-fill text-primary position-absolute card-batch" style={{fontSize: 15}}>
                                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>}
                            </div>
                            <div>
                                <p className="my-0">
                                    <Link className="username text-white-50 text-decoration-none" href={nft.creator?.name as string}>@{nft.creator?.name}</Link>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <p className="my-0 text_small">Current Price</p>
                                <h6 className="my-0">{`${nft.price} ETH`}</h6>
                            </div>
                            <div>
                                <button className="btn text-light" type="button">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart-fill mb-1 me-1">
                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                    </svg> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart mb-1 me-1">
                                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                    </svg>
                                    {nft.likes}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
            {activetab == 'art' && contents.length > 0 && contents.slice(0,8).map((nft, index) => <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" key={nft.id}>
                <div className="card bg-dark border-dark nft-card">
                    <div className="px-3 pt-3">
                        <Link href={`/item/${nft.id}`}>
                            <Image src={nft.image} alt='nft_image' width={500} height={400} className='bg-dark' />
                        </Link>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title mt-1 mb-3">
                            <Link className="text-decoration-none text-light" href={`/item/${nft.id}`}>{nft.title}</Link>
                        </h6>
                        <div className="d-flex align-items-center">
                            <div className="me-2 position-relative">
                                <Image width={30} height={30} src={nft.creator?.dp as string} style={{borderRadius: 10, objectFit: 'cover'}} alt='profile_picture' className='bg-dark' />
                                {nft.creator?.verified && <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-patch-check-fill text-primary position-absolute card-batch" style={{fontSize: 15}}>
                                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>}
                            </div>
                            <div>
                                <p className="my-0">
                                    <Link className="username text-white-50 text-decoration-none" href={nft.creator?.name as string}>@{nft.creator?.name}</Link>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <p className="my-0 text_small">Current Price</p>
                                <h6 className="my-0">{`${nft.price} ETH`}</h6>
                            </div>
                            <div>
                                <button className="btn text-light" type="button">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart-fill mb-1 me-1">
                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                    </svg> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart mb-1 me-1">
                                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                    </svg>
                                    {nft.likes}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
            {activetab == 'photography' && contents.length > 0 && contents.slice(0,8).map((nft, index) => <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" key={nft.id}>
                <div className="card bg-dark border-dark nft-card">
                    <div className="px-3 pt-3">
                        <Link href={`/item/${nft.id}`}>
                            <Image src={nft.image} alt='nft_image' width={500} height={400} className='bg-dark' />
                            {/* <img src={nft.image} alt='nft_image' /> */}
                        </Link>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title mt-1 mb-3">
                            <Link className="text-decoration-none text-light" href={`/item/${nft.id}`}>{nft.title}</Link>
                        </h6>
                        <div className="d-flex align-items-center">
                            <div className="me-2 position-relative">
                                <Image width={30} height={30} src={nft.creator?.dp as string} style={{borderRadius: 10, objectFit: 'cover'}} alt='profile_picture' className='bg-dark' />
                                {nft.creator?.verified && <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-patch-check-fill text-primary position-absolute card-batch" style={{fontSize: 15}}>
                                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>}
                            </div>
                            <div>
                                <p className="my-0">
                                    <Link className="username text-white-50 text-decoration-none" href={nft.creator?.name as string}>@{nft.creator?.name}</Link>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <p className="my-0 text_small">Current Price</p>
                                <h6 className="my-0">{`${nft.price} ETH`}</h6>
                            </div>
                            <div>
                                <button className="btn text-light" type="button">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart-fill mb-1 me-1">
                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                    </svg> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart mb-1 me-1">
                                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                    </svg>
                                    {nft.likes}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
            {activetab == 'books' && contents.length > 0 && contents.slice(0,8).map((nft, index) => <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" key={nft.id}>
                <div className="card bg-dark border-dark nft-card">
                    <div className="px-3 pt-3">
                        <Link href={`/item/${nft.id}`}>
                            <Image src={nft.image} alt='nft_image' width={500} height={400} className='bg-dark' />
                        </Link>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title mt-1 mb-3">
                            <Link className="text-decoration-none text-light" href={`/item/${nft.id}`}>{nft.title}</Link>
                        </h6>
                        <div className="d-flex align-items-center">
                            <div className="me-2 position-relative">
                                <Image width={30} height={30} src={nft.creator?.dp as string} style={{borderRadius: 10, objectFit: 'cover'}} alt='profile_picture' className='bg-dark' />
                                {nft.creator?.verified && <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-patch-check-fill text-primary position-absolute card-batch" style={{fontSize: 15}}>
                                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>}
                            </div>
                            <div>
                                <p className="my-0">
                                    <Link className="username text-white-50 text-decoration-none" href={nft.creator?.name as string}>@{nft.creator?.name}</Link>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <p className="my-0 text_small">Current Price</p>
                                <h6 className="my-0">{`${nft.price} ETH`}</h6>
                            </div>
                            <div>
                                <button className="btn text-light" type="button">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart-fill mb-1 me-1">
                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                    </svg> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart mb-1 me-1">
                                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                    </svg>
                                    {nft.likes}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default HomePosts