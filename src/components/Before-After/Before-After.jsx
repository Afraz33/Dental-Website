import styles from "./BeforeAfter.module.css";

function BeforeAfter() {
  return (
    <section className={styles.Before_After}>
      <h2 className={styles.heading_2}>Before and After</h2>
      <div className={styles.grid}>
        <div className={styles.one_comparison}>
          <div className={styles.card}>
            <img className={styles.image} src="before1.jpg" alt="before"></img>
            <div className={styles.content}>
              <img
                className={styles.right_arrow}
                src="right-arrow.png"
                alt="left-arro"
              ></img>
              <h3 className={styles.heading_3}>After</h3>
              <p className={styles.para}>
                After a successful dental treatment and a period of recovery,
                the transformation in the patient's oral health is nothing short
                of remarkable. The previously damaged and discolored teeth have
                been beautifully restored to their natural shine and vitality.
                Thanks to the expertise of our dental team, including procedures
                such as porcelain crowns and veneers.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.image} src="after1.jpg" alt="before"></img>
            <div className={styles.content}>
              <h3 className={styles.heading_3}>Before</h3>
              <img
                className={styles.left_arrow}
                src="left-arrow.png"
                alt="left-arro"
              ></img>
              <p className={styles.para}>
                Before seeking dental treatment, the patient's oral health
                presented several challenges. The teeth exhibited signs of wear
                and damage, including discoloration, chipping, and visible
                decay. Additionally, there were issues with misalignment and
                irregular spacing, affecting both the aesthetic appearance and
                functionality of the teeth
              </p>
            </div>
          </div>
          <p className={styles.procedure}>
            Procedure: 24 Porcelain Crowns and Veneers
          </p>
        </div>
        <div className={styles.line}></div>{" "}
        <div className={styles.one_comparison}>
          <div className={styles.card}>
            <img className={styles.image} src="before1.jpg" alt="before"></img>
            <div className={styles.content}>
              <img
                className={styles.right_arrow}
                src="right-arrow.png"
                alt="left-arro"
              ></img>
              <h3 className={styles.heading_3}>After</h3>
              <p className={styles.para}>
                After a successful dental treatment and a period of recovery,
                the transformation in the patient's oral health is nothing short
                of remarkable. The previously damaged and discolored teeth have
                been beautifully restored to their natural shine and vitality.
                Thanks to the expertise of our dental team, including procedures
                such as porcelain crowns and veneers.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.image} src="after1.jpg" alt="before"></img>
            <div className={styles.content}>
              <h3 className={styles.heading_3}>Before</h3>
              <img
                className={styles.left_arrow}
                src="left-arrow.png"
                alt="left-arro"
              ></img>
              <p className={styles.para}>
                Before seeking dental treatment, the patient's oral health
                presented several challenges. The teeth exhibited signs of wear
                and damage, including discoloration, chipping, and visible
                decay. Additionally, there were issues with misalignment and
                irregular spacing, affecting both the aesthetic appearance and
                functionality of the teeth
              </p>
            </div>
          </div>
          <p className={styles.procedure}>
            Procedure: 24 Porcelain Crowns and Veneers
          </p>
        </div>
        <div className={styles.line}></div>{" "}
        <div className={styles.one_comparison}>
          <div className={styles.card}>
            <img className={styles.image} src="before1.jpg" alt="before"></img>
            <div className={styles.content}>
              <img
                className={styles.right_arrow}
                src="right-arrow.png"
                alt="left-arro"
              ></img>
              <h3 className={styles.heading_3}>After</h3>
              <p className={styles.para}>
                After a successful dental treatment and a period of recovery,
                the transformation in the patient's oral health is nothing short
                of remarkable. The previously damaged and discolored teeth have
                been beautifully restored to their natural shine and vitality.
                Thanks to the expertise of our dental team, including procedures
                such as porcelain crowns and veneers.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.image} src="after1.jpg" alt="before"></img>
            <div className={styles.content}>
              <h3 className={styles.heading_3}>Before</h3>
              <img
                className={styles.left_arrow}
                src="left-arrow.png"
                alt="left-arro"
              ></img>
              <p className={styles.para}>
                Before seeking dental treatment, the patient's oral health
                presented several challenges. The teeth exhibited signs of wear
                and damage, including discoloration, chipping, and visible
                decay. Additionally, there were issues with misalignment and
                irregular spacing, affecting both the aesthetic appearance and
                functionality of the teeth
              </p>
            </div>
          </div>
          <p className={styles.procedure}>
            Procedure: 24 Porcelain Crowns and Veneers
          </p>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
