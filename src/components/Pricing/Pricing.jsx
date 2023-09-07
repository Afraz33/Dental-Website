import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <section className={styles.Pricing}>
      <h2 className={styles.heading_1}> Insurance & Pricing</h2>
      <p className={styles.heading_3}>
        We'll work with you each step of the way to demystify the cost of care.
      </p>
      <h2 className={styles.heading_2}> We Accept Most PPO Dental Plans</h2>
      <p className={styles.paragraph}>
        When you book an appointment, we’ll ask for you to send along your
        dental insurance information. This allows us to verify your benefits and
        give you a heads-up on the anticipated out-of-pocket costs for any
        procedures we prescribe. That's tricky to do on short notice—the sooner
        you get us your dental insurance information, the more accurately we can
        estimate your coverage.
      </p>
      <p className={styles.paragraph}>
        Even without first seeing your particular dental insurance plan, we can
        tell you a few basics right off the bat.
      </p>

      <p className={styles.paragraph}>
        {" "}
        We do <span style={{ fontWeight: "bolder" }}>not</span> accept any of
        the following plans:
      </p>
      <ul className={styles.list}>
        <li className={styles.list_items}>
          DentiCal, MediCal, MediCare, or MedicAid plans
        </li>
        <li className={styles.list_items}>
          HMOs, DMOs, or any other plans that limit your options to a specific
          group of providers
        </li>
      </ul>
      <p className={`${styles.paragraph}  ${styles.lastparagraph}`}>
        {" "}
        We <span style={{ fontWeight: "bolder" }}> do</span> accept just about
        everything else, including PPO dental insurance plans from the following
        insurers:
      </p>
      <ul className={styles.list} style={{ marginBottom: "45px" }}>
        <li className={styles.list_items}>Aetna</li>
        <li className={styles.list_items}>Ameritas</li>
        <li className={styles.list_items}>Beam</li>
        <li className={styles.list_items}>Cigna</li>
        <li className={styles.list_items}>Delta Dental</li>
        <li className={styles.list_items}>Guardian</li>
        <li className={styles.list_items}>Lincoln</li>
        <li className={styles.list_items}>MetLife</li>
      </ul>
      <h2 className={styles.heading_2}>
        {" "}
        We Charge Transparent Fees for Premium Service
      </h2>
      <p className={styles.paragraph}>
        Our costs are guided by three core practices: First, we prescribe
        state-of-the-art treatment plans to keep you the healthiest, the
        longest. Second, we work only with high-end providers, materials, and
        laboratories that we trust. And third, we aim to make high-quality care
        accessible.
      </p>
      <p className={`${styles.paragraph}`}>
        Here's what you can expect to pay,
        <span style={{ fontWeight: "bolder" }}>
          {" "}
          if you don't have any insurance
        </span>{" "}
        , for common procedures:
      </p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "20px",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            New Patient Appointment
          </h3>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            $550
          </h2>
          <h3
            style={{
              fontWeight: "500",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Per Visit
          </h3>
          <div className={styles.content}>
            <h3 className={styles.heading_content}>View Plan</h3>
          </div>
        </div>
        <div className={styles.card}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "20px",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            Routine Check-Up
          </h3>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            $550
          </h2>
          <h3
            style={{
              fontWeight: "500",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Per Visit
          </h3>
          <div className={styles.content}>
            <h3 className={styles.heading_content}>View Plan</h3>
          </div>
        </div>
        <div className={styles.card}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "20px",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            Fillings
          </h3>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            $295 - $395
          </h2>
          <h3
            style={{
              fontWeight: "500",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Per Tooth
          </h3>
          <div className={styles.content}>
            <h3 className={styles.heading_content}>View Plan</h3>
          </div>
        </div>
        <div className={styles.card}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "20px",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            Crowns
          </h3>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            $2250 - $3275
          </h2>
          <h3
            style={{
              fontWeight: "500",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Per Tooth
          </h3>
          <div className={styles.content}>
            <h3 className={styles.heading_content}>View Plan</h3>
          </div>
        </div>
        <div className={styles.card}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "20px",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            Invisalign
          </h3>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            $5,500 - $6,500
          </h2>
          <h3
            style={{
              fontWeight: "500",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            For Full Treatment
          </h3>
          <div className={styles.content}>
            <h3 className={styles.heading_content}>View Plan</h3>
          </div>
        </div>
        <div className={styles.card}>
          <h3
            style={{
              fontWeight: "600",
              fontSize: "20px",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            Whitening
          </h3>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            $750 – $1,500
          </h2>
          <h3
            style={{
              fontWeight: "500",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            For Full Treatment
          </h3>
          <div className={styles.content}>
            <h3 className={styles.heading_content}>View Plan</h3>
          </div>
        </div>
      </div>
      <p className={styles.paragraph} style={{ marginTop: "60px" }}>
        {" "}
        Remember, though:{" "}
        <span style={{ fontWeight: "bolder" }}>
          If you have one of our accepted insurance plans, then your
          out-of-pocket costs may be significantly lower than the prices above.
        </span>{" "}
      </p>
      <p className={styles.paragraph}>
        Curious if we accept your specific dental insurance? Questions about the
        costs of specific procedures?{" "}
        <span
          className={styles.contact}
          style={{ textDecoration: "underline", color: "#c51c1c" }}
        >
          Contact
        </span>{" "}
        us to learn more.
      </p>
    </section>
  );
}

export default Pricing;
