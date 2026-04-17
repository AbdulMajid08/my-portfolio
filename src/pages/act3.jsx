import { Link } from 'react-router-dom';
import laperla from '../assets/laperla.jpg';
import laperla2 from '../assets/laperla2.jpg';
function Act3() {
  return (
    <main className="section">
      <h2>Act 3</h2>
      <p>Now after spending a couple of days on projects again and studying for physics I felt that it was time to enjoy myself again. So I decided to go out and get my favorite thing in this whole world, a California Burrito. I am on a mission to try and find the best California Burrito in all of San Diego. So I went to this place called La Perla #3. I had heard many good things about it so I had to try it for myself.</p>
      <p>So I ordered their famous California Burrito that had steak, fries, guacamole, and pico de gallo all wrapped in a layer of cheese. I had my doubts but I have to say it was love at first bite. The burrito was so fresh, jucy and delicious. The steak was seasoned to perfection. It truly was a party in my mouth!</p>
      
      <img src={laperla} alt="La Perla" className="blog-image" />
      <img src={laperla2} alt="La Perla" className="blog-image" />
      
      <div className="back-container">
        <Link to="/blog" className="back-button">← Back to Blog</Link>
      </div>
    </main>
  );
}

export default Act3;