import React from 'react'
import { FaFacebookF, FaGavel, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FcEnteringHeavenAlive } from 'react-icons/fc';
import { FiArrowLeft, FiArrowRight, FiAward, FiBriefcase, FiFileText, FiHome, FiShield, FiStar, FiUsers } from 'react-icons/fi';
import { PiHand } from 'react-icons/pi';

const About = () => {
  const services = [
  {
    title: "Criminal Law",
    desc: "Defense representations for various criminal charges. Investigations and evidence analysis.",
    icon: <FcEnteringHeavenAlive />,
    active: false
  },
  {
    title: "Corporate Law",
    desc: "Divorce, child custody, child support, and alimony. Prenuptial agreements and postnuptial agreements.",
    icon: <FiUsers />,
    active: false
  },
  {
    title: "Health Care Policy",
    desc: "Examining policies related to private and public health insurance, including Medicare and Medicaid.",
    icon: <FiShield />,
    active: false
  },
  {
    title: "Real Estate Law",
    desc: "Property transactions, leases, and zoning issues. Real estate disputes and litigation.",
    icon: <FiHome />,
    active: false
  }
];
const steps = [
    {
      title: "Initial Consultation",
      desc: "We prioritize understanding your concerns and aligning with your goals. Your satisfaction is our top priority.",
      icon: <PiHand  size={20} />
    },
    {
      title: "Case Evaluation",
      desc: "Our experienced lawyers thoroughly analyze the facts of each case. They then apply the relevant laws to provide clear.",
      icon: <FiFileText size={20} />
    },
    {
      title: "Legal Strategy",
      desc: "We develop a customized plan to protect your rights and achieve the best possible outcome.",
      icon: <FiBriefcase size={20} />
    }
  ];
  const stats = [
    { id: 1, icon: <FaGavel size={32} />, value: "10k+", label: "Case Done" },
    { id: 2, icon: <FiUsers size={32} />, value: "10k+", label: "Expert Attorneys" },
    { id: 3, icon: <FiStar size={32} />, value: "10k+", label: "Happy Client" },
    { id: 4, icon: <FiAward size={32} />, value: "10k+", label: "Award Winning" },
  ];
  const attorneys = [
    { name: 'Michel Phelps', role: 'Chief Justice', img: '../public/4.jpg', active: false },
    { name: 'Sarah Rahman', role: 'Attorney', img: '../public/1.jpg', active: true },
    { name: 'Smith Miller', role: 'Attorney', img: '../public/2.jpg', active: false },
    { name: 'Samira Dsuza', role: 'Attorney', img: '../public/3.jpg', active: false },
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
            About Us
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header مع أزرار التحكم */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h4 className="text-[#c5a059] font-medium mb-2">Our Services</h4>
            <h2 className="text-4xl font-serif text-[#0a1a1a]">Your Legal Solutions</h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#c5a059] hover:text-white transition group">
              <FiArrowLeft className="text-gray-400 group-hover:text-white" />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#2a3d3d] flex items-center justify-center hover:bg-[#c5a059] transition">
              <FiArrowRight className="text-white" />
            </button>
          </div>
        </div>

        {/* شبكة الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`p-8 rounded-3xl transition-all duration-500 group border-b-4 border-transparent shadow-sm
                ${service.active 
                  ? 'bg-[#2a3d3d] text-white border-[#c5a059]' 
                  : 'bg-[#f4f6f6] text-[#0a1a1a] hover:bg-[#2a3d3d] hover:text-white hover:border-[#c5a059]'}`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6 transition-colors
                ${service.active ? 'bg-[#c5a059] text-white' : 'bg-[#2a3d3d] text-white group-hover:bg-[#c5a059]'}`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className={`text-sm mb-8 leading-relaxed ${service.active ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-300'}`}>
                {service.desc}
              </p>
              
              <button className="flex items-center gap-2 font-bold text-sm hover:gap-3 transition-all">
                Read More <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-[#f9f9f9] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* الجزء الأيسر: الفيديو */}
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-4/3">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800" 
            alt="Law Background" 
            className="w-full h-full object-cover"
          />
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition">
            <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer">
              <div className="w-0 h-0 border-t-12 border-t-transparent border-l-20 border-l-white border-b-12 border-b-transparent ml-2"></div>
            </div>
          </div>
        </div>

        {/* الجزء الأيمن: المحتوى والخطوات */}
        <div className="relative">
          <h4 className="text-[#c5a059] font-medium mb-2">Work Process</h4>
          <h2 className="text-4xl font-serif text-[#0a1a1a] mb-8 leading-tight">
            Navigating The Law: Your Assurance Of Peace
          </h2>

          <div className="relative space-y-10">
            {/* الخط المنقط الطولي */}
            <div className="absolute left-6 top-4 bottom-4 border-l-2 border-dotted border-[#c5a059]/40"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6 group">
                {/* الدائرة والأيقونة */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#c5a059] transition-colors group-hover:bg-[#c5a059] group-hover:text-white">
                  {step.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0a1a1a] mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* صورة خلفية خفيفة (Lady Justice) - اختياري */}
          <div className="absolute -right-20 -bottom-10 opacity-5 pointer-events-none hidden lg:block">
             <img src="path-to-justice-icon.png" alt="" className="w-64" />
          </div>
        </div>

      </div>
    </section>
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto bg-[#c5a059] rounded-[40px] p-8 md:p-12 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`flex items-center justify-center gap-4 text-white
                ${index !== stats.length - 1 ? 'md:border-r border-white/20' : ''}`}
            >
              <div className="opacity-90">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold leading-none">{stat.value}</span>
                <span className="text-sm font-medium opacity-90">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className=" py-20 px-6 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h4 className="text-[#c5a059] font-medium mb-2">Our Attorneys</h4>
                  <h2 className="text-4xl font-serif">Trusted Legal Experts</h2>
                </div>
                <button className="border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition">
                  More Attorney →
                </button>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {attorneys.map((person, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-2xl">
                    {/* الصورة */}
                    <img src={person.img} alt={person.name} className="w-full h-80 object-cover" />
    
                    {/* Overlay: يظهر بلون ذهبي للكارت النشط، أو أخضر داكن للكروت العادية */}
                    <div className={`absolute inset-0 flex flex-col items-center justify-end p-6 transition-all duration-500 
                    ${person.active ? 'bg-[#c5a059]/80' : 'bg-[#1e3a3a]/80'}`}>
    
                      <h3 className="text-xl font-bold">{person.name}</h3>
                      <p className="text-sm opacity-90 mb-2">{person.role}</p>
    
                      {/* الأيقونات تظهر عند الـ Hover أو للكارت النشط */}
                      <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaFacebookF className="cursor-pointer" />
                        <FaTwitter className="cursor-pointer" />
                        <FaInstagram className="cursor-pointer" />
                        <FaLinkedinIn className="cursor-pointer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    </section>
    

      </>
  )
}

export default About
