import React from 'react'

const PricingComponent = () => {

    const dataPrice = [
        {name: 'TIER 1/Basic', description: 'Small Bussiness', price:'$10', feature: ['Mencatat barang masuk', 'Mencatat barang keluar', 'Mencatat hasil keuntungan']},
        {name: 'TIER 2/Business', description: 'Medium Bussiness', price:'$20', feature: ['Mencatat barang masuk', 'Mencatat barang keluar', 'Mencatat hasil keuntungan', 'Dapat menganalisa hasil penjualan dengan CHART', 'Support 7x24 Jam']},
        {name: 'TIER 3/Entrepreneur', description: 'Medium Bussiness', price:'$30', feature: ['Mencatat barang masuk', 'Mencatat barang keluar', 'Mencatat hasil keuntungan', 'Dapat menganalisa hasil penjualan dengan CHART', 'Support 7x24 Jam', 'Export data ke Excel', ' AI Prediksi penghasilan']}

    ]

    const handleStyle = (index: number) => {
        if(index === 1) {
                    return 'flex flex-col rounded-3xl px-6 sm:px-8 order-first bg-blue-600 py-8 lg:order-none'

        }
            return 'flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8'

    }

    return (
        <section id='pricing' className='bg-slate-900 py-20 sm:py-32'>
       <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
           <div className='md:text-center'>
               <h2 className='font-display text-3xl tracking-tight text-white sm:text-4xl'>
                   <span className='relative whitespace-nowrap'>
                       Pricing
                   </span>
               </h2>
               <p className='mt-4 text-lg text-slate-400'>
                   It doesn’t matter what size your business is, our software won’t work well for you.

               </p>

           </div>
       </div>
       <div
           className='-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8'>
           {dataPrice.map((data, index) => (
           <section className={handleStyle(index)} key={index}>
               <h3 className='mt-5 font-display text-lg text-white'>
                   {data.name}
               </h3>
               <p className='mt-2 text-base text-slate-400'>
                   {data.description}
               </p>
               <p className='order-first font-display text-5xl font-light tracking-tight text-white'>
                   {data.price}
               </p>
               <ul className='order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200'>
                   {data.feature.map((feat, index) => (
                   <li className='flex' key={index}>
                       {feat}
                   </li>
                   ))}
               </ul>
               <button
                   className='group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8'>Get
                   Started</button>

           </section>
           ))}
       </div>
   </section>
    )
}

export default PricingComponent