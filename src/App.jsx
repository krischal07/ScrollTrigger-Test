import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)


const App = () => {


  useGSAP( ()=> {
    gsap.to('#box1', {
      rotate:360,
      duration: 2,
      delay:1,
      scrollTrigger: {
        trigger: '#box1',
        start: 'center 50%',
        end: 'bottom 50%',
        scrub: 2,
      }
    }),
    gsap.to("#box2",{
      x:500,
      duration:2,
      scrollTrigger:{
          trigger:'#box2',
          scroller:'body',
          markers:true,
          start:'top 60%',
          end:'top 30%',
          scrub:1,
      }
  })
  }
)

  return (
    <div>
      <div className='h-screen w-screen bg-black'></div>
      <div className='h-screen w-screen bg-zinc-900 flex items-center justify-center'>
        <div id='box1' className=' size-50 bg-amber-400 rounded-lg '></div>
      </div>
      <div className='h-screen w-screen bg-zinc-800'>
      <div id='box2' className=' size-50 bg-emerald-400 rounded-lg '></div>
      </div>
      <div className='h-screen w-screen bg-black'></div>

    </div>
    
  )
}

export default App