import ProjectCard from "../components/ProjectCard";
import lifelineAI from "../assests/lifelineAI.png"
import careerPilotAI from "../assests/careerPilotAI.png"
import lessonForge from "../assests/lessonForge.png"

const projects = [
  {
    image: lifelineAI,
    title: "LifeLine AI",
    category: "Emergency Assistance",
    description:
      "A web-based emergency assistance platform connecting users with useful emergency services and intelligent assistance features.",
    technologies: [
      "React",
      "Tailwind css",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/lovesh-semwal/lifeline-AI",
    live: "https://lifeline-ai-by-lovesh.vercel.app/",
  },
  
  {
  image: lessonForge,
  title: "LessonForge",
  category: "EdTech / Web Application",
  description:
    "A web-based learning platform designed to provide students with an interactive and engaging environment for learning and managing educational content.",
  technologies: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
  ],
  github: "https://github.com/lovesh-semwal/LessonForge",
  live: "https://lesson-forge-five.vercel.app/",
},
  {
    image: careerPilotAI,
    title: "CareerPilot AI",
    category: "AI / Full-Stack",
    description:
      "An AI-powered platform designed to help students explore career paths, improve their skills, prepare for opportunities, and plan their development journey.",
    technologies: [
      "React",
      "Tailwind css",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Groq API",
    ],
    github: "https://github.com/lovesh-semwal/CarrerPilot-AI",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6! py-24! lg:px-8!">
      <div className="mx-auto! max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12!">
          <p className="mb-3! text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Things I've built
          </h2>

          <p className="mt-4! max-w-2xl text-gray-400">
            A selection of projects where I have applied my skills to build
            practical and meaningful web applications.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;