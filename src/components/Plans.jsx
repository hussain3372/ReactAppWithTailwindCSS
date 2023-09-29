import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Plans() {
  return (
    <div className='py-[100px]'>
      <div className=" max-w-[1240px] mx-auto  md:grid grid-cols-3 gap-5">
        <div className=' shadow-xl h-[500px] my-4  hover:scale-105 duration-500'>
          <img src={Single} alt="" className=' w-20 mx-auto mt-[-3rem]'/>
          <h1 className='font-bold text-[20px] flex justify-center items-center my-5'>Web Development</h1>
          <p className='font-bold text-[30px] flex justify-center items-center py-3'>$149</p>
          <div className='text-center font-medium py-5'>
            <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit.</p>
            <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla</p>
            <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet.</p>
            <button className='bg-[#00df9a] text-white p-3 mt-20 w-[200px] rounded'>Start Trial</button>
          </div>
        </div>
        <div className='shadow-xl h-[500px] my-4 bg-gray-100 hover:scale-105 duration-500'>
          <img src={Double} alt=""  className='w-20 mx-auto py-5 mt-[-4rem]'/>
          <h1 className='font-bold text-[20px] flex justify-center items-center my-5'>Web Development</h1>
          <p className='font-bold text-[30px] flex justify-center items-center py-3'>$149</p>
          <div className='text-center font-medium py-5'>
            <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit.</p>
            <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla</p>
            <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet.</p>
            <button className='bg-[#00df9a] text-white p-3 mt-16 w-[200px] rounded'>Start Trial</button>
          </div>
        </div>
        <div className='shadow-xl h-[500px] my-4 hover:scale-105 duration-500'>
          <img src={Triple} alt="" className='w-20 mx-auto py-5 mt-[-4rem]' />
          <h1 className='font-bold text-[20px] flex justify-center items-center my-5'>Web Development</h1>
          <p className='font-bold text-[30px] flex justify-center items-center py-3'>$149</p>
          <div className='text-center font-medium py-5'>
            <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit.</p>
            <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla</p>
            <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet.</p>
            <button className='bg-[#00df9a] text-white p-3 mt-16 w-[200px] rounded'>Start Trial</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans
