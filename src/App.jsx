import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  GitBranch,
  MessageCircle,
  ExternalLink,
  Rocket,
  ShoppingCart,
  Download,
  Code2,
  Briefcase,
  Trophy,
  ChevronUp,
  Clock,
} from "lucide-react";

/* ─── Scroll Progress Bar ─────────────────────────────────── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 origin-left z-[999]"
    />
  );
}

/* ─── Bento Box ───────────────────────────────────────────── */
function BentoBox({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl p-6 border border-white/10 bg-white/3 backdrop-blur-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Scroll Reveal Wrapper ───────────────────────────────── */
function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main App ────────────────────────────────────────────── */
function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["hero", "skills", "projects", "contact"];

  /* Track active section on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      navLinks.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= 120 && top > -300) setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    "HTML", "CSS", "JavaScript", "Python", "React.js",
    "Node.js", "MongoDB", "Express.js", "Tailwind CSS",
    "PostgreSQL", "GitHub", "DSA", "Vercel", "Framer Motion",
  ];

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* ── BACKGROUND GLOW ── */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-indigo-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-0 w-[20rem] h-[20rem] bg-fuchsia-500/5 blur-[100px] rounded-full" />
      </div>

      {/* ===============================
          NAVBAR
      ================================ */}
      <nav className="fixed top-[2px] left-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Profile Avatar + Name */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-full border-2 border-indigo-500/60 group-hover:border-indigo-400 transition-all duration-300 overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-[0_0_14px_rgba(99,102,241,0.4)]">
              <span className="text-sm font-black text-white tracking-tight">VS</span>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-black" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-black bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text group-hover:from-indigo-300 group-hover:to-fuchsia-400 transition-all duration-300">
                Vivek Singh
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wide">
                MERN Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((id) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-300 group
                  ${activeSection === id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                <span
                  className={`absolute inset-0 rounded-xl transition-all duration-300
                    ${activeSection === id
                      ? "bg-white/10 border border-white/15"
                      : "bg-transparent group-hover:bg-white/5"
                    }`}
                />
                {activeSection === id && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full"
                  />
                )}
                <span className="relative">
                  {id === "hero" ? "Home" : id.charAt(0).toUpperCase() + id.slice(1)}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-white/5 transition"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white rounded-full transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white rounded-full"
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-2">
                {navLinks.map((id) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-semibold capitalize transition-all
                      ${activeSection === id
                        ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {id === "hero" ? "Home" : id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ===============================
          HERO SECTION
      ================================ */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs uppercase tracking-widest font-bold mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            Available for Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6"
          >
            Building modern <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-fuchsia-500 text-transparent bg-clip-text">
              full-stack web applications
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-indigo-400 font-semibold text-lg mb-4"
          >
            MERN Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
          >
            Passionate about creating responsive, scalable, and user-friendly
            web applications using modern technologies like React, Node.js,
            MongoDB, and Tailwind CSS.
          </motion.p>

          {/* CTA Buttons - Optimized spacing for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-16 w-full max-w-lg mx-auto"
          >
            <button
              onClick={() => handleNavClick("projects")}
              className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
            >
              View Projects
            </button>

            <a
              href="/resume.pdf"
              download
              className="flex justify-center items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 font-bold transition-all duration-300 hover:scale-105 hover:border-white/20"
            >
              <Download size={18} />
              Resume
            </a>

            <a
              href="https://wa.me/916201168647"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border border-green-500/20 bg-green-500/10 text-green-300 hover:bg-green-500/20 font-bold transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={18} />
              Let's Talk
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: <Code2 className="mx-auto mb-4 text-indigo-400" size={36} />, value: "5+", label: "Projects Built" },
              { icon: <Trophy className="mx-auto mb-4 text-yellow-400" size={36} />, value: "50+", label: "DSA Problems" },
              { icon: <Briefcase className="mx-auto mb-4 text-green-400" size={36} />, value: "MERN", label: "Full Stack Developer" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, borderColor: "rgba(99,102,241,0.4)" }}
                className="rounded-3xl border border-white/10 bg-white/3 p-6 cursor-default transition-all duration-300"
              >
                {stat.icon}
                <h3 className="text-3xl font-black mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===============================
          SKILLS SECTION
      ================================ */}
      <section id="skills" className="py-24 border-y border-white/5 bg-white/2 relative overflow-hidden">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <Reveal>
          <h2 className="text-center text-4xl md:text-5xl font-black mb-16">
            Tech Stack
          </h2>
        </Reveal>

        <div className="overflow-hidden flex">
          {/* Added w-max to prevent compressing and breaking animation */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex gap-4 md:gap-6 whitespace-nowrap w-max px-4"
          >
            {/* Duplicated list enough times to cover screen size infinitely */}
            {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, borderColor: "rgba(99,102,241,0.5)" }}
                className="px-5 py-3 md:px-6 md:py-4 rounded-2xl border border-white/10 bg-white/3 text-base md:text-lg font-semibold text-gray-300 cursor-default transition-colors duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===============================
          PROJECTS
      ================================ */}
      <section id="projects" className="py-32 px-4 max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-center text-4xl md:text-6xl font-black mb-16">
            Featured Projects
          </h2>
        </Reveal>

        {/* Removed auto-rows-[300px] which was breaking mobile view */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* PROJECT 1 — QuickBlog */}
          <Reveal delay={0.1}>
            <BentoBox className="group relative h-full flex flex-col overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />
              <div className="absolute inset-0 z-0 pointer-events-none opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700 ease-out">
                <img
                  src="/quickblog.png" 
                  alt="QuickBlog Screenshot"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
              </div>
             
              <div className="flex flex-col h-full relative z-10">
                <Rocket
                  size={42}
                  className="text-purple-400 mb-6 group-hover:-translate-y-2 group-hover:text-purple-300 transition-all duration-500"
                />

                <h3 className="text-3xl font-black mb-3">QuickBlog Platform</h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  AI-powered full-stack blogging platform built with MERN stack,
                  authentication, dashboard system, and dynamic content management.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["React", "Node.js", "MongoDB", "Express"].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide border border-white/10 bg-white/5 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons fixed for Mobile - They stack on small screens and sit side-by-side on larger */}
                <div className="mt-auto flex flex-col sm:flex-row gap-4 w-full">
                  <a
                    href="https://quick-blog-omega-liard.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Deploy
                  </a>

                  <a
                    href="https://github.com/viveksingh018/fullstack-blog-platform"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-sm font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <FaGithub size={20} />
                    GitHub Repo
                  </a>
                </div>
              </div>
            </BentoBox>
          </Reveal>

          {/* PROJECT 2 — E-Commerce Coming Soon */}
          <Reveal delay={0.2}>
            <BentoBox className="group relative h-full flex flex-col overflow-hidden">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20 flex flex-col items-center justify-center rounded-3xl">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-300 font-bold text-sm mb-3">
                  <Clock size={16} className="animate-pulse" />
                  Coming Soon
                </div>
                <p className="text-gray-300 font-medium text-sm">Currently in development</p>
              </div>

              <div className="flex flex-col h-full opacity-30">
                <ShoppingCart size={42} className="text-blue-400 mb-6" />
                <h3 className="text-3xl font-black mb-3 text-blue-400">
                  E-Commerce Platform
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-8 flex-grow">
                  Full-featured shopping platform with authentication, cart
                  system, product management, and payment integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium">React</span>
                  <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium">Node.js</span>
                  <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium">MongoDB</span>
                </div>
              </div>
            </BentoBox>
          </Reveal>

        </div>
      </section>

      {/* ===============================
          CONTACT
      ================================ */}
      <section id="contact" className="py-32 px-4 border-t border-white/5 bg-gradient-to-b from-transparent to-indigo-950/20">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Let's build something impactful.
            </h2>

            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12">
              Have an idea, opportunity, or project? Feel free to connect with me.
              I'm always open to collaborating and learning new things.
            </p>

            <motion.a
              href="https://wa.me/916201168647"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black text-lg font-black transition shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.35)]"
            >
              <MessageCircle size={22} />
              Say Hello
            </motion.a>

            {/* SOCIALS */}
            <div className="mt-16 flex justify-center gap-8 text-gray-400">
              <motion.a
                href="https://github.com/viveksingh018"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                className="transition-colors duration-300"
              >
                <FaGithub size={30} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/viveksingh-mca/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, color: "#0077b5" }}
                whileTap={{ scale: 0.95 }}
                className="transition-colors duration-300"
              >
                <FaLinkedin size={30} />
              </motion.a>

              <motion.a
                href="mailto:viveksingh.codes@gmail.com"
                whileHover={{ scale: 1.2, color: "#f87171" }}
                whileTap={{ scale: 0.95 }}
                className="transition-colors duration-300"
              >
                <MdEmail size={30} />
              </motion.a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===============================
          FOOTER
      ================================ */}
      <footer className="py-8 text-center text-gray-500 text-sm bg-black">
        © {new Date().getFullYear()} Vivek Singh • Built with React, Tailwind CSS & Framer Motion
      </footer>

      {/* ── SCROLL TO TOP BUTTON ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-colors duration-300"
          >
            <ChevronUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;