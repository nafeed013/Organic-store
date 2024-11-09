import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container-lg">
        <div className={styles.footer}>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <img
                src="Images/logo.svg"
                width="240"
                height="70"
                alt="logo"
              ></img>
              <div className="social-links mt-3">
                <ul
                  className={`d-flex list-unstyled gap-2 ${styles.socialMediaSection}`}
                >
                  <li>
                    <a href="#" className={styles.socialMediaBtn}>
                      <FaFacebookSquare className={styles.socialMediaIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.socialMediaBtn}>
                      <FaXTwitter className={styles.socialMediaIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.socialMediaBtn}>
                      <BsYoutube className={styles.socialMediaIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.socialMediaBtn}>
                      <RiInstagramFill className={styles.socialMediaIcon} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.socialMediaBtn}>
                      <FaAmazon className={styles.socialMediaIcon} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Organic</h5>
              <ul className="menu-list list-unstyled">
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    About us
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    Conditions{" "}
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    Our Journals
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    Careers
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    Affiliate Programme
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    Ultras Press
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Customer Service</h5>
              <ul className="menu-list list-unstyled">
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    FAQ
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    Privacy Policy
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    Returns &amp; Refunds
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    Cookie Guidelines
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="nav-link">
                    Delivery Information
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Subscribe Us</h5>
              <p>
                Subscribe to our newsletter to get updates about our grand
                offers.
              </p>
              <form className="d-flex mt-3 gap-0">
                <input
                  className="form-control rounded-start rounded-0 bg-light"
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                ></input>
                <button className="btn btn-dark rounded-end rounded-0">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
