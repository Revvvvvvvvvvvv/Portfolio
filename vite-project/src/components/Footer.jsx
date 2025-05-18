import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" style={{ 
      width: '100vw', 
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
      boxSizing: 'border-box'
    }}>
      <div className="contact-details section-wrapper">
        <p>
          <FaPhoneAlt style={{ color: '#fff', marginRight: '8px' }} />
          9150991567
        </p>
        <p>
          <FaEnvelope style={{ color: '#fff', marginRight: '8px' }} />
          <a href="mailto:revathyramesh0720@gmail.com" style={{ color: '#fff' }}>
            revathyramesh0720@gmail.com
          </a>
        </p>
        <p>
          <FaLinkedin style={{ color: '#fff', marginRight: '8px' }} />
          <a href="https://www.linkedin.com/in/revathy-ramesh-080264249/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            LinkedIn
          </a>
        </p>
        <p>
          <FaGithub style={{ color: '#fff', marginRight: '8px' }} />
          <a href="https://github.com/Revvvvvvvvvvvv" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
