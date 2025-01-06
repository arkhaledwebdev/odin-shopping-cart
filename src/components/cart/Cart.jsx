import useCart from "../../hooks/useCart";
import styles from "./Cart.module.css";
import { Minus, Plus, Trash2 } from "lucide-react";

function Cart() {
  const {
    cart,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getCartCount,
    getCartTotalPrice,
  } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  const handleDeleteFromCart = (product) => {
    deleteFromCart(product);
  };

  return cart.length > 0 ? (
    <div className={styles.cartContainer}>
      <p className={styles.title}>
        You have {getCartCount()} item{getCartCount() > 1 && "s"} in your cart
      </p>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.header}>Product</th>
              <th className={styles.header}>Price</th>
              <th className={styles.header}>Quantity</th>
              <th className={styles.header}>Total</th>
              <th className={styles.header}></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className={styles.row}>
                <td className={styles.cell}>{item.title}</td>
                <td className={styles.cell}>{item.price} $</td>
                <td className={styles.cell}>
                  <div className={styles.quantityContainer}>
                    <button
                      className={styles.button}
                      onClick={() => handleRemoveFromCart(item)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className={styles.icon} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className={styles.button}
                      onClick={() => handleAddToCart(item)}
                    >
                      <Plus className={styles.icon} />
                    </button>
                  </div>
                </td>
                <td className={styles.cell}>{item.price * item.quantity} $</td>
                <td className={styles.cell}>
                  <button
                    className={`${styles.button} ${styles.deleteButton}`}
                    onClick={() => handleDeleteFromCart(item)}
                  >
                    <Trash2 className={styles.icon} />
                  </button>
                </td>
              </tr>
            ))}
            <tr className={styles.totalRow}>
              <td
                colSpan="3"
                className={`${styles.totalCell} ${styles.alignRight}`}
              >
                Total:
              </td>
              <td colSpan="2" className={styles.totalCell}>
                {getCartTotalPrice()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <div className={styles.cartContainer}>
      <p className={styles.title}>No items in your cart</p>
    </div>
  );
}

export default Cart;
