import Image from "next/image";
import Link from "next/link";
import One from "@/public/images/o-one.png";
import Two from "@/public/images/o-two.png";
import Three from "@/public/images/o-three.png";

const OverviewTwo = () => {
  return (
    <section className="section overview-two fade-wrapper pb-0">
      <div className="container">
        <div className="row align-items-center justify-content-center gaper">
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={One} alt="Image" priority />
              </div>
              <div className="content">
                <h4
                  className="title title-animation"
                  style={{ color: "white" }}
                >
                  Your Community
                </h4>
                <p className="tertiary-text">
                  Easier than any other software or app, inclusion and
                  empowering of the community
                </p>

                <div className="section__content-cta"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={Two} alt="Image" priority />
              </div>
              <div className="content">
                <h4
                  className="title title-animation"
                  style={{ color: "white" }}
                >
                  Their Playground
                </h4>
                <p className="tertiary-text">
                  Built for NFT's and usage. The most playful and open tool out
                  there
                </p>
                <div className="section__content-cta"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={Three} alt="Image" priority />
              </div>
              <div className="content">
                <h4
                  className="title title-animation"
                  style={{ color: "white" }}
                >
                  Our Support
                </h4>
                <p className="tertiary-text">
                  Small team, but this is our specialization. We do us, you do
                  you. Together
                </p>
                <div className="section__content-cta"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewTwo;
