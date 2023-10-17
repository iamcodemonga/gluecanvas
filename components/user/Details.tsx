"use client"

import Link from 'next/link'
import copy from 'clipboard-copy'
import { useState } from 'react';
import Image from 'next/image';

interface UserDetailsProps {
    address: string;
    dp: string;
    username: string;
    verified: boolean;
    bio: string;
    balance: string;
}

const UserDetails = ({ address, dp, username, verified, bio, balance }: UserDetailsProps) => {

    const [ copied, setCopied ] = useState<boolean>(false)

    const handleCopy = async(text: string) => {
        setCopied(true)
        await copy(text)
        setTimeout(() => {
            setCopied(false)
        }, 1500);
        return;
    }

    return (
        <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
            <div className="card bg-dark border-dark bg-transparent">
                <div className="card-body">
                    <div className="profile-dp-cover position-relative">
                        <Image className="profile-dp w-100 h-100 bg-dark" src={dp} width={150} height={150} alt="banner-image" priority />
                        {verified && <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-patch-check-fill position-absolute card-batch text-primary" style={{fontSize: 20}}>
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>}
                        <label className="form-label position-absolute btn btn-outline-light btn-sm d-none" style={{top: '40%', left: '20%'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-upload mb-1 me-1">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                            </svg>change
                            <input type="file" id="dp-input" className="d-none" name="dp-input" />
                        </label>
                    </div>
                    <h5 className="card-title my-3">
                        <Link href={`/${username}`}><span style={{fontWeight: 'normal !important'}}>@{username}</span></Link>
                    </h5>
                    <p className="card-text mt-2">{bio}</p>
                    <div className="input-group input-group-sm mb-2">
                        <input className="form-control" type="text" defaultValue={address} readOnly style={{background: '#222227'}} />
                        <button className="btn btn-dark" type="button" onClick={() => handleCopy(address)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-folder text-accent">
                                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                            </svg>
                            {copied && <span className='ms-2'>copied</span>}
                        </button>
                    </div>
                    <span className="text_small text-white-50">Balance</span>
                    <h6 className="mt-0">{balance}ETH</h6>
                    <Link href="/login" className="btn btn-primary btn-lg w-100 mb-3" type="button" style={{fontSize: 16}}>FOLLOW</Link>
                    <button className="btn btn-primary btn-lg w-100 mb-3 d-none" type="button" style={{fontSize: 16}} data-bs-target="#upload" data-bs-toggle="modal">UPLOAD NFT</button>
                </div>
            </div>
        </div>
    )
}

export default UserDetails