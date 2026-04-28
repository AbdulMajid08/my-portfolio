import { Link } from 'react-router-dom';
import brownies from '../assets/brownies.jpg';
import mac from '../assets/macndcheese.jpg';

function Act4() {
  return (
    <main className="section">
      <h2>Baking Day</h2>
      <p>Now after enjoying myslef I thought I could finish the last 3 days of spring break on a good note by finishing more homework. So I put my head down and did the most I could. However I felt that I was burning out. I felt really stressed and decided to take a break for the day and do something that I truly enjoy.</p>
      <p>So I decided to bake! Baking is the one thing in the world that makes me feel really happy. So happy as if im floating on clouds. When I bake I feel as if the stress is melting away from my body. So I decided to make my two favorite things to bake. Brownies which are my favorite deserte, and Mac and Cheese which is my favorite side dish!</p>
      <p>They ended up turning out great! In fact it was my best batch of brownies and Mac and Cheese yet! The secret was I added lots of love (with crushed walnuts to the brownies and paprika to the Mac and Cheese). My family and friends loved them and kept coming back for seconds while asking me for the recipe. I did end up getting sick because of sleep deprevation caused by stress but I was quickly able to fall asleep after baking for a couple of hours!</p>      
      <img src={brownies} alt="Brownies" className="blog-image" />
      <img src={mac} alt="Mac and Cheese" className="blog-image" />
      
      <div className="back-container">
        <Link to="/blog" className="back-button">← Back to Blog</Link>
      </div>
    </main>
  );
}

export default Act4;