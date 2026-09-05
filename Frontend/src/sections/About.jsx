function About() {
  return (
    <section id="about" className="px-6! py-24! lg:px-8!">
      <div className="mx-auto! max-w-7xl">
        <div className="mb-12!">
          <p className="mb-3! text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            A little about me
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          {/* About Text */}
          <div>
            <p className="text-lg leading-8 text-gray-400">
              I'm a Computer Science Engineering student passionate about
              building practical web applications and solving real-world
              problems through technology.
            </p>

            <p className="mt-5! text-lg leading-8 text-gray-400">
              I enjoy working across the frontend and backend, learning new
              technologies, participating in hackathons, and turning ideas
              into functional digital products.
            </p>

            <p className="mt-5! text-lg leading-8 text-gray-400">
              My current focus is on strengthening my full-stack development
              skills and building projects that provide meaningful solutions
              to real users.
            </p>
          </div>

          {/* Quick Information */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6!">
              <p className="text-sm text-gray-500">Education</p>
              <h3 className="mt-2! text-lg font-semibold">
                B.Tech CSE
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6!">
              <p className="text-sm text-gray-500">Focus</p>
              <h3 className="mt-2! text-lg font-semibold">
                Full-Stack Development
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6!">
              <p className="text-sm text-gray-500">Interests</p>
              <h3 className="mt-2! text-lg font-semibold">
                Web Development
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6!">
              <p className="text-sm text-gray-500">Currently</p>
              <h3 className="mt-2! text-lg font-semibold">
                Learning & Building
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;