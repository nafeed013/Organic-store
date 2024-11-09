import { useSelector } from "react-redux";
import Cart from "./Cart";
import styles from "./Checkout.module.css";

const checkout = () => {
  const cartItemsId = useSelector((store) => store.cart);

  const organicProducts = useSelector((store) => store.products);
  const finalProducts = organicProducts.filter((product) => {
    const productIndex = cartItemsId.indexOf(product.id);
    return productIndex >= 0;
  });

  let subTotal = 0;
  let shippingFee = 80;
  let totalDiscount = 0;
  let totalPrice = 0;

  finalProducts.map((product) => {
    subTotal += product.price + shippingFee;
    totalDiscount += product.price - product.discountPrice;
    totalPrice += product.discountPrice + shippingFee;
  });

  return (
    <>
      <main className={styles.main}>
        <div className={styles.pageTitle}>Review your order</div>

        <section className={styles.checkoutGrid}>
          <div className="cart-summary">
            {finalProducts.length === 0 ? (
              <center className={styles.continueShopping}>
                <h5>Your cart is empty</h5>
                <a
                  href="#"
                  type="button"
                  className={`btn btn-success ${styles.cartBtn}`}
                >
                  Continue shopping
                </a>
              </center>
            ) : (
              finalProducts.map((item) => {
                return <Cart item={item} key={item.id} />;
              })
            )}
          </div>
          <div className={styles.paymentSummary}>
            <div className="payment-info">
              <div className={styles.paymentSummaryTitle}>Order Summary</div>

              <div className={styles.paymentSummaryRow}>
                <div>Items ({finalProducts.length}):</div>
                <div
                  className={styles.paymentSummaryMoney}
                  data-testid="product-cost"
                >
                  Rs. {subTotal}
                </div>
              </div>

              <div className={styles.paymentSummaryRow}>
                <div>Shipping &amp; handling:</div>
                <div
                  className="payment-summary-money"
                  data-testid="shipping-cost"
                >
                  Rs. {shippingFee}
                </div>
              </div>

              <div className={styles.paymentSummaryRow}>
                <div>Total discount:</div>
                <div className="payment-summary-money" data-testid="total-cost">
                  Rs. {totalDiscount}
                </div>
              </div>

              <div className={styles.paymentSummaryRow}>
                <div>Order total:</div>
                <div className="payment-summary-money" data-testid="total-cost">
                  Rs. {totalPrice}
                </div>
              </div>
            </div>

            <button className={`button-primary ${styles.placeOrderButton}`}>
              Place your order
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default checkout;
