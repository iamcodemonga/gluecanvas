import Image from 'next/image'

interface UserBannerProps {
    coverPhoto: string
}

const UserBanner = ({ coverPhoto }: UserBannerProps) => {
    return (
        <header className="cover-pix">
                <Image className="w-100 h-100 bg-dark" alt='coverPhoto' src={coverPhoto} height={2000} width={1000} priority />
                <form className="position-absolute d-none" style={{top: 10, right: 20}}>
                    <label className="form-label btn btn-light" htmlFor="cover-input">change cover
                        <input className="form-control d-none" type="file" id="cover-input" name="cover-input" />
                    </label>
                </form>
            </header>
    )
}

export default UserBanner