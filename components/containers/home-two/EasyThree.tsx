import Image from "next/image";
import Bot from "@/public/images/bot-three.png";
import One from "@/public/images/r-d.png";
import Two from "@/public/images/wave.png";
import Three from "@/public/images/r-d-t.png";
import Link from "next/link";

const EasyThree = () => {
  return (
    <section className="section easy easy--secondary position-relative">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="easy__thumb dir-rtl reveal-img d-block parallax-img">
              <Image src={Bot} alt="Image" className="unset" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6 offset-xl-1">
            <div className="section__content">
              <span className="sub-title-two">First step</span>
              <h2 className="title title-animation">
                Enter the lab one step at a time.
              </h2>
              <p>
                By using the storage and installing the discord bot, the project
                takes the first steps into the infrastructure of the Bangr
                Engine. From there it can be implemented in the deeper
                infrastructure, step by step.
              </p>
              <div className="section__content-cta">
                <div className="easy__cta">
                  <div className="easy__cta-single">
                    <div className="content">
                      <h4>Storage</h4>
                      <p>Simple access</p>
                    </div>
                    <div className="thumb">
                      <Image src={One} alt="Image" priority />
                    </div>
                  </div>
                  <div className="easy__cta-single easy__cta-single-alt">
                    <div className="thumber">
                      <Image src={Two} alt="Image" priority />
                    </div>
                    <div className="content">
                      <h4>Discord Bot</h4>
                      <p>Render</p>
                    </div>
                    <div className="thumb">
                      <Image src={Three} alt="Image" priority />
                    </div>
                  </div>
                </div>
                <div className="section__content-cta">
                  <div className="btn btn--secondary">
                    <h6>Make Inquiry</h6>
                  </div>
                  {/* <div className="btn btn--secondary">
                    <h6>From</h6>
                    <h4 style={{ color: "white" }}>$30</h4>
                    <h5>/month</h5>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyThree;
