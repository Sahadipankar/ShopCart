import React from 'react'
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react'

const features = [
  { icon: Truck, text: 'Free Shipping', subtext: 'On all orders over $100' },
  { icon: Lock, text: 'Secure Payment', subtext: '100% protected payments' },
  { icon: RotateCcw, text: 'Easy Returns', subtext: '7-days return policy' },
  { icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service' },
]
const Features = () => {

  return (
    <div className='bg-gray-100 py-6 sm:py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 gap-4 sm:gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6'>
          {features.map((feature, index) => {
            return <div key={index} className='flex flex-col sm:flex-row items-center justify-center text-center sm:text-left bg-white p-4 sm:p-3 lg:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200'>
              <feature.icon className='flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 text-red-500 mb-2 sm:mb-0' aria-hidden="true" />
              <div className='sm:ml-3 lg:ml-4'>
                <p className='text-sm sm:text-base font-medium text-gray-900'>{feature.text}</p>
                <p className='mt-1 text-xs sm:text-sm text-gray-500'>{feature.subtext}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Features