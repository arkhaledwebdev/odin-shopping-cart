import styles from "./Error.module.css";
import { AlertCircle } from "lucide-react";

function Error() {
  return (
    <div className={styles.errorContainer}>
      <AlertCircle className={styles.errorIcon} />
      <p className={styles.errorMessage}>
        An error occurred. Please try again later.
      </p>
    </div>
  );
}

export default Error;
