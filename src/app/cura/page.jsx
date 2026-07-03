import React from 'react';
import { BsArrowLeft, BsGithub, BsGlobe } from 'react-icons/bs';
import { HiOutlineServer, HiOutlineShieldCheck, HiOutlineUserGroup } from 'react-icons/hi';

export default function CuraProject() {
  return (
    <div className="min-h-screen bg-[#0b001a] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1e3a8a]/40 via-[#0b001a] to-[#0b001a] text-white font-sans overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-8 relative z-50 max-w-7xl mx-auto">
        <a href="/" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
          <BsArrowLeft className="text-xl" />
          <span className="font-semibold tracking-wider text-sm">BACK TO PORTFOLIO</span>
        </a>
        <div className="flex space-x-6 text-xl">
          <a href="#" target="_blank" rel="noreferrer"><BsGithub className="cursor-pointer hover:text-blue-400 transition-colors" /></a>
          <a href="#" target="_blank" rel="noreferrer"><BsGlobe className="cursor-pointer hover:text-blue-400 transition-colors" /></a>
        </div>
      </nav>

      <main className="px-6 md:px-10 pb-20 max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mt-12 mb-20 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-widest backdrop-blur-md">
            HEALTHCARE PLATFORM
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
            CURA: CLOUD BASED MEDICAL CONSULTATION SYSTEM [cite: 2]
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            A secure cloud-based healthcare consultation system that enables real-time patient monitoring and remote diagnosis, eliminating manual record inefficiencies[cite: 210, 212, 213].
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4 text-sm text-gray-500 items-center justify-center md:justify-start">
            <span><strong>Team:</strong> Ronald Aaron, Sam Manoj, Sharon Sam [cite: 6, 7, 8]</span>
            <span className="hidden md:inline">•</span>
            <span><strong>Guide:</strong> Ms. Varsha Nagpurkar [cite: 10]</span>
            <span className="hidden md:inline">•</span>
            <span>St. Francis Institute of Technology [cite: 1]</span>
          </div>
        </div>

        {/* The Problem & Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-6 text-red-300">The Problem</h3>
            <ul className="space-y-4 text-gray-300 leading-relaxed list-disc list-outside ml-5 marker:text-red-500/50">
              <li>Fragmented patient records due to manual documentation[cite: 39].</li>
              <li>Delayed diagnosis and treatment decisions[cite: 39].</li>
              <li>Limited communication between doctors, nurses, and patients[cite: 40].</li>
              <li>Lack of centralized medical data storage[cite: 40].</li>
              <li>Inefficient remote monitoring of patient health conditions[cite: 41].</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">The Solution</h3>
            <ul className="space-y-4 text-gray-300 leading-relaxed list-disc list-outside ml-5 marker:text-blue-500/50">
              <li>Proposed system delivers real-time monitoring and remote medical consultation[cite: 34].</li>
              <li>Cloud technologies enable secure, scalable, and instant data access[cite: 33].</li>
              <li>Strengthens collaboration between healthcare professionals[cite: 214, 215, 216].</li>
              <li>Improves speed, accessibility, and reliability of healthcare services[cite: 219].</li>
            </ul>
          </div>
        </div>

        {/* Architecture & Tech Stack Bento */}
        <h2 className="text-3xl font-black mb-10 tracking-wide text-white">SYSTEM ARCHITECTURE</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          
          {/* Core Roles */}
          <div className="lg:col-span-1 bg-[#120524]/50 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-xl">
            <HiOutlineUserGroup className="text-4xl text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">User Roles</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><strong>Admin:</strong> Manages System[cite: 78].</li>
              <li><strong>Nurse:</strong> Inputs Vitals[cite: 79].</li>
              <li><strong>Doctor:</strong> Consults & Prescribes[cite: 79].</li>
              <li><strong>Patient:</strong> Views Prescriptions[cite: 80].</li>
            </ul>
          </div>

          {/* Infrastructure */}
          <div className="lg:col-span-2 bg-[#120524]/50 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <HiOutlineServer className="text-4xl text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Cloud & Logic Implementation</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Built on an AWS Cloud Architecture featuring JWT Authentication, API Gateways, and real-time processing via AWS Lambda environments (Vitals intake, ML inference, Verified fulfillment)[cite: 102, 112, 116, 121, 122, 124, 125].
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">React.js Frontend [cite: 81]</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">Python / Node.js Backend [cite: 156]</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">AWS DynamoDB [cite: 157]</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">Amazon SageMaker [cite: 127]</span>
            </div>
          </div>
        </div>

        {/* Social Impact Section */}
        <div className="relative w-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
          <HiOutlineShieldCheck className="text-5xl text-blue-300 mb-6" />
          <h2 className="text-3xl font-black mb-10 tracking-wide text-white">SOCIAL IMPACT</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-100 mb-3">Bias & Fairness</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Ensures equitable treatment across all user demographics and requires algorithmic audits to prevent the perpetuation of historical biases[cite: 164, 165].
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-100 mb-3">Accessibility & Inclusion</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Designed for users of varying physical abilities and tech literacy levels. Aims to bridge, rather than widen, socioeconomic divides[cite: 167, 168, 169, 170, 171, 172, 174].
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-100 mb-3">Privacy & Security</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Prioritizes transparent data collection and informed user consent. Safeguards sensitive information to protect users from exploitation[cite: 175, 176].
              </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}