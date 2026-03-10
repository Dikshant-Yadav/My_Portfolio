import "./Skills.css";

const skillGroups = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "Bootstrap"],
  },
  {
    category: "Developer Tools",
    skills: ["VS Code", "Git", "GitHub", "Postman"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    category: "Core Competencies",
    skills: ["Data Structures & Algorithms", "Object-Oriented Design", "RESTful API Development", "Database Design & Optimization", "System Design", "Full Stack Development"],
  },
  
];

export default function Skills() {
  return (
    <section className="skills">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Tools and technologies I work with.</p>
      </div>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}