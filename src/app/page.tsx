"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ContactUs from "./components/contant-us";
import logo from "../../public/img/logo.png";
import NAVBAR from "./components/nav-bar";
import CALLOUT from "./components/callout";
import Link from "next/link";

const { Public_Assests_Url } = process.env;

export default function Home() {
  const feature = [
    {
      title: "Quality Assurance",
      logo: "/img/Quality_Assurance.jpg",

      text: " We partner with leading manufacturers to ensure exceptional product quality across our entire range. ",
    },
    {
      title: "Competitive Rates",
      logo: "/img/comapre-rate.jpg",

      text: "Committed to competitive pricing, we ensure affordability across our product lineup, maintaining value without compromising quality or performance.",
    },
    {
      title: "Experience & Expertise",
      logo: "/img/experice.jpg",
      text: "With over 30 years of experience, we have a deep understanding of your industrial needs and can provide expert advice and solutions.",
    },
    {
      title: "Reliable Service",
      text: "We prioritize on-time delivery and exceptional customer service, ensuring your projects run smoothly",
      logo: "/img/Best services.png",
    },
  ];

  const products = [
    {
      name: "Ball bearings",
      logo: "/img/Ball bearing home page.jpg",
    },
    {
      name: "Roller Bearing",
      logo: "/img/roller bearing.jpg",
    },
    {
      name: "Bearing Units",
      logo: "/img/bearing units home page file (2) [MConverter.eu].jpg",
    },
    {
      name: "Safety Equipment",
      logo: "/img/safety eqipments.jpg",
    },
  ];

  return (
    <main className={styles.main}>
      {/* <div id="preloder">
		<div className="loader"></div>
	</div> */}

      {/* hero sec */}
      <CALLOUT />

      {/* hero end */}

      {/* <!-- About section --> */}
      <section className="about-section " id="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 offset-lg-12 about-text">
              <h2>Ready to Partner with Us</h2>
              {/* <h5>
              Contact us today to discuss your specific requirements and how PARSHWA IMPEX can become your one-stop shop for all your industrial supply needs.
              </h5> */}
              <Link
                // href="/contactus"
                href={{
                  pathname: "/contactus",
                }}
                className="site-btn   sbg-line "
                style={{ textDecoration: "none" }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About section end --> */}

      {/* <!-- Features section --> */}
      <section className="features-section  gradient-bg" id="features-section">
        <div className="spad text-white">
          <div className="section-title text-center">
            <h2>
              Leading Ball Bearing Supplier Powering Industry and Driving
              Performance.
            </h2>
            <p>
              We are an established industrial distributor with 30+ years of
              experience in Bearings industry.
            </p>
          </div>
          <div className="row p-2">
            {feature.map((elt, i) => (
              <div className=" col-md-3  process " key={i}>
                <div className="process-step " style={{ paddingTop: "4%" }}>
                  <Image src={`${elt.logo}`} alt="#" width={320} className="pt-2"
                    height={200}/>
                  <h4 className="pt-4">{elt.title}</h4>
                  {/* <p>{elt.text} </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- Features section end --> */}

      {/* <!-- Process section --> */}
      <section className=" spad">
        <div className="p-2">
          <div className="section-title text-center">
            <h2>PRODUCTS WE OFFERS AT <span style={{fontWeight:"bolder"}}> PARSHWA IMPEX</span></h2>
          </div>
          <div className="row">
            {products.map((elt, i) => (
              <div className="col-md-3 col-sm-12 process" key={i}>
                <div className="process-step">
                  <h4>{elt.name}</h4>
                  <Image
                    className="process-icon"
                    src={`${elt.logo}`}
                    alt="#"
                    width={300}
                    height={190}
                    // layout="fill"
                    objectFit="contain"
                  />

                  <div className="">
                    <Link
                      href={{
                        pathname: "/products",
                        query: { product: elt.name },
                      }}
                      className="site-btn   "
                      style={{ textDecoration: "none" }}
                    >
                      Discover more
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-md-4 process">
              <div className="process-step">
                <figure className="process-icon">
                  <Image
                    src="/img/process-icons/2.png"
                    alt="#"
                    width={50}
                    height={47}
                  />
                </figure>
                <h4>Create Your Wallet</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 process">
              <div className="process-step">
                <figure className="process-icon">
                  <Image
                    src="/img/process-icons/3.png"
                    alt="#"
                    width={50}
                    height={47}
                  />
                </figure>
                <h4>Create Your Wallet</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{" "}
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- Process section end --> */}

      {/* <!-- Fact section --> */}

      {/* <!-- Review section end --> */}

      <div className="  justify-content-center " id="contact-us">
        <ContactUs />
      </div>
    </main>
  );
}
