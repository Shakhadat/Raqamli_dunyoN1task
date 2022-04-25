import React, { useState } from "react";
import Check from "../../assets/check.svg";
import styles from "./index.module.scss";

const ProgressBar = () => {
  const [isStored, setStored] = useState(false);
  const [isDelivered, setDelivered] = useState(false);
  const [isFinished, setFinished] = useState(false);

  return (
    <>
      <div className={styles.ProgressBarContainer}>
        <div className={styles.firstStep}>
          {isStored ? <img src={Check} alt="check" /> : 1}
        </div>
        <div className={styles.line1}></div>
        <div className={styles.secondStep}>
          {isDelivered ? <img src={Check} alt="check" /> : 2}
        </div>
        <div className={styles.line1}></div>
        <div className={styles.thirdStep}>
          {isFinished ? <img src={Check} alt="check" /> : 3}
        </div>
    </div>
    </>
  );
};

export default ProgressBar;
