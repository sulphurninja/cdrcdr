import React from 'react'
import { motion } from 'framer-motion'

export default function SocialAnalyzer() {
  return (
    <div className=''>
     <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className=' cursor-pointer '>
        <img src='middle2.png' className=' md:h-20 ' />
        </motion.div>
    </div>
  )
}
