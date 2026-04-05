import { Link } from 'react-router-dom';

function Act2() {
  return (
    <main className="section">
      <h2>Act 2</h2>
      <p>This is my second activity of spring break.</p>

      <div className="back-container">
        <Link to="/blog" className="back-button">← Back to Blog</Link>
      </div>
    </main>
  );
}

export default Act2;