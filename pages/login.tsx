import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Login = () => {
    return (
        <>
            <Navbar />
            <section className="py-5">
                <div className="container">
                    <div className="shadow-sm w-100 d-flex justify-content-center">
                    <form className="shadow-sm auth-form">
                        <h4 className="mb-4 text-center">Sign in</h4>
                        <div className="mb-3"><label className="form-label">Email</label><input className="form-control" type="email" placeholder="e.g johndoe@gmail.com" name="email" /></div>
                        <div className="mb-4">
                        <div className="d-flex align-items-center justify-content-between mb-2"><label className="form-label mb-0">Password</label><button className="btn btn-sm text-light" type="button">show</button></div><input className="form-control" type="password" placeholder="xxxxxxxxxx" name="password" />
                        </div><button className="btn btn-primary btn-lg w-100 mt-2" type="submit">submit</button>
                        <p className="mt-4 mb-2 text-center">Don't have an account? <a href="register.html">sign up</a></p>
                        <p className="mt-2 text-center"><a href="forgot-password.html">Forgot password?</a></p>
                    </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Login