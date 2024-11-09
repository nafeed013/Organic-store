import styles from "./Product.module.css";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartItemsActions } from "../store/cartItems";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartItemsActions.addToCart(product.id));
  };

  return (
    <div className={styles.col}>
      <div className="product-item">
        <figure className={styles.imageArea}>
          <a href="#" title="Product Title">
            <img
              src={product.image}
              alt="Product Thumbnail"
              className={styles.productImage}
            ></img>
          </a>
        </figure>
        <div className="d-flex flex-column text-center">
          <div className={styles.titleSection}>
            <h5 className="fw-normal">{product.title}</h5>
            <span>
              {product.ratings}
              <FaStar className={styles.icon} />
            </span>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <del className={styles.price}>Rs. {product.price}</del>
            <span className="text-dark fw-semibold">
              Rs. {product.discountPrice}
            </span>
            <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
              {product.discountPercentage}% OFF
            </span>
          </div>
          <div className={`col-7 ${styles.btnArea}`}>
            <button
              className={`btn rounded-1 p-2 fs-7 ${styles.addToCartBtn}`}
              onClick={() => handleAddToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
