import { Link } from 'react-router-dom';
import SE491 from '../assets/SE491.png';
import drone from '../assets/drone.png';


function Act2() {
  return (
    <main className="section">
      <h2>Study Day</h2>
      <p>After spending the first few days relaxing and having fun I decided to start working on some of the homework I had. I started with working on my SE 491 project. It is our capstone project as software engineering majors. We are working on a drone for the military and it is pretty cool. I got to tinker with the drone and I designed a 3D model for the phone holder that we are going to mount on it. After that I started on working for my CIS 444 project. </p>
      <p>For the CIS 444 project me and my groupmates started calling on discord discussing what to do next because we had the sprint reflection coming up. Unfortunately, we couldn't all meet due to work and personal issues. However, we still managed to work around that by messaging each other. Now after a couple of days of working on that and the portfolio project as well I decided to switch gears and start studying for physics. </p>
      <p>Physics is my hardest class this semester. For some reason it is my kroptonite. I am good at math but add physics and suddeny I become useless. So for the whole day I put my head down and did problems. I studied, watched videos, and took notes. After that I felt a lot more confident in myself but I knew I still had a long way to go.</p>
      <img src={drone} alt="Drone Project" className="blog-image" />
      <img src={SE491} alt="SE 491 Project" className="blog-image" />
      
      
      <div className="back-container">
        <Link to="/blog" className="back-button">← Back to Blog</Link>
      </div>
    </main>
  );
}

export default Act2;