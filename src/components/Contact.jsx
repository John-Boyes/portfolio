import React from 'react';
import Title from './Title';

function Contact() {
  return (
    <div
      id='Contact'
      className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form 
          action="hhttps://getform.io/f/34a3f97a-ff80-431e-8aaf-a83240c5375d"
          method="Post"
          className='flex flex-col w-full md:w-7/12 '
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className='p-2 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300'
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className='my-2 p-2 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300'
          />
          <textarea
            name='message'
            placeholder='Message'
            rows='10'
            className='p-2 mb-4 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300'
          />
          <button
            type='button'
            className='mt-3 text-center inline-block
             px-8 py-3 w-max text-base font-medium 
             rounded-md text-white bg-gradient-to-r 
             from-purple-900 to-orange-500
             drop-shadow-xl dark:bg-gradient-to-l '
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;