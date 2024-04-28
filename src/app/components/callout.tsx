function CALLOUT() {
  return (
    <section className=" hero-section" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)',}}>
      <div className="container">
        <div className="row d-flex">
        <div className="ta-callout-inner text-xs text-center text-white pt-4" >
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>
              Since 1990
            </h1>
            <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>
              We are one of the leading Stockiest <br/>and Suppliers for Bearings for all Types of Industries.
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a
                href="#contact-us"
                className="site-btn sb-gradients sbg-line mt-5 mr-3"
                style={{  textDecoration: 'none' }}
              >
                Discover more
              </a>
              <a
                href="#contact-us"
                className="site-btn sb-gradients sbg-line mt-5"
                style={{  textDecoration: 'none' }}
              >
                Request contact-us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CALLOUT;
