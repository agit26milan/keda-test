
import dynamic from "next/dynamic"
import ImageEngineer from '@/assets/engineer.png'
import ImageProject from '@/assets/project.png'
import Image from "next/image"
const DynamicPricing = dynamic(() => import('@/components/pricing'))
const DynamicAbout = dynamic(() => import('@/components/about'))

const DynamicContact = dynamic(() => import('@/components/contact'))

export default function Home() {
  return (
   <main>
  <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20  lg:pt-32'>
    <div className="lg:flex lg:flex-row home-row">
      <div className="lg:w-1/2">
        <div className="mb-6">
          <Image className="m-auto" src={ImageProject} height={300} width={300} alt="image2" />
        </div>
      </div>
      <div className='lg:w-1/2 lg:ml-auto'>

        <h2>
          It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered
          the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the
        </h2>
      </div>
    </div>
   <div className="lg:flex lg:flex-row mt-24 home-row">
     <div className='lg:w-1/2 lg:mr-auto'>
      <h2>
        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
        optio cumque nihil i
      </h2>
    </div>
         <div className='lg:w-1/2 lg:mr-auto'>
                    <Image className="mt-12 m-auto" src={ImageEngineer} height={300} width={300} alt="image" />

        </div>

   </div>
  </div>
  <DynamicPricing />
  <DynamicAbout />
  <DynamicContact />
</main>
  )
}
