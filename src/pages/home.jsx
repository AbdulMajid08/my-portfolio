import profile from '../assets/profile.jpg';
import snakeImg from '../assets/snakegame.png';
import mazeImg from '../assets/mazeGame.png';
import portfolioImg from '../assets/portfolio.png';

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
            title="Maze Survival Adventure"
            desc="Developed a 2D Maze survival game using HTML5 Canvas and JavaScript featuring player movement, resource collection, and interactive gameplay mechanics."
            link="https://github.com/AbdulMajid08/MazeSurvivalAdventure"
            image={mazeImg}
          />
          <ProjectCard
            title="Snake Game"
            desc="Built a classic Snake game using Python with real-time movement, collision detection, and score tracking to enhance gameplay experience."
            link="https://github.com/AbdulMajid08/SnakeGame"
            image={snakeImg}
          />
          <ProjectCard
            title="Portfolio Website"
            desc="Designed and developed a responsive portfolio website using React and Node.js to showcase projects, skills, and experience with modern UI and routing."
            link="https://github.com/AbdulMajid08/my-portfolio"
            image={portfolioImg}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:abdul053@csusm.edu?subject=Hello Abdul&body=Dear Abdul,">abdul053@csusm.edu</a></p>
        <p>GitHub: <a href="https://github.com/AbdulMajid08" target="_blank" rel="noopener noreferrer">github.com/AbdulMajid08</a></p>
      </section>
    </main>
  );
}

function ProjectCard({ title, desc, link, image }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>

      {image && <img src={image} alt={title} className="project-image" />}

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
    </div>
  );
}

export default Home;