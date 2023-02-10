import React from 'react';
import { Link } from "react-router-dom";

class Footer extends React.Component
{
    constructor()
    {
        super()
    }
    render()
    {
        return(
            <footer className="bg-dark text-white  fixed-bottom">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 offset-md-2 ">
                                <h2 className="text-danger">Contact Us</h2>
                            </div>
                            <div className="col-md-3 offset-md-2">
                                <h2 className="text-danger ms-4">Sitemap</h2>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3 offset-md-2">
                                <p className="ms-3 mb-0">Amazeriffic!</p>
                                <p className="ms-3 mb-0">555 Fiftieth Street</p>
                                <p className="ms-3">Asheville, NC 28801</p>
                            </div>
                            <div className="col-md-3 offset-md-2">
                            <ul>
                                <div  className="float-start list-unstyled">
                                    <li ><Link className="f-link">Home</Link></li>
                                    <li><Link className="f-link">About Us</Link></li>
                                    <li><Link className="f-link">Privacy</Link></li>
                                </div>
                                <div className="list-unstyled ">
                                <li><Link className="f-link ms-5">Support</Link></li>
                                <li><Link className="f-link ms-5 ">FAQ</Link></li>
                                <li><Link className="f-link ms-5">Careers</Link></li>
                                </div>
                            </ul>
                            </div>
                        </div>
                    </div>
            </footer>
        )
    }
}

export default Footer;