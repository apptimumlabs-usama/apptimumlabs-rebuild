import React from 'react'
import Form from '../ContactForm/Form'

const FooterForm = () => {
  return (
    <div className="bg-[#F7F7F7] w-full">
    <div className="py-8 md:py-12 max-w-screen-xl px-3 mx-auto  ">
      <div className="flex items-center flex-col" style={{paddingBottom: "40px"}}>
        <img
          src="/images/apptimum-mobile.svg"
          alt="apptimumlabs-mobile-logo"
        />
        {/* <img
          className="mb-2"
          src={require("../../images/apptimum-mobile.svg").default}
          alt=""
        /> */}
        <p className="text-base pb-4">
          Want to talk about a project or idea?
        </p>
        <h2 className="text-primary text-5xl md:text-3xl ">Let’s do this</h2>
      </div>
      <Form />
    </div>
  </div>
  )
}

export default FooterForm
