import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

export default function UPIFinder() {
  const [vpa, setVpa] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/upifind?vpa=${vpa}`);
      setResult(response.data);
      console.log(response.data.name_at_bank);
    } catch (error) {
      console.error(error);
      setResult({ error: 'An error occurred while fetching data from the API' });
    }
  };

  return (
    <div className="justify-center min-w-screen  ">
      <Head>
        <title>UPI Finder - Garuda</title>
      </Head>
      <div className='flex  justify-evenly space-x-16 md:space-x-44  '>
        <Link href='/Home'>
          <div className="py-2 h-10 mt-12 bg-white px-2 rounded-2xl text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.0} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </div>
        </Link>
        <Header />
        <div className=''>
          <Link href='/'>
            <img src='/logo.png' className='md:h-32  h-20   ' />
          </Link>
        </div>
      </div>

      <div className='md:flex justify-evenly '>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className=''
        >
          <form onSubmit={handleSubmit} className='justify-evenly space-x-4 flex md:ml-18 mx-16 mt-20'>
            <input
              type="text"
              value={vpa}
              onChange={(e) => setVpa(e.target.value)}
              placeholder="Enter UPI ID"
              className='bg-white text-black font-mono border-4 border-gray-400 rounded-xl px-2 py-2'
            />
            <button className='bg-white font-bold font-mono hover:bg-green-200 text-black px-4 rounded-xl' type="submit">
              Submit
            </button>
          </form>
        </motion.div>

        {result && (
          <div className='absolute text-white md:mt-[35%] md:ml-[30%] mt-[102%] leading-10 ml-[5%] font-mono font-bold md:text-lg text-sm'>
            {result.error ? (
              <p className='text-red-600 font-bold animate-pulse'>⚠️ Error Occurred!!!</p>
            ) : (
              <div>
                <p>Account Exists: {result.result.account_exists}</p>
                <p>Name at Bank: {result.result.name_at_bank}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
