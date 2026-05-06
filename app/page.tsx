import Image from "next/image";
import bg from '../public/df9c79f70121aee15fd66c884f20ff8e825dc552.jpg';
import bg2 from '../public/6c2789f4869af593f01bba4755810d65f972e8ca.jpg';
import bg3 from '../public/testi-2.jpg';
import bg4 from '../public/work-3.jpg';
import bg5 from '../public/ede1b7d10d8859f102445bc817be8806da250fe1.png';
import { FaGavel, FaUsers, FaBriefcase, FaStethoscope, FaUserInjured, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { PiGavelFill } from "react-icons/pi";
import { FiCalendar, FiUser, FiCheckCircle, FiEye, FiEdit3, FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';
export default function Home() {
  const steps = [
    {
      id: 1,
      icon: <FiCalendar className="w-12 h-12 text-yellow-600" />,
      title: "Schedule A Time",
      desc: "Choose a convenient date and time that works best for you. Our experienced lawyers are available to discuss."
    },
    {
      id: 2,
      icon: <FiUser className="w-12 h-12 text-yellow-600" />,
      title: "Meet with a Consultation",
      desc: "During your consultation, you'll have the opportunity to discuss your case with a qualified attorney."
    },
    {
      id: 3,
      icon: <FiCheckCircle className="w-12 h-12 text-yellow-600" />,
      title: "Plan for Success",
      desc: "Based on the information gathered during your consultation, we'll develop a tailored legal strategy to help you."
    }
  ];
  const cases = [
    { id: 1, title: 'Corporate Defense', category: 'Civil Law', img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=500' },
    { id: 2, title: 'Legal Research', category: 'Criminal Law', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500' },
    { id: 3, title: 'Initial Consultation', category: 'Family Law', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800', active: true },
    { id: 4, title: 'Tax Strategy', category: 'Finance Law', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500' },
    { id: 5, title: 'Contract Signing', category: 'Business Law', img: 'https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?auto=format&fit=crop&w=500' },
  ];
  const attorneys = [
    { name: 'Michel Phelps', role: 'Chief Justice', img: '../public/4.jpg', active: false },
    { name: 'Sarah Rahman', role: 'Attorney', img: '../public/1.jpg', active: true },
    { name: 'Smith Miller', role: 'Attorney', img: '../public/2.jpg', active: false },
    { name: 'Samira Dsuza', role: 'Attorney', img: '../public/3.jpg', active: false },
  ];
  const features = [
    {
      icon: <FaGavel />,
      title: "Commitment to Quality",
      desc: "We are committed to providing the highest quality legal services to our clients. Our team of experienced attorneys is dedicated to ensuring that your legal rights are protected and that you receive the best possible representation."
    },
    {
      icon: <FaUsers />,
      title: "Experienced Legal Counsel",
      desc: "Our team of experienced attorneys has a diverse range of expertise, covering a wide spectrum of legal areas. We specialize in corporate law, family law, real estate law, criminal law, and more."
    },
    {
      icon: <FaBriefcase />,
      title: "Tailored Legal Strategies",
      desc: "We understand that each case is unique, which is why we develop tailored legal strategies to meet the specific needs of our clients. Our team works closely with clients to understand their goals and develop a plan to achieve them."
    },
    {
      icon: <FaStethoscope />,
      title: "Personalized Attention",
      desc: "We believe in providing personalized attention to each client. Our attorneys take the time to understand your case and provide you with the guidance and support you need throughout the legal process."
    }
  ];

  return (
    <>
      {/* هنا البداية */}
      <section
        className="relative bg w-full min-h-screen flex items-center justify-center px-10 py-20 "
      >
        {/* طبقة تغميق خفيفة عشان النص يظهر بوضوح فوق الصورة */}
        <div className="absolute inset-0 bg-[#0A2624]/80"></div>

        {/* المحتوى (Container) */}
        <div className="relative z-10 max-w-xl text-white">
          <span className="text-(--therdcolor) font-medium tracking-widest uppercase text-sm">
            Trusted Legal Counsel
          </span>
          <h1 className="text-6xl font-serif font-bold mt-4 mb-6 leading-tight">
            Your Partner In Legal Success
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            Consultants offer guidance on a wide range of legal issues, including contract drafting, litigation, compliance, and regulatory matters.
          </p>

          <div className="flex gap-4">
            <button className="bg-(--therdcolor) hover:bg-(--therdcolor) text-white px-8 py-3 rounded-full transition">
              Contact Us →
            </button>
            <button className="border border-gray-500 hover:border-white px-8 py-3 rounded-full transition">
              Contact Us →
            </button>
          </div>

          {/* التقييمات */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-[#0A2624]"></div>
              <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-[#0A2624]"></div>
              <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-[#0A2624]"></div>
            </div>
            <div>
              <p className="font-bold">We have 2k+ Happy Client</p>
              <p className="text-(--therdcolor) text-sm">★★★★★ <span className="text-gray-400">4.5/5 (35k Reviews)</span></p>
            </div>
          </div>
        </div>

        {/* مكان الصورة الشخصية على اليمين */}
        <div className="relative z-10">
          < Image src={bg} className="w-full max-w-md rounded-3xl shadow-2xl" alt="Lawyer" />
        </div>
      </section>
      <div className="w-full flex justify-center items-center bg2 h-[180px]  ">

      </div>
      {/* About us */}
      <section className="bg3 text-white py-20 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* الجزء الخاص بالصور */}
          <div className="grid grid-cols-2 gap-4">
            {/* الصورة الكبيرة */}
            <div className="col-span-2 w-[80%]">
              <Image src={bg} alt="Lawyer" className="rounded-3xl w-full h-80 object-cover" />
            </div>
            {/* الصورة الصغيرة والمربع */}
            <div className="rounded-3xl overflow-hidden h-48">
              <Image src={bg2} alt="Gavel" className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#2D4D4A] rounded-3xl flex flex-col items-center justify-center p-6">
              <h2 className="text-5xl font-bold">49+</h2>
              <p className="text-sm tracking-widest mt-2 uppercase">Years Experience</p>
            </div>
          </div>

          {/* الجزء الخاص بالنصوص */}
          <div>
            <span className="text-amber-600 font-medium tracking-widest uppercase text-sm">About Us</span>
            <h2 className="text-5xl font-serif font-bold mt-2 mb-6 leading-tight">
              Guiding You Through Legal Challenges
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Our team of experienced attorneys has a diverse range of expertise, covering a wide spectrum of legal areas. We specialize in corporate law, family law, real estate law, criminal law.
            </p>

            {/* المميزات */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-gray-800 p-3 rounded-full h-fit">⚖️</div>
                <div>
                  <h3 className="text-xl font-bold">Excellence</h3>
                  <p className="text-gray-400">We are dedicated to providing the highest quality legal services.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-gray-800 p-3 rounded-full h-fit">⚖️</div>
                <div>
                  <h3 className="text-xl font-bold">Client Focus</h3>
                  <p className="text-gray-400">We prioritize the law needs and interests of our clients.</p>
                </div>
              </div>
            </div>

            <button className="mt-10 border border-gray-600 hover:border-white px-8 py-3 rounded-full transition">
              More About →
            </button>
          </div>
        </div>
      </section>
      {/* our services */}
      <section className="bg4 min-h-screen">
        <section className=" w-[80%] mx-auto ">
          <div className="flex flex-col py-16  gap-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto items-center ">
              <div className="col-span-2">
                <div className="grid grid-cols-2 ">
                  {/* الكارت الأول */}
                  <div>
                    <div className="col-span-1 relative w-[90%] h-80 bg-(--maincolor) rounded-[30px] p-8 flex flex-col justify-between overflow-hidden">
                      <span className="text-7xl font-light text-[#3a4444]">01</span>

                      <div className="absolute top-0 right-0 w-25 h-25 bg-(--secoundcolo) rounded-bl-[40px] flex items-start justify-end p-6">
                        <PiGavelFill className="text-white text-5xl" />
                      </div>

                      <h3 className="text-white text-xl font-medium leading-tight">
                        Criminal<br />Law
                      </h3>
                    </div>
                  </div>

                  {/* الكارت التاني */}
                  <div>
                    <div className="col-span-1 relative w-[90%]  h-80  rounded-[30px] justify-between overflow-hidden">
                      <Image src={bg3} alt="Gavel" className="rounded-3xl w-full h-full " />
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-span-2">
                <div className="  px-8 ">
                  {/* التاج الصغير (Label) */}
                  <h4 className="text-(--therdcolor) uppercase tracking-[0.2em] text-sm font-semibold mb-2">
                    Our Services
                  </h4>

                  {/* العنوان الرئيسي */}
                  <h1 className="text-4xl font-bold text-white leading-tight mb-3 ">
                    Reliable Legal Services <br /> For Your Peace
                  </h1>

                  {/* الفقرة الوصفية */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    At Ensaf, we offer a comprehensive ext range of more legal services to meet
                    your individual and business needs. Our experienced attorneys are
                    dedicated to providing expert advice.
                  </p>

                  {/* رابط "عرض المزيد" */}
                  <p className="text-(--therdcolor) text-sm font-medium  flex items-center gap-2 hover:gap-4 transition-all">
                    View More Services →
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto items-center">
              <div className="col-span-2">
                <div className="grid grid-cols-1">
                  {/* الكارت الأول */}
                  <div>
                    <div className=" relative  h-80 bg-(--secoundcolo) rounded-[30px] p-8 flex flex-col justify-between overflow-hidden">
                      <span className="text-7xl font-semibold text-white">02</span>

                      <div className="absolute top-0 right-0 w-25 h-25 bg-(--therdcolor) rounded-bl-[40px] flex items-start justify-end p-6">
                        <FaUsers className="text-white text-5xl" />
                      </div>

                      <h3 className="text-white text-xl font-medium leading-tight">
                        Family Law
                      </h3>
                      <p className="text-[#7b8889] text-xl font-medium leading-tight">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, recusandae odit. Accusantium aliquam nobis id!
                      </p>
                      <button className="border border-white w-1/2 text-white px-8 py-3 rounded-full transition">
                        Read More →
                      </button>
                    </div>
                  </div>


                </div>
              </div>


              <div className="col-span-2">
                <div className="grid grid-cols-2 ">
                  {/* الكارت الأول */}
                  <div>
                    <div className="col-span-1 relative w-[90%]  h-80  rounded-[30px] justify-between overflow-hidden">
                      <Image src={bg4} alt="Gavel" className="rounded-3xl w-full h-full " />
                    </div>
                  </div>


                  {/* الكارت التاني */}
                  <div>
                    <div className="col-span-1 relative w-[90%] h-80 bg-(--maincolor) rounded-[30px] p-8 flex flex-col justify-between overflow-hidden">
                      <span className="text-7xl font-light text-[#3a4444]">03</span>

                      <div className="absolute top-0 right-0 w-25 h-25 bg-(--secoundcolo) rounded-bl-[40px] flex items-start justify-end p-6">
                        <FaUserInjured className="text-white text-5xl" />
                      </div>

                      <h3 className="text-white text-xl font-medium leading-tight">
                        Personal <br />Injury Law
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto items-center">
              <div className="col-span-2">
                <div className="grid grid-cols-2 ">
                  {/* الكارت الأول */}
                  <div>
                    <div className="col-span-1 relative w-[90%] h-80 bg-(--maincolor) rounded-[30px] p-8 flex flex-col justify-between overflow-hidden">
                      <span className="text-7xl font-light text-[#3a4444]">01</span>

                      <div className="absolute top-0 right-0 w-25 h-25 bg-(--secoundcolo) rounded-bl-[40px] flex items-start justify-end p-6">
                        <PiGavelFill className="text-white text-5xl" />
                      </div>

                      <h3 className="text-white text-xl font-medium leading-tight">
                        Criminal<br />Law
                      </h3>
                    </div>
                  </div>

                  {/* الكارت التاني */}
                  <div>
                    <div className="col-span-1 relative w-[90%]  h-80  rounded-[30px] justify-between overflow-hidden">
                      <Image src={bg3} alt="Gavel" className="rounded-3xl w-full h-full " />
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-span-2">
                <div className="grid grid-cols-2 ">
                  {/* الكارت الأول */}
                  <div>
                    <div className="col-span-1 relative w-[90%] h-80 bg-(--maincolor) rounded-[30px] p-8 flex flex-col justify-between overflow-hidden">
                      <span className="text-7xl font-light text-[#3a4444]">01</span>

                      <div className="absolute top-0 right-0 w-25 h-25 bg-(--secoundcolo) rounded-bl-[40px] flex items-start justify-end p-6">
                        <PiGavelFill className="text-white text-5xl" />
                      </div>

                      <h3 className="text-white text-xl font-medium leading-tight">
                        Criminal<br />Law
                      </h3>
                    </div>
                  </div>

                  {/* الكارت التاني */}
                  <div>
                    <div className="col-span-1 relative w-[90%]  h-80  rounded-[30px] justify-between overflow-hidden">
                      <Image src={bg3} alt="Gavel" className="rounded-3xl w-full h-full " />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>
      </section>
      <section className="bg-[#111111] py-20 px-4 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-[#c5a059] font-medium mb-2">Our Case Study</h4>
          <h2 className="text-4xl md:text-5xl font-serif mb-12">Our Success Stories</h2>

          <div className="flex flex-col md:flex-row gap-4 h-[500px] items-stretch">
            {cases.map((item) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-2xl transition-all duration-700 ease-in-out cursor-pointer group 
                ${item.active ? 'flex-[3]' : 'flex-1 hover:flex-[1.5] border border-gray-800'}`}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay (Darken) */}
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 
                ${item.active ? 'bg-black/60' : 'group-hover:bg-black/50'}`}></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm mb-4">
                    <FiEye className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-[#c5a059] text-sm uppercase tracking-widest">{item.category}</p>
                </div>

                {/* Border effect for active/hover */}
                <div className={`absolute inset-2 border rounded-xl pointer-events-none transition-colors duration-500 
                ${item.active ? 'border-[#c5a059]/50' : 'border-transparent group-hover:border-[#c5a059]/30'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1a2022] py-16 px-4 text-white">
        <div className="max-w-5xl mx-auto text-center">
          {/* العنوان */}
          <h3 className="text-yellow-600 uppercase tracking-widest text-sm mb-2">Schedule Consultation</h3>
          <h2 className="text-4xl font-bold mb-6">Schedule A Free Consultation</h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            Our team of seasoned attorneys is dedicated to carefully listening to your concerns,
            ensuring a deep understanding of your unique situation.
          </p>

          {/* الخطوات */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center relative">
                {/* الدائرة والأيقونة */}
                <div className="w-32 h-32 rounded-full border-2 border-yellow-600 flex items-center justify-center mb-6 relative">
                  <span className="absolute -top-3 bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {step.id}
                  </span>
                  {step.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#111111] py-20 px-6 text-white">
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
      <section className="bg-[#242C2E] py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h4 className="text-[#c5a059] font-medium mb-2">Why Choose Us</h4>
          <h2 className="text-4xl font-serif">Why Choose Ensaf</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {/* العمود الأيمن (أول ميزتين) */}
          <div className="space-y-12 text-right">
            {features.slice(0, 2).map((feat, i) => (
              <div key={i}>
                <div className="flex justify-end mb-3"><div className="p-3 bg-[#1e3a3a] rounded-full text-[#c5a059] text-xl">{feat.icon}</div></div>
                <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* الفيديو في المنتصف */}
          <div className="relative group cursor-pointer border-4 border-[#c5a059] rounded-2xl overflow-hidden aspect-square">
            <Image src={bg5} alt="Video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>

          {/* العمود الأيسر (آخر ميزتين) */}
          <div className="space-y-12 text-left">
            {features.slice(2).map((feat, i) => (
              <div key={i}>
                <div className="flex justify-start mb-3"><div className="p-3 bg-[#1e3a3a] rounded-full text-[#c5a059] text-xl">{feat.icon}</div></div>
                <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#111111] py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* الجزء الأيسر: معلومات الاتصال */}
          <div>
            <h4 className="text-[#c5a059] font-medium mb-2">Work Process</h4>
            <h2 className="text-4xl font-serif mb-6">Thinking About Utilizing Our Services?</h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Our team of seasoned attorneys is dedicated to carefully listening to your concerns,
              ensuring a deep understanding of your unique situation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#1e3a3a] p-4 rounded-full text-[#c5a059]"><FiMapPin size={24} /></div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-gray-400">371 7th Ave, New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#1e3a3a] p-4 rounded-full text-[#c5a059]"><FiPhone size={24} /></div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-400">+152-6485-5467, +152-6485-5467</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#1e3a3a] p-4 rounded-full text-[#c5a059]"><FiMail size={24} /></div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-400">Enfo@ensaf.com, Enfo@ensaf.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* الجزء الأيمن: نموذج الحجز */}
          <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 shadow-2xl">
            <h4 className="text-[#c5a059] text-center mb-1">Have Any Questions?</h4>
            <h3 className="text-3xl font-bold text-center mb-8">Book An Appointment</h3>

            <form className="space-y-6">
              <div className="relative">
                <input type="text" placeholder="Name" className="w-full bg-transparent border border-white/20 rounded-lg p-4 pl-4 focus:border-[#c5a059] outline-none" />
                <FiUser className="absolute right-4 top-5 text-gray-500" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="email" placeholder="Email" className="bg-transparent border border-white/20 rounded-lg p-4 focus:border-[#c5a059] outline-none" />
                <input type="tel" placeholder="Number" className="bg-transparent border border-white/20 rounded-lg p-4 focus:border-[#c5a059] outline-none" />
              </div>

              <div className="relative">
                <textarea placeholder="Message" rows={4} className="w-full bg-transparent border border-white/20 rounded-lg p-4 focus:border-[#c5a059] outline-none"></textarea>
                <FiEdit3 className="absolute right-4 top-5 text-gray-500" />
              </div>

              <button className="w-full bg-[#1e3a3a] text-white py-4 rounded-lg font-bold hover:bg-[#2a4d4d] transition flex items-center justify-center gap-2">
                Send Now →
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-[#0a1a1a] text-white pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">

          {/* الشريط العلوي: معلومات الاتصال */}
          <div className="grid md:grid-cols-3 gap-8 pb-12 border-b border-white/10 mb-12">
            <div className="flex items-center gap-4">
              <div className="bg-[#1e3a3a] p-2 rounded-full cursor-pointer ">
                <FiMapPin className="text-[#c5a059] text-2xl" />

              </div>
              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-gray-400 text-sm">371 7th Ave, New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-center gap-4"><div className="bg-[#1e3a3a] p-2 rounded-full cursor-pointer "><FiPhone className="text-[#c5a059] text-2xl" /> </div><div><h4 className="font-bold">Phone</h4><p className="text-gray-400 text-sm">+152-6485-5467 <br /> +152-6485-5467</p></div></div>
            <div className="flex items-center gap-4"><div className="bg-[#1e3a3a] p-2 rounded-full cursor-pointer "><FiMail className="text-[#c5a059] text-2xl" /> </div><div><h4 className="font-bold">Email</h4><p className="text-gray-400 text-sm">Enfo@ensaf.com <br /> Enfo@ensaf.com</p></div></div>
          </div>

          {/* المحتوى الرئيسي */}
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* العمود 1: الشعار والوصف */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">ENSAF</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Ensaf is a Saudi Arabian law firm founded in 1982. They offer a wide range of legal services, including corporate law, commercial law.</p>
              <div className="flex gap-2">
                {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn].map((Icon, i) => (
                  <div key={i} className="bg-[#1e3a3a] p-2 rounded-full cursor-pointer hover:bg-[#c5a059] transition"><Icon size={14} /></div>
                ))}
              </div>
            </div>

            {/* العمود 2: Pages */}
            <div>
              <h3 className="font-bold text-lg mb-6">Pages</h3>
              <ul className="text-gray-400 space-y-3 text-sm">
                {['About Us', 'Our Blog', 'Our Team', 'Contact Us', 'Pricing Plans', 'Testimonials'].map(item => <li key={item} className="hover:text-[#c5a059] cursor-pointer">{item}</li>)}
              </ul>
            </div>

            {/* العمود 3: Services */}
            <div>
              <h3 className="font-bold text-lg mb-6">Services</h3>
              <ul className="text-gray-400 space-y-3 text-sm">
                {['Family Practice', 'Free Consultation', 'Criminal Affair', 'Corporate law', 'Real Estate Law', 'Healthy Care Policy'].map(item => <li key={item} className="hover:text-[#c5a059] cursor-pointer">{item}</li>)}
              </ul>
            </div>

            {/* العمود 4: Newsletter */}
            <div>
              <h3 className="font-bold text-lg mb-6">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Feel free to reach out if you want to collaborate with us.</p>
              <div className="relative">
                <input type="email" placeholder="Email Address" className="w-full bg-[#1e3a3a] border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-[#c5a059]" />
                <button className="absolute right-2 top-2 bg-[#c5a059] p-2 rounded-md"><FiSend /></button>
              </div>
            </div>
          </div>

          {/* الشريط السفلي */}
          <div className="text-center pt-8 border-t border-white/10 text-gray-500 text-sm">
            Copyright © 2024 Ensaf. All Rights Reserved.
          </div>
        </div>
      </footer>



    </>
  );
}
