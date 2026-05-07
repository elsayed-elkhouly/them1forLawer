"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaSearch, FaBars, FaChevronDown } from 'react-icons/fa';
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
   <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-[#111111] shadow-lg"
          : "bg-transparent"
      }`}
    >      <div className="flex items-center gap-2">
        <div className="text-(--therdcolor) text-3xl">⚖️</div>
        <div className="flex flex-col text-white">
          <span className="text-2xl font-bold tracking-widest">ENSAF</span>
          <span className="text-[10px] tracking-[0.2em] opacity-80">JUSTICE LAW</span>
        </div>
      </div>

      {/* Navigation Links */}
      {/* <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {['Home', 'About Us', 'Pages', 'Practice', 'Cases', 'Blog'].map((item) => (
          <Link  key={item} title={item} />
        ))}
        <a href="#" className="text-white hover:text-yellow-600">Contact</a>
      </div> */}
      <div className='hidden md:flex md:flex-col md:items-center md:gap-8 md:text-sm font-medium'>
        <ul className='md:flex md:gap-8'>
          <Link href='/' className='text-white hover:text-(--therdcolor)'>Home</Link>
          <Link href='about' className='text-white hover:text-(--therdcolor)'>About Us</Link>
          <Link href='ourservice' className='text-white hover:text-(--therdcolor)'>Our Services</Link>
          <Link href='Contact' className='text-white hover:text-(--therdcolor)'>Contact Us</Link>
          
        </ul>
      </div>
            

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-white hover:text-yellow-600 transition-colors">
          <FaSearch size={20} />
        </button>
        <button className="bg-(--therdcolor) text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all flex items-center gap-2">
          Free Consultation →
        </button>
        <button className="text-white border border-zinc-700 p-3 rounded-full hover:border-yellow-600 transition-all">
          <FaBars />
        </button>
      </div>
    </nav>
  )
}

export default NavBar