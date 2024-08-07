import React from 'react'
import { motion } from 'framer-motion'

export default function UPIFinder() {
  return (
    <div className=''>
     <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className=' cursor-pointer '>
        <img src='middle3.png' className=' md:h-20 ' />
        </motion.div>
    </div>
  )
}
