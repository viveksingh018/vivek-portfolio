import React from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  Link,
  Mail,
  MessageCircle,
  ExternalLink,
  Rocket,
  Sparkles,
  Laptop,
  ShoppingCart,
  Download,
  Code2,
  Briefcase,
  Trophy,
} from "lucide-react";

function BentoBox({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl p-6 border border-white/10 bg-white/3 backdrop-blur-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "PostgreSQL",
    "GitHub",
    "DSA",
    "Vercel",
    "Framer Motion",
  ];

  return (
    <div className="bg-black text-white font-sans scroll-smooth overflow-x-hidden">
      {/* ===============================
          BACKGROUND GLOW
      ================================ */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-indigo-500/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* ===============================
          NAVBAR
      ================================ */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#hero"
            className="text-2xl font-black bg-linear-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text"
          >
            Vivek Singh
          </a>

          <div className="hidden md:flex gap-8 text-sm text-gray-300 font-medium">
            <a href="#hero" className="hover:text-white transition">
              Home
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#timeline" className="hover:text-white transition">
              Journey
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ===============================
          HERO SECTION
      ================================ */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs uppercase tracking-widest font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for Opportunities
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            Building modern <br />

            <span className="bg-linear-to-r from-indigo-400 via-purple-500 to-fuchsia-500 text-transparent bg-clip-text">
              full-stack web applications
            </span>
          </h1>

          {/* Role */}
          <p className="text-indigo-400 font-semibold text-lg mb-4">
            MERN Stack Developer
          </p>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
            Passionate about creating responsive, scalable, and user-friendly
            web applications using modern technologies like React, Node.js,
            MongoDB, and Tailwind CSS.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 font-bold transition hover:scale-105"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="https://wa.me/916201168647"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-green-500/20 bg-green-500/10 text-green-300 hover:bg-green-500/20 font-bold transition hover:scale-105"
            >
              <MessageCircle size={18} />
              Let's Talk
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
              <Code2 className="mx-auto mb-4 text-indigo-400" size={36} />
              <h3 className="text-3xl font-black mb-2">10+</h3>
              <p className="text-gray-400 text-sm">Projects Built</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
              <Trophy className="mx-auto mb-4 text-yellow-400" size={36} />
              <h3 className="text-3xl font-black mb-2">300+</h3>
              <p className="text-gray-400 text-sm">DSA Problems</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/3 p-6">
              <Briefcase className="mx-auto mb-4 text-green-400" size={36} />
              <h3 className="text-3xl font-black mb-2">MERN</h3>
              <p className="text-gray-400 text-sm">Full Stack Developer</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===============================
          SKILLS SECTION
      ================================ */}
      <section
        id="skills"
        className="py-24 border-y border-white/5 bg-white/2"
      >
        <h2 className="text-center text-4xl md:text-5xl font-black mb-16">
          Tech Stack
        </h2>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 18,
            }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/3 text-lg font-semibold text-gray-300"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===============================
          PROJECTS
      ================================ */}
      <section
        id="projects"
        className="py-32 px-4 max-w-7xl mx-auto"
      >
        <h2 className="text-center text-4xl md:text-6xl font-black mb-16">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* PROJECT 1 */}
          <BentoBox className="md:col-span-2 group relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full"></div>

            <div className="flex flex-col h-full relative z-10">
              <Rocket
                size={42}
                className="text-purple-400 mb-4 group-hover:-translate-y-1 transition"
              />

              <h3 className="text-3xl font-black mb-3">
                QuickBlog Platform
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
                AI-powered full-stack blogging platform built with MERN stack,
                authentication, dashboard system, and dynamic content
                management.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Node.js", "MongoDB", "Express"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4 flex-wrap">
                <a
                  href="https://quick-blog-omega-liard.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>

                <a
                  href="https://github.com/viveksingh018"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-bold hover:bg-white/10 transition"
                >
                  <GitBranch size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </BentoBox>

          {/* PROJECT 2 */}
          <BentoBox className="group">
            <div className="flex flex-col h-full justify-between">
              <div>
                <Sparkles
                  size={36}
                  className="text-indigo-400 mb-4"
                />

                <h3 className="text-2xl font-black mb-3">
                  Portfolio v2
                </h3>

                <p className="text-gray-400 text-sm">
                  Modern animated portfolio built using React, Tailwind CSS, and
                  Framer Motion.
                </p>
              </div>

              <span className="text-sm text-yellow-400 font-bold">
                Coming Soon
              </span>
            </div>
          </BentoBox>

          {/* PROJECT 3 */}
          <BentoBox>
            <div className="flex flex-col h-full justify-between">
              <div>
                <Laptop
                  size={36}
                  className="text-green-400 mb-4"
                />

                <h3 className="text-2xl font-black mb-3">
                  DSA Journey
                </h3>

                <p className="text-gray-400 text-sm">
                  Consistently solving algorithms and improving problem-solving
                  skills using LeetCode.
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold w-fit">
                Learning
              </span>
            </div>
          </BentoBox>

          {/* PROJECT 4 */}
          <BentoBox className="md:col-span-2 group">
            <div className="flex flex-col md:flex-row gap-6 h-full items-start md:items-center">
              <ShoppingCart
                size={52}
                className="text-blue-400 group-hover:rotate-6 transition"
              />

              <div className="flex-1">
                <h3 className="text-3xl font-black mb-3 text-blue-400">
                  E-Commerce Platform
                </h3>

                <p className="text-gray-400 text-sm mb-6 max-w-md">
                  Full-featured shopping platform with authentication, cart
                  system, product management, and payment integration.
                </p>

                <div className="flex gap-4 flex-wrap">
                  <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">
                    React
                  </span>

                  <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">
                    Node.js
                  </span>

                  <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>
          </BentoBox>
        </div>
      </section>

      {/* ===============================
          TIMELINE
      ================================ */}
      <section
        id="timeline"
        className="py-32 px-4 border-y border-white/5 bg-white/2"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-4xl md:text-6xl font-black mb-20">
            My Journey
          </h2>

          <div className="space-y-8">
            {[
              {
                year: "2025",
                title: "Started Web Development",
                desc: "Learned HTML, CSS, JavaScript, and frontend fundamentals.",
              },
              {
                year: "2025",
                title: "Built MERN Stack Projects",
                desc: "Created full-stack applications using React, Node.js, MongoDB, and Express.",
              },
              {
                year: "2026",
                title: "Focused on DSA & Backend",
                desc: "Improving problem-solving skills and backend architecture knowledge.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-3xl border border-white/10 bg-white/3"
              >
                <div className="text-indigo-400 font-black text-xl min-w-20">
                  {item.year}
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
          CONTACT
      ================================ */}
      <section
        id="contact"
        className="py-32 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Let's build something impactful.
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Have an idea, opportunity, or project? Feel free to connect with me.
            I'm always open to collaborating and learning new things.
          </p>

          <a
            href="https://wa.me/916201168647"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black text-lg font-black hover:scale-105 transition shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <MessageCircle size={24} />
            Say Hello
          </a>

          {/* SOCIALS */}
          <div className="mt-20 flex justify-center gap-8 text-gray-400">
            <a
              href="https://github.com/viveksingh018"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-125 transition"
            >
              <GitBranch size={34} />
            </a>

            <a
              href="https://www.linkedin.com/in/viveksingh-mca/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0077b5] hover:scale-125 transition"
            >
              <Link size={34} />
            </a>

            <a
              href="mailto:viveksingh.codes@gmail.com"
              className="hover:text-red-400 hover:scale-125 transition"
            >
              <Mail size={34} />
            </a>
          </div>
        </div>
      </section>

      {/* ===============================
          FOOTER
      ================================ */}
      <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm">
        © 2026 Vivek Singh • Built with React, Tailwind CSS & Framer Motion
      </footer>
    </div>
  );
}

export default App;