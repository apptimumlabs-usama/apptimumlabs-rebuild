import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from './NavBar'
import Logo from './Logo'

const Header = () => {
    const [scrolledVersion, setScrolledVersion] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const responsive = () => {
            setIsMobile(window.matchMedia("(max-width: 1023px)").matches);
        };
        const event = () => {
            setScrolledVersion(() => {
                if (window.scrollY < 100) {
                    return false;
                }
                return true;
            });
        };
        responsive();
        document.addEventListener("scroll", event);
        window.addEventListener("resize", responsive);
        return () => {
            document.removeEventListener("scroll", event);
            window.removeEventListener("resize", responsive);
        };
    }, []);

    return (
        <HeaderContainer scrolledVersion={scrolledVersion} isMobile={isMobile}>
            <nav
                className=" flex justify-between items-center max-w-screen-xl mx-auto px-3 py-2 "
                role="navigation"
            >
                <Logo isMobile={isMobile} scrolledVersion={scrolledVersion} />
                <div className=" items-center hidden lg:flex">
                    <NavBar scrolledVersion={scrolledVersion} />
                </div>

                <button onClick={toggleDrawer} className=" text-white lg:hidden">
                    <div className='flex flex-col items-center justify-center gap-[7px]'>
                        <div className={`w-8 h-1 rounded-full bg-white transition-all duration-700 ${isOpen ? 'rotate-45 translate-y-[6px]' : 'rotate-0'} `} />
                        <div className={`w-8 h-1 rounded-full bg-white transition-all duration-700 ${isOpen ? '-rotate-45 -translate-y-[5px]' : 'rotate-0'} `} />
                        <div className={`w-8 h-1 rounded-full bg-white transition-all duration-700 ${isOpen ? 'opacity-0' : 'opacity-1'} `} />
                    </div>
                </button>
            </nav>
            {isMobile && isOpen ? (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ type: "tween", duration: 0.7 }}
                    className=" bg-[#003174] h-[100vh] py-6 px-3 border-t-2 relative z-10 "
                >
                    <NavBar isMobile={isMobile} toggleDrawer={toggleDrawer} />
                </motion.div>
            ) : (
                ""
            )}
        </HeaderContainer>
    )
}

const HeaderContainer = ({ scrolledVersion, isMobile, children }) => {
    if (scrolledVersion) {
        return (
            <motion.div
               initial={{ y: "-100%" }}
               animate={{ y: "0%" }}
               transition={{ type: "tween" }}
                className={` fixed  top-0 w-full  z-50`}
            >
                {children}
            </motion.div>
        );
    }
    return (
        <div
            className={`absolute ${isMobile ? "bg-[#003174]" : ""
                }   top-0 w-full z-50`}
        >
            {children}
        </div>
    );
}

export default Header
