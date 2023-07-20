/* eslint-disable @next/next/no-img-element */
import Features from '@/components/Features';
import MagneticButton from '@/components/MagneticButton'

export default function Home() {
  return (
      <div className=' '>

        <div className='mx-[10vw] pt-[10vh] h-screen relative'>
          <span className='font-satoshi text-white fomt-[700] text-[160px] leading-[1.2em]'>The next generation </span><br/>
          <span className='font-satoshi text-white fomt-[700] text-[160px] leading-[1.2em]'>wallet</span>
            <div className='absolute right-[13vw] top-[50vh]'>
              <MagneticButton className="bg-[#445DE9] h-52 w-52 sm:h-80 sm:w-80 ">
                  <span className='font-satoshi text-[25px] font-[400]'>Try now ➚</span>
              </MagneticButton>
            </div>
        </div>

        <Features />

      </div>
  )

}
