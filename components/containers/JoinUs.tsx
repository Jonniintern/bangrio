import Link from "next/link";

const JoinUs = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="footer-cmn__cta text-center appear-down">
          <h2 className="title fw-7">Questions?</h2>
          <div className="section__content-cta">
            <Link
              href="https://discord.com/invite/qpP4xVATHB"
              target="_blank"
              className="btn btn--primary"
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
