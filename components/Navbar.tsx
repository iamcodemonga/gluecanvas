import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar: FC = () => {

    const router = useRouter();

    return (
        <div className="sticky-top">
            <nav className="navbar navbar-dark navbar-expand-xl py-3">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <span>Glue</span><span className="text-accent">Canvas</span>
                    </a>
                    <div>
                        <button data-bs-toggle="collapse" className="navbar-toggler border-0" data-bs-target="#navcol-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" className="text-light" style={{fontSize: 35}}>
                                <path d="M4 8H20M4 16H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className={router.pathname == "/" ? "nav-link active" : "nav-link"} href="/">Home</Link></li>
                            <li className="nav-item"><Link className={router.pathname == "/explore" ? "nav-link active" : "nav-link"} href="/explore">Explore</Link></li>
                            <li className="nav-item"><Link className={router.pathname == "/creators" ? "nav-link active" : "nav-link"} href="/creators">Creators</Link></li>
                            <li className="nav-item"><Link className={router.pathname == "/activity" ? "nav-link active" : "nav-link"} href="/activity">Activity</Link></li>
                            <li className="nav-item"><a className="nav-link" href="mailto:codemonga@gmail.com" target="_blank">Contact</a></li>
                            <li className="nav-item"><Link className={router.pathname == "/about" ? "nav-link active" : "nav-link"} href="/about">About</Link></li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item d-none"><Link className={router.pathname == "/register" ? "nav-link active" : "nav-link"} href="/register">Register</Link></li>
                            <li className="nav-item d-none me-2"><Link className={router.pathname == "/login" ? "nav-link active" : "nav-link"} href="/login">Login</Link></li>
                            <li className="nav-item dropstart d-non"><Link className="nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person mb-1 me-1">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>Pallette_king&nbsp;</Link>
                                <div className="dropdown-menu dropdown-menu-dark" style={{background: 'var(--bg)', border: '1px solid var(--accent)'}}>
                                    <Link className="dropdown-item" href="profile.html">Profile</Link>
                                    <Link className="dropdown-item" href="#" data-bs-target="#upload" data-bs-toggle="modal">Add NFT</Link>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </div>
                            </li>
                            <li className="nav-item d-non">
                                <a className="nav-link active btn btn-primary px-3 d-none" data-bs-target="#wallets" data-bs-toggle="modal" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-wallet mb-1 me-2">
                                        <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
                                    </svg>Connect wallet
                                </a>
                                <button className="btn btn-primary px-3 w-100" id="walletconnector" type="button" data-bs-target="#wallets" data-bs-toggle="modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-wallet mb-1 me-2">
                                        <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
                                    </svg>Connect wallet
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr className="my-0" />
        </div>
    )
}

export default Navbar