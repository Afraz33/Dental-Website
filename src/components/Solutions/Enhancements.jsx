import styles from "./Enhancements.module.css";

function Enhancements() {
  return (
    <section id="enhancements" className={styles.Enhancements}>
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
              // width="100"
              // height="100"
              className={styles.image}
              src="doc_meet2.AVIF"
              alt="doc_meet"
            ></img>
          </div>
        </div>
        <div className={styles.grid_column}>
          <h2 className={styles.heading_2_}>Choose Your Enhancements</h2>
          <p className={styles.paragraph}>
            Work 1-on-1 with your dentist to pick the best cosmetic treatment to
            meet your vision:
          </p>
          <div className={styles.treatment_grid}>
            <div className={styles.treatment}>
              <p>Invisalign</p>
            </div>
            <div className={styles.treatment}>
              <p>Teeth Whitening</p>
            </div>
            <div className={styles.treatment}>
              <p>Extraction</p>
            </div>

            <div className={styles.treatment}>
              <p>Teeth Whitening</p>
            </div>
            <div className={styles.treatment}>
              <p>Extraction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enhancements;
