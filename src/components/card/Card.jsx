import PropTypes from "prop-types";
import styles from "./Card.module.css";
import useCart from "../../hooks/useCart";

function Card({ id, title, price, description, image }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, price, description, image });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt="product image" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <h4 className={styles.title}>{price} $</h4>
          <button className={styles.cartButton} onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
};
