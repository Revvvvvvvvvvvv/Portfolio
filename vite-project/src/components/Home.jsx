import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImg from '../assets/profile.jpg';
import './Home.css';

export default function Home() {
  const [showResume, setShowResume] = useState(false);
  return (
    <section className="hero section-with-bg" id='home'>
      <div className="hero-text">
        <h1>
          Hi, I'm <span className="typewriter">
            <Typewriter
              words={['Revathy Ramesh', 'a Web Developer', 'a UI/UX Designer']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p>I design and build clean, modern websites with a great user experience.</p>
        {/*<a href="/Revathy R Resume formatted.pdf" download className="btn-resume">Download Resume</a>*/}
        <button className="btn-resume" onClick={() => setShowResume(true)}>
        View Resume
      </button>

      {showResume && (
        <div className="resume-modal" onClick={() => setShowResume(false)}>
          <div className="resume-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowResume(false)}>✕</button>
            <iframe
              src="/Revathy_Resume.pdf"
              width="100%"
              height="100%"
              title="Resume Viewer"
            ></iframe>
          </div>
        </div>
      )}

      </div>
      <div className="hero-image">
        <img src={profileImg} alt="Revathy" />
      </div>
    </section>
  );
}
