import { Link } from 'react-router-dom';

function Blog() {
  return (
    <main className="section">
      <h2>Spring Break Blog</h2>

      <div className="blog-grid">
        <Link to="/blog/act1" className="blog-card">
          <h3>Gaming Day</h3>
          <p>Kickoff to spring break</p>
        </Link>

        <Link to="/blog/act2" className="blog-card">
          <h3>Study Day</h3>
          <p>Studying Time</p>
        </Link>

        <Link to="/blog/act3" className="blog-card">
          <h3>Food Day</h3>
          <p>Exploring new places</p>
        </Link>

        <Link to="/blog/act4" className="blog-card">
          <h3>Baking Day</h3>
          <p>Chill and recharge</p>
        </Link>

        <Link to="/blog/act5" className="blog-card">
          <h3>Beach Day</h3>
          <p>Wrapping up the week</p>
        </Link>
      </div>
    </main>
  );
}

export default Blog;