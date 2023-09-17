import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface User {
    id: string;
    cover?: string;
    dp: string;
    bio?: string;
    name: string;
    verified: boolean;
  }

interface Creators {
    creators: Array<User>
}

const Creators: FC<Creators> = ({ creators }) => {

    const [ limit, setLimit ] = useState<number>(4)

    const handleMore = () => {
        setLimit(prev => prev+4)
        return;
    }

    return (
        <section>
            <div className="container">
                <ol className="breadcrumb mt-5">
                    <li className="breadcrumb-item"><Link href="/"><span>Home</span></Link></li>
                    <li className="breadcrumb-item active"><span>Creators</span></li>
                </ol>
                <h4 className="mt-3 mb-0">Artists / Authors / Photographers</h4>
                <form className="mt-4 mb-5">
                    <input className="form-control" type="text" placeholder="search creators" />
                </form>
                <div className="row gx-4 gy-5">
                    {creators.length > 1 && creators.slice(0, limit).map((creator: any) => <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3" key={creator.id}>
                        <div className="card bg-dark border-dark user-card us-grid" style={{borderRadius: 20}}>
                            <Image className="card-img-top w-100 d-block cover-img" src={creator.cover} alt='creators_cover' width={298} height={100} />
                            <div className="card-body">
                                <div style={{marginTop: '-55px'}}>
                                    <div className="position-relative d-flex justify-content-center align-items-center user-pix-cover">
                                        <img style={{objectFit: 'cover', borderRadius: 15}} src={creator.dp} alt="profile_picture" width={60} height={60} />
                                        {creator.verified &&<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" className="bi bi-patch-check-fll card-batch position-absolute text-primary">
                                            <path fillRule="evenodd" d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984a.5.5 0 0 0-.708-.708L7 8.793 5.854 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                        </svg>}
                                    </div>
                                    <h5 className="mt-3 mb-3">
                                        <Link className="stretched-link text-decoration-none" href={`/${creator.name}`}>@{creator.name}</Link>
                                    </h5>
                                    <p>{creator.bio}</p>
                                    <Link className="btn btn-primary mb-2" role="button" href={`/${creator.name}`}>Visit Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
                <p className="mt-5 text-center">
                    {creators.length >= limit && <button className="btn btn-primary btn-lg px-3" type="button" onClick={handleMore}>Load more</button>}
                </p>
            </div>
        </section>

    )
}

export default Creators