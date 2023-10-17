const Wallet = () => {
    return (
        <div className="modal fade" role="dialog" tabIndex={-1} id="wallets">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h6 className="modal-title mt-1">
                            <span style={{fontWeight: 'normal !important'}}>Connect wallet</span>
                        </h6>
                        <button className="btn-close btn-close-white" type="button" aria-label="Close" data-bs-dismiss="modal" style={{fontSize: 14}} />
                    </div>
                    <div className="modal-body pt-0 pb-5">
                        <p>
                            <span style={{color: 'rgb(189, 189, 189)'}}>Choose one of available wallet providers or create a new wallet.</span>
                        </p>
                        <button className="btn btn-dark w-100 mt-2" type="button">
                            <img className="me-2" src="https://cdn.iconscout.com/icon/free/png-512/metamask-2728406-2261817.png?f=avif&w=512" width="20px" />Metamask
                        </button>
                        <button className="btn btn-dark w-100 mt-3" type="button">
                            <img className="me-2" width="20px" src="https://stakingcrypto.info/static/assets/coins/trust-wallet-token-logo.png?v=91" />Trust wallet
                        </button>
                        <button className="btn btn-dark w-100 mt-3" type="button">
                            <img className="me-2" width="20px" src="https://cdn.iconscout.com/icon/free/png-512/coinbase-7662253-6297189.png?f=avif&w=512" />Coinbase
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet