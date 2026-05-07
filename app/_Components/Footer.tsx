import React from 'react'
import { FaShareNodes } from 'react-icons/fa6'
import { PiGavelFill } from 'react-icons/pi'

const Footer = () => {
  return (
    <>
        <section className="bg-[#0a1a1a] py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                
                {/* Col 1: Logo & Desc */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <PiGavelFill className="text-[#c5a059] text-3xl" />
                    <h2 className="text-2xl font-bold text-white">Law Firm</h2>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    We are a law firm that provides legal services to clients. We are a team of experienced attorneys who are dedicated to providing the best possible legal representation to our clients.
                  </p>
                  <button className="border border-[#c5a059] text-[#c5a059] px-6 py-2 rounded-full hover:bg-[#c5a059] hover:text-white transition">
                    Get in Touch
                  </button>
                </div>

                {/* Col 2: Quick Links */}
                <div>
                  <h4 className="text-white font-bold mb-6">Quick Links</h4>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Attorneys</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
                  </ul>
                </div>

                {/* Col 3: Contact Info */}
                <div>
                  <h4 className="text-white font-bold mb-6">Contact Info</h4>
                  <ul className="space-y-3">
                    <li>
                      <span className="text-gray-400">Email:</span><br/>
                      <a href="#" className="text-gray-400 hover:text-white">[EMAIL_ADDRESS]</a>
                    </li>
                    <li>
                      <span className="text-gray-400">Phone:</span><br/>
                      <a href="#" className="text-gray-400 hover:text-white">+123 456 7890</a>
                    </li>
                    <li>
                      <span className="text-gray-400">Address:</span><br/>
                      <span className="text-gray-400">123 Main St, New York, NY 10001</span>
                    </li>
                  </ul>
                </div>

                {/* Col 4: Subscribe */}
                <div>
                  <h4 className="text-white font-bold mb-6">Subscribe</h4>
                  <p className="text-gray-400 text-sm mb-4">Get latest updates and offers</p>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="bg-gray-700 border border-gray-600 rounded-l-full px-4 py-2 text-white focus:outline-none focus:border-[#c5a059] flex-grow"
                    />
                    <button className="bg-[#c5a059] p-3 rounded-r-full hover:bg-[#b08f4f] transition">
                      <FaShareNodes className="text-white" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>
    
    </>
  )
}

export default Footer