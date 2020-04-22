import React, { ReactNode } from "react"
import styles from "./text-image.module.css"

type TextImageProps = {
  image: string
  imageAlt: string
  reverse?: boolean
  children: ReactNode
}

export const TextImage = ({
  image,
  imageAlt,
  reverse,
  children,
}: TextImageProps) => {
  return (
    <div className={styles.textImageContainer}>
      {reverse ? (
        <>
          <div className={styles.textImageChildren}>{children}</div>
          <img data-testid="textImageCoverReverse" src={image} alt={imageAlt} />
        </>
      ) : (
        <>
          <img data-testid="textImageCover" src={image} alt={imageAlt} />
          <div className={styles.textImageChildren}>{children}</div>
        </>
      )}
    </div>
  )
}
