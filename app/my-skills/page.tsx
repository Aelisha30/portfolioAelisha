"use client"
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { SkillData } from '@/constants'
import Image from 'next/image'
import {Autoplay} from "swiper/modules"


const page = () => {
  return (
    <div 
    style={{backgroundImage:"url(/final.jpg)"}}
    className='h-screen w-screen items-center justify-center bg-cover bg-center'>
      <div className="flex flex-col gap-20 max-w-[100%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className='font-semibold text-white tracking-normal text-[50px]'>Skills{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to bg-orange-600'>
              {" "}
              &
              {" "}
            </span>
            Technologies
          </h1>
          <p className='text-gray-400 text-[20px] tracking-tight'>
           Using the latest tech this world has to offer
          </p>
        </div>
        <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay:0,
          disableOnInteraction:false
        }}
        speed={5000}
        modules={[Autoplay]}
        className="max-w-[80%]"
        >
          {SkillData.map((skill,index)=>(
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay:0,
          disableOnInteraction:false,
          reverseDirection:true
        }}
        speed={5000}
        modules={[Autoplay]}
        className="max-w-[80%]"
        >
          {SkillData.map((skill,index)=>(
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default page