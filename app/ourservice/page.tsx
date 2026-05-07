'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiAward, FiCalendar, FiStar, FiUsers } from 'react-icons/fi';
import { FcEnteringHeavenAlive } from 'react-icons/fc';
import { FaQuoteRight } from 'react-icons/fa';
import bg5 from '../public/ede1b7d10d8859f102445bc817be8806da250fe1.png';

const OurService = () => {
  const reviews = [
    {
      name: "Monica D'suza",
      role: "UI/UX Designer",
      img: "https://i.pravatar.cc/150?u=monica",
      text: "I was struggling with family law for months before I found Ensaf. They not only provided me with the solution I needed, but they also educated me on how to prevent the issue from happening again.",
      active: true
    },
    {
      name: "Monks Millar",
      role: "UI/UX Designer",
      img: "https://i.pravatar.cc/150?u=monks",
      text: "Their team is incredibly knowledgeable and patient, and they always go the extra mile to ensure customer satisfaction. I'm so grateful for their help and would recommend them to anyone.",
      active: false
    }
  ];
  const logos = [
    "../public/ede1b7d10d8859f102445bc817be8806da250fe1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
  ];
  return (

    <>
      <section
        className="h-[50vh] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('../6c2789f4869af593f01bba4755810d65f972e8ca.jpg')",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* text */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-6xl font-bold">
            Our Service
          </h1>
        </div>
      </section>
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c5a059] font-medium uppercase tracking-widest text-sm">What We Do</span>
            <h2 className="text-5xl font-serif text-[#0a1a1a] mt-2">Legal Services We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Criminal Law", active: false },
              { title: "Corporate Law", active: false },
              { title: "Family Law", active: false },
              { title: "Real Estate Law", active: false },
              { title: "Personal Injury", active: false },
              { title: "Health Care", active: false }
            ].map((s, i) => (
              <motion.div
                whileHover={{ y: -10 }}
                className={`p-10 rounded-3xl transition-all duration-500 shadow-sm border-b-4 border-transparent
    ${s.active
                    ? 'bg-[#2a3d3d] text-white border-[#c5a059]'
                    : 'bg-[#f4f6f6] text-[#0a1a1a] hover:bg-[#2a3d3d] hover:text-white hover:border-[#c5a059]'
                  }`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-6
      ${s.active
                      ? 'bg-[#c5a059]'
                      : 'bg-[#2a3d3d] text-white'
                    }`}
                >
                  <FcEnteringHeavenAlive />
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {s.title}
                </h3>

                <p className="text-sm opacity-70 mb-6 leading-relaxed">
                  Expert legal representation tailored to your specific needs and goals.
                </p>

                <button className="flex items-center gap-2 font-bold text-sm">
                  Read More <FiArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f4f6f6] py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h4 className="text-[#c5a059] font-medium mb-2">Client Testimonials</h4>
              <h2 className="text-5xl font-serif text-[#0a1a1a]">What Our Clients Say</h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-[#c5a059]/80 flex items-center justify-center text-white"><FiArrowLeft /></button>
              <button className="w-12 h-12 rounded-full bg-[#2a3d3d] flex items-center justify-center text-white"><FiArrowRight /></button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl relative shadow-sm border-b-4 border-[#c5a059]/20">
                <div className={`absolute top-0 right-10 w-16 h-16 rounded-b-2xl flex items-center justify-center text-white text-2xl ${rev.active ? 'bg-[#2a3d3d]' : 'bg-[#d1d5db]'}`}>
                  <FaQuoteRight />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <img src={rev.img} alt={rev.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#c5a059]/20" />
                  <div>
                    <h4 className="font-bold text-lg">{rev.name}</h4>
                    <p className="text-gray-400 text-sm">{rev.role}</p>
                    <div className="flex text-[#c5a059] mt-1 text-xs">
                      {[...Array(5)].map((_, idx) => <FiStar key={idx} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 italic leading-relaxed">"{rev.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-20 whitespace-nowrap"
          >
            {/* نكرر الشعارات مرتين لعمل تأثير الحركة المستمرة */}
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Partner Logo"
                className="h-12 md:h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer object-contain"
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>)
}

export default OurService