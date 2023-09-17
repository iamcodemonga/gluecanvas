import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Activity = () => {
    return (
        <>
            <Navbar />
            <section>
                <div className="container">
                    <ol className="breadcrumb mt-5">
                        <li className="breadcrumb-item"><a href="/"><span>Home</span></a></li>
                        <li className="breadcrumb-item active"><span>Activity</span></li>
                    </ol>
                    <h4 className="mt-3 mb-4">Activity</h4>
                    <div className="row gx-4 gy-4">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
                            <div className="d-flex align-items-center gap-3 p-2" style={{border: '1px solid var(--bs-gray-800)', borderRadius: 10}}>
                            <div><a href="item.html"><img style={{width: 70, height: 110, objectFit: 'cover', borderRadius: 10}} src="https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&w=800" /></a></div>
                            <div>
                                <h6 className="mb-2 mt-0"><a className="text-light" href="#">Beautiful things happen</a></h6>
                                <p className="my-0 text_small">Listed by <a href="profile.html"><strong>@indigo</strong></a> for <strong><span style={{color: 'rgb(255, 255, 255)'}}>0.078ETH</span></strong></p><small>5 minutes ago</small>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
                            <div className="d-flex align-items-center gap-3 p-2" style={{border: '1px solid var(--bs-gray-800)', borderRadius: 10}}>
                            <div><a href="item.html"><img style={{width: 70, height: 110, objectFit: 'cover', borderRadius: 10}} src="https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&w=800" /></a></div>
                            <div>
                                <h6 className="mb-2 mt-0"><a className="text-light" href="#">Beautiful things happen</a></h6>
                                <p className="my-0 text_small">Liked by <a href="profile.html"><strong>@codemonga</strong></a></p><small>5 minutes ago</small>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
                            <div className="d-flex align-items-center gap-3 p-2" style={{border: '1px solid var(--bs-gray-800)', borderRadius: 10}}>
                            <div><a href="item.html"><img style={{width: 70, height: 110, objectFit: 'cover', borderRadius: 10}} src="https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&w=800" /></a></div>
                            <div>
                                <h6 className="mb-2 mt-0"><a className="text-light" href="#">Beautiful things happen</a></h6>
                                <p className="my-0 text_small">Purchased by <a href="profile.html"><strong>@indigo</strong></a> for <strong><span style={{color: 'rgb(255, 255, 255)'}}>0.11ETH</span></strong> from <a href="profile.html"><strong>@codemonga</strong></a></p><small>5 minutes ago</small>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
                            <div className="d-flex align-items-center gap-3 p-2" style={{border: '1px solid var(--bs-gray-800)', borderRadius: 10}}>
                            <div><a href="item.html"><img style={{width: 70, height: 110, objectFit: 'cover', borderRadius: 10}} src="https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&w=800" /></a></div>
                            <div>
                                <h6 className="mb-2 mt-0"><a className="text-light" href="#">Beautiful things happen</a></h6>
                                <p className="my-0 text_small">Liked by <a href="profile.html"><strong>@codemonga</strong></a></p><small>5 minutes ago</small>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
                            <div className="d-flex align-items-center gap-3 p-2" style={{border: '1px solid var(--bs-gray-800)', borderRadius: 10}}>
                            <div><a href="item.html"><img style={{width: 70, height: 110, objectFit: 'cover', borderRadius: 10}} src="https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&w=800" /></a></div>
                            <div>
                                <h6 className="mb-2 mt-0"><a className="text-light" href="#">Beautiful things happen</a></h6>
                                <p className="my-0 text_small">Listed by <a href="profile.html"><strong>@indigo</strong></a> for <strong><span style={{color: 'rgb(255, 255, 255)'}}>0.078ETH</span></strong></p><small>5 minutes ago</small>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4">
                            <div className="d-flex align-items-center gap-3 p-2" style={{border: '1px solid var(--bs-gray-800)', borderRadius: 10}}>
                            <div><a href="item.html"><img style={{width: 70, height: 110, objectFit: 'cover', borderRadius: 10}} src="https://images.pexels.com/photos/1070534/pexels-photo-1070534.jpeg?auto=compress&cs=tinysrgb&w=800" /></a></div>
                            <div>
                                <h6 className="mb-2 mt-0"><a className="text-light" href="#">Beautiful things happen</a></h6>
                                <p className="my-0 text_small">Listed by <a href="profile.html"><strong>@indigo</strong></a> for <strong><span style={{color: 'rgb(255, 255, 255)'}}>0.078ETH</span></strong></p><small>5 minutes ago</small>
                            </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-5 text-center"><button className="btn btn-primary px-3" type="button">Load more</button></p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Activity