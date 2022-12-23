import React from 'react'
import Link from 'next/link'

const SlideCard = (props) => {
  return (
    <>
      <Link href={"/portfolio/"} className=" flex flex-row items-center justify-center py-4">
        <h3 className=" uppercase text-base font-normal text-[#B4B4B4] rotate-180 whitespace-pre tracking-[0.2rem]"
        style={{
          writingMode : 'vertical-rl',
          textOrientation : 'downright'
        }}>
          {props.title}
        </h3>
        <div className={`bg-white rounded-3xl p-3 md:p-6 ml-3 ${props.isActive ? 'shadow-lg' : ''}  `}>
          <img src={props?.imgPath} alt={props?.altText} className='!object-contain !max-w-92 !w-92 !h-32 lg:!h-72' />
        </div>
      </Link>
    </>
  )
}

export default SlideCard
