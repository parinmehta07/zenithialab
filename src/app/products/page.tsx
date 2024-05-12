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
    // setDiscription(products[query])
  }, []);

  const setDiscriptionFunction = (index: number) => {
    if (!cat) return;
    const { p1, p2, logo, name }: any = cat[index];
    setDiscription({ p1, p2, logo, name });
    setShowDiscription(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [discription]);

  return (
    <div>
      <main className={styles.main}>
        <div className="container-fluid  text-white py-5 gradient-bg">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="">{query}</h2>
            </div>
          </div>
        </div>

        {showDiscription && query != "Safety Equipment" && (
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-6">
                <Image
                  src={`${discription?.logo}`}
                  alt="#"
                  width={390}
                  height={370}
                />
              </div>
              <div className="col-lg-6  about-text ">
                <h2 className="text-center">{discription?.name || ""}</h2>
                <h5>{discription?.p1}</h5>
                <h5>{discription?.p2}</h5>
              </div>
            </div>
          </div>
        )}
        <div className="container ">
          {showDiscription && query != "Safety Equipment" && (
            <div className="col-lg-12 text-center ">
              <h2>Related products</h2>
            </div>
          )}
          {query != "Safety Equipment" && (
            <div className="row">
              {cat?.map((elt: any, i) => (
                <div
                  className="col-md-4 "
                  key={i}
                  style={{ cursor: "pointer" }}
                  onClick={() => setDiscriptionFunction(i)}
                >
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
                        onClick={() => {
                          setDiscriptionFunction(i);
                        }}
                      >
                        Discover more
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {query == "Safety Equipment" && (
            <div className="container my-5">
              <div className="row">
                <div className="col-lg-6">
                  <Image
                    src={`https://dkcbearings.in/wp-content/uploads/2020/08/safety-item.jpg`}
                    alt="#"
                    width={390}
                    height={370}
                  />
                </div>
                <div className="col-lg-6  about-text">
                  <h2>Anchor Fastener & Foundation Bolt</h2>
                  <h5>
                    In order to meet the emerging requirements of esteemed
                    clients, we are offering a superior range of Industrial
                    Safety Products.
                  </h5>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Material</th>
                        <th scope="col">Shape</th>
                        <th scope="col">Product Type</th>
                        <th scope="col">Application</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Leather</th>
                        <td>Round</td>
                        <td>Shoes</td>
                        <td>Safety Products</td>
                      </tr>
                      <tr>
                        <th scope="row">Steel</th>
                        <td>Square</td>
                        <td>Safety</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">Plastic</th>
                        <td>Round</td>
                        <td>Suite</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
export default Product;
