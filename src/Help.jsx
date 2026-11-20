
import React, { useState } from 'react'

const Help = () => {

  const [openQuestion, setOpenQuestion] = useState(null)

  const faqs = [
    {
      question: 'How do I create a ticket?',
      answer: 'Navigate to Create Ticket, enter the required information and submit your ticket.'
    },
    {
      question: 'How do I update a ticket?',
      answer: 'Open the ticket you want to update and change its status or relevant details.'
    },
    {
      question: 'How do I manage customers?',
      answer: 'Open the Customers page to view customer information and their support history.'
    },
    {
      question: 'How do I contact a customer?',
      answer: 'Open a customer profile and use the Message option to access their conversation page.'
    }
  ]

  return (
    <div className='min-h-screen bg-slate-50 p-6'>

      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-800'>
          Help & Support
        </h1>
        <p className='text-gray-500 mt-2'>
          Find answers to common questions about SupportHub.
        </p>
      </div>

      <div className='bg-white p-6 rounded-xl border border-gray-200 mb-6'>
        <h2 className='text-xl font-semibold mb-2'>
          Frequently Asked Questions
        </h2>

        <div className='space-y-3 mt-5'>
          {faqs.map((faq, index) => (
            <div key={index} className='border-b border-gray-200 pb-3'>
              <button
                onClick={() => setOpenQuestion(
                  openQuestion === index ? null : index
                )}
                className='w-full flex justify-between text-left font-medium text-gray-700'
              >
                {faq.question}
                <span>{openQuestion === index ? '−' : '+'}</span>
              </button>

              {openQuestion === index && (
                <p className='text-gray-500 text-sm mt-3'>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='bg-white p-6 rounded-xl border border-gray-200'>
        <h2 className='text-xl font-semibold text-gray-800'>
          Still need help?
        </h2>

        <p className='text-gray-500 mt-2 mb-4'>
          Contact your system administrator if you experience
          problems using SupportHub.
        </p>

        <button className='bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700'>
          Contact Support
        </button>
      </div>

    </div>
  )
}

export default Help