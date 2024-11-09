import Product from "../components/Product";
import styles from "./Products.module.css";
import { useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { ImLeaf } from "react-icons/im";
import { FaTruck } from "react-icons/fa";
import { useSelector } from "react-redux";

const Products = () => {
  const organicProducts = useSelector((store) => store.products);

  const [selectedCategory, setSelectedCategory] = useState("All");

  let onCategoryClicked = (value) => {
    setSelectedCategory(value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? organicProducts
      : organicProducts.filter(
          (organicProduct) => organicProduct.categories === selectedCategory
        );

  return (
    <>
      <section className={styles.mainBg}>
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-6 pt-5 mt-5">
              <h2 className="display-1 ls-1">
                <span className={`fw-bold ${styles.organic}`}>Organic</span>{" "}
                Foods at your <span className="fw-bold">Doorsteps</span>
              </h2>
              <p className="fs-4">Dignissim massa diam elementum.</p>
              <div className="d-flex gap-3">
                <a
                  href="#"
                  className={`btn text-uppercase fs-6 rounded-pill px-4 py-3 mt-3 ${styles.shoppingBtn}`}
                >
                  Start Shopping
                </a>
                <a
                  href="#"
                  className="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3"
                >
                  Join Now
                </a>
              </div>
              <div className="row my-5">
                <div className="col">
                  <div className="row text-dark">
                    <div className="col-auto">
                      <p className="fs-1 fw-bold lh-sm mb-0">14k+</p>
                    </div>
                    <div className="col">
                      <p className="text-uppercase lh-sm mb-0">
                        Product Varieties
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row text-dark">
                    <div className="col-auto">
                      <p className="fs-1 fw-bold lh-sm mb-0">50k+</p>
                    </div>
                    <div className="col">
                      <p className="text-uppercase lh-sm mb-0">
                        Happy Customers
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row text-dark">
                    <div className="col-auto">
                      <p className="fs-1 fw-bold lh-sm mb-0">10+</p>
                    </div>
                    <div className="col">
                      <p className="text-uppercase lh-sm mb-0">
                        Store Locations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-3 g-0 justify-content-center">
            <div className="col">
              <div
                className={`card border-0 rounded-0 p-4 text-light ${styles.cardZero}`}
              >
                <div className="row">
                  <div className="col-md-3 text-center">
                    <svg width="60" height="60">
                      <HiOutlineRefresh className={styles.icon} />
                    </svg>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body p-0">
                      <h5 className="text-light">Fresh from farm</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipi elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className={`card border-0 rounded-0 p-4 text-light ${styles.cardOne}`}
              >
                <div className="row">
                  <div className="col-md-3 text-center">
                    <svg width="60" height="60">
                      <ImLeaf className={styles.icon} />
                    </svg>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body p-0">
                      <h5 className="text-light">100% Organic</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipi elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className={`card border-0 rounded-0 p-4 text-light ${styles.cardTwo}`}
              >
                <div className="row">
                  <div className="col-md-3 text-center">
                    <svg width="60" height="60">
                      <FaTruck className={styles.icon} />
                    </svg>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body p-0">
                      <h5 className="text-light">Free delivery</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipi elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 overflow-hidden">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                <h2 className="section-title">Category</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="category-carousel swiper">
                <div className={`${styles.swiperWrapper}`}>
                  <div className={`nav-link ${styles.swiperSlide} text-center`}>
                    <img
                      src="Images/category-thumb-1.jpg"
                      className={styles.roundedCircle}
                      alt="Category Thumbnail"
                      onClick={(value) =>
                        onCategoryClicked((value = "Vegetables"))
                      }
                    ></img>
                    <h4 className="fs-6 mt-3 fw-normal category-title">
                      Vegetables
                    </h4>
                  </div>
                  <div className={`nav-link ${styles.swiperSlide} text-center`}>
                    <img
                      src="Images/category-thumb-2.jpg"
                      className={styles.roundedCircle}
                      alt="Category Thumbnail"
                      onClick={() => onCategoryClicked((value = "Fruits"))}
                    ></img>
                    <h4 className="fs-6 mt-3 fw-normal category-title">
                      Fruits
                    </h4>
                  </div>
                  <div className={`nav-link ${styles.swiperSlide} text-center`}>
                    <img
                      src="Images/category-thumb-3.jpg"
                      className={styles.roundedCircle}
                      alt="Category Thumbnail"
                      onClick={() => onCategoryClicked((value = "Grains"))}
                    ></img>
                    <h4 className="fs-6 mt-3 fw-normal category-title">
                      Grains
                    </h4>
                  </div>
                  <div className={`nav-link ${styles.swiperSlide} text-center`}>
                    <img
                      src="Images/category-thumb-4.jpg"
                      className={styles.roundedCircle}
                      alt="Category Thumbnail"
                      onClick={() => onCategoryClicked((value = "Herbs"))}
                    ></img>
                    <h4 className="fs-6 mt-3 fw-normal category-title">
                      Herbs
                    </h4>
                  </div>
                  <div className={`nav-link ${styles.swiperSlide} text-center`}>
                    <img
                      src="Images/category-thumb-5.jpg"
                      className={styles.roundedCircle}
                      alt="Category Thumbnail"
                      onClick={() => onCategoryClicked((value = "Dairy"))}
                    ></img>
                    <h4 className="fs-6 mt-3 fw-normal category-title">
                      Dairy
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap justify-content-between my-4">
                <h2 className="section-title">Products</h2>

                <div className="d-flex align-items-center">
                  <button
                    className={`btn rounded-1 ${styles.viewAllBtn}`}
                    onClick={() => onCategoryClicked((value = "All"))}
                  >
                    View All
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div
                className={`product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 ${styles.productsArea}`}
              >
                {filteredProducts.map((product) => {
                  return <Product product={product} key={product.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
