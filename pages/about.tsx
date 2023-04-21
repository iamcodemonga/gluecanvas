import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { FC } from 'react'
import Link from "next/link"

const about: FC = () => {
    return (
        <>
            <Navbar />
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <h1>WHO WE ARE?</h1>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>
                        </div>
                    </div>
                </div>
                <div className="container pt-4">
                    <h4>Get started with NFTs</h4>
                    <div className="row gx-4 gy-4 mt-4">
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                            <div className="card bg-dark border-dark" style={{background: 'transparent !important'}}>
                            <div className="card-body">
                                <h6 className="card-title mt-3">Set up your wallet</h6>
                                <p className="card-text mt-3 text-white-50">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in.</p><a className="card-link" href="#">Connect your wallet</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                            <div className="card bg-dark border-dark" style={{background: 'transparent !important'}}>
                            <div className="card-body">
                                <h6 className="card-title mt-3">Create an account</h6>
                                <p className="card-text mt-3 text-white-50">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in.</p><Link className="card-link" href="/auth/register">Register</Link>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                            <div className="card bg-dark border-dark" style={{background: 'transparent !important'}}>
                            <div className="card-body">
                                <h6 className="card-title mt-3">Upload your NFTs</h6>
                                <p className="card-text mt-3 text-white-50">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in.</p><Link className="card-link" href="/auth/login">Sign in</Link>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                            <div className="card bg-dark border-dark" style={{background: 'transparent !important'}}>
                            <div className="card-body">
                                <h6 className="card-title mt-3">List them for sale</h6>
                                <p className="card-text mt-3 text-white-50">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in.</p><Link className="card-link" href="/auth/login">Sign in</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default about