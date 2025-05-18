import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
const skills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaDatabase />, name: "MySQL" },
];

export default function About() {
  return (

    

    <section className="about section-wrapper" id="about">
  <h2 >About Me</h2>

  <p>
    I'm an IT student with a passion for crafting clean, intuitive web experiences.<br/>
    I specialize in website development and UI/UX design, <br/>
    combining aesthetics with performance to bring digital ideas to life.
  </p>

  
  <h3>Skills</h3>
  <div className="skill-icon-grid">
      {skills.map((skill, index) => (
        <div className="skill-item" key={index}>
          <div className="icon">{skill.icon}</div>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>


  <h3>Certificates</h3>
  <div className="certificates-section">
  <div className="certificate-grid">
    <div className="certificate-card">
      <img src="/iot.jpg" alt="IoT Certificate" />
      <p>NPTEL - Internet of Things<br /> Score : 94%</p>
    </div>
    <div className="certificate-card">
      <img src="/wipro.jpg" alt="Java Certificate" />
      <p>Wipro TalentNext - Java Full Stack<br />Score: 90% </p>
    </div>
    <div className="certificate-card">
      <img src="/pwc.jpg" alt="Cloud Launchpad" />
      <p>PWC - Cloud Launchpad<br />Score : 90%</p>
    </div>
    <div className="certificate-card">
      <img src="/rpa.jpg" alt="RPA Uipath" />
      <p>RPA Uipath<br />Grade : A+</p>
    </div>
    <div className="certificate-card">
      <img src="/infosys.jpg" alt="Infosys Python Foundation Course" />
      <p>Infosys Python Foundation Course</p>
    </div>
    <div className="certificate-card">
      <img src="/Quiz.jpeg" alt="Technical Quiz" />
      <p>Technical Quiz<br/>Prize : I</p>
    </div>
    <div className="certificate-card">
      <img src="/Innovision.jpeg" alt="Idea presentation" />
      <p>Idea Presentation<br />Prize : III</p>
    </div>
    </div>
    </div>

  <h4>Internship Certificates</h4>  
  <div className="certificates-section">
  <div className="certificate-grid">
    <div className="certificate-card">
      <img src="/UIUX.jpg" alt="UI/UX" />
      <p>I worked as an intern learning UI/UX at Noshack Solutions Pvt Ltd for 2 months.<br />It was a great experience there from a beginner to now a UI/UX developer.</p>
    </div>
    <div className="certificate-card">
      <img src="/uniq.jpg" alt="  uniq technologies" />
      <p>I was an intern at UNIQ Technologies for a week.<br />There I learnt about Python with AI and developed a mini project on Facial Recognition.</p>
    </div>
  </div>
</div>


</section>

  );
}


