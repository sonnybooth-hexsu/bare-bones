import React from "react"
import cover1 from "../../assets/images/cover-1.jpg"
import styles from "./text-image.module.css"
import buttons from "../../styles/buttons.module.css"

export const TextImage = () => {
  return (
    <div className={styles.textImageContainer}>
      <img src={cover1} alt="" />
      <div className={styles.textImageContainerText}>
        <h2 className={styles.textImageContainerTextH2}>
          ENHANCE AND <i>restore</i> YOUR <i>natural</i> BEAUTY.
        </h2>
        <p className={styles.textImageContainerTextP}>
          Lorem tempor leo turpis enim nisi ultrices enim sed facilisis.
          Venenatis tellus urna, semper quis. Volutpat nisl est sit blandit
          dictum adipiscing odio amet euismod.
        </p>
        <a className={`${buttons.btnPrimary}`} href="#">
          Book a consultation
        </a>
      </div>
    </div>
  )
}
