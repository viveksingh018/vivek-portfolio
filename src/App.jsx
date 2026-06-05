import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import {
  Rocket,
  ShoppingCart,
  ExternalLink,
  Download,
  User,
  Star,
  Zap,
  ChevronUp,
  Clock,
  Code2,
  Server,
  Wrench,
  Cloud,
  Bot,
  Compass
} from "lucide-react";

/* ─── Scroll Progress Bar ─────────────────────────────────── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 origin-left z-[9999]"
    />
  );
}

/* ─── Mouse Spotlight ─────────────────────────────────────── */
function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[-1] opacity-40"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(165, 243, 252, 0.12), transparent 70%)`,
      }}
    />
  );
}

/* ─── Animated Background Blobs ───────────────────────────── */
function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -100, 0],
          y: [0, 120, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-15%] w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[140px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [50, -50, 50],
          y: [-80, 80, -80],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[20%] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[110px]"
      />
    </div>
  );
}

/* ─── Starfield ───────────────────────────────────────────── */
function Starfield() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {Array.from({ length: 80 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.4,
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Glass Bento Card ────────────────────────────────────── */
function GlassCard({ children, className = "", ...props }) {
  return (
    <div
      className={`relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-black/50 ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}

/* ─── Reveal Animation ────────────────────────────────────── */
function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
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

  const navLinks = ["hero", "about", "skills", "projects", "contact"];

  // Ultra-Smooth Scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      navLinks.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const skillsData = [
    {
      title: "Frontend",
      icon: <Code2 className="text-cyan-400" size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Lenis"],
    },
    {
      title: "Backend",
      icon: <Server className="text-purple-400" size={24} />,
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools & Testing",
      icon: <Wrench className="text-pink-400" size={24} />,
      skills: ["Git", "GitHub", "Postman", "CodeRabbit", "Linux"],
    },
    {
      title: "Deployment",
      icon: <Cloud className="text-blue-400" size={24} />,
      skills: ["Vercel", "Docker", "Render", "Github Page"],
    },
    {
      title: "AI Integrations",
      icon: <Bot className="text-green-400" size={24} />,
      skills: ["Copilot", "Claude Code", "Windsurf", "Gemini API", "Cursor"],
    },
    {
      title: "Up Next",
      icon: <Compass className="text-yellow-400" size={24} />,
      skills: ["System Design", "Langchain", "Langgraph", "n8n"],
    },
  ];

  return (
    <div className="bg-[#0a0a0f] text-white font-sans overflow-x-hidden min-h-screen relative">
      <ScrollProgress />
      <BackgroundBlobs />
      <Starfield />
      <MouseSpotlight />

      {/* Subtle Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-[-5]" />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-[0_0_20px_#67e8f9] group-hover:shadow-[0_0_30px_#c084fc] transition-all duration-300">
              <span className="font-black text-xl tracking-tighter">VS</span>
            </div>
            <div>
              <div className="font-bold text-2xl tracking-tighter bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">VIVEK SINGH</div>
              <div className="text-[10px] text-cyan-400 -mt-1 tracking-[2px] font-mono">MERN • FULL STACK</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 text-sm font-medium">
            {navLinks.map((id) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`px-6 py-2.5 rounded-2xl transition-all duration-300 relative overflow-hidden group
                  ${activeSection === id ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                <span className="relative z-10 capitalize">
                  {id === "hero" ? "Home" : id}
                </span>
                {activeSection === id && (
                  <motion.span
                    layoutId="navglow"
                    className="absolute inset-0 bg-white/10 rounded-2xl border border-cyan-400/30"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-2xl border border-white/20 hover:bg-white/5 transition-colors"
          >
            <div className="space-y-1.5">
              <motion.div
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                className="w-6 h-0.5 bg-white rounded-full origin-left"
              />
              <motion.div
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="w-6 h-0.5 bg-white rounded-full"
              />
              <motion.div
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                className="w-6 h-0.5 bg-white rounded-full origin-left"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl"
            >
              <div className="px-6 py-8 flex flex-col gap-2">
                {navLinks.map((id) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className="py-4 px-6 text-left text-lg font-medium rounded-2xl hover:bg-white/5 transition-all capitalize"
                  >
                    {id === "hero" ? "Home" : id}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen pt-24 flex items-center relative px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl border border-cyan-400/30 bg-cyan-500/5 text-cyan-400 text-sm font-mono tracking-widest"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              OPEN TO OPPORTUNITIES
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-black leading-[1.05] tracking-tighter">
              CRAFTING<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400">FUTURISTIC</span><br />
              DIGITAL EXPERIENCES
            </h1>

            <p className="text-2xl text-gray-300 font-light tracking-tight">
              MERN Developer • MCA Student • Full Stack Engineer
            </p>

            <p className="max-w-md text-lg text-gray-400">
              Building immersive web applications with cutting-edge technologies and modern backend architectures.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick("projects")}
                className="px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center gap-3 hover:bg-cyan-300 transition-all group"
              >
                EXPLORE PROJECTS
                <ExternalLink className="group-hover:rotate-45 transition" />
              </motion.button>

              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 border border-white/30 hover:border-white/60 rounded-2xl font-semibold flex items-center gap-3 transition-all hover:bg-white/5"
              >
                <Download size={20} /> RESUME
              </a>

              <a
                href="https://wa.me/916201168647"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-green-400/30 text-green-400 hover:bg-green-500/10 rounded-2xl font-semibold flex items-center gap-3 transition-all"
              >
                <FaWhatsapp size={22} /> CHAT
              </a>
            </div>
          </div>

          {/* Floating Visual */}
          <div className="relative hidden md:flex justify-center">
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="relative"
            >
              <div className="w-[380px] h-[380px] rounded-[4rem] border border-white/10 bg-gradient-to-br from-purple-900/40 to-cyan-900/30 backdrop-blur-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="mx-auto w-28 h-28 rounded-3xl bg-gradient-to-br from-cyan-400 to-pink-500 flex items-center justify-center mb-8 shadow-[0_0_60px_-10px] shadow-cyan-400">
                    <Zap size={64} className="text-black" />
                  </div>
                  <div className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                    VS
                  </div>
                </div>
              </div>
              {/* Neon rings */}
              <div className="absolute inset-0 border border-cyan-400/30 rounded-[4rem] animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-8 border border-purple-400/30 rounded-[3rem] animate-[spin_20s_linear_infinite_reverse]" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 hidden md:block"
        >
          <div className="w-5 h-9 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div className="w-0.5 h-2 bg-white/70 mt-2 rounded-full" animate={{ y: [0, 12] }} transition={{ duration: 1.5, repeat: Infinity }} />
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-28 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-5/12">
                <GlassCard className="p-10">
                  <div className="flex gap-4 mb-8">
                    <User className="text-cyan-400" size={42} />
                    <div>
                      <div className="text-5xl font-black tracking-tighter">VIVEK SINGH</div>
                      <div className="text-purple-400 font-medium">MCA • Full Stack Engineer</div>
                    </div>
                  </div>

                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                      MCA student with a passion for building modern, scalable web applications using the MERN stack.
                    </p>
                    <p>
                      Currently diving deep into advanced backend architectures, AI integrations, and building scalable full-stack products.
                    </p>
                    <p>
                      Obsessed with clean architecture, delightful user experiences, and bringing ideas to life with code.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-12">
                    {[
                      { number: "5+", label: "Hands on projects" },
                      { number: "80+", label: "DSA Solved on leetcode" },
                      { number: "2", label: "Years Exp." },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="text-center border border-white/10 rounded-2xl py-4 bg-black/30"
                      >
                        <div className="text-4xl font-black text-cyan-400">{stat.number}</div>
                        <div className="text-xs tracking-widest text-gray-500 mt-1">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </div>

              <div className="md:w-7/12 space-y-8">
                <h2 className="text-6xl font-black tracking-tighter">Engineering<br />the Future</h2>
                
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="text-6xl text-purple-400">01</div>
                    <div>
                      <div className="text-2xl font-semibold mb-3">MERN Mastery</div>
                      <p className="text-gray-400">End-to-end full-stack applications with focus on performance and beautiful interfaces.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-6xl text-pink-400">02</div>
                    <div>
                      <div className="text-2xl font-semibold mb-3">AI & Modern Workflows</div>
                      <p className="text-gray-400">Leveraging AI agents like Claude Code and Windsurf to ship code faster and smarter.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-6xl text-cyan-400">03</div>
                    <div>
                      <div className="text-2xl font-semibold mb-3">Continuous Learner</div>
                      <p className="text-gray-400">Always experimenting with new tools, design systems, and modern development practices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-28 bg-black/40 border-y border-white/10 relative">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="text-center text-5xl md:text-6xl font-black tracking-tighter mb-16">TECHNICAL ARSENAL</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, idx) => (
              <Reveal key={category.title} delay={idx * 0.1}>
                <GlassCard className="p-8 h-full transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-center text-5xl md:text-6xl font-black tracking-tighter mb-6">SELECTED WORKS</h2>
            <p className="text-center text-gray-400 max-w-md mx-auto">Crafted with passion and attention to every pixel</p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            {/* QuickBlog */}
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -12 }}
                className="group relative h-full rounded-3xl overflow-hidden border border-white/10 bg-black/40"
              >
                <div className="absolute inset-0">
                  <img
                    src="/quickblog.png"
                    alt="QuickBlog"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                <div className="relative h-full p-10 flex flex-col">
                  <div className="flex-1">
                    <Rocket className="text-purple-400 mb-6" size={48} />
                    <h3 className="text-4xl font-black mb-4">QuickBlog</h3>
                    <p className="text-gray-300 max-w-xs">
                      AI-powered blogging platform with full authentication, dashboard, and dynamic content.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-8">
                    {["MERN", "Tailwind", "JWT", "Vercel"].map((t, i) => (
                      <span key={i} className="text-xs px-4 py-1.5 bg-white/10 rounded-full border border-white/20">{t}</span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto pt-10">
                    <a
                      href="https://quick-blog-omega-liard.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-cyan-300 transition"
                    >
                      LIVE DEMO <ExternalLink size={18} />
                    </a>
                    <a
                      href="https://github.com/viveksingh018/fullstack-blog-platform"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-4 border border-white/30 hover:bg-white/10 rounded-2xl flex items-center justify-center gap-2 transition"
                    >
                      <FaGithub /> CODE
                    </a>
                  </div>
                </div>
              </motion.div>
            </Reveal>

            {/* E-Commerce */}
            <Reveal delay={0.2}>
              <motion.div
                whileHover={{ y: -12 }}
                className="group relative h-full rounded-3xl overflow-hidden border border-white/10 bg-black/40"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://placehold.co/800x600/1a1429/ffffff?text=E-COMMERCE"
                    alt="E-Commerce"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-400/40 text-yellow-300 px-6 py-2 rounded-full text-sm mb-6">
                      <Clock className="animate-pulse" /> IN DEVELOPMENT
                    </div>
                    <h3 className="text-4xl font-black text-white/90">E-Commerce Platform</h3>
                  </div>
                </div>

                <div className="relative h-full p-10 flex flex-col opacity-70">
                  <ShoppingCart className="text-blue-400 mb-6" size={48} />
                  <h3 className="text-4xl font-black mb-4">Modern Storefront</h3>
                  <p className="text-gray-300">Full-featured e-commerce with cart, payments, and admin dashboard.</p>

                  <div className="mt-auto pt-12 flex gap-3">
                    <span className="text-xs px-4 py-2 bg-white/10 rounded-full">React</span>
                    <span className="text-xs px-4 py-2 bg-white/10 rounded-full">Node</span>
                    <span className="text-xs px-4 py-2 bg-white/10 rounded-full">Stripe</span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 border-t border-white/10 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <GlassCard className="p-16 md:p-20">
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
                LET&apos;S CREATE<br />SOMETHING<br />LEGENDARY
              </h2>

              <p className="text-xl text-gray-400 max-w-md mx-auto mb-12">
                Whether you have an exciting project, job opportunity, or just want to connect — I&apos;m all ears.
              </p>

              <motion.a
                href="https://wa.me/916201168647"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold text-2xl px-14 py-7 rounded-3xl shadow-2xl shadow-purple-500/40 hover:shadow-cyan-400/50 transition-all"
              >
                <FaWhatsapp size={32} />
                MESSAGE ME
              </motion.a>

              <div className="mt-16 flex justify-center gap-10">
                <motion.a
                  href="https://github.com/viveksingh018"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.3, color: "#fff" }}
                  className="text-4xl text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/viveksingh-mca/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.3, color: "#0a66c2" }}
                  className="text-4xl text-gray-400 hover:text-[#0a66c2] transition-colors"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="mailto:viveksingh.codes@gmail.com"
                  whileHover={{ scale: 1.3, color: "#f87171" }}
                  className="text-4xl text-gray-400 hover:text-[#f87171] transition-colors"
                >
                  <MdEmail />
                </motion.a>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <footer className="py-12 text-center text-xs text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} VIVEK SINGH • BUILT WITH REACT + TAILWIND + FRAMER MOTION
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] p-4 bg-black/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            <ChevronUp size={26} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;