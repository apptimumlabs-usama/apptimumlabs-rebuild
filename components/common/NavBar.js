import React, { useContext } from "react";
import Link from "next/link";
import HeaderContext from "../../context/HeaderContext";
import MainButton from "../../Button/MainButton";

const NavBar = ({ scrolledVersion, isMobile, toggleDrawer }) => {
  const contextColor = useContext(HeaderContext);

  return (
    <>
      {/* {loading ? 
      <Loader /> */}
      {/* :  */}
      <ul
        className={`${
          isMobile ? "items-start flex-col" : "items-center flex-row"
        } flex  menuItems`}
      >
            <li
              className={`text-base ${
                contextColor && !scrolledVersion
                  ? `${isMobile ? "text-black" : contextColor.color ?? 'text-black'}`
                  : "text-black"
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
                Porfoilio
               <hr className={`w-1/2 border ${(isMobile || scrolledVersion) ? 'border-black bg-white' : (contextColor && contextColor.color) ? 'border-black bg-black' : 'border-white bg-white'} rounded-md absolute bottom-[-6px]`} />
              </Link>
            </li>
            <li
              className={`text-base ${
                contextColor && !scrolledVersion
                  ? `${isMobile ? "text-black" : contextColor.color ?? 'text-black'}`
                  : "text-black"
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
               <hr className={`w-1/2 border ${(isMobile || scrolledVersion) ? 'border-white bg-white' : (contextColor && contextColor.color) ? 'border-black bg-black' : 'border-white bg-white'} rounded-md absolute bottom-[-6px]`} />
              </Link>
            </li>
            <li
              className={`text-base ${
                contextColor && !scrolledVersion
                  ? `${isMobile ? "text-black" : contextColor.color ?? 'text-black'}`
                  : "text-black"
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
               <hr className={`w-1/2 border ${(isMobile || scrolledVersion) ? 'border-white bg-white' : (contextColor && contextColor.color) ? 'border-black bg-black' : 'border-white bg-white'} rounded-md absolute bottom-[-6px]`} />
              </Link>
            </li>
            <li
              className={`text-base ${
                contextColor && !scrolledVersion
                  ? `${isMobile ? "text-black" : contextColor.color ?? 'text-black'}`
                  : "text-black"
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
                Careers
               <hr className={`w-1/2 border ${(isMobile || scrolledVersion) ? 'border-white bg-white' : (contextColor && contextColor.color) ? 'border-black bg-black' : 'border-white bg-white'} rounded-md absolute bottom-[-6px]`} />
              </Link>
            </li>
            <li
              className={`text-base ${
                contextColor && !scrolledVersion
                  ? `${isMobile ? "text-black" : contextColor.color ?? 'text-black'}`
                  : "text-black"
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
                Benifits
               <hr className={`w-1/2 border ${(isMobile || scrolledVersion) ? 'border-white bg-white' : (contextColor && contextColor.color) ? 'border-black bg-black' : 'border-white bg-white'} rounded-md absolute bottom-[-6px]`} />
              </Link>
            </li>
            <li
              className={`text-base ${
                contextColor && !scrolledVersion
                  ? `${isMobile ? "text-black" : contextColor.color ?? 'text-black'}`
                  : "text-black"
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
                Employees
               <hr className={`w-1/2 border ${(isMobile || scrolledVersion) ? 'border-white bg-white' : (contextColor && contextColor.color) ? 'border-black bg-black' : 'border-white bg-white'} rounded-md absolute bottom-[-6px]`} />
              </Link>
            </li>
            <li
              className={`text-base ${
                contextColor && !scrolledVersion
                  ? `${isMobile ? "text-black" : contextColor.color ?? 'text-black'}`
                  : "text-black"
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
               <hr className={`w-1/2 border ${(isMobile || scrolledVersion) ? 'border-black bg-white' : (contextColor && contextColor.color) ? 'border-black bg-black' : 'border-white bg-white'} rounded-md absolute bottom-[-6px]`} />
              </Link>
            </li>
      </ul>
      {isMobile ? (
        <div className="pt-3">
          <Link onClick={toggleDrawer} href="/contact">
            <MainButton color="white">Get Started</MainButton>
          </Link>
        </div>
      ) : (
        <Link href="/">
          <MainButton
            color={
              contextColor ? (contextColor.logo ? "white" : contextColor.button ?? "primary") : "white"
            }
            className={`${
              !(isMobile || scrolledVersion)
                ? contextColor?.button
                  ? "bg-white text-primary"
                  : ""
                : ""
            }`}
          >
            Get Started
          </MainButton>
        </Link>
      )}
    </>
  )
}

export default NavBar
