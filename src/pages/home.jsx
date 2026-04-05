import profile from '../assets/profile.jpg';

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        
        <img src={profile} alt="Abdul Majid" className="profile-pic" />
        <h1>Hi, I’m Abdul Majid</h1>

        <p>Software Engineering Student, Developer, Problem Solver, & The Worlds Biggest Eagles Fan #GoBirds! </p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Software Engineering student at California State University San Marcos
          with a strong interest in web development, software design, and building useful
          technology that can make a real impact. I enjoy creating projects that combine
          clean design with practical functionality, and I am always looking for ways to
          improve my skills as a developer.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            title="Forest Survival Adventure"
            desc="Developed a 2D survival game using HTML5 Canvas and JavaScript featuring player movement, resource collection, and interactive gameplay mechanics."
            link="https://github.com/AbdulMajid08/ForestSurvivalAdventure"
          />
          <ProjectCard
            title="Snake Game"
            desc="Built a classic Snake game using Python with real-time movement, collision detection, and score tracking to enhance gameplay experience."
            link="https://github.com/AbdulMajid08/SnakeGame"
          />
          <ProjectCard
            title="Portfolio Website"
            desc="Designed and developed a responsive portfolio website using React and Node.js to showcase projects, skills, and experience with modern UI and routing."
            link=""
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: abdul053@csusm.edu</p>
        <p>GitHub: github.com/AbdulMajid08</p>
      </section>
    </main>
  );
}

function ProjectCard({ title, desc, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
    </div>
  );
}

export default Home;