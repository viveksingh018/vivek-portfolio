{/* HERO SECTION */}
<section id="hero" className="min-h-screen pt-24 flex items-center relative px-6">
  <div className="max-w-6xl mx-auto w-full">
    <div className="space-y-8 max-w-4xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl border border-cyan-400/30 bg-cyan-500/5 text-cyan-400 text-sm font-mono tracking-widest"
      >
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        Open to Work • MCA Graduate • Patna, India
      </motion.div>

      <h1 className="text-6xl md:text-8xl font-black leading-[1.05] tracking-tighter">
        CRAFTING<br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400">
          FUTURISTIC
        </span><br />
        DIGITAL EXPERIENCES
      </h1>

      <p className="text-2xl text-gray-300 font-light tracking-tight">
        MERN Developer • MCA Graduate • Full Stack Engineer
      </p>

      <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
        I build production-ready full-stack web applications using the MERN stack, 
        integrating AI APIs, automating workflows, and shipping real products — 
        from AI-powered blogs to social media automation platforms.
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

        
          href="/resume.pdf"
          download
          className="px-8 py-4 border border-white/30 hover:border-white/60 rounded-2xl font-semibold flex items-center gap-3 transition-all hover:bg-white/5"
        >
          <Download size={20} /> RESUME
        </a>

        
          href="https://wa.me/916201168647"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-4 border border-green-400/30 text-green-400 hover:bg-green-500/10 rounded-2xl font-semibold flex items-center gap-3 transition-all"
        >
          <FaWhatsapp size={22} /> CHAT
        </a>
      </div>

      {/* Stats Row */}
      <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
        {[
          { number: "2+", label: "Projects Deployed" },
          { number: "80+", label: "DSA Problems" },
          { number: "8.65", label: "CGPA" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-black text-cyan-400">{stat.number}</div>
            <div className="text-xs tracking-widest text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>