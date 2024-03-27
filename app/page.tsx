import Header from "@/components/layout/header/Header";
import HomeBanner from "@/components/layout/banner/HomeBanner";
import TextSlider from "@/components/containers/home/TextSlider";
import Craft from "@/components/containers/home/Craft";
import TextSliderLarge from "@/components/containers/home/TextSliderLarge";
import Tools from "@/components/containers/home/Tools";
import Generation from "@/components/containers/home/Generation";
import Partner from "@/components/containers/home/Partner";
import ServiceSlider from "@/components/containers/home/ServiceSlider";
import UnlockSection from "@/components/containers/home/UnlockSection";
import Overview from "@/components/containers/home/Overview";
import VideoSection from "@/components/containers/home/VideoSection";

import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import Easy from "@/components/containers/home-two/Easy";
import Examples from "@/components/containers/home/Examples";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <HomeBanner />
        <TextSlider />
        <Craft />
        <TextSliderLarge />
        <Tools />
        <Generation />
        <Examples />
        <ServiceSlider />
        <UnlockSection />
        <Overview />
        <Easy />
        <VideoSection />
        <Partner />
      </main>
      <FooterTwo />

      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
