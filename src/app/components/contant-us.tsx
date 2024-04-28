export default function ContactUs() {
  return (
    <>
    <section className="contact-page  newsletter-section  p-4 m-4 ">
      <div className="container">
        <div className="container">
          <div className="section-title text-center text-white">
            <h3 className="ta-heading-inner">
              Welcome to <span>PARSHWA IMPEX & Co.</span>
            </h3>
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
                      placeholder=" Name*:"
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
              <h5 className="" style={{ color: "#20509e" }}>
                ADDRESS
              </h5>
              <p className="">
                {" "}
                1003, 10th Floor, Levata, 64, Nagdevi St, Mohamadali Road, Mumbai,Maharashtra 400003.
              </p>
            </div>
            <div>
              <h5 className="" style={{ color: "#20509e" }}>
                PHONE
              </h5>
              <p className="">9322332724, 9892402162</p>
            </div>
            <div>
              <h5 className="" style={{ color: "#20509e" }}>
                EMAIL
              </h5>
              <p className="">parshwaimpex1@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <div className=" pt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5326811216946!2d72.8335811!3d18.9520682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf075271f35f%3A0xaef4510db74de952!2sParshwa%20Impex!5e0!3m2!1sen!2sin!4v1714233108956!5m2!1sen!2sin"
          width="100%"
          height="465px"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
