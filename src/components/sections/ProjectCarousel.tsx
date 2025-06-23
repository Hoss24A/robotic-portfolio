import { motion } from 'framer-motion';

export function ProjectCarousel() {
  const projects = [
    { name: "AI Chatbot", tech: "Python, TensorFlow", link: "#" },
    { name: "3D Game", tech: "Unity, C#", link: "#" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0, 255, 204, 0.3)" }}
          className="bg-gray-800 p-6 rounded-lg border border-cyan-400"
        >
          <h3 className="text-2xl font-mono">{project.name}</h3>
          <p className="text-gray-400 mt-2">{project.tech}</p>
          <a href={project.link} className="text-cyan-400 hover:underline">View Project →</a>
        </motion.div>
      ))}
    </div>
  );
}