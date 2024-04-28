"use client";
import { products } from "@/contant";
import NAVBAR from "../components/nav-bar";
import styles from "../page.module.css";
import Image from "next/image";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Product = () => {
  const [cat, setCat] = useState({categories:[]});
  const searchParams = useSearchParams();
  const query: any = searchParams.get("product") ?? "1"; // default value is "1"
  console.log("query", { query }, { cat });

  useEffect(() => {

    setCat(products[query] || []);
  }, []);

  return (
    <div>
      <main className={styles.main}>
        <header className="header-section ">
          <NAVBAR />
        </header>
        <div className="container-fluid  text-white py-5 gradient-bg">
          <div className="row">
            <div className="col-12 text-center">
              <h2>{query}</h2>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6">
              <h1>Image</h1>
            </div>
            <div className="col-lg-6  about-text">
              <h2>Company Information</h2>
              <h5 >
              Parshwa Impex offers wordclass products and services Since 1992
              </h5>
              <p>
                Our company, Parshwa Impex, was established in 1992. We have
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
        <div className="container pt-2">
          <div className="row">
            {cat.categories.map((elt: any, i) => (
              <div className="col-md-4 " key={i}>
                <div className="products">
                  <h4>{elt.name}</h4>
                  <div className="">
                    <Image
                      src={`${elt.logo}`}
                      alt="#"
                      width={190}
                      height={170}
                    />
                  </div>
                  <div className="">
                    <a
                      href=""
                      className="site-btn "
                      style={{ textDecoration: "none" }}
                    >
                      Discover more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="footer-section pt-4 pb-0 footer" style={{}}>
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
    </div>
  );
};
export default Product;
