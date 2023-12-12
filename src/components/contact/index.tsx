import React from 'react'

const AboutComponent = () => {

    return (
        <section id='contact' className='bg-slate-50 py-20 sm:py-32'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl md:text-center'>
                    <h2 className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'>
                        Contact Us
                    </h2>

                </div>
                <div className='mx-auto max-w-2xl'>
                    <div className='mb-6'>
                        <label htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email" aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@flowbite.com"></input>

                    </div>
                    <div className='mb-6'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                        <textarea id="message" rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your message here..."></textarea>

                    </div>
                    <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Send</button>
                </div>
            </div>
        </section>
    )
}

export default AboutComponent