import { Link, Outlet } from "react-router-dom";
import { LaptopMinimal, Store, ShoppingCart } from "lucide-react";
import styles from "./App.module.css";

function App() {
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
              <span className={styles.navText}>Cart</span>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
