import React from 'react'
import { motion } from 'framer-motion'

export default function Vehicle() {
  return (
    <div className=''>
     <motion.div whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }} className=' cursor-pointer '>
        <img src='middle4.png' className=' md:h-20 ' />
        </motion.div>
    </div>
  )
}
