import { products } from "@/contant";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start text-white  gradient-bg">
        <section className="">
          <div className="container text-center text-md-start mt-5 footer p-4">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold text-white">
                 bolder
                </h6>
                <div className="mb-4 mt-0  mx-auto" />
                <p>
                  Leading Ball Bearing Supplier Powering Industry and Driving
                  Performance.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
                <h6 className="text-uppercase fw-bold text-white">Products</h6>
                <div className="mb-4 mt-0  mx-auto" />
                {Object.keys(products).map((elt, i) => (
                  <p key={i}>
                    {/* <a href={`/products?product=${elt}`} className="text-white">
                      {elt}
                    </a> */}
                    <Link
                      href={{
                        pathname: "/products",
                        query: { product: elt },
                      }}
                      className=" text-white "
                    >
                      {elt}
                    </Link>
                  </p>
                ))}
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold text-white">
                  Useful links
                </h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="#!" className="text-white">
                   Home
                  </a>
                </p>
                <p>
                  {/* <a href="/aboutus" className="text-white">
                    About Us
                  </a> */}
                   <Link
                      href={{
                        pathname: "/aboutus",
                      }}
                      className=" text-white "
                    >
                        About Us
                    </Link>
                </p>
                <p>
                  
                  <Link
                      href={{
                        pathname: "/aboutus",
                      }}
                      className=" text-white "
                    >
                          Contact Us
                    </Link>
                </p>
                <p>
                 
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold text-white">Contact</h6>
                <div className="mb-4 mt-0  mx-auto" />
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.google.com/maps/dir//Parshwa+Impex+1003,+Levata+64,+Nagdevi+St,+Mohamadali+Road+Mumbai,+Maharashtra+400003/@18.9520682,72.8335811,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3be7cf075271f35f:0xaef4510db74de952"
                >
                   <span style={{fontWeight:"bolder"}}> PARSHWA IMPEX</span>, 1003, Levata, 64, Nagdevi St, Mohamadali Road,
                  Mumbai, Maharashtra 400003
                </a>
                <br/>
                <div className="pt-4">
                <a
                  href="mailto:parshwaimpex1@gmail.com"
                >
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  parshwaimpex1@gmail.com
                </a>
                </div>
                <div className="pt-4">
                <a href="tel:+9322332724" className="pt-4">
                  <i className="fas fa-phone mr-3"></i> <p>+919322332724</p>
                </a>
                </div>
                <a href="tel:+9892402162">
                  <i className="fas fa-print mr-3"></i>  <p>+919892402162</p>
                </a>
              </div>
            </div>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2024 Copyright:
            <a className="text-white" href="/">
              {" "}
              <span style={{fontWeight:"bolder"}}> PARSHWA IMPEX</span>
            </a>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
