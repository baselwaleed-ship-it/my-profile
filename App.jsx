import { useState, useEffect, useRef } from "react";

/* ================================================================
   ✏️  EDIT YOUR INFO HERE — everything flows from this config
   ----------------------------------------------------------------
   • Add projects   → projects[]
   • Add socials    → socials[]
   • Add interests  → interests[]
   • Edit bio/name  → name, bio, subtitle
================================================================ */
const CONFIG = {
  name: "BASEL",
  subtitle: "Electronics · Arduino · Robotics · Smart Systems",
  bio: "I build things that connect the physical and digital worlds. From robot arms to smart home systems — if it has circuits and code, I'm interested.",
  location: "Saudi Arabia",
  available: true,

  // ── Typing animation roles — add or edit freely ───────────────
  roles: [
    "Electronics Enthusiast",
    "Arduino Builder",
    "Robotics Maker",
    "Smart Home Tinkerer",
    "Embedded Systems Learner",
  ],

  // ── Socials — add or remove entries freely ────────────────────
  // Each entry: { label, url, icon: <svg/> }
  socials: [
    {
      label: "TikTok",
      url: "https://tiktok.com/@basel",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.26 8.26 0 004.84 1.56V6.82a4.85 4.85 0 01-1.07-.13z"/>
        </svg>
      ),
    },
    {
      label: "Instagram",
      url: "https://instagram.com/basel",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      label: "GitHub",
      url: "https://github.com/basel",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: "X / Twitter",
      url: "https://x.com/basel",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/basel",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: "Discord",
      url: "https://discord.com/users/basel",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
    },
  ],

  // ── Interests — add or remove strings freely ──────────────────
  interests: [
    "Robotics",
    "Electronics",
    "Embedded Systems",
    "Smart Home",
    "Artificial Intelligence",
    "PCB Design",
    "3D Printing",
    "IoT",
  ],

  // ── Communities — add or remove freely ───────────────────────
  communities: [
    // { name: "Hackspace Riyadh", url: "#" },
    // { name: "Arduino Community", url: "#" },
  ],

  // ── Projects — add or remove freely ──────────────────────────
  // Fields: id (e.g. "01"), name, desc, tags[], status ("done" | "wip")
  projects: [
    {
      id: "01",
      name: "Smart Home",
      desc: "Automated lighting, AC, and appliances controlled via phone. Built with ESP32 and MQTT.",
      tags: ["ESP32", "MQTT", "Wi-Fi"],
      status: "done",
    },
    {
      id: "02",
      name: "Smart Car",
      desc: "Autonomous obstacle-avoidance car using ultrasonic sensors and Arduino motor control.",
      tags: ["Arduino", "Ultrasonic", "L298N"],
      status: "done",
    },
    {
      id: "03",
      name: "Robotic Arm",
      desc: "4-DOF servo arm controlled via joystick and serial commands. Custom 3D-printed chassis.",
      tags: ["Arduino", "Servos", "3D Print"],
      status: "wip",
    },
    {
      id: "04",
      name: "RFID Door Lock",
      desc: "Card-based door access with OLED feedback and relay-controlled solenoid lock.",
      tags: ["RFID", "Arduino", "OLED"],
      status: "done",
    },
    {
      id: "05",
      name: "Security System",
      desc: "PIR motion detection with keypad arming, buzzer alarm, and LCD status display.",
      tags: ["PIR", "Keypad", "LCD"],
      status: "done",
    },
  ],
};

/* ================================================================
   UTILS
================================================================ */
const cn = (...c) => c.filter(Boolean).join(" ");

/* ================================================================
   HOOKS
================================================================ */
function useVisible(ref, threshold = 0.1) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return v;
}

function useTypeLoop(words, speed = 85, pause = 2000) {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const idx = useRef(0);
  const char = useRef(0);
  const del = useRef(false);

  useEffect(() => {
    let raf;
    let last = 0;
    const step = (now) => {
      const word = words[idx.current];
      const delay = del.current ? speed / 2 : speed;
      if (now - last < delay) { raf = requestAnimationFrame(step); return; }
      last = now;
      if (!del.current) {
        char.current++;
        setText(word.slice(0, char.current));
        setIsTyping(true);
        if (char.current >= word.length) { del.current = true; last += pause; setIsTyping(false); }
      } else {
        char.current--;
        setText(word.slice(0, char.current));
        setIsTyping(true);
        if (char.current <= 0) {
          del.current = false;
          idx.current = (idx.current + 1) % words.length;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [words, speed, pause]);

  return { text, isTyping };
}

/* ================================================================
   LOADING SCREEN
================================================================ */
function Loader({ onDone }) {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 1600);
    const t2 = setTimeout(() => onDone(), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div className={cn(
      "fixed inset-0 z-[9998] bg-[#060606] flex flex-col items-center justify-center gap-6 transition-opacity duration-600",
      fade ? "opacity-0 pointer-events-none" : "opacity-100"
    )}>
      {/* Diamond logo */}
      <div className="w-10 h-10 border-2 border-green-main rotate-45 flex items-center justify-center">
        <div className="w-3.5 h-3.5 bg-green-main" />
      </div>

      <p className="font-mono text-sm text-neutral-600 tracking-[0.25em]">
        Loading<span className="animate-pulse">...</span>
      </p>

      {/* Progress bar */}
      <div className="w-48 h-px bg-white/[0.05] overflow-hidden">
        <div className="h-full bg-green-main" style={{ animation: "grow 1.4s ease both" }} />
      </div>

      <style>{`@keyframes grow { from { width:0 } to { width:100% } }`}</style>
    </div>
  );
}

/* ================================================================
   FADE WRAPPER
================================================================ */
function Fade({ children, delay = 0, className }) {
  const ref = useRef(null);
  const v = useVisible(ref);
  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700", className)}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(18px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ================================================================
   SECTION LABEL — reusable small green label above headings
================================================================ */
function Label({ children }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.3em] text-green-main uppercase flex items-center gap-2 mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-green-main" />
      {children}
    </span>
  );
}

/* ================================================================
   NAV
================================================================ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const links = ["about", "projects", "contact"];

  return (
    <>
      <nav className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-400",
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-neutral-700/40 py-3" : "py-5"
      )}>
        <div className="max-w-5xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-6 h-6 border border-green-main-60 rotate-45 flex items-center justify-center group-hover:border-green-main transition-colors duration-300">
              <div className="w-2 h-2 bg-green-main" />
            </div>
            <span className="font-mono text-sm text-white tracking-[0.2em]">BASEL</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <button key={l} onClick={() => go(l)}
                className="font-mono text-[11px] tracking-[0.22em] text-neutral-500 hover:text-green-main transition-colors duration-200 uppercase">
                {l}
              </button>
            ))}
          </div>

          {/* Burger */}
          <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(v => !v)}>
            <span className={cn("w-5 h-px bg-green-main transition-all duration-300", open && "rotate-45 translate-y-2")} />
            <span className={cn("w-5 h-px bg-green-main transition-all duration-200", open && "opacity-0")} />
            <span className={cn("w-5 h-px bg-green-main transition-all duration-300", open && "-rotate-45 -translate-y-2")} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 transition-all duration-350 md:hidden",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {links.map(l => (
          <button key={l} onClick={() => go(l)}
            className="font-mono text-3xl tracking-widest text-white hover:text-green-main transition-colors uppercase">
            {l}
          </button>
        ))}
      </div>
    </>
  );
}

/* ================================================================
   HERO
================================================================ */
function Hero() {
  const { text: role, isTyping } = useTypeLoop(CONFIG.roles);
  const [blink, setBlink] = useState(true);
  useEffect(() => { const t = setInterval(() => setBlink(v => !v), 530); return () => clearInterval(t); }, []);
  const cur = isTyping ? true : blink;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle ambient blobs — kept very soft */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-main-3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-main-2 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 pt-28 pb-20 w-full">
        {/* Available badge */}
        <div
          className="inline-flex items-center gap-2 border border-green-main-20 bg-green-main-4 px-3.5 py-1.5 mb-10"
          style={{ animation: "heroFade 0.6s ease both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-main animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-green-main uppercase">
            {CONFIG.available ? "Open to Collabs" : "Currently Busy"}
          </span>
        </div>

        {/* Big name */}
        <h1
          className="font-display font-black tracking-tight mb-4 leading-none"
          style={{ animation: "heroFade 0.6s 0.1s ease both", animationFillMode: "both" }}
        >
          <span className="block text-6xl sm:text-8xl md:text-[108px] text-white">{CONFIG.name}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-mono text-neutral-500 text-sm md:text-base tracking-wider mb-6"
          style={{ animation: "heroFade 0.6s 0.2s ease both", animationFillMode: "both" }}
        >
          {CONFIG.subtitle}
        </p>

        {/* Typing animation */}
        <div
          className="flex items-center gap-1 mb-8 h-7"
          style={{ animation: "heroFade 0.6s 0.3s ease both", animationFillMode: "both" }}
        >
          <span className="font-mono text-green-main text-sm md:text-base">{role}</span>
          <span className={cn("w-0.5 h-4 bg-green-main ml-0.5 transition-opacity duration-75", cur ? "opacity-100" : "opacity-0")} />
        </div>

        {/* Bio */}
        <p
          className="text-neutral-400 text-base leading-relaxed max-w-lg mb-12"
          style={{ animation: "heroFade 0.6s 0.4s ease both", animationFillMode: "both" }}
        >
          {CONFIG.bio}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-3"
          style={{ animation: "heroFade 0.6s 0.5s ease both", animationFillMode: "both" }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-6 py-3 bg-green-main text-black font-mono text-sm font-bold tracking-widest uppercase hover:bg-green-light transition-colors duration-250"
          >
            Projects
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 border border-neutral-700 text-white font-mono text-sm tracking-widest uppercase hover:border-green-main-40 hover:text-green-main transition-all duration-250"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-25">
        <div className="w-px h-8 bg-gradient-to-b from-green-main to-transparent" />
      </div>
    </section>
  );
}

/* ================================================================
   ABOUT
================================================================ */
function About() {
  return (
    <section id="about" className="py-24 px-5">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">

        {/* Left — text */}
        <div>
          <Fade>
            <Label>About</Label>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Hey, I'm Basel.
            </h2>
            {/* ✏️ Edit bio text in CONFIG.bio above */}
            <p className="text-neutral-400 leading-relaxed text-[15px]">{CONFIG.bio}</p>
            <p className="text-neutral-700 text-sm mt-5 font-mono">📍 {CONFIG.location}</p>
          </Fade>
        </div>

        {/* Right — interests + socials */}
        <div>
          {/* Interests — rendered from CONFIG.interests[] */}
          <Fade delay={70}>
            <p className="font-mono text-[10px] tracking-[0.3em] text-green-main uppercase mb-4">Interests</p>
            <div className="flex flex-wrap gap-2">
              {CONFIG.interests.map(item => (
                <span key={item}
                  className="font-mono text-xs border border-neutral-700/50 text-neutral-500 hover:border-green-main-30 hover:text-green-light transition-all duration-250 px-3 py-1.5 cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </Fade>

          {/* Communities — rendered from CONFIG.communities[] — add items to show this section */}
          {CONFIG.communities.length > 0 && (
            <Fade delay={180}>
              <p className="font-mono text-[10px] tracking-[0.3em] text-green-main uppercase mt-10 mb-4">Communities</p>
              <div className="flex flex-wrap gap-2.5">
                {CONFIG.communities.map(({ name, url }) => (
                  <a key={name} href={url} target="_blank" rel="noreferrer"
                    className="font-mono text-xs border border-neutral-700/50 text-neutral-500 hover:border-green-main-30 hover:text-green-light transition-all duration-250 px-3 py-1.5">
                    {name}
                  </a>
                ))}
              </div>
            </Fade>
          )}
        </div>

      </div>
    </section>
  );
}

/* ================================================================
   PROJECTS — rendered from CONFIG.projects[]
================================================================ */
function Projects() {
  return (
    <section id="projects" className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <Fade>
          <Label>Projects</Label>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-14 leading-tight">
            Things I've Built
          </h2>
        </Fade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONFIG.projects.map((p, i) => (
            <Fade key={p.id} delay={i * 50}>
              <div className="group h-full border border-neutral-700/40 bg-white/[0.015] hover:border-neutral-600/60 hover:bg-white/[0.025] transition-all duration-350 p-6 flex flex-col gap-4 relative overflow-hidden" style={{ boxShadow: "none" }} onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 18px 0 rgba(45,138,94,0.07)"} onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>

                {/* Ghost project number — only on project cards */}
                <span className="absolute -right-1 -top-2 font-display text-6xl font-black text-neutral-500/20 select-none pointer-events-none leading-none">
                  {p.id}
                </span>

                {/* Status dot */}
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    p.status === "done" ? "bg-green-main" : "bg-yellow-400 animate-pulse"
                  )} />
                  <span className="font-mono text-[10px] text-neutral-700 tracking-wider uppercase">
                    {p.status === "done" ? "Completed" : "In Progress"}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display text-lg font-bold text-white group-hover:text-neutral-100 transition-colors duration-250 leading-snug">
                  {p.name}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-sm leading-relaxed flex-1">{p.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-700/40">
                  {p.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] text-neutral-700 border border-neutral-700/40 px-2 py-1 tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle bottom accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-green-main-20 opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CONTACT
================================================================ */
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const h = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const send = () => { if (form.name && form.email && form.message) setSent(true); };

  return (
    <section id="contact" className="py-24 px-5">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">

        {/* Left */}
        <div>
          <Fade>
            <Label>Contact</Label>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
              Say Hello.
            </h2>
            {/* ✏️ Edit contact blurb here */}
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-10">
              Have a cool project idea? Want to build something together?<br />
              I'm always open to interesting conversations.
            </p>
          </Fade>
        </div>

        {/* Form */}
        <Fade delay={100}>
          <div className="border border-neutral-700/40 bg-white/[0.015] p-7">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="w-12 h-12 border border-green-main flex items-center justify-center">
                  <span className="text-green-main text-xl">✓</span>
                </div>
                <p className="font-mono text-green-main tracking-widest text-sm">Message sent!</p>
                <p className="text-neutral-600 text-sm">I'll reply soon.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {[
                  { name: "name",  label: "Name",  type: "text",  ph: "Your name"     },
                  { name: "email", label: "Email", type: "email", ph: "your@email.com" },
                ].map(({ name, label, type, ph }) => (
                  <div key={name}>
                    <label className="font-mono text-[10px] text-neutral-600 tracking-[0.2em] uppercase block mb-1.5">{label}</label>
                    <input type={type} name={name} value={form[name]} onChange={h} placeholder={ph}
                      className="w-full bg-transparent border border-neutral-700/50 focus:border-green-main-40 outline-none px-4 py-2.5 text-white text-sm font-mono placeholder-neutral-800 transition-colors duration-250" />
                  </div>
                ))}
                <div>
                  <label className="font-mono text-[10px] text-neutral-600 tracking-[0.2em] uppercase block mb-1.5">Message</label>
                  <textarea name="message" value={form.message} onChange={h} rows={4}
                    placeholder="What's on your mind?"
                    className="w-full bg-transparent border border-neutral-700/50 focus:border-green-main-40 outline-none px-4 py-2.5 text-white text-sm font-mono placeholder-neutral-800 transition-colors duration-250 resize-none" />
                </div>
                <button onClick={send}
                  className="w-full py-3.5 bg-green-main text-black font-mono text-sm font-bold tracking-widest uppercase hover:bg-green-light transition-colors duration-250">
                  Send →
                </button>
              </div>
            )}
          </div>
        </Fade>

      </div>
    </section>
  );
}

/* ================================================================
   SOCIAL LINKS — standalone section at the very bottom
================================================================ */
function SocialLinks() {
  return (
    <section className="py-16 px-5 border-t border-neutral-700/30">
      <div className="max-w-5xl mx-auto">
        <Fade>
          <p className="font-mono text-[10px] tracking-[0.3em] text-green-main uppercase mb-8 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-main" />
            Find Me Online
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-3">
            {CONFIG.socials.map(({ label, url, icon }) => (
              <a key={label} href={url} target="_blank" rel="noreferrer"
                className="group flex items-center gap-3 border border-neutral-700/40 hover:border-neutral-600/60 bg-white/[0.015] hover:bg-white/[0.025] transition-all duration-300 px-4 py-3"
                style={{ boxShadow: "none" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 14px 0 rgba(45,138,94,0.06)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
                <span className="text-green-main group-hover:text-green-light transition-colors duration-200">{icon}</span>
                <span className="font-mono text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors duration-200">{label}</span>
                <span className="ml-auto text-neutral-700 group-hover:text-neutral-500 transition-colors duration-200 text-xs">→</span>
              </a>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ================================================================
   FOOTER
================================================================ */
function Footer() {
  return (
    <footer className="py-7 px-5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border border-green-main-30 rotate-45" />
          <span className="font-mono text-[11px] text-neutral-700 tracking-widest">BASEL © 2026</span>
        </div>
        <span className="font-mono text-[10px] text-neutral-800 tracking-widest uppercase">
          Built with curiosity
        </span>
      </div>
    </footer>
  );
}

/* ================================================================
   GLOBAL STYLES
================================================================ */
function Styles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600&display=swap');

      *, *::before, *::after { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; background: #060606; overflow-x: hidden; }

      /* ── Green palette ───────────────────────────────────────── */
      :root { --g: #2d8a5e; --g2: #35a06e; }

      .text-green-main  { color: var(--g) !important; }
      .text-green-light { color: var(--g2) !important; }

      .bg-green-main    { background-color: var(--g) !important; }
      .bg-green-light   { background-color: var(--g2) !important; }
      .bg-green-main-2  { background-color: rgba(45,138,94,0.02) !important; }
      .bg-green-main-3  { background-color: rgba(45,138,94,0.03) !important; }
      .bg-green-main-4  { background-color: rgba(45,138,94,0.04) !important; }
      .bg-green-main-20 { background-color: rgba(45,138,94,0.20) !important; }
      .bg-green-main-30 { background-color: rgba(45,138,94,0.30) !important; }

      .border-green-main    { border-color: var(--g) !important; }
      .border-green-main-20 { border-color: rgba(45,138,94,0.20) !important; }
      .border-green-main-30 { border-color: rgba(45,138,94,0.30) !important; }
      .border-green-main-40 { border-color: rgba(45,138,94,0.40) !important; }
      .border-green-main-60 { border-color: rgba(45,138,94,0.60) !important; }

      .from-green-main { --tw-gradient-from: var(--g) !important; }

      .hover\:bg-green-light:hover   { background-color: var(--g2) !important; }
      .hover\:text-green-main:hover  { color: var(--g) !important; }
      .hover\:text-green-light:hover { color: var(--g2) !important; }
      .hover\:border-green-main:hover    { border-color: var(--g) !important; }
      .hover\:border-green-main-30:hover { border-color: rgba(45,138,94,0.30) !important; }
      .hover\:border-green-main-40:hover { border-color: rgba(45,138,94,0.40) !important; }
      .focus\:border-green-main-40:focus { border-color: rgba(45,138,94,0.40) !important; }

      .group:hover .group-hover\:text-green-light  { color: var(--g2) !important; }
      .group:hover .group-hover\:border-green-main { border-color: var(--g) !important; }
      /* ─────────────────────────────────────────────────────────── */

      .font-display { font-family: 'Space Grotesk', sans-serif; }
      .font-mono    { font-family: 'JetBrains Mono', monospace; }

      @keyframes heroFade {
        from { opacity: 0; transform: translateY(-12px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      ::-webkit-scrollbar       { width: 3px; }
      ::-webkit-scrollbar-track { background: #060606; }
      ::-webkit-scrollbar-thumb { background: rgba(45,138,94,0.25); border-radius: 2px; }
      ::-webkit-scrollbar-thumb:hover { background: rgba(45,138,94,0.45); }

      ::selection { background: rgba(45,138,94,0.20); color: #fff; }

      input, textarea {
        font-family: 'JetBrains Mono', monospace !important;
        color: #fff;
        -webkit-appearance: none;
      }
      input::placeholder, textarea::placeholder { color: #2a2a2a; }
    `}</style>
  );
}

/* ================================================================
   APP
================================================================ */
export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Styles />
      {!ready && <Loader onDone={() => setReady(true)} />}
      <div className={cn(
        "min-h-screen bg-[#060606] text-white overflow-x-hidden transition-opacity duration-500",
        ready ? "opacity-100" : "opacity-0"
      )}>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    </>
  );
}
