"use client";
import { products } from "@/contant";
import NAVBAR from "../components/nav-bar";
import styles from "../page.module.css";
import Image from "next/image";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Product = () => {
  const [cat, setCat] = useState<Object[]>();
  const [discription, setDiscription] = useState<any>();
  const [showDiscription, setShowDiscription] = useState<any>(false);
  
  

  const searchParams = useSearchParams();
  const query: any = searchParams.get("product") ?? "1"; // default value is "1"
  console.log("query", { query }, { cat });

  useEffect(() => {

    setCat([...products[query].categories] || []);
    setDiscription(products[query])
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

       { showDiscription && <div className="container my-5">
          <div className="row">
            <div className="col-lg-6">
              <h1>Image</h1>
            </div>
            <div className="col-lg-6  about-text">
              <h2>{query || ""}</h2>
              <h5 >
              {discription.p1}
              </h5>
              <p>
              {discription.p2}

              </p>
            </div>
          </div>
        </div>}
        <div className="container pt-5">
       {showDiscription && <div className="col-lg-12 text-center ">
              <h2>Related products</h2>
        </div>}
          <div className="row" style={{cursor:"pointer"}} onClick={()=>setShowDiscription(!showDiscription)}>
            {cat?.map((elt: any, i) => (
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
                    <button
                      className="site-btn "
                      style={{ textDecoration: "none" }}
                      onClick={()=>{
                        setShowDiscription(!showDiscription)
                      }}
                    >
                     {!showDiscription? "Discover more": "See products"} 
                    </button>
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
