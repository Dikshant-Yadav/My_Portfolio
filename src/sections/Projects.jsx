import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Zero Downtime Deployment System",
    description: "A production-style Kubernetes deployment pipeline built to explore how modern applications are updated without interrupting active users. This project implements rolling updates, canary traffic splitting via NGINX Ingress, horizontal pod autoscaling, and self-healing infrastructure , all running locally on a single-node Kubernetes cluster.",
    tags: ["Docker", "Kubernetes", "NGINX" , "JavaScript"],
    link: "https://github.com/Dikshant-Yadav/Zero-Downtime-Deployment-System",
    year: "2026",
  },
  {
    id: 2,
    title: "Articulate",
    description: "A full-stack blogging platform built using the MERN (MongoDB, Express.js, React, Node.js) stack, allowing users to create, edit, delete, and read blog posts. Includes user authentication, rich text editing, and responsive UI for a smooth blogging experience.",
    tags: ["Node.js", "Express.js", "React" , "MongoDB"],
    link: "https://github.com/Dikshant-Yadav/Articulate",
    year: "2025",
  },
  {
    id: 3,
    title: "Secure Vault",
    description: "A password manager I built for my college Object-Oriented Programming project. It's a simple but effective way to keep all your passwords safe and organized, all from your terminal.",
    tags: ["C++", "Low Level Design", "OOPS"],
    link: "https://github.com/Dikshant-Yadav/SecureVault",
    year: "2025",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "This very site. Built with React and Vite.",
    tags: ["React", "Vite", "CSS"],
    link: "https://github.com",
    year: "2026",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I have built.</p>
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noreferrer" className="project-card">
            <div className="project-top">
              <span className="project-title">{project.title}</span>
              <span className="project-year">{project.year}</span>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}