import styles from "./Dentists.module.css";

function Dentists() {
  return (
    <section>
      <div className={styles.top_bar}>
        <img src="/teeth_tick.png" alt="logo" className={styles.logo}></img>
        <h2 className={styles.heading_2}>100% Satisfaction Guarantee!</h2>
      </div>
    </section>
  );
}

export default Dentists;
