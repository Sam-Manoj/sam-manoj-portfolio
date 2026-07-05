"use client";

import React, { useState } from 'react';
import { HiViewGrid, HiMenu, HiX } from 'react-icons/hi';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import GooeyNav from '@/components/ui/GooeyNav';
import Masonry from '@/components/ui/Masonry';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Added "Projects" back to the navigation items
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" }, 
  ];
   const photographyItems = [
          { id: "1", img: "/mum1.jpeg", url: "#", height: 500 }, // Landscape
          { id: "2", img: "/nat3.jpeg", url: "#", height: 800 }, // Portrait 1
          { id: "3", img: "nat2.jpeg", url: "#", height: 500 }, // Landscape
          { id: "4", img: "/nat1.jpeg", url: "#", height: 500 }, // Landscape
          { id: "5", img: "raj1.jpeg", url: "#", height: 500 }, // Landscape
          { id: "6", img: "raj3.jpeg", url: "#", height: 800 }, // Portrait 2
          { id: "7", img: "raj2.jpeg", url: "#", height: 500 }, // Landscape
          { id: "8", img: "raj4.jpeg", url: "#", height: 500 }, // Landscape
          { id: "9", img: "raj5.jpeg", url: "#", height: 500 }, // Landscape
  ];

  return (
    <div className="min-h-screen bg-[#0b001a] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3b0764] via-[#1a0033] to-[#0b001a] text-white font-sans overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6 relative z-50">
        <HiViewGrid className="text-3xl text-purple-400 cursor-pointer" />
        
        {/* Desktop: GooeyNav */}
        <div className="hidden md:block mix-blend-lighten">
          <GooeyNav items={navItems} />
        </div>

        {/* Desktop: Social Icons */}
        <div className="hidden md:flex space-x-6 text-xl">
          <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub className="cursor-pointer hover:text-purple-400 transition-colors" /></a>
          <a href="https://linkedin.com/in/sam-manoj" target="_blank" rel="noreferrer"><BsLinkedin className="cursor-pointer hover:text-purple-400 transition-colors" /></a>
        </div>

        {/* Mobile: Hamburger Button */}
        <button 
          className="md:hidden text-3xl text-gray-300 hover:text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0b001a]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="text-2xl font-bold tracking-widest text-gray-300 hover:text-purple-400 hover:scale-110 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex space-x-8 text-2xl pt-8 border-t border-white/10 w-1/2 justify-center">
            <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub className="text-gray-400 hover:text-purple-400" /></a>
            <a href="https://linkedin.com/in/sam-manoj" target="_blank" rel="noreferrer"><BsLinkedin className="text-gray-400 hover:text-purple-400" /></a>
          </div>
        </div>
      )}

      <main className="px-6 md:px-10 pb-20 max-w-7xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-12 mb-32 relative">
          
          <div className="lg:w-1/2 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-none tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              SAM<br />MANOJ
            </h1>
            
            <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl max-w-lg relative">
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Full-Stack Developer and UI/UX Designer bridging the gap between striking visual interfaces and robust backend systems. Experienced in creating responsive designs and integrating machine learning into dynamic web experiences.
              </p>
            </div>

            <div className="mt-10 flex items-center space-x-8">
              <span className="text-sm font-semibold tracking-wider hidden sm:block">Get Started</span>
              <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 md:py-2 rounded-full font-medium hover:scale-105 transition-transform shadow-[0_0_20px_rgba(192,38,211,0.4)]">
                <span>View Resume</span>
                <BsArrowRight />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center items-center">
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-purple-600/30 rounded-full blur-[100px]"></div>
            
            <div className="relative w-full max-w-sm md:max-w-md h-[350px] md:h-[400px] bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-[40px] border border-white/10 backdrop-blur-sm transform md:rotate-3 flex flex-col justify-center items-center p-8">
               <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">CORE STACK</h3>
               <div className="flex flex-wrap justify-center gap-3">
                 {['React', 'Next.js', 'Django', 'Python', 'AWS', 'Tailwind', 'Figma'].map(tech => (
                   <span key={tech} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 rounded-lg text-xs md:text-sm font-medium border border-white/5 backdrop-blur-md">
                     {tech}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        </div>
{/* Divider / Neon Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent my-24 opacity-50 shadow-[0_0_10px_rgba(168,85,247,1)]"></div>

        {/* ==================== SKILLS SECTION ==================== */}
        <section id="skills" className="w-full mb-32 relative z-10">
          <div className="flex justify-between items-end mb-10 px-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">
              SKILLS & EXPERTISE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Languages & Frameworks */}
            <div className="bg-[#120524]/60 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-xl hover:bg-[#120524]/80 transition-all shadow-[0_0_20px_rgba(168,85,247,0.05)]">
              <h3 className="text-xl font-bold mb-6 text-purple-300 tracking-wider">LANGUAGES & FRAMEWORKS</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'JavaScript', 'Java', 'C', 'SQL', 'React', 'Next.js', 'Django', 'Tailwind CSS'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AWS & Cloud */}
            <div className="bg-[#120524]/60 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-xl hover:bg-[#120524]/80 transition-all shadow-[0_0_20px_rgba(59,130,246,0.05)]">
              <h3 className="text-xl font-bold mb-6 text-blue-300 tracking-wider">CLOUD & AWS</h3>
              <div className="flex flex-wrap gap-3">
                {['AWS Cognito', 'DynamoDB', 'AWS Lambda', 'Amazon SageMaker', 'Amazon S3', 'API Gateway', 'IAM'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-blue-900/20 border border-blue-500/20 rounded-lg text-sm font-medium text-blue-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Software & Apps */}
            <div className="bg-[#120524]/60 border border-pink-500/20 rounded-3xl p-8 backdrop-blur-xl hover:bg-[#120524]/80 transition-all shadow-[0_0_20px_rgba(236,72,153,0.05)]">
              <h3 className="text-xl font-bold mb-6 text-pink-300 tracking-wider">CREATIVE SOFTWARE</h3>
              <div className="flex flex-wrap gap-3">
                {['Figma', 'Adobe Illustrator', 'Lightroom', 'DaVinci Resolve', 'Blender', 'Canva', 'Affinity'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-pink-900/20 border border-pink-500/20 rounded-lg text-sm font-medium text-pink-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Design Disciplines */}
            <div className="bg-[#120524]/60 border border-emerald-500/20 rounded-3xl p-8 backdrop-blur-xl hover:bg-[#120524]/80 transition-all shadow-[0_0_20px_rgba(16,185,129,0.05)]">
              <h3 className="text-xl font-bold mb-6 text-emerald-300 tracking-wider">DESIGN DISCIPLINES</h3>
              <div className="flex flex-wrap gap-3">
                {['UI/UX Design', 'Graphic Design', 'Game Design', 'Interactive Prototyping'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-emerald-900/20 border border-emerald-500/20 rounded-lg text-sm font-medium text-emerald-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        
        {/* Divider / Neon Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent my-24 opacity-50 shadow-[0_0_10px_rgba(168,85,247,1)]"></div>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="w-full mb-32">
          {/* Adjusted Margin Bottom for breathing room */}
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white px-2">
            EXPERIENCE
          </h2>

          {/* CSI SFIT Glass Timeline Card */}
          <div className="relative w-full bg-[#120524]/80 border border-purple-500/20 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-shadow duration-500">
            
            <div className="mb-12 flex items-center space-x-5">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-purple-500/50 flex-shrink-0">
                 <span className="text-black font-extrabold text-[10px] text-center leading-tight tracking-wider">CSI<br/>SFIT</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white">CSI SFIT</h3>
                <p className="text-sm md:text-base text-purple-400 font-medium tracking-wide">2 yrs • Mumbai, Maharashtra, India</p>
              </div>
            </div>

            <div className="relative pl-6 md:pl-8 border-l-[3px] border-purple-600/40 space-y-12 ml-2 md:ml-4">
              
              <div className="relative group">
                <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#120524] group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                
                <h4 className="text-xl md:text-2xl font-bold text-gray-100">Creative Head</h4>
                <p className="text-sm text-purple-300/80 mb-5 font-mono mt-1">Jun 2025 - Jun 2026 • 1 yr 1 mo</p>
                
                <ul className="space-y-3 text-sm md:text-[15px] text-gray-300 leading-relaxed list-disc list-outside ml-4 marker:text-purple-500">
                  <li>Leading the Creative Team to conceptualize and execute cohesive visual storytelling across all projects.</li>
                  <li>Designed innovative layouts for Paradigm Magazine Edition 8, presenting creative design concepts on topics such as "Quantum Computing and Its Future Aspects."</li>
                  <li>Overseeing and collaborating in the development of digital posters, event backdrops, and visual assets for major technical events like Workshops and MOSAIC 2025–2026.</li>
                  <li>Guiding team members in applying design principles to maintain consistent visual identity across all media.</li>
                </ul>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-200">Team Leadership</span>
                  <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-200">Team Building</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">+6 skills</span>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-5 h-5 bg-gray-500 rounded-full border-4 border-[#120524] group-hover:scale-125 transition-transform group-hover:bg-purple-400"></div>
                
                <h4 className="text-xl md:text-2xl font-bold text-gray-100">Creative Executive</h4>
                <p className="text-sm text-gray-400 mb-5 font-mono mt-1">Jul 2024 - Jun 2025 • 1 yr</p>
                
                <ul className="space-y-3 text-sm md:text-[15px] text-gray-300 leading-relaxed list-disc list-outside ml-4 marker:text-gray-500">
                  <li>Designed creative layouts for Paradigm Magazine Edition 7 with the design team, showcasing innovative design concepts for topics such as AR-VR, AR-VR Gaming, and Blender.</li>
                  <li>Developing digital posters and backdrops for technical events (Space Day 2024, MOSAIC 2024–2025) and workshops (Figma, Git, and LLM).</li>
                  <li>Collaborating with the Creative Team to ensure cohesive visual storytelling across all projects.</li>
                </ul>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-500/10 border border-gray-500/30 rounded-full text-xs font-medium text-gray-300">Poster Design</span>
                  <span className="px-3 py-1 bg-gray-500/10 border border-gray-500/30 rounded-full text-xs font-medium text-gray-300">Creative Strategy</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-500">+5 skills</span>
                </div>
              </div>

            </div>
          </div>

          {/* NSS SFIT Glass Timeline Card */}
          <div className="relative w-full bg-[#120524]/80 border border-purple-500/20 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-shadow duration-500 mt-12">
            
            <div className="mb-12 flex items-center space-x-5">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-purple-500/50 flex-shrink-0">
                 <span className="text-black font-extrabold text-[10px] text-center leading-tight tracking-wider">NSS<br/>SFIT</span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white">NSS SFIT</h3>
                <p className="text-sm md:text-base text-purple-400 font-medium tracking-wide">2 yrs</p>
              </div>
            </div>

            <div className="relative pl-6 md:pl-8 border-l-[3px] border-purple-600/40 space-y-12 ml-2 md:ml-4">
              
              <div className="relative group">
                <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-5 h-5 bg-purple-500 rounded-full border-4 border-[#120524] group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                
                <h4 className="text-xl md:text-2xl font-bold text-gray-100">Head</h4>
                <p className="text-sm text-purple-300/80 mb-5 font-mono mt-1">Jun 2025 - Jun 2026 • 1 yr 1 mo</p>
                
                <ul className="space-y-3 text-sm md:text-[15px] text-gray-300 leading-relaxed list-disc list-outside ml-4 marker:text-purple-500">
                  <li>Organizing large-scale social service initiatives and actively managing community donation inventory.</li>
                </ul>
              </div>

              <div className="relative group">
                <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-5 h-5 bg-gray-500 rounded-full border-4 border-[#120524] group-hover:scale-125 transition-transform group-hover:bg-purple-400"></div>
                
                <h4 className="text-xl md:text-2xl font-bold text-gray-100">Student Volunteer</h4>
                <p className="text-sm text-gray-400 mb-5 font-mono mt-1">Jul 2024 - Jun 2025 • 1 yr</p>
                
                <ul className="space-y-3 text-sm md:text-[15px] text-gray-300 leading-relaxed list-disc list-outside ml-4 marker:text-gray-500">
                  <li>Engaged in various social service campaigns and events, enhancing community awareness and support.</li>
                  <li>Developed a deeper understanding of societal issues, shaping my personal ideology and values.</li>
                  <li>Fostered strong relationships with fellow volunteers, exchanging knowledge and experiences that enriched my perspective.</li>
                </ul>
              </div>

            </div>
          </div>
        </section>
  
        {/* ==================== SOFTWARE PROJECTS ==================== */}
        <section id="projects" className="w-full mb-24">
          <div className="flex justify-between items-end mb-8 px-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">
              SOFTWARE PROJECTS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Cura (Wide Top-Left) */}
            <a 
              href="/cura"
              target="_blank" 
              rel="noopener noreferrer"
              className="md:col-span-2 lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg hover:bg-white/10 transition-all cursor-pointer group block"
            >
              <div className="w-full h-40 bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl mb-4 flex items-center justify-center border border-white/5 group-hover:border-purple-500/50 transition-colors">
                <span className="font-bold tracking-widest text-sm text-blue-200">CURA</span>
              </div>
              <h4 className="font-bold text-base text-gray-100">Healthcare System</h4>
              <p className="text-sm text-gray-400 mt-1">React, AWS Cognito</p>
            </a>

            {/* 2. TerraScope (Wide Top-Right) */}
            <div 
              className="md:col-span-2 lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg hover:bg-white/10 transition-all cursor-pointer group"
              onClick={() => window.open('https://github.com/Sam-Manoj/TerraScope', '_blank')}
            >
              <div className="w-full h-40 bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-xl mb-4 flex items-center justify-center border border-white/5 group-hover:border-emerald-500/50 transition-colors">
                <span className="font-bold tracking-widest text-sm text-green-200">TERRASCOPE</span>
              </div>
              <h4 className="font-bold text-base text-gray-100">PlantCare Analysis</h4>
              <p className="text-sm text-gray-400 mt-1">React, Next.js, FastAPI, Python</p>
            </div>

            {/* 3. Mal-Login Detection */}
            <div 
              className="col-span-1 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg hover:bg-white/10 transition-all cursor-pointer group"
              onClick={() => window.open('https://github.com/Sam-Manoj/mal-login-detection-system', '_blank')}
            >
              <div className="w-full h-40 bg-gradient-to-br from-red-900/40 to-purple-900/40 rounded-xl mb-4 flex items-center justify-center border border-white/5 group-hover:border-red-500/50 transition-colors">
                 <span className="font-bold tracking-widest text-sm text-red-200 text-center px-4 leading-relaxed">MAL-LOGIN<br/>DETECTION</span>
              </div>
              <h4 className="font-bold text-base text-gray-100">Security Analysis</h4>
              <p className="text-sm text-gray-400 mt-1">Python, Machine Learning</p>
            </div>
           
            {/* 4. Parking Lot Monitoring System */}
            <div 
              className="col-span-1 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg hover:bg-white/10 transition-all cursor-pointer group"
              onClick={() => window.open('https://github.com/Sam-Manoj/Parking-Lot-Monitoring-System', '_blank')}
            >
              <div className="w-full h-40 bg-gradient-to-br from-teal-900/40 to-blue-900/40 rounded-xl mb-4 flex items-center justify-center border border-white/5 group-hover:border-teal-500/50 transition-colors">
                 <span className="font-bold tracking-widest text-sm text-teal-200 text-center px-4 leading-relaxed">SMART<br/>PARKING</span>
              </div>
              <h4 className="font-bold text-base text-gray-100">Sensor & Microcontroller</h4>
              <p className="text-sm text-gray-400 mt-1">C, Arduino</p>
            </div>

            {/* 5. Market Share Predictor */}
            <div 
              className="col-span-1 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg hover:bg-white/10 transition-all cursor-pointer group"
              onClick={() => window.open('https://github.com/Sam-Manoj/Market-Share-Predictor-Markov-Chains-', '_blank')}
            >
              <div className="w-full h-40 bg-gradient-to-br from-orange-900/40 to-amber-900/40 rounded-xl mb-4 flex items-center justify-center border border-white/5 group-hover:border-orange-500/50 transition-colors">
                 <span className="font-bold tracking-widest text-sm text-orange-200 text-center px-4 leading-relaxed">MARKET<br/>PREDICTOR</span>
              </div>
              <h4 className="font-bold text-base text-gray-100">Predictive Modeling</h4>
              <p className="text-sm text-gray-400 mt-1">Python, Markov Chains</p>
            </div>

            {/* 6. Purchase Behavior Analysis */}
            <div 
              className="col-span-1 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg hover:bg-white/10 transition-all cursor-pointer group"
              onClick={() => window.open('https://github.com/Sam-Manoj/CustomerPurchaseBehaviorCalculator', '_blank')}
            >
              <div className="w-full h-40 bg-gradient-to-br from-emerald-900/40 to-green-900/40 rounded-xl mb-4 flex items-center justify-center border border-white/5 group-hover:border-emerald-500/50 transition-colors">
                 <span className="font-bold tracking-widest text-sm text-emerald-200 text-center px-4 leading-relaxed">PURCHASE<br/>BEHAVIOR</span>
              </div>
              <h4 className="font-bold text-base text-gray-100">Behavior Analysis</h4>
              <p className="text-sm text-gray-400 mt-1">Python, HMM</p>
            </div>

          </div>
        </section>
            
          

        {/* PROJECTS SECTION (Photography Masonry) */}
        <section id="projects" className="w-full mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 px-2 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">
                PHOTOGRAPHY PORTFOLIO
              </h2>
              <p className="text-gray-400 mt-2 font-medium">Visual storytelling through a different lens.</p>
            </div>
            
            
          </div>
          
          {/* CRITICAL: The Masonry component uses position: absolute for its children. 
            Because of this, the parent container MUST have a defined height, otherwise 
            it will collapse to 0px and break your layout.
          */}
          <div className="w-full bg-[#120524]/40 border border-purple-500/10 backdrop-blur-sm rounded-3xl p-2 md:p-4 h-[1400px] md:h-[900px] lg:h-[1000px]">
            <Masonry
              items={photographyItems}
              ease="power3.out"
              duration={0.8}
              stagger={0.1}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.97}
              blurToFocus={true}
              colorShiftOnHover={true} 
            />
          </div>
        </section>
        

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-10 pt-12 pb-8 px-6 md:px-10 bg-black/60 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>2026 Sam Manoj. +91 90049 00871 sammanoj05@gmail.com.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-400 transition-colors">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
