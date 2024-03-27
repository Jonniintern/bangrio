import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/easy-thumb.png";

const Easy = () => {
  return (
    <section className="section easy pb-0 position-relative">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="easy__thumb dir-rtl  d-block ">
              <Image src={Thumb} alt="Image" className="unset" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 offset-xl-2">
            <div className="section__content">
              <span className="sub-title-two">Building</span>
              <h2 className="title title-animation">Future Development</h2>
              <p>
                The BangrLab is always in development. More features to come,
                more ideas to be revealed. Partners we will also be included in
                the next levels of development.
              </p>
              {/* <div className="section__content-cta">
                <Link
                  href="https://discord.com/invite/qpP4xVATHB"
                  target="_blank"
                  className="btn btn--primary"
                >
                  Contact us
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Easy;
