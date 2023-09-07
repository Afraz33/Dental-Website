import { useState } from "react";

import styles from "./FAQ.module.css";

function FAQ() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqData = [
    {
      question: "What insurances do you accept?",
      answer:
        "We accept all PPO dental insurances and we are in-network with Delta Dental Premier.Learn more about our flexible payment options. ",
    },
    {
      question: "Are you accepting new patients?",
      answer:
        "Absolutely. We are accepting new patients. You can rely us for same day care, flexible payment options and our 100% satisfaction guarantee. Request an appointment online. ",
    },
    {
      question: "Do you accept Medi-Cal or Denti-cal?",
      answer:
        "We currently do not accept Medi-cal or Denti-cal but we do have flexible payment options available, competitive fees and special offers to help make dental care more affordable.",
    },
    {
      question: "When should my child see a dentist?",
      answer:
        "In order to prevent dental problems, your child should see a pediatric dentist when the first tooth appears, or no later than his or her first birthday. We have an in-house specialist for kids who can help manage their special needs. ",
    },
    {
      question: "Why do bi-yearly checkups matter?",
      answer:
        "Just as you get an annual physical exam with your doctor, your dental check-ups are meant to focus on your oral health. By visiting your dentist twice, a year, we can detect dental conditions before they get worse. Some dental conditions may not cause pain or discomfort until they develop into serious cases. These visits are a preventable approach to ensuring you maintain a healthy smile. ",
    },
    {
      question: "What can I expect during a dental checkup?",
      answer:
        "We will ask about your medical history, examine your mouth and decide whether you need digital x-rays. Then, one of our hygienists will assess your gums for gum disease. Lastly, one of our dentists will evaluate your overall dental health and conduct an oral cancer screening by holding your tongue with gauze, checking it and your whole mouth, then feeling your jaw and neck.",
    },
    {
      question: "What is a general dentist?",
      answer:
        "General dentists are the primary dental care providers for patients of all ages. They can treat you and your entire family and care for your overall oral health. Your general dentist takes responsibility for the diagnosis, treatment and overall coordination of services to meet your oral health needs. ",
    },
    {
      question: "What should I do if I have a fear of going to the dentist?",
      answer:
        "The first thing you should do is talk with one of dentists. There are many options that can be used to help reduce your fear, anxiety, and pain. In fact, dental anxiety or fear is very common. It is manageable as long as you discuss your fears with us. ",
    },
    {
      question: "How safe are dental X-rays for kids and adults?",
      answer:
        "We use digital X-rays which are a common diagnostic procedure that is considered extremely safe for kids and adults.",
    },
  ];
  return (
    <section className={styles.FAQSection}>
      <div className={styles.top}>
        <h2 className={styles.heading_2}>FAQs</h2>
        <h3 className={styles.heading_3}>
          You've got questions. We have answers
        </h3>
      </div>
      <div className={styles.grid}>
        {faqData.map((faq, index) => (
          <div className={styles.faq} onClick={() => toggleExpand(index)}>
            <div className={styles.faqQuestion}>{faq.question}</div>
            {expanded[index] && (
              <div className={styles.faqAnswer}>{faq.answer}</div>
            )}
            {expanded[index] ? (
              <img
                src="/up-arrow.png"
                className={styles.arrow}
                alt="arrow"
              ></img>
            ) : (
              <img
                src="/down-arrow.png"
                className={styles.arrow}
                alt="arrow"
              ></img>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
