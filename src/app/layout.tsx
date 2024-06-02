import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import NAVBAR from "./components/nav-bar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zenithialabs",
  description: "zenithialabs Crypto Trading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <script
        type="text/javascript"
        src="https://pym.nprapps.org/pym.v1.min.js"
      ></script>
      <script
        type="text/javascript"
        src="https://formkeep-production-herokuapp-com.global.ssl.fastly.net/formkeep-embed.js"
      ></script>
      </head>

      <body className={inter.className}>
        <header className="header-section ">
          <NAVBAR />
        </header>

        {children}
        <div>
          <Footer />
          {/* <footer className="footer-section ">
        <div className="row ">
          <div className="footer-bottom">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center text-lg-right pt-4">
                <p style={{ fontSize: "10px" }}>
                  Disclaimer - The Group is not involved in the management of
                  crypto assets or fiat currency on behalf of investors. The
                  information provided is purely for informational purposes and
                  should not be considered an offer or solicitation to purchase
                  any crypto assets or financial instruments.
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
      </footer> */}
        </div>
      </body>
    </html>
  );
}
