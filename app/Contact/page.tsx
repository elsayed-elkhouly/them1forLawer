import React from 'react'
import { FiUser, FiMail, FiPhone, FiEdit2, FiSend } from 'react-icons/fi';
const Contact = () => {
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
            Contact Us
          </h1>
        </div>
      </section>
      <section className=" py-24 px-6 flex justify-center">

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
          {/* معلومات التواصل الجانبية */}
          <div className="text-(--maincolor)">
            <h4 className="text-[#c5a059] font-medium mb-2">Work Process</h4>
            <h2 className="text-5xl font-serif mb-8 leading-tight">Thinking About Utilizing Our Services?</h2>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e3a3a] flex items-center justify-center text-[#c5a059]"><FiMail /></div>
                <div><p className="text-gray-400 text-xs">Email Address</p><p className="font-bold">Enfo@ensaf.com</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e3a3a] flex items-center justify-center text-[#c5a059]"><FiPhone /></div>
                <div><p className="text-gray-400 text-xs">Phone Number</p><p className="font-bold">+152-6485-5467</p></div>
              </div>
            </div>
          </div>

          {/* النموذج (The Form) */}
          <div className="bg-[#111] p-10 rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#c5a059]"></div>
            <h3 className="text-[#c5a059] text-center mb-2 font-medium">Have Any Questions?</h3>
            <h2 className="text-3xl text-white text-center mb-10 font-serif">Book An Appointment</h2>

            <form className="space-y-6">
              <div className="relative">
                <FiUser className="absolute right-4 top-4 text-gray-500" />
                <input type="text" name="from_name" placeholder="Name" required className="w-full bg-[#1e3a3a] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#c5a059] transition" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <FiMail className="absolute right-4 top-4 text-gray-500" />
                  <input type="email" name="user_email" placeholder="Email" required className="w-full bg-[#1e3a3a] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#c5a059]" />
                </div>
                <div className="relative">
                  <FiPhone className="absolute right-4 top-4 text-gray-500" />
                  <input type="text" name="user_number" placeholder="Number" required className="w-full bg-[#1e3a3a] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#c5a059]" />
                </div>
              </div>

              <div className="relative">
                <FiEdit2 className="absolute right-4 top-4 text-gray-500" />
                <textarea name="message" rows={4} placeholder="Message" required className="w-full bg-[#1e3a3a] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#c5a059] resize-none"></textarea>
              </div>

              <button
                className="w-full bg-[#2a3d3d] hover:bg-[#c5a059] py-4 rounded-2xl text-white font-bold transition-all flex items-center justify-center gap-2 group"
              >

              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact