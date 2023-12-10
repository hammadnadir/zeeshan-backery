import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div class="container-fluid bg-dark text-light footer my-6 mb-0 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-light mb-4">Office Address</h4>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Workshop Stop , Lahore , Pakistan</p>
                       <a href='tel: 923218864313'> <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+92 321 8864313</p></a>
                        <a href='mailto: zeeshannazir779@gmail.com'><p class="mb-2"><i class="fa fa-envelope me-3"></i>zeeshannazir779@gmail.com</p></a>
                        <div class="d-flex pt-2">
                            <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-square btn-outline-light rounded-circle me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-light mb-4">Quick Links</h4>
                        <Link class="btn btn-link" href="/about">About Us</Link>
                        <Link class="btn btn-link" href="/contact">Contact Us</Link>
                        <Link class="btn btn-link" href="/service">Our Services</Link>
                        {/* <a class="btn btn-link" href="">Terms & Condition</a>
                        <a class="btn btn-link" href="">Support</a> */}
                    </div>
                    {/* <div class="col-lg-3 col-md-6">
                        <h4 class="text-light mb-4">Quick Links</h4>
                        <a class="btn btn-link" href="">About Us</a>
                        <a class="btn btn-link" href="">Contact Us</a>
                        <a class="btn btn-link" href="">Our Services</a>
                        <a class="btn btn-link" href="">Terms & Condition</a>
                        <a class="btn btn-link" href="">Support</a>
                    </div> */}
                    <div class="col-lg-4 col-md-6">
                        <h4 class="text-light mb-4">Photo Gallery</h4>
                        <div class="row g-2">
                            <div class="col-4">
                                <img class="img-fluid bg-light rounded p-1" src="img/product-1.jpg" alt="Image" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid bg-light rounded p-1" src="img/product-2.jpg" alt="Image" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid bg-light rounded p-1" src="img/product-3.jpg" alt="Image" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid bg-light rounded p-1" src="img/product-2.jpg" alt="Image" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid bg-light rounded p-1" src="img/product-3.jpg" alt="Image" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid bg-light rounded p-1" src="img/product-1.jpg" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer