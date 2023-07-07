"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.5 }}
      className='flex flex-col gap-8 justify-center items-center w-full h-full'
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, repeatDelay: 0}}
      >
        <AiOutlineLoading3Quarters className='text-6xl' />
      </motion.div>
      <p className='text-4xl font-medium'>under construction</p>
    </motion.div>
  )
}

export default Home