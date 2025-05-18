import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState('hero');

  const handleScrollOrNavigate = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setActive(id);
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  useEffect(() => {
    if (location.pathname === '/projects') {
      setActive('projects');
    }
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li
          className={active === 'hero' ? 'active' : ''}
          onClick={() => handleScrollOrNavigate('home')}
        >Home</li>
        <li
          className={active === 'about' ? 'active' : ''}
          onClick={() => handleScrollOrNavigate('about')}
        >About</li>
        <li
          className={active === 'projects' ? 'active' : ''}
          onClick={() => handleScrollOrNavigate('projects')}
        >Projects</li>
        <li
          className={active === 'contact' ? 'active' : ''}
          onClick={() => handleScrollOrNavigate('contact')}
        >Contact</li>
      </ul>
    </nav>
  );
}
