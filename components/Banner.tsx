import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Banner: FC = () => {
    return (
        <header>
            <div className="container my-5">
                <div className="carousel slide carousel-fade" data-bs-ride="carousel" id="carousel-1">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="position-relative">
                                {/* <img src="https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Slide Image" /> */}
                                <Image src="https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=800" height={1000} width={200} alt="Slide Image" priority />
                                <div className="header-overlay d-flex align-items-center px-5">
                                    <div>
                                        <h4 className="mt-0">Exclusive digital asset</h4>
                                        <p style={{maxWidth: 700}}>Buy and sell decentralized assets including arts, photography etc from the biggest NFT marketplace in the world. Trade your NFTs with the token of your choice.</p>
                                        <p className="mt-4">
                                            <Link className="btn btn-primary me-3 px-3" href='/item'>More details</Link>
                                            <Link className="btn btn-dark px-3" href='/item'>Place a bid</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="position-relative">
                                {/* <img src="https://images.pexels.com/photos/270873/pexels-photo-270873.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Slide Image"/> */}
                                <Image src="https://images.pexels.com/photos/270873/pexels-photo-270873.jpeg?auto=compress&cs=tinysrgb&w=800" height={1000} width={200} alt="Slide Image" priority />
                                <div className="header-overlay d-flex align-items-center px-5">
                                    <div>
                                        <h4 className="mt-0">Exclusive digital asset</h4>
                                        <p style={{maxWidth: 700}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et.</p>
                                        <p className="mt-4">
                                            <Link className="btn btn-primary me-3 px-3" href='/item'>More details</Link>
                                            <Link className="btn btn-dark px-3" href='/item'>Place a bid</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="position-relative">
                                {/* <img src="https://images.pexels.com/photos/2541310/pexels-photo-2541310.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Slide Image" /> */}
                                <Image src="https://images.pexels.com/photos/2541310/pexels-photo-2541310.jpeg?auto=compress&cs=tinysrgb&w=800" height={1000} width={200} alt="Slide Image" priority />
                                <div className="header-overlay d-flex align-items-center px-5">
                                    <div>
                                        <h4 className="mt-0">Exclusive digital asset</h4>
                                        <p style={{maxWidth: 700}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et.</p>
                                        <p className="mt-4">
                                            <Link className="btn btn-primary me-3 px-3" href="/item">More details</Link>
                                            <Link className="btn btn-dark px-3" href="/item">Place a bid</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner