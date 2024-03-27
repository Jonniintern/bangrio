import Image from "next/image";
import Link from "next/link";
import unlockThumb from "@/public/images/unlock-thumb.png";

const UnlockSection = () => {
  return (
    <section className="section unlock pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <div className="section__header text-center">
              <h2 className="title sub-title-two mt-0">Curated Partnerships</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="section__content">
              <span className="sub-title">Private Services</span>
              <h2 className="title">Content Heaven</h2>
              <p>
                Entering the Bangr-infrastructure. The gates of content
                explosions open for the community.
              </p>
              {/* <div className="section__content-cta">
                <Link href="partnership" className="btn btn--primary">
                  Log in
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1 col-xxl-6 offset-xxl-2">
            <div className="unlock__thumb text-start text-lg-end">
              <div>
                <Image src={unlockThumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockSection;
