import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/tools-thumb-two.png";

const GenerationThree = () => {
  return (
    <section className="section gen pb-0" id="scrollPosition">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <div className="section__header text-center">
              <h2 className="title sub-title-two mt-0 title-animation">
                .01 : Lab User - Enter
              </h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 col-xxl-5">
            <div className="section__content">
              <span className="sub-title-two">Level 1</span>
              <h2 className="title title-animation">
                Bangr Storage Hub + BangrBot in Discord
              </h2>
              <p>
                Store, filter and moderate your own made content. Invite the
                community to participate. Use the discord bot to fetch from the
                hub.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6 offset-xxl-1">
            <div className="gen__thumb">
              <div className="reveal-img parallax-img">
                <Image src={Thumb} alt="Image" className="unset" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerationThree;
