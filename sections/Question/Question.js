import React from 'react'
import Link from 'next/link'

const Question = () => {
  return (
    <>
      <div className="w-full flex flex-row  h-[100vh] relative ">
        <div className="w-[30%] hidden md:flex justify-end px-3  pt-60 pb-6">
          <div className="w-96 flex flex-col items-end ">
            <h2 className="text-5xl lg:text-7xl font-thin pb-3">
              Software
            </h2>
            <p className="pb-2 text-right font-normal">
              Our focus is the agile development of web, cloud, and mobile applications and helping organisations create and sustain digital innovation.
            </p>
            <Link href="/contact">
              {/* <MainButton >Get Started</MainButton> */}
              <button className='bg-primary text-white hover:scale-[1.03] active:scale-[0.97]I px-5 py-2 text-base rounded-md  ${className'>
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div
          className="w-full md:w-[70%] flex justify-start items-center md:items-start !bg-cover !bg-no-repeat pt-36  md:pt-60 pb-12 px-3  md:absolute  right-0 md:h-full"
          style={{
            background: `url("/images/question-bg.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full md:w-auto md:max-w-3xl relative z-10">
            <h2 className="text-white text-5xl lg:text-7xl font-bold hidden md:inline-block">
              Everything
            </h2>
            <div className="w-full inline-block md:hidden ">
              <h2 className="text-3xl  lg:text-7xl font-thin pb-3 text-white">
                Question&nbsp;
                <strong>
                  Everything
                </strong>
              </h2>
              <p className="pb-2 text-white">
                Our focus is the agile development of web, cloud, and mobile applications and helping organisations create and sustain digital innovation.
              </p>
              <Link href='/contact'>
                {/* <MainButton variant="filled" color='primary'>Get Started</MainButton> */}
                <button className='bg-primary text-white hover:scale-[1.03] active:scale-[0.97]I px-5 py-2 text-base rounded-md  ${className'>
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Question
