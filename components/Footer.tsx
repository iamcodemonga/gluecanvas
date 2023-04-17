import { FC } from 'react'
import Link from 'next/link'

const Footer: FC = () => {
    return (
        <footer className="py-5">
            <hr />
            <div className="container">
                <div className="row gx-4 gy-4">
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h5 className="text-center">GlueCanvas</h5>
                        <p className="text-white-50 text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h6 className="text-center">NFT Marketplace</h6>
                        <p className="text-white-50 text-center"><Link href="/explore">Explore</Link></p>
                        <p className="text-white-50 text-center"><Link href="/activity">Activity</Link></p>
                        <p className="text-white-50 text-center"><Link href="/creators">Authors</Link></p>
                        <p className="text-white-50 text-center"><Link href="/about">Privacy Policy</Link></p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h6 className="text-center">Explore</h6>
                        <p className="text-white-50 text-center"><Link href="/explore">All NFTs</Link></p>
                        <p className="text-white-50 text-center"><Link href="/explore?category=art">Art</Link></p>
                        <p className="text-white-50 text-center"><Link href="/explore?category=photography">Photography</Link></p>
                        <p className="text-white-50 text-center"><Link href="/explore?category=books">Books</Link></p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                        <h6 className="text-center">Community</h6>
                        <p className="text-white-50 text-center"><Link href="/about">Blog</Link></p>
                        <p className="text-white-50 text-center"><Link href="/about">Help centre</Link></p>
                        <p className="text-white-50 text-center"><a href="mailto:codemonga@gmail.com" target='_blank'>Contact</a></p>
                        <p className="text-white-50 text-center"><Link href="/about">About</Link></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <hr />
                        <p className="text-center mt-4 text_small">Developed by <a href="https://codemonga.netlify.app" target="_blank">@codemonga</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer