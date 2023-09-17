import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { CreatedNFTs, GetCreator } from '@/services';
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Image from 'next/image';
import Link from 'next/link';

interface User {
    id: string;
    cover?: string;
    email?: string;
    dp: string;
    bio?: string;
    name: string;
    verified: boolean;
    balance?: string;
}

  interface Posts {
    id: string;
    image: string;
    title: string;
    category: string;
    slug: string;
    price: number;
    likes: number;
}

interface PageProps {
    user: User,
    minted: Array<Posts>,
    listed: Array<Posts>
}

export const getServerSideProps: GetServerSideProps<PageProps> = async(context: GetServerSidePropsContext) => {

    const { params } : any = context;
    const user = await GetCreator(params.nickname);
    const minted = await CreatedNFTs(params.nickname)

    if (!user) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            user: user,
            minted: minted,
            listed: minted
        }
    }
}

const Profile = ({ user, minted, listed }: PageProps) => {
    // console.log(user.cover)
    return (
        <>
            <Navbar />
            <header className="cover-pix">
                <Image className="w-100 h-100" alt='coverPhoto' src={user.cover as string} height={2000} width={1000} priority />
                <form className="position-absolute" style={{top: 10, right: 20}}>
                    <label className="form-label btn btn-light" htmlFor="cover-input">change cover
                        <input className="form-control d-none" type="file" id="cover-input" name="cover-input" />
                    </label>
                </form>
            </header>
            <section>
                <div className="container">
                    <div className="row gx-4 gy-4">
                        <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card bg-dark border-dark bg-transparent">
                                <div className="card-body">
                                    <div className="profile-dp-cover position-relative">
                                        <img className="profile-dp w-100 h-100" src={user.dp} width={150} height={150} />
                                        {user.verified && <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-patch-check-fill position-absolute card-batch text-primary" style={{fontSize: 20}}>
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                        </svg>}
                                        <label className="form-label position-absolute btn btn-outline-light btn-sm" style={{top: '40%', left: '20%'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-upload mb-1 me-1">
                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                            </svg>change
                                            <input type="file" id="dp-input" className="d-none" name="dp-input" />
                                        </label>
                                    </div>
                                    <h5 className="card-title my-3">
                                        <Link href={`/${user.name}`}><span style={{fontWeight: 'normal !important'}}>@{user.name}</span></Link>
                                    </h5>
                                    <p className="card-text mt-2">{user.bio}</p>
                                    <div className="input-group input-group-sm mb-2">
                                        <input className="form-control" type="text" defaultValue={user.id} readOnly style={{background: '#222227'}} />
                                        <button className="btn btn-dark" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-folder text-accent">
                                                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <span className="text_small text-white-50">Balance</span>
                                    <h6 className="mt-0">{user.balance}ETH</h6><button className="btn btn-primary btn-lg w-100 mb-3" type="button" style={{fontSize: 16}} data-bs-target="#upload" data-bs-toggle="modal">UPLOAD NFT</button>
                                </div>
                            </div>
                        </div>
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
                                            {minted && minted.map((nft: Posts) => <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={nft.id}>
                                            <div className="card bg-dark border-dark nft-card">
                                                <div className="px-3 pt-3">
                                                    <Link href={`/item/${nft.id}`}>
                                                        <img src={nft.image} />
                                                    </Link>
                                                </div>
                                                    <div className="card-body">
                                                        <h6 className="card-title mt-1 mb-3">
                                                            <Link className="text-decoration-none text-light" href={`/item/${nft.id}`}>{nft.title}</Link>
                                                        </h6>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 position-relative">
                                                                <Image width={30} height={30} src={user.dp} style={{borderRadius: 10, objectFit: 'cover'}} alt='profile_image' />
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
                                            
                                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-none">
                                            <div className="card bg-dark border-dark nft-card">
                                                <div className="px-3 pt-3"><a href="item.html"><img src="https://images.pexels.com/photos/4585185/pexels-photo-4585185.jpeg?auto=compress&cs=tinysrgb&w=800" /></a></div>
                                                <div className="card-body">
                                                <h6 className="card-title mt-1 mb-3"><a className="text-decoration-none text-light" href="#">Beautiful things happen</a></h6>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 position-relative"><img width="30px" height="30px" src="https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=800" style={{borderRadius: 10, objectFit: 'cover'}} /></div>
                                                    <div>
                                                    <p className="my-0"><a className="username text-white-50 text-decoration-none" href="#">@codemonga</a></p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                    <p className="my-0 text_small">Current Price</p>
                                                    <h6 className="my-0">0.023 ETH</h6>
                                                    </div>
                                                    <div><button className="btn text-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart-fill mb-1 me-1">
                                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                                        </svg>323</button></div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-none">
                                            <div className="card bg-dark border-dark nft-card">
                                                <div className="px-3 pt-3"><a href="item.html"><img src="https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=800" /></a></div>
                                                <div className="card-body">
                                                <h6 className="card-title mt-1 mb-3"><a className="text-decoration-none text-light" href="#">Beautiful things happen</a></h6>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 position-relative"><img width="30px" height="30px" src="https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=800" style={{borderRadius: 10, objectFit: 'cover'}} /></div>
                                                    <div>
                                                    <p className="my-0"><a className="username text-white-50 text-decoration-none" href="#">@codemonga</a></p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                    <p className="my-0 text_small">Current Price</p>
                                                    <h6 className="my-0">0.023 ETH</h6>
                                                    </div>
                                                    <div><button className="btn text-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart mb-1 me-1">
                                                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                                        </svg>323</button></div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-none">
                                            <div className="card bg-dark border-dark nft-card">
                                                <div className="px-3 pt-3"><a href="item.html"><img src="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></a></div>
                                                <div className="card-body">
                                                <h6 className="card-title mt-1 mb-3"><a className="text-decoration-none text-light" href="#">Beautiful things happen</a></h6>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 position-relative"><img width="30px" height="30px" src="https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=800" style={{borderRadius: 10, objectFit: 'cover'}} /><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-patch-check-fill text-primary position-absolute card-batch" style={{fontSize: 15}}>
                                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                                    </svg></div>
                                                    <div>
                                                    <p className="my-0"><a className="username text-white-50 text-decoration-none" href="#">@codemonga</a></p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                    <p className="my-0 text_small">Current Price</p>
                                                    <h6 className="my-0">0.023 ETH</h6>
                                                    </div>
                                                    <div><button className="btn text-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart mb-1 me-1">
                                                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                                        </svg>323</button></div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-none">
                                            <div className="card bg-dark border-dark nft-card">
                                                <div className="px-3 pt-3"><a href="item.html"><img src="https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=800" /></a></div>
                                                <div className="card-body">
                                                <h6 className="card-title mt-1 mb-3"><a className="text-decoration-none text-light" href="#">Beautiful things happen</a></h6>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 position-relative"><img width="30px" height="30px" src="https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=800" style={{borderRadius: 10, objectFit: 'cover'}} /></div>
                                                    <div>
                                                    <p className="my-0"><a className="username text-white-50 text-decoration-none" href="#">@codemonga</a></p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                    <p className="my-0 text_small">Current Price</p>
                                                    <h6 className="my-0">0.023 ETH</h6>
                                                    </div>
                                                    <div><button className="btn text-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart-fill mb-1 me-1">
                                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                                        </svg>323</button></div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-none">
                                            <div className="card bg-dark border-dark nft-card">
                                                <div className="px-3 pt-3"><a href="item.html"><img src="https://images.pexels.com/photos/627901/pexels-photo-627901.jpeg?auto=compress&cs=tinysrgb&w=800" /></a></div>
                                                <div className="card-body">
                                                <h6 className="card-title mt-1 mb-3"><a className="text-decoration-none text-light" href="#">Beautiful things happen</a></h6>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 position-relative"><img width="30px" height="30px" src="https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=800" style={{borderRadius: 10, objectFit: 'cover'}} /><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-patch-check-fill text-primary position-absolute card-batch" style={{fontSize: 15}}>
                                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                                    </svg></div>
                                                    <div>
                                                    <p className="my-0"><a className="username text-white-50 text-decoration-none" href="#">@codemonga</a></p>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                    <p className="my-0 text_small">Current Price</p>
                                                    <h6 className="my-0">0.023 ETH</h6>
                                                    </div>
                                                    <div><button className="btn text-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-suit-heart-fill mb-1 me-1">
                                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                                        </svg>323</button></div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <p className="my-5 text-center"><button className="btn btn-primary btn-lg px-3" type="button">Load more</button></p>
                                    </div>
                                    <div className="tab-pane fade py-4" role="tabpanel" id="tab-2">
                                        <div className="row gx-4 gy-4 mt-1">
                                            {listed && listed.map((nft: Posts) => <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={nft.id}>
                                                <div className="card bg-dark border-dark nft-card">
                                                    <div className="px-3 pt-3">
                                                        <Link href={`/item/${nft.id}`}>
                                                            <img src={nft.image} />
                                                        </Link>
                                                    </div>
                                                    <div className="card-body">
                                                        <h6 className="card-title mt-1 mb-3">
                                                            <Link className="text-decoration-none text-light" href={`/item/${nft.id}`}>{nft.title}</Link>
                                                        </h6>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 position-relative">
                                                                <Image width={30} height={30} src={user.dp} style={{borderRadius: 10, objectFit: 'cover'}} alt='profile_image' />
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
                                        <p className="my-5 text-center">
                                            <button className="btn btn-primary btn-lg px-3" type="button">Load more</button>
                                        </p>
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
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profile