import Image from "next/image";
import styles from "./page.module.css";
import ContactUs from "./components/contant-us";
import logo from "../../public/img/logo.png";
import NAVBAR from "./components/nav-bar";

const { Public_Assests_Url } = process.env;

export default function Home() {
  const teams = [
    {
      name: "Tom Binegar",
      role: "Marketing Director",
      image: "/img/member/1.jpg",
      description:
        "Jackson Nash is a full-time faculty member of the Marketing and Behavioural",
    },
    {
      name: "Tom Binegar",
      role: "Marketing Director",
      image: "/img/member/1.jpg",
      description:
        "Jackson Nash is a full-time faculty member of the Marketing and Behavioural",
    },
    {
      name: "Tom Binegar",
      role: "Marketing Director",
      image: "/img/member/1.jpg",
      description:
        "Jackson Nash is a full-time faculty member of the Marketing and Behavioural",
    },
    {
      name: "Tom Binegar",
      role: "Marketing Director",
      image: "/img/member/1.jpg",
      description:
        "Jackson Nash is a full-time faculty member of the Marketing and Behavioural",
    },
    {
      name: "Tom Binegar",
      role: "Marketing Director",
      image: "/img/member/1.jpg",
      description:
        "Jackson Nash is a full-time faculty member of the Marketing and Behavioural",
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

      <section className="hero-section">
        <div className="container-fluid px-4">
          <div className="row px-4">
            <div className="col-md-6 hero-text">
              <h2 style={{ color: "#20509e" }}>
                Invest in <span>Bitcoin</span> <br />
                Crypto Trading
              </h2>
              <h4>
                A group of experts specializing in  trading is
                spearheading the promotion of blockchain adoption by leveraging
                digital asset market making strategies.
              </h4>
              <form className="hero-subscribe-from">
                <a className="site-btn sb-gradients" href="#contact-us">
                  Get Started
                </a>
              </form>
            </div>
            <div className="col-md-6">
              <Image
                src={"/img/laptop.png"}
                className="laptop-image"
                alt=""
                width={483}
                height={480}
              />
            </div>
          </div>
        </div>
      </section>
      {/* hero end */}

      {/* <!-- About section --> */}
      <section className="about-section spad" id="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6 about-text">
              <h2>What is Zenithialabs</h2>
              <h5>
                Zenithialabs is a  trading firm specializing in
                blockchain-based digital asset market making to promote
                liquidity and adoption.
              </h5>
              <p>
                Zenithialabs is a  trading firm, enhances blockchain
                adoption by ensuring 24/7 liquidity for 200+ tokens across 30+
                crypto exchanges. They aid tokens in fundraising and offer
                competitive bid-ask quotes to minimize market impact costs for
                significant trades.{" "}
              </p>
              <a
                href="#contact-us"
                className="site-btn sb-gradients sbg-line mt-5"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="about-img">
            <Image src={"/img/about-img.png"} alt="" width={480} height={281} />
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
            <h2>Our Features</h2>
            <p>
              We bring a wealth of expertise, innovative solutions, and a
              collaborative approach to optimize resources and drive tangible
              results for your business.
            </p>
          </div>
          <div className="row">
            {/* <!-- feature --> */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-mobile"></i>
              <div className="feature-content">
                <h4>Token Project Market Making</h4>
                <p>
                  Ensuring 24/7 liquidity for 200+ tokens and 30+ spot and
                  derivative crypto exchanges{" "}
                </p>
              </div>
            </div>
            {/* <!-- feature --> */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-shield"></i>
              <div className="feature-content">
                <h4>Safe & Secure</h4>
                <p>
                  At Zenithialabs, safety is our top priority. Our advanced
                  measures guarantee the highest level of security for your
                  assets and transactions in the cryptocurrency market.{" "}
                </p>
              </div>
            </div>
            {/* <!-- feature --> */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-wallet"></i>
              <div className="feature-content">
                <h4>Token Listing and Distribution Advisory</h4>
                <p>
                  Assisting tokens by connecting them with our network of
                  exchanges and helping with capital raise by timely distributio{" "}
                </p>
              </div>
            </div>
            {/* <!-- feature --> */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-headphone-alt"></i>
              <div className="feature-content">
                <h4>Designated Market Making for Trading Venues</h4>
                <p>
                  Providing end-to-end liquidity solution for all tokens on an
                  exchange with 99.99% uptime.{" "}
                </p>
              </div>
            </div>
            {/* <!-- feature --> */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-reload"></i>
              <div className="feature-content">
                <h4>OTC Solutions for Institutional Investors </h4>
                <p>
                  Offering competitive bid-ask quotes for large trade orders to
                  reduce market impact cost.{" "}
                </p>
              </div>
            </div>
            {/* <!-- feature --> */}
            <div className="col-md-6 col-lg-4 feature">
              <i className="ti-panel"></i>
              <div className="feature-content">
                <h4>Boosting performance via liquidity partnerships.</h4>
                <p>
                  Zenithialabs provides expert token listing, market making, and
                  OTC solutions for a seamless cryptocurrency trading
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features section end --> */}

      {/* <!-- Process section --> */}
      <section className="process-section spad">
        <div className="container">
          <div className="section-title text-center">
            <h2>Get Started With Bitcoin</h2>
            <p>
              Start learning about Bitcoin with interactive tutorials. It’s fun,
              easy, and takes only a few minutes!{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 process">
              <div className="process-step">
                <figure className="process-icon">
                  <Image
                    src="/img/process-icons/1.png"
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
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Process section end --> */}

      {/* <!-- Fact section --> */}
      <section className="fact-section gradient-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="fact">
                <h2>60</h2>
                <p>
                  Support <br /> Countries
                </p>
                <i className="ti-basketball"></i>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="fact">
                <h2>12K</h2>
                <p>
                  Transactions <br /> per hour
                </p>
                <i className="ti-panel"></i>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="fact">
                <h2>5B</h2>
                <p>
                  Largest <br /> Transactions
                </p>
                <i className="ti-stats-up"></i>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="fact">
                <h2>240</h2>
                <p>
                  Years <br /> of Experience
                </p>
                <i className="ti-user"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Fact section end --> */}

      {/* <!-- Team section --> */}
      <section className="team-section  px-4 pb-4" id="team-section">
        <div className="container">
          <div className="section-title text-center">
            <h2>Meet Our Team</h2>
            <p>
              Our experts in the field of crypto currency can always help you
              with any of your questions!
            </p>
          </div>
        </div>
        <div className="team-members clearfix">
          {teams.map((elt) => {
            return (
              <>
                {/* <!-- Team member --> */}
                <div className="member">
                  <div className="member-text">
                    <Image
                      className="member-img set-bg"
                      src={elt.image}
                      alt="#"
                      width={230}
                      height={230}
                    />
                    <h2>{elt.name}</h2>
                    <span>{elt.role}</span>
                  </div>
                  <div className="member-social">
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </a>
                  </div>
                  <div className="member-info">
                    <Image
                      className="member-img mf set-bg"
                      src={elt.image}
                      alt="#"
                      width={60}
                      height={60}
                    />

                    <div className="member-meta">
                      <h2>{elt.name}</h2>
                      <span>{elt.role}</span>
                    </div>
                    <p>{elt.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
      {/* <!-- Team section --> */}

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
                  Disclaimer - The zenithialabs Group is not involved in the
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
