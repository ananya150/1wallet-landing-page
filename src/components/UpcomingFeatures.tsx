'use client';
import React from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";




const UpcomingFeatures = () => {

    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const headingOpacity = useTransform(
        scrollYProgress,
        [0 , 0.8, 0.85 , 1],
        [0 , 0 , 1 , 1]
    )

  return (
    <div className='h-[150vh]'>
        <motion.div style={{opacity:headingOpacity}} className='sticky flex justify-center top-[5vh] w-full'>
            <span className='text-[50px] font-satoshi text-white'>Becoming better day by day!</span>
        </motion.div>
        <motion.div className='mt-[40vh] flex justify-center sticky top-[35vh]'>
            <div>
                <div className='mx-10 w-[400px]'>
                    <span className='font-satoshi text-white text-[35px]'>Upcoming features</span>
                </div>
                <div className='mt-[7vh] space-y-6'>
                    <div className='mx-10 w-[400px]'>
                        <span className='font-satoshi text-white text-[20px]'>→ Ethereum Provider to connect to dapps</span>
                    </div>
                    <div className='mx-10 w-[400px]'>
                        <span className='font-satoshi text-white text-[20px]'>→ Session keys for specific purposes</span>
                    </div>
                    <div className='mx-10 w-[400px]'>
                        <span className='font-satoshi text-white text-[20px]'>→ and many more..</span>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default UpcomingFeatures