import React from 'react'
import laptop from '../assets/laptop.jpg'

function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto p-2 my-10 md:grid grid-cols-2'>
      <div className='col-span-1 md:w-[80%] text-center'>
        <img src={laptop} alt="" className='inline' />
      </div>
      <div className='col-span-1 flex flex-col justify-center'>
        <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>

        <p className='my-2 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum officiis neque non incidunt accusantium aspernatur delectus, distinctio totam repellendus tempora quas, dicta numquam commodi dolores? Qui omnis magnam molestias esse.</p>
        <button className='inline w-[30%]  bg-black text-white p-3 rounded'>Get Started</button>
      </div>
    </div>
  )
}

export default Experts;
