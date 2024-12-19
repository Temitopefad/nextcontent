import React from 'react'

export default function footer() {
  return (
    <footer className='bg-gray-800 p-4 text-center text-white'>
        <p> &copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
        </footer>     
  )
}
