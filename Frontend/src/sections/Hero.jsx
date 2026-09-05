import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6! pt-28! pb-16! lg:px-8!"
    >
      <div className="mx-auto! grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

        {/* Hero Content */}
        <div>
          <p className="mb-5! text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Lovesh{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Semwal
            </span>
          </h1>

          <h2 className="mt-5! text-2xl font-semibold text-gray-200 sm:text-3xl">
            B.Tech CSE Student & Full-Stack Developer
          </h2>

          <p className="mt-6! max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I build modern, responsive web applications and practical
            digital solutions using technologies like React, JavaScript,
            Node.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="mt-9! flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-cyan-400 px-6! py-3! font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              View My Projects
              <FiArrowUpRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download="Lovesh-semwal-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6! py-3! font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-white/5"
            >
              Download Resume
              <FiArrowUpRight size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9! flex items-center gap-5">
            <a
              href="https://github.com/lovesh-semwal/"
              aria-label="GitHub"
              className="text-gray-400 transition-colors hover:text-cyan-400"
            >
              <FiGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/lovesh-semwal-702724373?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              aria-label="LinkedIn"
              className="text-gray-400 transition-colors hover:text-cyan-400"
            >
              <FiLinkedin size={22} />
            </a>

            <span className="h-px w-16 bg-white/20" />

            <span className="text-sm text-gray-500">
              Open to opportunities
            </span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-6 rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Profile Image */}
            <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 sm:h-80 sm:w-80">
              <div className="flex h-full w-full items-center justify-center text-7xl font-bold text-gray-600">
                LS
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-gray-500 transition-colors hover:text-cyan-400 sm:flex"
      >
        Scroll to explore
        <FiArrowDown />
      </a>
    </section>
  );
}

export default Hero;