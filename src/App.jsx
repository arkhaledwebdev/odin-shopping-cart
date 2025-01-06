import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LaptopMinimal, Store, ShoppingCart } from "lucide-react";
import styles from "./App.module.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCart((currentCart) => {
      return currentCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const deleteFromCart = (product) => {
    setCart((currentCart) => {
      return currentCart.filter((item) => item.id !== product.id);
    });
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.navLogo}>
            <LaptopMinimal size={36} />
            <span className={styles.navTitle}>TechStore</span>
          </Link>
          <div className={styles.navLinks}>
            <Link to="/shop" className={styles.navLink}>
              <Store size={36} />
              <span className={styles.navText}>Shop</span>
            </Link>
            <Link to="/cart" className={styles.navLink}>
              <ShoppingCart size={36} />
              <span className={styles.navText}>Cart ({getCartCount()})</span>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet
        context={{
          cart,
          addToCart,
          removeFromCart,
          deleteFromCart,
          getCartCount,
          getCartTotalPrice,
        }}
      />
    </div>
  );
}

export default App;
