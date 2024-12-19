import Link from "next/link";
import Image from "next/image";
import logo from '../../public/image1.jpeg'

import React from 'react'

export default function Navbar() {
  return (
<nav className="bg-gray-800 p-4 flex justify-between items-center">
    <div className="logo">
        <Image src={logo} heights={50} width={50} alt=''></Image>
        <span className=" text-white ml-3 text-lg">my Next.js App</span>
    </div>
    
    <div>
        <Link href="/" className="text-white mx-2"> Home</Link>
        <Link href="/about" className="text-white mx-2">About</Link>
        <Link href="/contact" className="text-white mx-2">contact</Link>
    </div>

</nav>
  )
}
