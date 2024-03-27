"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import One from "@/public/images/banner/large-slider/01_600.gif";
import Two from "@/public/images/banner/large-slider/02_600.gif";
import Three from "@/public/images/banner/large-slider/03_600.gif";
import Four from "@/public/images/banner/large-slider/04_600.gif";
import Five from "@/public/images/banner/large-slider/05_600.gif";
import SmOne from "@/public/images/banner/small-slider/01_300.gif";
import SmTwo from "@/public/images/banner/small-slider/02_300.gif";
import SmThree from "@/public/images/banner/small-slider/03_300.gif";
import SmFour from "@/public/images/banner/small-slider/04_300.gif";
import SmFive from "@/public/images/banner/small-slider/05_300.gif";
import ThumbOne from "@/public/images/banner/banner-thumb-one.png";
import Frame from "@/public/images/frame-one.png";

const HomeBanner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window !== "undefined") {
      const deviceWidth = window.innerWidth;
      if (document.querySelector(".banner") && deviceWidth >= 768) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "top top",
            end: "+=40%",
            scrub: 1,
            pin: false,
          },
        });

        tl.to(".banner-thumb-one img", {
          transform: "rotate(14deg)",
          x: "300px",
          opacity: 1,
          duration: 3,
        });

        tl.to(".banner .banner-anime", {
          "--transformY": "300px",
          opacity: 0,
          duration: 3,
        });
      }
    }
  }, []);

  return (
    <section className="banner bg-img">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-7 col-lg-7 col-xxl-6">
            <div className="banner__content text-center">
              <h1>
                Make a <span>Bangr</span> <br />
                Use The <span className="banner-anime">LAB</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        speed={5000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        className="banner__large-slider"
      >
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={One} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Two} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Three} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Four} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Five} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={One} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Two} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Three} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Four} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__large-slider__single">
            <Image src={Five} alt="Image" priority />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        speed={20000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        className="banner__small-slider"
      >
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmOne} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmTwo} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmThree} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFour} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFive} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmOne} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmTwo} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmThree} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFour} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFive} alt="Image" priority />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmOne} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmTwo} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmThree} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFour} alt="Image" priority />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__small-slider__single">
            <Image src={SmFive} alt="Image" priority />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="banner-thumb-one">
        <Image src={ThumbOne} alt="Image" priority />
      </div>
      <Link className="scroll-position-btn" href="https://lab.bangr.io">
        <Image src={Frame} alt="Image" priority />
        <i className="bi bi-arrow-right"></i>
      </Link>
    </section>
  );
};

export default HomeBanner;
