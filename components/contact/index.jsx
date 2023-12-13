import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Contact() {
  const fields = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }
  const [val, setVal] = useState({})
  const [error, setError] = useState({})

  const ref = useRef()

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(val)
  }
  const validate = (data) => {
    let err = {}
    if (!data.name) {
      err.name = "Required"
    }
    if (!data.email) {
      err.email = "Required"
    }
    if (!data.subject) {
      err.subject = "Required"
    }
    if (!data.message) {
      err.message = "Required"
    }
    if (Object.keys(err).length > 0) {
      setError(err)
      toast.error('Please fill all the required fields.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      emailjs.sendForm('service_q0oun3d', 'template_q6h12lj', ref.current, 'UDsVqXKLpGirbV7aK')
        .then((result) => {
          toast.success('Form Submit Successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setError(fields)
          setVal(fields)
        }, (error) => {
          toast.success('Something went wrong', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });

    }
  }

  return (
    <div>
      Contact
      <div className="container-xxl py-6">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <h1 className="display-6 mb-4">If You Have Any Query, Please Contact Us</h1>
          </div>
          <div className="row g-0 justify-content-center">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">

              <form onSubmit={handleSubmit} ref={ref}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input name="name" onChange={handleChange} value={val.name} type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input name="email" onChange={handleChange} value={val.email} type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input name="subject" onChange={handleChange} value={val.subject} type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea name="message" onChange={handleChange} value={val.message} className="form-control" placeholder="Leave a message here" id="message" style={{ height: '200px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
