import React, { useContext } from "react";
import Link from "next/link";
import HeaderContext from "../../context/HeaderContext";
import MainButton from "../../Button/MainButton";

const NavBar = ({ scrolledVersion, isMobile, toggleDrawer }) => {
  const contextColor = useContext(HeaderContext);

  return (
    <>
      <ul
        className={`${
          isMobile ? "items-start flex-col" : "items-center flex-row"
        } flex  menuItems`}
      >
            <li
              className={`text-base ${
                contextColor && !scrolledVersion
                  ? `${isMobile ? "text-black" : contextColor.color ?? 'text-white'}`
                  : "text-white"
              } mr-8 relative  ${isMobile ? "mb-3 w-fit" : "mb-0 w-auto"}`}
            >
              <Link
                href="/portfolio"
                className={`${
                  !(scrolledVersion || isMobile) &&
                  contextColor &&
                  contextColor.color &&
                  "after:!bg-black"
                }`}
              >
                Porfolio
              </Link>
            </li>
            <li
              className={`text-base ${
                contextColor && !scrolledVersion
                  ? `${isMobile ? "text-black" : contextColor.color ?? 'text-white'}`
                  : "text-white"
              } mr-8 relative  ${isMobile ? "mb-3 w-fit" : "mb-0 w-auto"}`}
            >
              <Link
                href="/"
                className={`${
                  !(scrolledVersion || isMobile) &&
                  contextColor &&
                  contextColor.color &&
                  "after:!bg-black"
                }`}
              >
                Services
              </Link>
            </li>
            <li
              className={`text-base ${
                contextColor && !scrolledVersion
                  ? `${isMobile ? "text-black" : contextColor.color ?? 'text-white'}`
                  : "text-white"
              } mr-8 relative  ${isMobile ? "mb-3 w-fit" : "mb-0 w-auto"}`}
            >
              <Link
                href="/"
                className={`${
                  !(scrolledVersion || isMobile) &&
                  contextColor &&
                  contextColor.color &&
                  "after:!bg-black"
                }`}
              >
                Company
              </Link>
            </li>
            <li
              className={`text-base ${
                contextColor && !scrolledVersion
                  ? `${isMobile ? "text-black" : contextColor.color ?? 'text-white'}`
                  : "text-white"
              } mr-8 relative  ${isMobile ? "mb-3 w-fit" : "mb-0 w-auto"}`}
            >
              <Link
                href="/"
                className={`${
                  !(scrolledVersion || isMobile) &&
                  contextColor &&
                  contextColor.color &&
                  "after:!bg-black"
                }`}
              >
                Articles
              </Link>
            </li>
      </ul>
      {isMobile ? (
        <div className="pt-3">
          <Link onClick={toggleDrawer} href="/contact">
          <button 
          className='bg-white text-primary shadow-button-primary hover:shadow-button-primary-hover hover:scale-[1.03] active:scale-[0.97]
        px-5 py-2 text-base rounded-md  ${className'>
          Get Started

        </button>
          </Link>
        </div>
      ) : (
        <Link href="/">
          <button 
          className='bg-white text-primary hover:scale-[1.03] active:scale-[0.97]
        px-5 py-2 text-base rounded-md  ${className'>
          Get Started

        </button>
        </Link>
      )}
    </>
  )
}

export default NavBar
