import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <section className={styles.heroContainer}>
        <img
          src="home_hero.jpg"
          alt="Laptops Hero image"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Discover Next-Gen Electronics</h1>
            <p className={styles.heroSubtitle}>
              Explore the latest tech devices at the best prices
            </p>
            <button className={styles.heroButton}>Shop Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;