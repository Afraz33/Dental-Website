import styles from "./Guarantee.module.css";

function Guarantee() {
  return (
    <section>
      <div className={styles.top_bar}>
        <img src="/teeth_tick.png" alt="logo" className={styles.logo}></img>
        <h2 className={styles.heading_2}>100% Satisfaction Guarantee!</h2>
        <p className={styles.description}>
          We only provide high quality dentistry & materials backed by our 100%
          satisfaction guarantee. If you're ever unsatisfied with your visit,
          please let us know and we'll make it right.
        </p>
        <button className={styles.button}>Get Started</button>
      </div>
    </section>
  );
}

export default Guarantee;
