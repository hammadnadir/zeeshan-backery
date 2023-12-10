import React from 'react';

const MapSection = () => {
    return (
        <div className="container-xxl py-6 px-0 wow fadeInUp" data-wow-delay="0.1s">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.490564281424!2d74.29284435370474!3d31.483197148930767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903eef9dbdaa9%3A0xdd937fefa9915c26!2sWorkshop%20Stop!5e0!3m2!1sen!2s!4v1702239630637!5m2!1sen!2s"
                className="w-100 mb-n2"
                style={{ height: '450px' }}
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            >

            </iframe>
        </div>
    );
};

export default MapSection;
