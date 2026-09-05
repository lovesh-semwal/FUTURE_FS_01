import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto! max-w-7xl px-6! lg:px-8!">
        {/* Big CTA */}
        <div className="border-b border-white/10 py-20! sm:py-24!">
          <p className="mb-5! text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Have a project in mind?
          </p>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Let's build something{" "}
              <span className="text-cyan-400">meaningful.</span>
            </h2>

            <a
              href="mailto:loveshsemwal289@gmail.com"
              className="group flex w-fit items-center gap-3 rounded-full bg-cyan-400 px-6! py-3! font-semibold text-black transition hover:bg-cyan-300"
            >
              Get in touch
              <FiArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-12 py-14! md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="text-5xl font-black tracking-tight"
            >
              LS<span className="text-cyan-400">.</span>
            </a>

            <p className="mt-5! max-w-md text-base leading-7 text-gray-400">
              B.Tech CSE student and Full-Stack Developer focused on creating
              modern, responsive, and practical digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5! text-sm font-semibold uppercase tracking-widest text-white">
              Navigation
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="#home"
                className="w-fit text-gray-400 transition hover:text-cyan-400"
              >
                Home
              </a>

              <a
                href="#about"
                className="w-fit text-gray-400 transition hover:text-cyan-400"
              >
                About
              </a>

              <a
                href="#skills"
                className="w-fit text-gray-400 transition hover:text-cyan-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="w-fit text-gray-400 transition hover:text-cyan-400"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="w-fit text-gray-400 transition hover:text-cyan-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5! text-sm font-semibold uppercase tracking-widest text-white">
              Connect
            </h3>

            <div className="flex flex-col gap-4">
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=loveshsemwal289@gmail.com"
  target="_blank"
  rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
              >
                <FiMail size={18} />
                Email
              </a>

              <a
                href="https://github.com/lovesh-semwal/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
              >
                <FiGithub size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/lovesh-semwal-702724373?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
              >
                <FiLinkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7! text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Lovesh Semwal. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <p>
              Built with{" "}
              <span className="text-cyan-400">React</span> &{" "}
              <span className="text-cyan-400">Tailwind CSS</span>
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-cyan-400/50 hover:text-cyan-400"
            >
              <FiArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;