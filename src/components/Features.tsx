/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Features = () => {

    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const headingOpacity = useTransform(
        scrollYProgress,
        [0 , 0.15, 0.2 , 1],
        [0 , 0 , 1 , 1]
    )
    const feature1 = useTransform(
        scrollYProgress,
        [0 , 0.15, 0.2 , 1],
        [0 , 0 , 1 , 1]
    )

  return (
    <div className='h-[500vh]'>
        <motion.div style={{opacity:headingOpacity}} className='sticky top-[5vh] w-full'>
            <div className='flex justify-center'>
                <span className='text-[50px] font-satoshi text-white'>Because wallets are meant to be smart!</span>
            </div>
        </motion.div>
        <motion.div style={{opacity: feature1}} className='mt-[100vh] flex justify-center sticky top-[25vh]'>
            <img src='/home.png' alt='home' />
        </motion.div>
    </div>
  )
}

export default Features