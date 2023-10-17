const Upload = () => {
    return (
        <div className="modal fade" role="dialog" tabIndex={-1} id="upload">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h6 className="modal-title mt-0 text-accent">Upload NFT</h6><button className="btn-close btn-close-white" type="button" aria-label="Close" data-bs-dismiss="modal" style={{fontSize: 14}} />
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label text_small">category</label>
                                <select className="form-select form-control" name="category">
                                    <optgroup label="Select NFT type">
                                        <option value="art" selected>Art</option>
                                        <option value="photography">Photography</option>
                                        <option value="book">Book</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text_small">Choose Art, Picture Or Book Cover</label>
                                <input className="form-control" type="file" name="cover" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text_small">Add PDF For Book</label>
                                <input className="form-control" type="file" name="book" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text_small">File name</label>
                                <input className="form-control" type="text" name="name" placeholder="Add NFT title" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label text_small">Description</label>
                                <textarea className="form-control" placeholder="discribe your NFT" name="description" defaultValue={""} />
                            </div>
                            <div>
                                <label className="form-label text_small">Add Price Tag(ETH)</label>
                                <input className="form-control" type="number" placeholder="e.g 2.14ETH" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer border-0">
                        <button className="btn btn-light" type="button" data-bs-dismiss="modal">Close</button>
                        <button className="btn btn-primary" type="button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload