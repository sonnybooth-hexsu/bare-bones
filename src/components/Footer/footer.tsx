import React from "react"

import { Twitter, Facebook, Linkedin } from "react-feather"

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
    <div>
      <div className="bg-black">
        <div className="container mx-auto pl-6 pr-6 pt-16 pb-16">
          <div className="pl-4 pr-4">
            <div className="grid grid-cols-1 gap-10 md:gap-6 md:grid-cols-3 lg:grid-cols-12">
              {/* Col 1 */}
              <div className="flex items-center justify-center text-white md:col-span-3 lg:col-span-4 lg:items-left">
                <div className="text-center lg:text-left">
                  <a
                    href="/"
                    className="bg-white text-black pt-4 pb-4 pr-6 pl-6"
                  >
                    {siteTitle}
                  </a>
                  <p
                    data-testid="footerNavigationDescription"
                    className="mt-4 mb-10 text-sm"
                  >
                    {description}
                  </p>
                  <div>
                    <Facebook
                      size="24"
                      className="inline mr-2 ml-2 text-white"
                    />
                    <Twitter
                      size="24"
                      className="inline mr-2 ml-2 text-white"
                    />
                    <Linkedin
                      size="24"
                      className="inline mr-2 ml-2 text-white"
                    />
                  </div>
                </div>
              </div>
              {/* Col 2 */}
              <div className="lg:col-span-2 lg:col-start-6">
                <nav className="text-center lg:text-left">
                  <h6 className="text-sm text-white lg:text-left">Title</h6>
                  <ol>
                    {navLinks.map(({ name, page }, i) => (
                      <li data-testid="footerNavigationLink" key={i}>
                        <a
                          href={page}
                          className="text-sm text-center text-white"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
              {/* Col 3 */}
              <div className="lg:col-span-2">
                <nav className="text-center lg:text-left">
                  <h6 className="text-sm text-white lg:text-left">Title</h6>
                  <ol>
                    {navLinks.map(({ name, page }, i) => (
                      <li key={i}>
                        <a
                          href={page}
                          className="text-sm text-center text-white "
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
              {/* Col 4 */}
              <div className="lg:col-span-2">
                <nav className="text-center">
                  <h6 className="text-sm text-white lg:text-left">
                    Get in touch
                  </h6>
                  <div>
                    <p className="text-sm text-center text-white lg:text-left">
                      {email}
                    </p>
                    <p className="text-sm text-center text-white lg:text-left">
                      {telephone}
                    </p>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-700">
          <div className="container mx-auto pl-6 pr-6">
            <div className="pl-4 pr-4">
              <p className="text-xs pt-2 pb-2 text-center text-white lg:text-left">
                ©{new Date().getFullYear()} - Bare Bones | All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
