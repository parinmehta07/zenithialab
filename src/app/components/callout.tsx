function CALLOUT() {
  return (
    <section className="  hero-section video-container">
      <video autoPlay muted loop>
        <source
          src="/img/mainvideo.mp4"
          type="video/mp4"
        />
      </video>
      <div className="caption">
        <h1 style={{color:"White"}}> Since 1990</h1>
        <h2 style={{ fontSize: "32px", marginBottom: "20px",color:"White" }}>
              We are one of the leading Stockiest <br />
              and Suppliers for Bearings for all Types of Industries.
            </h2>
            <div style={{ display: "flex", justifyContent: "center",paddingTop:"48px" }}>
             <div className="text-white ">
               <a
                href="#contact-us"
                className="site-btn  sbg-line mt-5 "
                style={{ textDecoration: "none",marginInline:"8px",backgroundColor:"#1877F2",color:"white"}}
              >
                Discover more
              </a>
             </div>
             <div className="text-white ">
             <a
                href="#contact-us"
                className="site-btn  sbg-line mt-5"
                style={{ textDecoration: "none",marginInline:"8px" ,backgroundColor:"#1877F2",color:"white" }}
              >
                Contact us
              </a>
             </div>
            </div>
      </div>
      {/* <div className="container ">
        <div className="row d-flex">
          <div className="ta-callout-inner text-xs text-center text-white pt-4">
            <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
              Since 1990
            </h1>
            <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
              We are one of the leading Stockiest <br />
              and Suppliers for Bearings for all Types of Industries.
            </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href="#contact-us"
                className="site-btn sb-gradients sbg-line mt-5 mr-3"
                style={{ textDecoration: "none" }}
              >
                Discover more
              </a>
              <a
                href="#contact-us"
                className="site-btn sb-gradients sbg-line mt-5"
                style={{ textDecoration: "none" }}
              >
                Request contact-us
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default CALLOUT;
