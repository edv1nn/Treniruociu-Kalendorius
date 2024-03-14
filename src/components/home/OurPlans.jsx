import { ourPlansData } from "../../data/data";
import styles from "./home.module.css";

const OurPlans = () => {
  return (
    <div className={`${styles["our-plans"]} container sections-padding`}>
      <div className={styles.trainers_head}>
        <h2 className="title">Kainos</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          quibusdam quam omnis, magnam eligendi cum consequuntur animi nemo
          aliquid repellat dolores mollitia sint, ipsum sed quidem aperiam optio
          illum! Pariatur!{" "}
        </p>
      </div>
      <div className={styles.plans}>
        {ourPlansData.map((ele) => {
          return (
            <div key={ele.id} className={styles.plan} data-aos="flip-up">
              <h3>{ele.title}</h3>
              <div>
                <h4>{ele.offer}</h4>
                <p>{ele.description}</p>
              </div>
              <ul>
                <li>20 minutes of heart-pumping spin</li>
                <li>20 minutes of strength training</li>
                <li>50 Class Times Available</li>
                <li>20 minutes of invigorating yoga</li>
              </ul>
              <button>Pirkti narystę</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurPlans;
