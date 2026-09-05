function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-white/5">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-6xl font-bold text-cyan-400/40">
              {project.number}
            </span>
          </div>
        )}

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
      </div>

      {/* Project Content */}
      <div className="p-6!">
        <p className="mb-2! text-sm font-medium uppercase tracking-widest text-cyan-400">
          {project.category}
        </p>

        <h3 className="mb-3! text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="mb-5! leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6! flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-black/30 px-3! py-1! text-xs text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 px-4! py-2! text-sm font-medium transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>

          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-cyan-400 px-4! py-2! text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;