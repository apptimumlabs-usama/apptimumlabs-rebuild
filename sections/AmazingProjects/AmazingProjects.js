import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { HiArrowNarrowRight as RightArrow } from "react-icons/hi";
import { IconContext } from "react-icons";
import SlideCard from '../../components/SlideCard/SlideCard';

const AmazingProjects = () => {
  return (
      <IconContext.Provider
      value={{ className: "text-black text-2xl group-hover:translate-x-2" }}
    >
      <div className="w-full flex flex-row h-[100vh]  relative ">
        <div className="w-[30%] hidden md:flex justify-end px-3  lg:pt-60 md:pt-32 pb-6">
          <div className="w-96 flex flex-col items-end ">
            <h2 className="text-5xl lg:text-7xl font-thin pb-3">
              Amazing
            </h2>
          </div>
        </div>
        <div className="w-full md:w-[70%] flex justify-start items-center md:items-start bg-[#F7F7F7] lg:pt-60 md:pt-32 py-12 px-3   ">
          <div className="w-full md:max-w-5xl usama">
            <h2 className="text-black text-5xl  lg:text-[3.5rem] font-medium pb-3 hidden md:inline-block">
              Projects we built
              <Link
                href="/portfolio"
                className="ml-3 align-middle w-10 h-10 lg:w-12 lg:h-12 border rounded-full inline-flex items-center justify-center ease-in-out group border-black  "
              >
                <RightArrow />
              </Link>
            </h2>
            <h2 className="text-3xl  font-thin pb-3 text-black inline-block md:hidden ">
              Amazing&nbsp;
              <strong>
                Projects we built
              </strong>
              <Link
                href="/"
                className="ml-2 w-8 h-8 border rounded-full p-2 ease-in-out group border-black align-middle inline-flex items-center justify-center group "
              >
                <RightArrow />
              </Link>
            </h2>
            <p className="text-black pb-4">
              With over a combined experience of 30+ years in the industry, we have successfully delivered over 100+ projects for Healthcare, Marketplaces, E-learning, and many more.
            </p>
            <Swiper
              loop={true}
              modules={[Autoplay]}
              slidesPerView={1.5}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper !w-auto"
            >
                  <SwiperSlide>
                    {({ isActive }) => (
                    <SlideCard
                      title="ami"
                      bg_card="bg-white"
                      imgPath="/images/apptimumlabs-ami-1.webp"
                      altText="projects"
                      path="portfolio/restworld"
                      isActive={isActive}
                    />
                    
                    )}
                  </SwiperSlide>
                  <SwiperSlide>
                    {({ isActive }) => (
                    <SlideCard
                      title="lhotse"
                      bg_card="bg-white"
                      imgPath="images/apptimumlabs-lhotse-1.webp"
                      altText="projects"
                      path="portfolio/restworld"
                      isActive={isActive}
                    />
                    
                    )}
                  </SwiperSlide>
                  <SwiperSlide>
                    {({ isActive }) => (
                    <SlideCard
                      title="fit for ever"
                      bg_card="bg-white"
                      imgPath="/images/apptimumlabs-fit-forever-1.webp"
                      altText="projects"
                      path="portfolio/restworld"
                      isActive={isActive}
                    />
                    
                    )}
                  </SwiperSlide>
                  <SwiperSlide>
                    {({ isActive }) => (
                    <SlideCard
                      title="q7"
                      bg_card="bg-white"
                      imgPath="/images/apptimumlabs-q7-1.webp"
                      altText="projects"
                      path="portfolio/restworld"
                      isActive={isActive}
                    />
                    
                    )}
                  </SwiperSlide>
                  <SwiperSlide>
                    {({ isActive }) => (
                    <SlideCard
                      title="rest world"
                      bg_card="bg-white"
                      imgPath="/images/apptimumlabs-rest-world.webp"
                      altText="projects"
                      path="portfolio/restworld"
                      isActive={isActive}
                    />
                    
                    )}
                  </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default AmazingProjects
