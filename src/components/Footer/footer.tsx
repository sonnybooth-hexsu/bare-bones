import React from "react"
import styles from "./footer.module.css"

type FooterProps = {
  siteTitle: string
  navLinks: Array<{ name: string; page: string; id: number }>
  description: string
  email: string
  telephone: string
}

export const Footer = ({
  siteTitle,
  navLinks,
  description,
  email,
  telephone,
}: FooterProps) => {
  return (
    <div className={styles.footerContainer}>
      <div className="container mx-auto pl-6 pr-6 md:pl-0 md:pr-0">
        <div className="pl-4 pr-4">
          <div className={styles.footer}>
            <div className={styles.footerLogoContainer}>
              <a href="/" className={styles.footerLogo}>
                {siteTitle}
              </a>
              <p data-testid="footerNavigationDescription">{description}</p>
            </div>
            <div>
              <nav className={styles.footerNav}>
                <ol>
                  {navLinks.map(({ name, page }, i) => (
                    <li data-testid="footerNavigationLink" key={i}>
                      <a href={page}>{name}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            <div className={styles.footerMeta}>
              <p>{email}</p>
              <p>{telephone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
