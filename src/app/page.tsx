import Image from "next/image";
import styles from "./page.module.css";
import ContactUs from "./components/contant-us";
import logo from "../../public/img/logo.png";
import NAVBAR from "./components/nav-bar";
import CALLOUT from "./components/callout";

const { Public_Assests_Url } = process.env;

export default function Home() {

  const feature = [
    {
      title: "Token Project Market Making",
      text: "We bring a wealth of expertise, innovative solutions, and a collaborative approach to optimize resources and drive tangible results for your business.",
    },
    {
      title: "Competitive Rates",
      text: "We are committed to providing competitive pricing on all our products.",
    },
    {
      title: "Experience and Expertise",
      text: "With over 30 years of experience, we have a deep understanding of your industrial needs and can provide expert advice and solutions.",
    },
    {
      title: "Reliable Service",
      text: "We prioritize on-time delivery and exceptional customer service, ensuring your projects run smoothly",
    },
  ];

  const products = [
    {
      logo: "	https://dkcbearings.in/wp-content/uploads/2020/09/fag-ball-bearing.jpg",
    },
    {
      logo: "	https://dkcbearings.in/wp-content/uploads/2020/09/fag-ball-bearing.jpg",
    },
    {
      logo: "	https://dkcbearings.in/wp-content/uploads/2020/09/fag-ball-bearing.jpg",
    },
    {
      logo: "	https://dkcbearings.in/wp-content/uploads/2020/09/fag-ball-bearing.jpg",
    },
  ];

  return (
    <main className={styles.main}>
      {/* <div id="preloder">
		<div className="loader"></div>
	</div> */}

      <header className="header-section ">
        <NAVBAR />
      </header>

      {/* hero sec */}
        <CALLOUT />


      {/* hero end */}

      {/* <!-- About section --> */}
      <section className="about-section spad" id="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 offset-lg-12 about-text">
              <h2>Ready to Partner with Us</h2>
              {/* <h5>
              Contact us today to discuss your specific requirements and how Parshwa Impex can become your one-stop shop for all your industrial supply needs.
              </h5> */}
              <a
                href="#contact-us"
                className="site-btn   sbg-line "
              >
                Get Started
              </a>
            </div>
          </div>
         
        </div>
      </section>
      {/* <!-- About section end --> */}

      {/* <!-- Features section --> */}
      <section
        className="features-section spad gradient-bg"
        id="features-section"
      >
        <div className="container text-white">
          <div className="section-title text-center">
            <h2>WHY CHOOSE PARSHWA IMPEX & CO. ?</h2>
            <p>
            We're an established industrial distributor with 30+ years of experience in Bearings industry.
            </p>
          </div>
          <div className="row">
            {feature.map((elt, i) => (
              <div className="col-md-6 process" key={i}>
                <div className="process-step">
                  <h4>{elt.title}</h4>
                  <p>{elt.text} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- Features section end --> */}

      {/* <!-- Process section --> */}
      <section className=" spad">
        <div className="container">
          <div className="section-title text-center">
            <h2>PRODUCTS WE OFFERS AT Parshwa Impex</h2>
           
          </div>
          <div className="row">
            {products.map((elt, i) => (
              <div className="col-md-3 process" key={i}>
                <div className="process-step">
                <h4>Ball Bearing</h4>
                  <figure className="process-icon ">
                    <Image src={`${elt.logo}`} alt="#" width={190} height={170} />
                  </figure>
                 
                <div className="pt-4">

                <a
                href="#contact-us"
                className="site-btn   sbg-line mt-5 mr-3"
                style={{  textDecoration: 'none' }}
              >
                Discover more
              </a>
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
      {/* <section className="fact-section gradient-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="fact">
                <h2>24/7</h2>
                <p>
                  liquidity <br />
                  for 200+ tokens
                </p>
                <i className="ti-basketball"></i>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="fact">
                <h2>12K</h2>
                <p>
                  Transactions <br /> per day
                </p>
                <i className="ti-panel"></i>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="fact">
                <h2>500k</h2>
                <p>
                  Largest <br /> Transactions
                </p>
                <i className="ti-stats-up"></i>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="fact">
                <h2>7</h2>
                <p>
                  Years <br /> of Experience
                </p>
                <i className="ti-user"></i>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Fact section end --> */}

      {/* <!-- Review section --> */}
      {/* <section className="review-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 push-8">
              <Image
                className="quote mb-5"
                src="/img/quote.png"
                alt="#"
                width={60}
                height={60}
              />
              <div className="review-text-slider owl-carousel">
                <div className="review-text">
                  <p>
                    "Bitcoin is exciting because it shows how cheap it can be.
                    Bitcoin is better than currency in that you don’t have to be
                    physically in the same place and, of course, for large
                    transactions, currency can get pretty inconvenient.”
                  </p>
                </div>

                <div className="review-text">
                  <p>
                    "Bitcoin is exciting because it shows how cheap it can be.
                    Bitcoin is better than currency in that you don’t have to be
                    physically in the same place and, of course, for large
                    transactions, currency can get pretty inconvenient.”
                  </p>
                </div>
                
              </div>
            </div>
            <div className="col-lg-4 pr-0 pull-3">
              <div className="review-meta-slider owl-carousel pt-5">
                <div className="author-meta">
                  <Image
                    className="author-avatar set-bg"
                    src="/img/review/1.jpg"
                    alt=""
                    width={60}
                    height={60}
                  />
                  <div className="author-name">
                    <h4>Aaron Ballance</h4>
                    <p>Ceo Bitcoin</p>
                  </div>
                </div>
                <div className="author-meta">
                  <Image
                    className="author-avatar set-bg"
                    src="/img/review/1.jpg"
                    alt=""
                    width={60}
                    height={60}
                  />
                  <div className="author-name">
                    <h4>Aaron Ballance</h4>
                    <p>Ceo Bitcoin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Review section end --> */}

      <div className="  justify-content-center gradient-bg" id="contact-us">
        <ContactUs />
      </div>
      <footer className="footer-section ">
        <div className="row ">
          <div className="footer-bottom">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center text-lg-right pt-4">
                <p style={{ fontSize: "10px" }}>
                  Disclaimer - The  Group is not involved in the
                  management of crypto assets or fiat currency on behalf of
                  investors. The information provided is purely for
                  informational purposes and should not be considered an offer
                  or solicitation to purchase any crypto assets or financial
                  instruments.
                </p>
                <ul className="footer-nav">
                  <li>
                    <a href="">DPA</a>
                  </li>
                  <li>
                    <a href="">Terms of Use</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy </a>
                  </li>
                  <li>
                    <a href="">support@company.com</a>
                  </li>
                  <li>
                    <a href="">(123) 456-7890</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
