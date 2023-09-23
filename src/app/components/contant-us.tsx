export default function ContactUs() {
  return (
    <section className="contact-page  newsletter-section  p-4 m-4 ">
      <div className="container">
      <div className="container">
      <div className="section-title text-center text-white">
            <h2 >Contact Us</h2>
            <p>
              Our experts in the field of crypto currency can always help you
              with any of your questions!
            </p>
          </div>
               
                
              </div>
        <div className="row">
          <div className="col-lg-7 ">
            <form className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                       className="form-control"
                      type="text"
                      placeholder="First Name*:"
                    />
                    <span>
                      <i className="ti-check"></i>
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name*:"
                    />
                    <span>
                      <i className="ti-check"></i>
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email Adress*:"
                    />
                    <span>
                      <i className="ti-check"></i>
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Phone Number*:"
                    />
                    <span>
                      <i className="ti-check"></i>
                    </span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea placeholder="Tell us about your question!"></textarea>
                  </div>
                  {/* <h5 className="mb-3">
                    Way to Contacts<span>*</span>:
                  </h5> */}

                  <button className="site-btn sb-gradients w-100 mt-4 float-right">
                    Submit form
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5 mt-5   text-center text-white justify-content-center align-item-center">
            <div>
              <h5 className="" style={{ color: "#20509e" }}>ADDRESS</h5>
              <p className="">65, Plus Offices, Sector 94, Mumbai</p>
            </div>
            <div>
            <h5 className="" style={{ color: "#20509e" }}>EMAIL</h5>
              <p className="">zenithialabs@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
