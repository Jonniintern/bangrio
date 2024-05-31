"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import JoinUs from "@/components/containers/JoinUs";
import Logo from "public/images/logo.png";
import DiscordLogo from "@/public/images/icons8-discord.png";
import TwitterLogo from "@/public/images/icons8-twitterx.png";

const FooterTwo = () => {
  const pathname = usePathname();
  const isAboutUsOrServicesRoute =
    pathname === "/about-us" || pathname === "/services";

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`footer-cmn ${isAboutUsOrServicesRoute ? " lilu-foot" : ""}`}
    >
      <div className="container">
        <JoinUs />
        <div className="row">
          <div className="col-12">
            <div className="footer-cmn__inner section ">
              <div className="row  gaper">
                <div className="col-12 col-lg-7 col-xl-8">
                  <div className="footer-cmn__left text-center text-lg-start">
                    <Link href="/" className="logo">
                      <Image src={Logo} alt="Image" priority />
                    </Link>
                    <div className="footer__nav-list">
                      <ul className="justify-content-center justify-content-lg-start">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="https://lab.bangr.io">BangrLab</Link>
                        </li>
                        {/* <li>
                          <Link href="shop">Services</Link>
                        </li> */}
                        {/* <li>
                          <Link href="blog">Blog</Link>
                        </li> */}
                        {/* <li>
                          <Link href="contact-us">Discord</Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 col-xl-4">
                  <div>
                    <div className="section__header text-center">
                      {" "}
                      <Link
                        href="https://lab.bangr.io"
                        className="btn btn--primary "
                      >
                        <h2 style={{ color: "black" }}>
                          Launch
                          <span className="fw-7">BangrLab</span>
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="row gaper">
            <div className="col-12 col-lg-6">
              <div className="footer__copyright-content text-center text-lg-start">
                <p>
                  Copyright &copy; <span id="copyrightYear">{currentYear}</span>{" "}
                  <Link href="/">Bangr.io</Link>. All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="footer__copyright-social justify-content-center justify-content-lg-end">
                <p className="tertiary-text d-none d-lg-block">Contact Us :</p>
                <div className="social">
                  <Link href="https://discord.gg/tVAE9UTuy9" target="_blank">
                    <Image src={DiscordLogo} alt="Image" priority />
                  </Link>
                  <Link href="https://twitter.com/bangrbot" target="_blank">
                    <Image src={TwitterLogo} alt="Image" priority />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
