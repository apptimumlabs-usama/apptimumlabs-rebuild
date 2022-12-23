import React from 'react'
import Link from 'next/link'
import { HiArrowNarrowRight as RightArrow } from "react-icons/hi";
import { IconContext } from "react-icons";
import MainButton from '../../Button/MainButton';

const SoftwareServices = () => {
    return (
        <IconContext.Provider
            value={{
                className: "text-white text-lg md:text-2xl group-hover:translate-x-2",
            }}
        >
            <div className="w-full flex flex-row h-[100vh]  relative ">
                <div className="w-[30%] hidden md:flex justify-end px-3  lg:pt-60 md:pt-32 pb-6">
                    <div className="w-96 flex flex-col items-end ">
                        <h2 className="text-5xl lg:text-7xl font-thin pb-3">
                            Our
                        </h2>
                    </div>
                </div>
                <div
                    className="w-full !bg-cover !bg-no-repeat md:w-[70%] flex justify-start items-center md:items-start lg:pt-60 md:pt-32 py-12 px-3 md:absolute right-0 md:h-full"
                    style={{
                        background: `url("/images/services-bg.webp")`,
                    }}
                >
                    <div className="w-full h-full bg-[#FF8A55] opacity-[0.8] absolute left-0 top-0 z-0 "></div>
                    <div className="w-full md:w-auto md:max-w-3xl relative z-10">
                        <h2 className="text-white text-5xl lg:text-7xl font-bold pb-3 hidden md:inline-block">
                            Services
                            <Link
                                href={"/services"}
                                className="ml-5 w-10 h-10 lg:w-12 lg:h-12 border rounded-full inline-flex items-center justify-center ease-in-out group border-white "
                            >
                                <RightArrow />
                            </Link>
                        </h2>
                        <h2 className="text-3xl font-thin pb-3 text-white inline-block md:hidden ">
                            Our&nbsp;
                            <strong>
                                Services
                            </strong>
                            <Link
                                href={"/services"}
                                className="ml-2 w-8 h-8 border rounded-full inline-block p-1.5 ease-in-out group border-white align-middle "
                            >
                                <RightArrow />
                            </Link>
                        </h2>
                        <p className="text-white">
                            Innovative scalable solutions delivered by a perfect blend of expertise and technology
                        </p>
                        <div className="flex flex-wrap gap-4 mt-6">
                            {/* { */}
                                {/* // loading ? (
                                //   <div className="flex flex-row flex-wrap gap-4 w-full items-end my-4">
                                //     <div className=" bg-white animate-pulse rounded-md w-40 h-10" />
                                //     <div className=" bg-white animate-pulse rounded-md w-40 h-10" />
                                //     <div className=" bg-white animate-pulse rounded-md w-40 h-10" />
                                //     <div className=" bg-white animate-pulse rounded-md w-40 h-10" />
                                //     <div className=" bg-white animate-pulse rounded-md w-40 h-10" />
                                //   </div>
                                // ) : (
                                // data?.homePage?.servicesPortion.map((e, index) => { */}
                                {/* //   return ( */}
                                <button
                                    className='bg-white text-primary hover:scale-[1.03] active:scale-[0.97] px-5 py-2 text-base rounded-md  ${className'>
                                    <Link href={"/"}>
                                        Web App Development
                                    </Link>
                                </button>
                                <button
                                    className='bg-white text-primary hover:scale-[1.03] active:scale-[0.97] px-5 py-2 text-base rounded-md  ${className'>
                                    <Link href={"/"}>
                                        Mobile App Development
                                    </Link>
                                </button>
                                <button
                                    className='bg-white text-primary hover:scale-[1.03] active:scale-[0.97] px-5 py-2 text-base rounded-md  ${className'>
                                    <Link href={"/"}>
                                        DevOps As A Service
                                    </Link>
                                </button>
                                <button
                                    className='bg-white text-primary hover:scale-[1.03] active:scale-[0.97] px-5 py-2 text-base rounded-md  ${className'>
                                    <Link href={"/services"}>
                                        UX/UI Design
                                    </Link>
                                </button>
                                <button
                                    className='bg-white text-primary hover:scale-[1.03] active:scale-[0.97] px-5 py-2 text-base rounded-md  ${className'>
                                    <Link href={"/"}>
                                        Blockchain Development
                                    </Link>
                                </button>
                                <button
                                    className='bg-white text-primary hover:scale-[1.03] active:scale-[0.97] px-5 py-2 text-base rounded-md  ${className'>
                                    <Link href={"/"}>
                                        IoT App Development
                                    </Link>
                                </button>
                                <button
                                    className='bg-white text-primary hover:scale-[1.03] active:scale-[0.97] px-5 py-2 text-base rounded-md  ${className'>
                                    <Link href={"/"}>
                                        Headless WordPress Development
                                    </Link>
                                </button>
                                {/* //   ); */}
                                {/* // }) */}
                                {/* // ) */}
                                
                            {/* // } */}
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default SoftwareServices
