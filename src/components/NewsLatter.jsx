import React from 'react'

function NewsLatter() {
  return (
    <div className='p-4 bg-[#2699fb]'>
      <div className="max-w-[1240px] md:flex mx-auto justify-between py-[50px]">
        <div className='m-2'>
            <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills</h1>
            <span className='text-white'>
              Sign up to our newsletter and stay up to date
            </span>
        </div>
        <div className='m-2'>
          <input type="text" className='sm:w-full rounded mb-2 p-3 mr-2 text-slate-300 ' placeholder='Email'/>
          <button className='bg-black text-white p-3 rounded'>Get Started</button>
          <br />
          <p className='text-white'>We care about the protection pf your data. Road our <br /> <a href="" className='text-black'> Privacy Policy.</a></p>
        </div>
      </div>
    </div>
  )
}

export default NewsLatter
