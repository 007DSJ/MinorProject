import React from 'react'
import '../App.css';

function Checkout() {
    return (
        <div id="big" className="row mb-3 mt-3 mx-3">
            <div id="lc" className="col-md-3">
                <div className="text-center">
                    <h1 className="mt-3 text-white">Welcome</h1>
                </div>
                <div className="text-center">
                    <p className="text-white">Fill in the details carefully to complete your order!</p>
                </div>
                <div className="text-center">
                    <a href="#"><button id='mango' type="submit" className="btn">Go back</button></a>
                </div>
            </div>
            <div className="col-md-9 mt-3 mb-3 justify-content-center">
                <div className="card card-custom pb-4">
                    <div className="card-body mt-0 mx-5">
                        <div className="text-center mb-3 pb-2 mt-3">
                            <h4>Delivery Details</h4>
                        </div>

                        <form className="mb-0">

                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" id="form9Example1" className="form-control input-custom" />
                                        <label className="form-label" for="form9Example1">First name</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" id="form9Example2" className="form-control input-custom" />
                                        <label className="form-label" for="form9Example2">Last name</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" id="form9Example3" className="form-control input-custom" />
                                        <label className="form-label" for="form9Example3">Address Line-1</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" id="form9Example4" className="form-control input-custom" />
                                        <label className="form-label" for="form9Example4">Address Line-2</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" id="form9Example6" className="form-control input-custom" />
                                        <label className="form-label" for="form9Example6">City</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="email" id="typeEmail" className="form-control input-custom" />
                                        <label className="form-label" for="typeEmail">ZIP</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" id="form9Example6" className="form-control input-custom" />
                                        <label className="form-label" for="form9Example6">Email</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="email" id="typeEmail" className="form-control input-custom" />
                                        <label className="form-label" for="typeEmail">Phone</label>
                                    </div>
                                </div>
                            </div>

                            <div className="float-end ">
                                <a href="#"><button id='mango1' type="submit" className="btn btn-primary">Place order</button></a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout