import Image from "next/image";

export default function ContactUs() {
  return (
    <>
      <section id="contact" className="gradient-bg text-white spad">
        <div className="container">
          <h3 className="text-center text-uppercase">contact us</h3>
          <p className="text-center w-75 m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            interdum purus at sem ornare sodales. Morbi leo nulla, pharetra vel
            felis nec, ullamcorper condimentum quam.
          </p>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 my-5">
              <div className=" border-0">
                <div className="card-body text-center process-step p-4">
                  <Image
                    src={"/img/telephone-outbound-fill.svg"}
                    className="pb-2"
                    width={50}
                    height={50}
                    alt={""}
                  />
                  <h4 className="text-uppercase mb-5">call us</h4>
                  <p>+8801683615582,+8801750603409</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 my-5">
              <div className=" border-0">
                <div className="card-body text-center process-step p-4 ">
                  <Image
                    className="pb-2"
                    src="/img/house.svg"
                    width={50}
                    height={50}
                    alt={""}
                  />
                  <h4 className="text-uppercase mb-5">Address</h4>
                  <p>http://al.a.noman1416@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 my-5">
              <div className=" border-0">
                <div className="card-body text-center process-step p-4">
                  <Image
                    src="/img/envelope.svg"
                    className="pb-2"
                    width={50}
                    height={50}
                    alt={""}
                  />
                  <h4 className="text-uppercase mb-5">email</h4>
                  <p>http://al.a.noman1416@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container contact-form">
        <div className="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form method="post">
          <h3>Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                  value=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                  value=""
                />
              </div>
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message *"
                ></textarea>
              </div>
            </div>
              <div className="form-group d-flex justify-content-center contact-image">
              <button className="site-btn sb-gradients w-100 mt-4 ">
                      Send message
                    </button>
              </div>
            </div>
          </div>
        </form>
      </div>
     
      {/* <div className=" pt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5326811216946!2d72.8335811!3d18.9520682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf075271f35f%3A0xaef4510db74de952!2sParshwa%20Impex!5e0!3m2!1sen!2sin!4v1714233108956!5m2!1sen!2sin"
          width="100%"
          height="465px"
          loading="lazy"
        ></iframe>
      </div> */}
    </>
  );
}
