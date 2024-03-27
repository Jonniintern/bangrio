import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/easy-two-thumb.png";

const EasyTwo = () => {
  return (
    <section className="section easy-two position-relative">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6 col-xl-6">
            <div className="easy__thumb reveal-img parallax-img">
              <Image src={Thumb} alt="Image" priority />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div className="section__content">
              <span className="sub-title-two">The Bangr Lab & Engine</span>
              <h2 className="title title-animation">Curated partnerprogram</h2>
              <p>
                We have limited partnerships atm because we focus on a strong
                development foundation first. But if you feel your project would
                fit well into this, dont hesitate making contact.
              </p>
              <div className="section__content-cta">
                <Link href="sign-in" className="btn btn--primary">
                  Road to Partnership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyTwo;
