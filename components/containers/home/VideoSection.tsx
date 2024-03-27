import video from "@/public/images/video.gif";
import Image from "next/image";

const VideoSection = () => {
  return (
    <section className="section video-s pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="video-s__inner">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-9 col-xxl-7">
                  <div className="section__header text-center">
                    <h1 className="title mt-0">Next Wave of Web3 Content</h1>

                    <h6>
                      A Masterpeice In The Making - A Community Game-changer
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <Image src={video} alt="Image" priority />
                <div className="col-12">
                  <div className="video-s__content align-items-center">
                    {/* <video autoPlay loop muted controls>
                      <source src="/images/video.mp4" type="video/mp4" />
                    </video> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
