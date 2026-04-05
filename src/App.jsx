import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import Act1 from './pages/act1';
import Act2 from './pages/act2';
import Act3 from './pages/act3';
import Act4 from './pages/act4';
import Act5 from './pages/act5';
import { HashLink } from 'react-router-hash-link';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="nav-logo">Abdul's Portfolio</Link>
        <div className="nav-links">
          <HashLink smooth to="/#about">About</HashLink>
          <HashLink smooth to="/#projects">Projects</HashLink>
          <HashLink smooth to="/#contact">Contact</HashLink>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/act1" element={<Act1 />} />
        <Route path="/blog/act2" element={<Act2 />} />
        <Route path="/blog/act3" element={<Act3 />} />
        <Route path="/blog/act4" element={<Act4 />} />
        <Route path="/blog/act5" element={<Act5 />} />
      </Routes>
    </div>
  );
}

export default App;