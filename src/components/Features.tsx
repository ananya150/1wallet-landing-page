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
        [0 , 0.4, 0.45],
        [0 , 1 , 0 ]
    )
    const feature2 = useTransform(
        scrollYProgress,
        [0 , 0.45, 0.7, 0.75 ],
        [0 , 1 , 1, 0 ]
    )
    const feature3 = useTransform(
        scrollYProgress,
        [0 , 0.45, 0.55 ],
        [0 , 1 , 1 ]
    )

  return (
    <div className='h-[500vh]'>
        <motion.div style={{opacity:headingOpacity}} className='sticky flex justify-center top-[5vh] w-full'>
            <span className='text-[50px] font-satoshi text-white'>Because wallets are meant to be smart!</span>
        </motion.div>
        <motion.div style={{opacity: feature1}} className='mt-[100vh] flex justify-center items-center space-x-10 sticky top-[25vh]'>
            <img src='/home.png' alt='home' className='' />
            <div className='mx-10 w-[400px]'>
                <span className='font-satoshi text-white text-[30px]'>Simple and elegant ux with google sign-in.</span>
            </div>
        </motion.div>
        <motion.div style={{opacity: feature2}}  className='mt-[70vh] flex justify-center sticky top-[25vh] items-center'>
            <img src='/gasTank.png' alt='home' className='' />
            <div className='mx-10 w-[400px]'>
                <span className='font-satoshi text-white text-[30px]'>Fill up the gas tank with usdc or credit card to pay for gas fees.</span>
            </div>
        </motion.div>
        <motion.div style={{opacity: feature3}}  className='mt-[70vh] flex justify-center sticky top-[25vh] items-center'>
            <img src='/batch.png' alt='home' className='' />
            <div className='mx-10 w-[400px]'>
                <span className='font-satoshi text-white text-[30px]'>Batch multiple transactions to save time and fees.</span>
            </div>
        </motion.div>
    </div>
  )
}

export default Features