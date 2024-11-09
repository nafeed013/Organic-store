import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineBookmarks } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row py-3 border-bottom">
          <div className="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
            <div className="d-flex align-items-center my-3 my-sm-0">
              <a href="#">
                <img
                  src="Images/logo.svg"
                  alt="logo"
                  className="img-fluid"
                ></img>
              </a>
            </div>
          </div>

          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
            <div
              className={`search-bar row bg-light p-2 rounded-4 ${styles.searchSection}`}
            >
              <div className="col-11 col-md-11">
                <input
                  type="text"
                  className="form-control border-0 bg-transparent"
                  placeholder="Search..."
                ></input>
              </div>
              <div className="col-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <ul className="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-center mb-0 fw-bold text-uppercase text-dark">
              <li className={`nav-item active ${styles.sectionThree}`}>
                <a href="#" className={`nav-link ${styles.navLink}`}>
                  Home
                </a>
                <a href="#" className={`nav-link ${styles.navLink}`}>
                  About us
                </a>
                <a href="#" className={`nav-link ${styles.navLink}`}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li className={styles.iconArea}>
                <a href="#" className="p-2 mx-1">
                  <FaRegCircleUser className={styles.icon} />
                </a>
              </li>
              <li className={styles.iconArea}>
                <a href="#" className="p-2 mx-1">
                  <MdOutlineBookmarks className={styles.icon} />
                </a>
              </li>
              <li className={styles.iconArea}>
                <a
                  href="/cart"
                  className="p-2 mx-1"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCart"
                  aria-controls="offcanvasCart"
                >
                  <GrCart className={styles.icon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
