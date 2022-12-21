import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai"


const Footer = () => {
  return (
    <>
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-8 md:py-10 px-3 ">
        <h6 className="text-primary border-b-2 max-w-fit border-primary border-width font-medium text-2xl pb-2 mb-4">
          Explore your ideas with us!
        </h6>
        <div className="flex flex-wrap -mx-3 pb-6 md:pb-12 ">
          <div className="w-full md:w-2/6 px-3 pb-3 md:pb-0 ">
            <h6 className="text-black text-xl md:text-2xl pb-2 md:pb-3 text-uppercase font-bold">
              Call Us:
            </h6>
            <ul>
                  <li className="mb-2  footerItems">
                    <a className="text-base md:text-lg hover:text-primary transition-all font-normal" rel="noreferrer" href="/">
                    +1 (302) 261-5311
                    </a>
                  </li>
            </ul>
          </div>
          <div className="w-full md:w-2/6 px-3 pb-3 md:pb-0">
            <h6 className="text-black text-xl md:text-2xl pb-2 md:pb-3 text-uppercase font-bold">
              Email Us:
            </h6>
            <ul>
                  <li  className="mb-2  footerItems">
                    <a href="mailto:sales@apptimumlabs.com" className="text-base md:text-lg hover:text-primary transition-all font-normal">sales@apptimumlabs.com</a>
                  </li>
                  <li  className="mb-2  footerItems">
                    <a href="mailto:info@apptimumlabs.com" className="text-base md:text-lg hover:text-primary transition-all font-normal">info@apptimumlabs.com</a>
                  </li>
            </ul>
          </div>
          <div className="w-full md:w-2/6 px-3 pb-3 md:pb-0">
            <h6 className="text-black text-xl md:text-2xl pb-2 md:pb-3 text-uppercase font-bold">
              Address:
            </h6>
            <ul>
                      <li  className="mb-2 footerItems">
                        <span className="text-base md:text-lg hover:text-primary transition-all font-semibold">
                        North America
                        </span>
                        <br />
                        <span className="text-sm md:text-base hover:text-primary transition-all font-normal">
                          651 N Broad St Suite 206, Middletown, USA.
                        </span>
                        <br />
                        <span className="text-sm md:text-base hover:text-primary transition-all font-normal">
                          Registration:{" "}
                          <span className="font-bold">
                            20212108934
                          </span>
                        </span>
                      </li>
                      <li  className="mb-2 footerItems">
                        <span className="text-base md:text-lg hover:text-primary transition-all font-semibold">
                        Europe
                        </span>
                        <br />
                        <span className="text-sm md:text-base hover:text-primary transition-all font-normal">
                          Sepapaja tn 6, 15551 Tallinn, Estonia
                        </span>
                        <br />
                        <span className="text-sm md:text-base hover:text-primary transition-all font-normal">
                          Registration:{" "}
                          <span className="font-bold">
                            16294558
                          </span>
                        </span>
                      </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-center pb-5">
                <a
                  className="mx-2 md:mx-3 group"
                  href="https://clutch.co/profile/apptimum-labs#summary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="bg-primary w-12 h-12 md:w-14 md:h-14 p-2 rounded-full flex items-center justify-center mb-1">
                    <img
                      className="object-contain"
                      src="images/Clutch.svg"
                      alt="clutch"
                    />
                  </span>
                  <p className="text-black text-base ease-in-out group-hover:text-primary font-bold">
                    Clutch
                  </p>
                </a>
                <a
                  className="mx-2 md:mx-3 group"
                  href="https://github.com/apptimumlabs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="bg-primary w-12 h-12 md:w-14 md:h-14 p-2 rounded-full flex items-center justify-center mb-1">
                    <img
                      className="object-contain"
                      src="/images/Github.svg"
                      alt="github"
                    />
                  </span>
                  <p className="text-black text-base ease-in-out group-hover:text-primary font-bold">
                    Github
                  </p>
                </a>
                <a
                  className="mx-2 md:mx-3 group"
                  href="https://www.upwork.com/o/companies/~01723dd7ccc85a5223/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="bg-primary w-12 h-12 md:w-14 md:h-14 p-2 rounded-full flex items-center justify-center mb-1">
                    <img
                      className="object-contain"
                      src="/images/Upwork.svg"
                      alt="upwork"
                    />
                  </span>
                  <p className="text-black text-base ease-in-out group-hover:text-primary font-bold">
                    Upwork
                  </p>
                </a>
                <a
                  className="mx-2 md:mx-3 group"
                  href="https://www.linkedin.com/company/apptimum-labs-official/mycompany/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="bg-primary w-12 h-12 md:w-14 md:h-14 p-2 rounded-full flex items-center justify-center mb-1">
                    <img
                      className="object-contain"
                      src="/images/Linkedin-1.svg"
                      alt="linkedin"
                    />
                  </span>
                  <p className="text-black text-base ease-in-out group-hover:text-primary font-bold">
                    Linkedin
                  </p>
                </a>
            {/* )
          })} */}
        </div>
        <div className="flex justify-center ">
          <p className="text-center text-base font-extralight ">
            <span className="w-fit inline-block h-[14px]">
              <AiOutlineCopyrightCircle />
            </span>
            &nbsp;Copyright&nbsp;{" "}
            <span className="font-bold">{new Date().getUTCFullYear()}</span>.
              All Rights Reserved. Apptimum Labs Inc. - Quality Professionals
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
