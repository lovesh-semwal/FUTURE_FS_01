import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVite,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "REST APIs", icon: "API" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Vercel", icon: "▲" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6! py-24! lg:px-8!">
      <div className="mx-auto! max-w-7xl">
        {/* Heading */}
        <div className="mb-12!">
          <p className="mb-3! text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Technologies I work with
          </h2>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7! transition-all duration-300 hover:border-cyan-400/30"
            >
              <h3 className="mb-6! text-xl font-semibold">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4! py-3! text-sm text-gray-300 transition-colors hover:border-cyan-400/30 hover:text-white"
                  >
                    <span className="text-lg text-cyan-400">
                      {skill.icon}
                    </span>

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;