import React from 'react'

function Hero() {
  return (
    <div className='bg-cover bg-center h-[400px] md:h-[400px] flex flex-col justify-center items-center text-center px-4
     ' style={{backgroundImage:"url('https://images.macrumors.com/t/Yau8SFR6mEpFIvnY0HXgJMGhs-8=/2500x/article-new/2024/03/What-To-Expect-from-Apple-2024-Update.jpg')"}}>
      <div className='backdrop-blur-md bg-pink/20 p-6 rounded max-w-2xl border border-white'>
      <h1 className='text-3xl md:text-5xl font-bold mb-4 text-pink-200 drop-shadow w-150'>VibeVault Fashion</h1>
<p className='text-md md:text-lg mb-6 text-white drop-shadow'>Endless selection,endless satisfaction</p>
     <button className='bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-500 transition text-lg'>Shop now</button>
      </div>
    </div>
  )
}

export default Hero
