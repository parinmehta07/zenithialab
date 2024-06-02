"use client";
import { products } from "@/contant";
import NAVBAR from "../components/nav-bar";
import styles from "../page.module.css";
import Image from "next/image";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Product = () => {
  const [cat, setCat] = useState<Object[]>();
  const [description, setDescription] = useState<any>();
  const [showDescription, setShowDescription] = useState<any>(false);

  const searchParams = useSearchParams();
  const query: any = searchParams.get("product") ?? "1"; // default value is "1"
  console.log("query", { query }, { cat });

  useEffect(() => {
    setCat([...products[query].categories] || []);
    // setDescription(products[query])
  }, [query]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const setDescriptionFunction = (index: number) => {
    if (!cat) return;
    const { p1, p2, logo, name }: any = cat[index];
    setDescription({ p1, p2, logo, name });
    setShowDescription(true);
    scrollToTop(); // Scroll to the top when setting the description
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [description]);

  return (
    <div>
      <main className={styles.main}>
        <div className="text-white py-5 gradient-bg mt-4 mb-4">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="">{query}</h2>
            </div>
          </div>
        </div>

        {showDescription && query != "Safety Equipment" && (
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="aspect-ratio-container">
                  <Image
                    src={`${description?.logo}`}
                    alt="#"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="col-lg-6 about-text">
                <h2 className="text-center">{description?.name || ""}</h2>
                <h5>{description?.p1}</h5>
                <h5>{description?.p2}</h5>
              </div>
            </div>
          </div>
        )}

        <div className="container">
          {showDescription && query != "Safety Equipment" && (
            <div className="col-lg-12 text-center">
              <h2>Related products</h2>
            </div>
          )}

          {query != "Safety Equipment" && (
            <div className="row">
              {cat?.map((elt: any, i) => (
                <div
                  className="col-md-4"
                  key={i}
                  style={{ cursor: "pointer" }}
                  onClick={() => setDescriptionFunction(i)}
                >
                  <div className="products">
                    <h4>{elt.name}</h4>
                    <div className="aspect-ratio-container">
                      <Image
                        src={`${elt.logo}`}
                        alt="#"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div>
                      <button
                        className="site-btn"
                        style={{ textDecoration: "none" }}
                        onClick={() => {
                          setDescriptionFunction(i);
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
                  <div className="aspect-ratio-container">
                    <Image
                      src={`https://dkcbearings.in/wp-content/uploads/2020/08/safety-item.jpg`}
                      alt="#"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className="col-lg-6 about-text">
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
                        <td>Suit</td>
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
