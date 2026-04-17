 import { Link } from 'react-router-dom';
 import beach from '../assets/beach.jpg';
 import thesopranos from '../assets/thesopranos.jpg';  

 function Act5() {
  return (
    <main className="section">
      <h2>Act 5</h2>
      <p>After the terrible experince I had with stress and illness towards the end of spring break, I decided to take things easy again for my last day. I started by going out for a walk to the beach. I truly love the beach, it is one of my favorite places of all time. I like to go lay down on the sand and sleep while the sun rays hit me. I got a nice cup of matcha latte from a local coffee shop and then went home.</p>
      <p>When I got home I decided to keep the good vibe I had going by watching a show. Now I don't have much time for shows but I have wanted to watch The Sopranos for a long time now. So I decided to kick back and watch a few episodes to end the day. The show is truly a masterpiece, I don't know when I will have the chance to watch more and finish it but so far I loved it!</p>
      <p>Overall, this spring break had its ups and downs. I got a lot of work done, I relaxed a little and got sick. So I experinced a rollercoaster of emotions but it all ended up working out. I was very proud of the work I did and was very happy that I got to relax and take a break from a stressfull last semester!</p>
      
      <img src={beach} alt="Beach" className="blog-image" />
      <img src={thesopranos} alt="The Sopranos" className="blog-image" />
      
      <div className="back-container">
        <Link to="/blog" className="back-button">← Back to Blog</Link>
      </div>
    </main>
  );
}

export default Act5;