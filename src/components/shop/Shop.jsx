import useProducts from "../../hooks/useProducts";
import Card from "../card/Card";
import styles from "./Shop.module.css";

function Shop() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading......</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className={styles.cardContainer}>
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default Shop;
