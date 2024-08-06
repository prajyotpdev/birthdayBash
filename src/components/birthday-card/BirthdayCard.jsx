import React from 'react'
import styles from "../birthday-card/BirthdayCard.module.css";

const BirthdayCard = () => {
  return (
    <div className={styles.birthdayCard}>
    <div className={styles.cardFront}>
      <h3 className={styles.happy}>Happy Birthday Vivek!</h3>
      <div className={styles.balloons}>
        <div className={styles.balloonOne} />
        <div className={styles.balloonTwo} />
        <div className={styles.balloonThree} />
        <div className={styles.balloonFour} />
      </div>
    </div>
    <div className={styles.cardInside}>
      <h3 className={styles.back}>Happy Birthday Vivek!</h3>
      <p>Dear Friend,</p>
      <p>
        Happy birthday!! I hope your day is filled with lots of love and
        laughter! May all of your birthday wishes come true.
      </p>
      <p className={styles.name}>Pawan</p>
    </div>
  </div>
  )
}

export default BirthdayCard
