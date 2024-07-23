"use client"
import React,{ useState} from 'react'
import {motion} from 'framer-motion'

interface Props {
    image:string;
    title:string;
    text:string;
}
const ProjectCard = ({image, title, text}: Props) => {
    const [isFlipped, setisFlipped] = useState(false)
    const [isAnimating, setisAnimating] = useState(false)

    function handleFlip(){
        if(!isAnimating){
            setisFlipped(!isFlipped)
            setisAnimating(true)
        }
    }
  return (
    <div 
    onClick={handleFlip}
    className='w-[400px] h-[225px] rounded-md object-contain cursor-pointer'>
        <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{rotateY: isFlipped?180:360}}
        transition={{duration:0.6, animationDirection:'normal'}}
        onAnimationComplete={()=>setisAnimating(false)}
        >
            <div 
            style={{backgroundImage:`url(${image})`}}
            className='w-[90%] h-[90%] group relative flip-card-front bg-cover bg-center text-black rounded-lg p-4'>
                <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
                  <div className='absolute inset-0 w-full h-full font-extrabold text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center tracking-tight'>
                  Learn more &gt;
                  </div>
            </div>
            <div 
            style={{backgroundImage:`url(${image})`}}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-black rounded-lg p-4'>
                <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-60'/>
                  <div className='flex flex-col gap-20 py-3 z-[30]'>
                 <h1 className='font-extrabold'>{title}</h1>
                 <p className='text-black text-[12px] tracking-tighter font-extrabold'>{text}</p>
                  </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectCard