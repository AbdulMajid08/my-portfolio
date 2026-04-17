import { Link } from 'react-router-dom';
import bg3 from '../assets/BG3.png';
import bg32 from '../assets/BG32.png';

function Act1() {
  return (
    <main className="section">
      <h2>Act 1</h2>
      <p>This is my first day of spring break. I was so happy that I had finally gotten some time off but then I realized I still had a lot of work to do. I had 3 projects to work on and a physics test to study for. I was so stressed out that I didn't know where to start. So before anything I decided that I wanted to relax for the first couple of days. 
      </p>
      <p>So I finally bought this game that I have wanted to try out for the longest time. It's called Baulders Gate 3 and it's a role playing game. Once I got it me and my freind started a adventure and it was so much fun! So I spent the first 2-3 days playing the game and enjoying my time off. It felt really weird because I never play games that much anymore since this semester is so busy. However, it was really nice to just enjoy myself for once. 
      </p>
      <img src={bg3} alt="Baldur's Gate 3" className="blog-image" />
      <img src={bg32} alt="Baldur's Gate 3" className="blog-image" />
      

      <div className="back-container">
        <Link to="/blog" className="back-button">← Back to Blog</Link>
      </div>
    </main>
  );
}

export default Act1;