import React from 'react'
import navIcon1 from '../assets/facebook-f.svg';
import navIcon2 from '../assets/linkedin.svg';
import navIcon3 from '../assets/twitter.svg';
import navIcon4 from '../assets/instagram.svg';
import navIcon5 from '../assets/heart-solid.svg';
import navIcon6 from '../assets/cart-shopping-solid.svg';

export const Header = () => {
    return (
        <>
            <div className="sub-header">

                <div className="row">
                    <div className="col-md-8 col-sx-12">
                        <ul className="left-info">
                            <li>Free Delivery</li>
                            <li>Return Policy</li>
                        </ul>
                    </div>
                    <div className="col-md-4">

                        <ul className="right-icon">
                            <li><a href={{}}><img src={navIcon1} alt="" /></a></li>
                            <li><a href={{}}><img src={navIcon2} alt="" /></a></li>
                            <li><a href={{}}><img src={navIcon3} alt="" /></a></li>
                            <li><a href={{}}><img src={navIcon4} alt="" /></a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-3 top-brand">
                <div className="container2">
                    <div className="navbar-brand d-flex align-items-center">
                        <a className="brand-logo">
                            ShopKart
                        </a>
                    </div>
                    <div className='iconsbox'>
                        <div class="iconsbox-button">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Follow Us</button>

                        </div>
                        <div className='social-icon'>
                            <a><img src={navIcon5} />Wishlist</a>
                            <a><img src={navIcon6} />Bag</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
