import Image from "next/image";
import Link from "next/link";
import thumb from "@/public/images/contact/thumb.png";
import mail from "@/public/images/contact/mail.png";
import phone from "@/public/images/contact/phone.png";
import location from "@/public/images/contact/location.png";

const ContactSection = () => {
  return (
    <section className="section m-contact fade-wrapper">
      <div className="container">
        <div className="row gaper section pt-0">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="m-contact__single fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" priority />
              </div>
              <div className="content">
                <h3>Email</h3>
                <p>
                  <Link href="mailtocontact@bangr.io">contact@bangr.io</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="m-contact__single fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" priority />
              </div>
              <div className="content">
                <h3>Discord</h3>
                <p>
                  <Link href="https://discord.gg/qpP4xVATHB" target="_blank">
                    discord.gg/qpP4xVATHB
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="m-contact__single fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" priority />
              </div>
              <div className="content">
                <h3>Twitter</h3>
                <p>
                  <Link href="https://x.com/bangrbot" target="_blank">
                    x.com/bangrbot
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6 col-xl-6">
            <div className="m-contact__form">
              <h3 className="title-animation fw-7 text-white text-uppercase mt-12">
                PLEASE MESSAGE ME, IF YOU HAVE ANY QUERIES
              </h3>
              <form action="#" method="post">
                <div className="input-single">
                  <input
                    type="text"
                    name="c-name"
                    id="cName"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="input-single">
                  <input
                    type="email"
                    name="c-Email"
                    id="cEmail"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="input-single">
                  <input
                    type="text"
                    name="c-number"
                    id="cnumber"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="input-single">
                  <textarea
                    name="c-message"
                    id="cMessage"
                    cols={30}
                    rows={10}
                    placeholder="Type A Message"
                  ></textarea>
                </div>
                <div className="section__content-cta text-center">
                  <button type="submit" className="btn btn--primary">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <div className="m-contact__thumb reveal-img parallax-img">
              <Image src={thumb} alt="Image" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
