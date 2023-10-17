"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { User, Post } from '@/interfaces';
import { CreatedNFTs, ListedNFTs } from '@/services';
import LoadingPost from '../loaders/Post';

interface UserContentProps {
    minted: Array<Post>;
    listed: Array<Post>
    user: User
}

const UserContent = ({ minted, listed, user }: UserContentProps) => {

    const [ limit, setLimit ] = useState<{minted: number; listed: number;}>({ minted: 6, listed: 6})
    const [ created, setCreated ] = useState<Post[]>(minted)
    const [ onSale, setOnsale ] = useState<Post[]>(listed)
    const [ loading, setLoading ] = useState<{ minted: boolean, listed: boolean }>({ minted: false, listed: false })

    const handleMore = async(type: string) => {
        if(type == 'minted') {
            setLimit(prev => {
                return { ...prev, minted:prev.minted+3}
            })
            setLoading(prev => { return {...prev, minted: true }});
            const moreContents = await CreatedNFTs(6, limit.minted, user.name)
            setLoading(prev => { return {...prev, minted: false }});
            setCreated(prev => [...prev, ...moreContents])
            return;
        } else {
            setLimit(prev => {
                return { ...prev, listed:prev.listed+3}
            })
            setLoading(prev => { return {...prev, listed: true }});
            const moreContents = await ListedNFTs(6, limit.listed, user.name)
            setLoading(prev => { return {...prev, listed: false }});
            setOnsale(prev => [...prev, ...moreContents])
            return;
        }
    }

    return (
        <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
            <div className="mt-4">
                <ul className="nav nav-pills nav-fill" role="tablist">
                    <li className="nav-item" role="presentation"><a className="nav-link active" role="tab" data-bs-toggle="pill" href="#tab-1">Created</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="pill" href="#tab-2">On sale</a></li>
                    <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="pill" href="#tab-3">Settings</a></li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active py-4" role="tabpanel" id="tab-1">
                        <div className="row gx-4 gy-4 mt-1">
                            {created && created.slice(0, limit.minted).map((nft: Post) => <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={nft.id}>
                            <div className="card bg-dark border-dark nft-card">
                                <div className="px-3 pt-3">
                                    <Link href={`/item/${nft.id}`}>
                                        <Image width={298} height={350} className='bg-dark' alt='nft-image' src={nft.image} />
                                    </Link>
                                </div>
                                    <div className="card-body">
                                        <h6 className="card-title mt-1 mb-3">
                                            <Link className="text-decoration-none text-light" href={`/item/${nft.id}`}>{nft.title}</Link>
                                        </h6>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 position-relative">
                                                <Image className='bg-dark' width={30} height={30} src={user.dp} style={{borderRadius: 10, objectFit: 'cover'}} alt='profile_image' />
                                                    {user.verified && <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-patch-check-fill text-primary position-absolute card-batch" style={{fontSize: 15}}>
                                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                                    </svg>}
                                                </div>
                                            <div>
                                            <p className="my-0"><Link className="username text-white-50 text-decoration-none" href={`/${user.name}`}>@{user.name}</Link></p>
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
                                </div>
                            </div>)}
                        </div>
                        {loading.minted && <LoadingPost count={[1, 2, 3]} />}
                        {limit.minted <= created.length && <p className="my-5 text-center"><button className="btn btn-primary btn-lg px-3" type="button" onClick={() => handleMore('minted')}>Load more</button></p>}
                    </div>
                    <div className="tab-pane fade py-4" role="tabpanel" id="tab-2">
                        <div className="row gx-4 gy-4 mt-1">
                            {onSale && onSale.slice(0, limit.listed).map((nft: Post) => <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={nft.id}>
                                <div className="card bg-dark border-dark nft-card">
                                    <div className="px-3 pt-3">
                                        <Link href={`/item/${nft.id}`}>
                                            <Image width={298} height={350} className='bg-dark' alt='nft-image' src={nft.image} />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title mt-1 mb-3">
                                            <Link className="text-decoration-none text-light" href={`/item/${nft.id}`}>{nft.title}</Link>
                                        </h6>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2 position-relative">
                                                <Image width={30} height={30} className='bg-dark' src={user.dp} style={{borderRadius: 10, objectFit: 'cover'}} alt='profile_image' />
                                                {user.verified && <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-patch-check-fill text-primary position-absolute card-batch" style={{fontSize: 15}}>
                                                    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                                </svg>}
                                            </div>
                                        <div>
                                        <p className="my-0">
                                            <Link className="username text-white-50 text-decoration-none" href={`/${user.name}`}>@{user.name}</Link>
                                        </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                        <p className="my-0 text_small">Sold Out</p>
                                        <h6 className="my-0">{nft.price}ETH</h6>
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
                                </div>
                            </div>)}
                        </div>
                        {loading.listed && <LoadingPost count={[1, 2, 3]} />}
                        {limit.listed <= onSale.length &&<p className="my-5 text-center">
                            <button className="btn btn-primary btn-lg px-3" type="button" onClick={() => handleMore('listed')}>Load more</button>
                        </p>}
                    </div>
                    <div className="tab-pane fade py-4" role="tabpanel" id="tab-3">
                        <div className="row gx-4 gy-4">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="card border-dark bg-transparent pb-3">
                                    <div className="card-body">
                                        <form>
                                            <h5 className="mt-3">
                                                <span style={{fontWeight: 'normal !important'}}>Edit Profile</span>
                                            </h5>
                                            <div className="mb-3">
                                                <label className="form-label text_small">Nickname</label>
                                                <input className="form-control" type="text" name="nickname" placeholder={user.name} />
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label text_small">Email</label>
                                                <input className="form-control" type="email" name="nickname" placeholder={user.email} />
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label text_small">Gender</label>
                                                <select className="form-select form-control">
                                                    <optgroup label="This is a group">
                                                        <option value="others" selected>I'd rather not say</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                            <button className="btn btn-primary btn-lg w-100" type="button">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="card border-dark bg-transparent pb-3">
                                <div className="card-body">
                                <form>
                                    <h5 className="mt-3"><span style={{fontWeight: 'normal !important'}}>Change Password</span></h5>
                                    <div className="mb-3">
                                    <div className="d-flex align-items-center justify-content-between"><label className="form-label text_small my-0">Current Password</label><button className="btn btn-sm text-accent" type="button">show</button></div><input className="form-control" type="password" name="current_password" placeholder="xxxxxxxxxx" />
                                    </div>
                                    <div className="mb-4">
                                    <div className="d-flex align-items-center justify-content-between"><label className="form-label text_small my-0">New Password</label><button className="btn btn-sm text-accent" type="button">show</button></div><input className="form-control" type="password" name="new_password" placeholder="xxxxxxxxxx" />
                                    </div>
                                    <div className="mb-4">
                                    <div className="d-flex align-items-center justify-content-between"><label className="form-label text_small my-0">Confirm Password</label><button className="btn btn-sm text-accent" type="button">show</button></div><input className="form-control" type="password" name="current_password" placeholder="xxxxxxxxxx" />
                                    </div><button className="btn btn-primary btn-lg w-100" type="button">Submit</button>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserContent