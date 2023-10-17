import React from 'react'

const LoadingPost = ({ count }: { count: number[]}) => {
    return (
        <div className="row gx-4 gy-4 mt-1">
            {count.map((nft: number, index:number) => <div className={count.length > 3 ? "col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3": "col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4"} key={index}>
                <div className="card bg-dark border-dark nft-card">
                    <div className="px-3 pt-3">
                        <div className='rounded bg-dark' style={{ width: '100%', height: '350px'}}></div>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title mt-1 mb-3 rounded bg-dark" style={{ width: '200px', height: '20px'}}></h6>
                        <div className="d-flex align-items-center">
                            <div className="me-2 position-relative">
                                <div className='rounded bg-dark' style={{ width: '40px', height: '40px'}}></div>
                            </div>
                            <div>
                                <p className="my-0 rounded bg-dark" style={{ width: '150px', height: '15px'}}></p>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <p className="my-0 text_small rounded bg-dark" style={{ width: '100px', height: '15px'}}></p>
                                <h6 className="my-2 rounded bg-dark" style={{ width: '85px', height: '20px'}}></h6>
                            </div>
                            <div>
                                <div className='rounded bg-dark' style={{ width: '30px', height: '30px'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default LoadingPost