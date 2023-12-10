import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Header() {
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);

    const isBigScreen = useMediaQuery({ query: '(min-width: 991px)' })
    const isRetina = useMediaQuery({ query: '(max-width: 991px)' })

    return (
        <nav className={`navbar navbar-expand-lg fixed-top py-lg-0 px-lg-5 wow fadeIn ${isBigScreen ? `bg-dark` : `bg-white`}`} data-wow-delay="0.1s">
            <Link href="/">
                <span className="navbar-brand ms-4 ms-lg-0" style={{ lineHeight: 1, paddingBottom: "0px" }}>
                    <h3 className="text-primary m-0 flex items-center uppercase">
                        {/* <img style={{ width: "150px" }} src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...OGrxFHnR...OwXs1M3EMoAJtlikoh...Zi9...o7" alt="" /> */}
                        Bites and Crafters
                    </h3>
                </span>
            </Link>
            <button
                type="button"
                className="navbar-toggler me-4"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                onClick={() => setShowMenu(!showMenu)}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarCollapse">
                <div className="navbar-nav mx-auto p-4 p-lg-0">
                    <Link href="/">
                        <span className={`nav-item nav-link ${router.pathname === '/' ? 'active' : ''}`}>Home</span>
                    </Link>
                    <Link href="/about">
                        <span className={`nav-item nav-link ${router.pathname === '/about' ? 'active' : ''}`}>About</span>
                    </Link>
                    <Link href="/service">
                        <span className={`nav-item nav-link ${router.pathname === '/service' ? 'active' : ''}`}>Services</span>
                    </Link>
                    <Link href="/products">
                        <span className={`nav-item nav-link ${router.pathname === '/products' ? 'active' : ''}`}>Products</span>
                    </Link>
                    <Link href="/contact">
                        <span className={`nav-item nav-link ${router.pathname === '/contact' ? 'active' : ''}`}>Contact</span>
                    </Link>
                </div>
                <div className="d-none d-lg-flex">
                    <a href='tel: 923218864313'>
                        <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                            <i className="fa fa-phone text-primary"></i>
                        </div>
                    </a>
                    <a href='tel: 923218864313'>
                        <div className="ps-3">
                            <small className="text-primary mb-0">Call Us</small>
                            <p className="text-light fs-5 mb-0">+92 321 8864313</p>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;
