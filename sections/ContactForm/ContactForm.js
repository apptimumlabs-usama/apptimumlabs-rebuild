import React from 'react'
import Form from './Form'

const ContactForm = () => {
  return (
    <div className="max-w-screen-lg mx-auto  -mt-14 relative z-10 px-3">
      <div className="py-10 px-4 md:px-8 rounded-2xl  bg-[#F7F7F7]">
        <h2 className="text-3xl md:text-5xl pb-3 text-center">Contact us</h2>
        <p className="pb-8 text-center">
          I want to:
          <span className="text-primary underline mx-1"> Start a Project </span>
          Say Hello
        </p>
         <Form />
      </div>
    </div>
  )
}

export default ContactForm
