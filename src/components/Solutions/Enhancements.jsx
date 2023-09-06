import styles from "./Enhancements.module.css";

function Enhancements() {
  return (
    <section className={styles.Enhancements}>
      <div className={styles.grid}>
        <div className={styles.grid_column}>
          <h2 className={styles.heading_2}>
            Welcome to your cosmetic dental visit
          </h2>
          <p className={styles.paragraph}>
            Come on in! Use an iPad to check in and fill out your patient forms.
            We’ll escort you back to a patient room soon — our average wait time
            is around 5 minutes.
          </p>
          <div className={styles.image_div}>
            <img
              className={styles.image}
              src="doc_meet.jpg"
              alt="doc_meet"
            ></img>
          </div>
        </div>
        <div className={styles.grid_column}>
          <h2 className={styles.heading_2}>Choose Your Enhancements</h2>
          <p className={styles.paragraph} style={{ marginTop: "-200px" }}>
            Work 1-on-1 with your dentist to pick the best cosmetic treatment to
            meet your vision:
          </p>
          <div
            className={styles.treatment_grid}
            style={{ marginTop: "-290px" }}
          >
            <div className={styles.treatment}>
              <h4 style={{ marginBottom: "0px" }}>Invisalign</h4>
              <p>
                The easy way to straighten your teeth. The Invisalign system
                uses clear, removable aligners. Great for adults and teens.
              </p>
            </div>
            <div className={styles.treatment}>
              <h4 style={{ marginBottom: "0px" }}>Invisalign</h4>
              <p>
                The easy way to straighten your teeth. The Invisalign system
                uses clear, removable aligners. Great for adults and teens.
              </p>
            </div>
            <div className={styles.treatment}>
              <h4 style={{ marginBottom: "0px" }}>Invisalign</h4>
              <p>
                The easy way to straighten your teeth. The Invisalign system
                uses clear, removable aligners. Great for adults and teens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enhancements;
