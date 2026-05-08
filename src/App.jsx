import React from 'react';
import { motion } from 'framer-motion';
import BentoBox from './components/BentoBox';

function App() {
  const skills = [
    "React.js", "Node.js", "MongoDB", "Express.js", 
    "Tailwind CSS", "JavaScript", "DSA (LeetCode)", "Git & GitHub", "Framer Motion"
  ];

  return (
    <div className="font-sans selection:bg-indigo-500/30">
      
      {/* 🟢 STICKY NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            VK.
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#hero" className="hover:text-white transition">Home</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/*  HERO SECTION */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold tracking-wide uppercase">
            Available for Remote Roles 🌍
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            I build digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-fuchsia-500">
              experiences.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Hi, I'm Vivek Kumar. A Full-Stack MERN developer obsessed with clean code, modern UIs, and solving complex problems.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition scale-105">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-white/10 text-white font-bold rounded-full border border-white/10 hover:bg-white/20 transition">
              Let's Talk
            </a>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <h2 className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-10">
          Tech Stack & Tools
        </h2>
        {/* Infinite Scroll Container */}
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            className="flex gap-8 px-4"
          >
            {/* Array ko 2 baar map kiya hai taaki loop seamless dikhe */}
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div key={index} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-lg font-bold text-gray-300">
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*  PROJECTS BENTO GRID */}
      <section id="projects" className="py-32 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-12 text-center">Featured Work.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Project 1 (Main/Large) */}
          <BentoBox className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-900/40 to-black group">
            <div className="flex flex-col h-full">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-3xl font-black mb-2 text-white">QuickBlog</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                An AI-Enabled Full Stack Blog Application. Built from scratch with the complete MERN stack, offering robust content management and a seamless user interface.
              </p>
              <div className="flex gap-2 mb-auto">
                <span className="text-xs font-bold px-3 py-1 bg-white/10 rounded-full">React</span>
                <span className="text-xs font-bold px-3 py-1 bg-white/10 rounded-full">Node.js</span>
                <span className="text-xs font-bold px-3 py-1 bg-white/10 rounded-full">MongoDB</span>
              </div>
              <a href="#" className="mt-4 text-indigo-400 font-bold hover:text-indigo-300 transition flex items-center gap-2">
                View Repository ➔
              </a>
            </div>
          </BentoBox>

          {/* Project 2 */}
          <BentoBox className="bg-neutral-900/50 hover:bg-neutral-800 transition-colors">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Portfolio v1</h3>
                <p className="text-sm text-gray-400">Personal portfolio generated using AI tools like Claude Code.</p>
              </div>
              <a href="#" className="text-sm font-bold text-gray-300 hover:text-white">Live Demo ↗</a>
            </div>
          </BentoBox>

          {/* DSA / Learning Progress */}
          <BentoBox className="bg-neutral-900/50">
             <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-400">DSA Grind</h3>
                <p className="text-sm text-gray-400">Regularly solving algorithms on LeetCode to optimize problem-solving skills.</p>
              </div>
              <span className="text-2xl">💻</span>
            </div>
          </BentoBox>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-4 bg-gradient-to-t from-indigo-900/20 to-transparent border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Let's build together.</h2>
          <p className="text-gray-400 mb-10">
            Currently looking for remote software development roles. Whether you have a project in mind or just want to say hi, my inbox is always open!
          </p>
          <a href="mailto:hello@example.com" className="inline-block px-10 py-4 bg-white text-black font-black text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Say Hello 👋
          </a>
          
          <div className="mt-20 flex justify-center gap-6 text-gray-500">
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;