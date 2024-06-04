"use client";

import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactUs = ()=> {
  const form = useRef(null);

  const sendEmail = async (e: any) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_4q4t6l7",
        "template_47dhtw4",
        form.current || "No message",
        {
          publicKey: "n2WvRmzk2RClYzJfN",
        }
      );
    } catch (error) {
      console.log("error on form submit", error);
    }
  };
  return (
    <>
      <section id="contact" className="gradient-bg text-white spad mt-4">
        <div className="container">
          <h3 className="text-center text-uppercase pb-4">contact us</h3>
          <p className="text-center w-75 m-auto">
          Whether you have questions, feedback, or need assistance, our team is ready to support you. Reach out to us through any of the methods below, and we will  get back to you as soon as possible.

          </p>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 my-5">
              <a href="tel:9322332724" style={{ textDecoration: 'none' }}>
                <div className="border-0">
                  <div className="card-body text-center process-step ">
                    <Image
                      src={"/img/telephone-outbound-fill.svg"}
                      className="pb-2 pt-2"
                      width={50}
                      height={50}
                      alt={""}
                    />
                    <h4 className="text-uppercase mb-5">call us</h4>
                    <p  style={{"fontWeight": 600}}>+919322332724</p>
                    <p  style={{"fontWeight": 600}}>+919892402162</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 my-5 ">
              <a style={{ textDecoration: 'none' }} href="https://www.google.com/maps/dir//Parshwa+Impex+1003,+Levata+64,+Nagdevi+St,+Mohamadali+Road+Mumbai,+Maharashtra+400003/@18.9520682,72.8335811,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3be7cf075271f35f:0xaef4510db74de952">
                <div className="border-0">
                  <div className="card-body text-center process-step p-4">
                    <Image
                      className="pb-2"
                      src="/img/house.svg"
                      width={50}
                      height={50}
                      alt={""}
                    />
                    <h4 className="text-uppercase mb-1">Address</h4>
                    <p  style={{"fontWeight": 600}}>
                    <span style={{fontWeight:"bolder"}}> PARSHWA IMPEX</span>,1003, Levata, 64, Nagdevi St, Mohamadali
                      Road, Mumbai, Maharashtra 400003
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 my-5">
              <a href="mailto:parshwaimpex1@gmail.com" style={{ textDecoration: 'none' }}>
                  <div className="border-0">
                    <div className="card-body text-center process-step p-4">
                      <Image
                            src="/img/envelope.svg"
                            className="pb-2"
                        width={50}
                        height={50}
                        alt={""}
                      />
                      <h4 className="text-uppercase mb-5">Mail</h4>
                      <p className="font-weight-bold" style={{"fontWeight": 600}}>parshwaimpex1@gmail.com</p>

                    </div>
                  </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="container contact-form w-100">
        <div className="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form
          method="post"
          ref={form}
          onSubmit={sendEmail}
          className="bg-light  rounded shadow-sm"
        >
          <h3 className="text-center mb-4">Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <input
                  type="text"
                  name="from_name"
                  className="form-control border border-dark"
                  placeholder="Your Name *"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  className="form-control border border-dark"
                  placeholder="Your Email *"
                  required
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="form-group">
                <input
                  type="text"
                  name="message"
                  className="form-control border border-dark"
                  placeholder="Your Phone Number *"
                  required
                />
              </div>
            </div>
            <div className="col-md-12 mb-3">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control border border-dark"
                  placeholder="Your Message *"
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button className="btn btn-primary w-100 py-2">Send Message</button>
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


export default ContactUs 
