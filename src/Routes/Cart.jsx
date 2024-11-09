import { useDispatch } from "react-redux";
import styles from "./Cart.module.css";
import { cartItemsActions } from "../store/cartItems";

const Cart = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(cartItemsActions.removeFromCart(itemId));
  };

  return (
    <>
      <div className={styles.cartItemContainer}>
        <div className={styles.cartItemDetailsGrid}>
          <img className={styles.productImage} src={item.image}></img>

          <div className={styles.cartItemDetails}>
            <div className={styles.productName}>{item.title}</div>
            <div className="d-flex align-items-center gap-2">
              <del className={styles.discountPrice}>Rs. {item.price}</del>
              <span className="text-dark fw-semibold">
                Rs. {item.discountPrice}
              </span>
              <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
                {item.discountPercentage}% OFF
              </span>
            </div>

            <div className={styles.productQuantity}>
              Quantity : <span className={styles.quantityLabel}>1</span>
              <div
                className={`link-primary ${styles.delete}`}
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
