import React from 'react'
import Link from 'next/link'
import { HiArrowNarrowRight as RightArrow } from "react-icons/hi";
import { IconContext } from "react-icons";

const FeaturedClients = () => {
  return (
    <div>
      <IconContext.Provider
      value={{
        className: "text-white text-lg md:text-2xl group-hover:translate-x-2",
      }}>
      <div className="w-full flex flex-row h-[100vh]  relative ">
        <div className="w-[30%] hidden md:flex justify-end px-3  lg:pt-60 md:pt-32 pb-6">
          <div className="w-96 flex flex-col items-end">
            <h2 className="text-5xl lg:text-7xl font-thin pb-3">
              Feature
            </h2>
          </div>
        </div>
        <div
          className=" !bg-cover !bg-no-repeat  w-full md:w-[70%] flex justify-start items-center md:items-start lg:pt-60 md:pt-32 py-12 px-3 md:absolute right-0 md:h-full"
          style={{
            background: `url("/images/featured-bg.webp")`,
          }}
        >
          <div className="w-full h-full bg-[#455971] opacity-[0.8] absolute left-0 top-0 z-0 "></div>
          <div className="w-full md:w-7xl md:max-w-7xl relative z-10">
            <h2 className="text-white text-5xl lg:text-7xl font-bold pb-3 hidden md:inline-block">
              Clients
              <Link
                href="/portfolio"
                className="ml-5 w-10 h-10 lg:w-12 lg:h-12 border rounded-full inline-flex items-center justify-center align-middle  ease-in-out group border-white  "
              >
                <RightArrow />
              </Link>
            </h2>
            <h2 className="text-3xl  font-thin pb-3 text-white inline-block md:hidden ">
              Featured&nbsp;
              <strong>
                Clients
              </strong>
              <Link
                href="/portfolio"
                className="ml-2 w-8 h-8 border rounded-full inline-flex items-center justify-center  ease-in-out group border-white align-middle "
              >
                <RightArrow />
              </Link>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3  gap-8 mt-6">
              {/* {data?.homePage?.clientPortion.map((e, index) => {
                return ( */}
                  <img
                    // key={index}
                    className="object-contain w-44 h-24 "
                    src="/images/Logoo.svg"
                    alt="rest world"
                    srcSet=""
                  />
                  <img
                    // key={index}
                    className="object-contain w-44 h-24 "
                    src="/images/logo_lhotse.svg"
                    alt="lhotse"
                    srcSet=""
                  />
                  <img
                    // key={index}
                    className="object-contain w-44 h-24 "
                    src="/images/Q7-Leader.svg"
                    alt="lhotse"
                    srcSet=""
                  />
                  <img
                    // key={index}
                    className="object-contain w-44 h-24 "
                    src="/images/Fit-forever.svg"
                    alt="lhotse"
                    srcSet=""
                  />
                  <img
                    // key={index}
                    className="object-contain w-44 h-24 "
                    src="/images/AMI-1-1.svg"
                    alt="lhotse"
                    srcSet=""
                  />
                {/* );
              })} */}
            </div>
          </div>
        </div>
      </div>
      </IconContext.Provider>
    </div>
  )
}

export default FeaturedClients
