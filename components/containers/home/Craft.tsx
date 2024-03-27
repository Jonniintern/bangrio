import Image from "next/image";
import Link from "next/link";
import CraftThumb from "@/public/images/craft-thumb_anim.gif";
import Shape from "@/public/images/footer/shape-one.png";

const Craft = () => {
  return (
    <section className="section craft" id="scrollPosition">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">Bangr Lab</span>
              <h2 className="title title-animation">Next Level NFT usage</h2>
              <p>Built from scratch. Crafted for NFTs.</p>
              <div className="section__content-cta">
                <Link href="https://bangr.io" className="btn btn--primary">
                  Enter
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={CraftThumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div>
    </section>
  );
};

export default Craft;
