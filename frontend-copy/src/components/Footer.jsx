import "./Footer.css";
import { RiDnaFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">

          {/* Brand */}
          <div className="footer__col footer__col--brand">
            <div className="footer__brandRow">
              <div className="footer__icon">
                <RiDnaFill />
              </div>

              <div className="footer__brandText">
                <span className="footer__rna">RNA</span>
                <span className="footer__verse">verse</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col footer__col--links">
            <div className="footer__title">Quick Links</div>
            <a className="footer__link" href="/">Home</a>
            <a className="footer__link" href="/predict">Predict</a>
            <a className="footer__link" href="/results">Results</a>
            <a className="footer__link" href="/help">Help</a>
          </div>

          {/* Resources */}
          <div className="footer__col footer__col--resources">
            <div className="footer__title">Resources</div>
            <a className="footer__link" href="#">Documentation</a>
            <a className="footer__link" href="#">FAQ</a>
          </div>

          {/* Contact */}
          <div className="footer__col footer__col--contact">
            <div className="footer__title">Contact</div>
            <a
              className="footer__link"
              href="mailto:research@uwinnipeg.ca"
            >
              research@uwinnipeg.ca
            </a>
          </div>

        </div>

        <div className="footer__bottom">
          <div>
            RNAverse Project — University of Winnipeg (Applied Computer Science)
          </div>
          <div>© 2026 · Academic use only</div>
        </div>
      </div>
    </footer>
  );
}
