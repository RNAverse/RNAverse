import {
  FaDna,
  FaHome,
  FaFlask,
  FaChartBar,
  FaQuestionCircle,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__col">
            <div className="footer__brandRow">
              <div className="footer__icon">
                <FaDna />
              </div>
              <div className="footer__brand">RNAverse</div>
            </div>
            <p className="footer__text">
              DNA and RNA methylation prediction platform powered by machine learning and deep learning models.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <div className="footer__title">Quick Links</div>

            <a className="footer__link" href="/">
              <FaHome style={{ marginRight: "6px" }} />
              Home
            </a>

            <a className="footer__link" href="/predict">
              <FaFlask style={{ marginRight: "6px" }} />
              Predict
            </a>

            <a
              className="footer__link"
              href="#results"
              onClick={(e) => e.preventDefault()}
            >
              <FaChartBar style={{ marginRight: "6px" }} />
              Results
            </a>

            <a
              className="footer__link"
              href="#help"
              onClick={(e) => e.preventDefault()}
            >
              <FaQuestionCircle style={{ marginRight: "6px" }} />
              Help
            </a>
          </div>

          {/* Resources */}
          <div className="footer__col">
            <div className="footer__title">Resources</div>

            <a
              className="footer__link"
              href="#docs"
              onClick={(e) => e.preventDefault()}
            >
              <FaBook style={{ marginRight: "6px" }} />
              Documentation
            </a>

            <a
              className="footer__link"
              href="#faq"
              onClick={(e) => e.preventDefault()}
            >
              <FaBook style={{ marginRight: "6px" }} />
              FAQ
            </a>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <div className="footer__title">Contact</div>

            <a className="footer__link" href="mailto:research@uwinnipeg.ca">
              <FaEnvelope style={{ marginRight: "6px" }} />
              research@uwinnipeg.ca
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <div>
            RNAverse Project University of Winnipeg Applied Computer Science
          </div>
          <div>
            Academic use only © 2026 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
