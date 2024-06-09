import Image from "next/image";
import NAVBAR from "../components/nav-bar";
import styles from "../page.module.css";

const About = () => {
  const feature: any = [
    {
      title: "Extensive Bearing Selection",
      logo:"/img/Brands.png",
      width:200,
      height:460,
      text: " We carry a comprehensive line of ball, roller, taper roller, and needle roller bearings from renowned brands like FAG, RHP, SKF, NTN, Timken, ZKL, IKO, and INA",
    },
    {
      title: "Beyond Bearing",
      logo:"https://evolution.skf.com/wp-content/uploads/sites/5/2020/08/gears-top-image-1920x915.jpg",
      width:180,
      height:560,
      text: "Our unwavering commitment goes beyond just bearings. We proudly offer a diverse and extensive selection of top-quality Industrial products ",
    },
  ];

  const data = [
    {
      title: "Quality You Can Trust",
      logo: "https://www.durgamechatronics.com/resources/assets/images/icon-partnership.svg",
      details: " We partner with leading manufacturers to ensure exceptional product quality across our entire range. ",
    },
    {
      title: "Competitive Rates",
      logo: "/img/process-icons/rating.png",
      details: "We are committed to providing competitive pricing on all our products and services with good service.",
    },
    {
      title: "Experience and Expertise",
      logo: "/img/process-icons/user-experience.png",
      details: "With over 30 years of experience, we have a deep understanding of your industrial needs and can provide expert advice and solutions.",
    },
    {
      title: "Reliable Service",
      logo: "/img/process-icons/communication.png",
      details: "We prioritize on-time delivery and exceptional customer service, ensuring your projects run smoothly. ",
    },
  ];
  return (
    <div>
      <main className={styles.main}>
        <div className="  text-white py-5 gradient-bg mt-4">
          <div className="row">
            <div className="col-12 text-center">
              <h2>About Us</h2>
            </div>
          </div>
        </div>

        <div className=" my-5 spad ">
          <div className="row">
            <div className="col-lg-6 col-sm-12 aboutus">
              <Image
                src={`/img/About us.png`}
                alt="#"
                width={600}
                height={460}
              />
            </div>
            <div className="col-lg-6  about-text  col-sm-12 p-4">
              <h2 className="text-center text-underline"> <span style={{fontWeight:"bolder"}}> PARSHWA IMPEX</span></h2>
              <h5>
                <span className="font-weight-bold" style={{"fontWeight": 600}}>PARSHWA IMPEX </span> offers wordclass products and services Since 1990
              </h5>
              <p>
                Our company,  <span style={{fontWeight:"bolder"}}> PARSHWA IMPEX</span>, was established in 1990. We have
                made a name for ourselves as one of the top suppliers in India.
                Our company is a leading seller of various types of bearings and
                industrial products. We take pride in introducing ourselves as
                one of the premier importers, stockists, and suppliers of ball,
                roller, taper roller, and needle roller bearings. Our founder,
                Hitesh Shah, started the bearing distribution business, and
                today, we offer a wide range of industrial products and
                bearings.
              </p>
            </div>
          </div>
        </div>

        <section
          className="features-section  gradient-bg"
          id="features-section"
        >
          <div className="spad text-white">
            <div className="section-title text-center">
              <h2>Expertise</h2>
            </div>
            <div className="row ">
              {feature.map((elt: any, i: number) => (
                <div className=" col-md-6  process p-4" key={i}>
                  <div className="process-step " style={{ padding: "4%" }}>
                  <figure className="process-icon">
                      <Image src={elt.logo} alt="#" width={elt.width} height={57} />
                    </figure>
                    <h4>{elt.title}</h4>
                    <p>{elt.text} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className=" spad">
          <div className="container">
            <div className="section-title text-center">
              <h2>Why Choose PARSHWA IMPEX</h2>
            </div>
            <div className="row">
              {data.map((elt, i) => (
                <div className="col-md-6 process" key={i}>
                  <div className="process-step">
                    <figure className="process-icon">
                      <Image src={elt.logo} alt="#" width={50} height={47} />
                    </figure>
                    <h4>{elt.title}</h4>
                    <p>{elt.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="about-section features-section  gradient-bg text-white" id="about-section">
        <div className="container">
        <div className="contact-image pb-4">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
          <div className="row pt-4">
            <div className="col-lg-12 offset-lg-12 about-text">
              <h2>Ready to Partner with Us</h2>
              <h5>
              Contact us today to discuss your specific requirements and how <span style={{fontWeight:"bolder"}}> PARSHWA IMPEX</span>can become your one-stop shop for all your industrial supply needs.
              </h5>
            </div>
          </div>
          
          <a href="/contactus" className="site-btn  ">
                Get Started
              </a>
        </div>
      </section>
      </main>
    </div>
  );
};
export default About;
