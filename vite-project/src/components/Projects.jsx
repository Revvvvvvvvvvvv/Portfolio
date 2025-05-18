import { useState } from 'react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: "Hospital Time Optimization App",
    //image: "/hospital_app.png", // Place this in public/
    shortDesc: "Web application to reduce patient wait time with real-time token tracking.",
    details: "This website minimizes waiting time by showing token updates. Patients can view their turn updates in real-time via mobile. This is designed for better hospital queue efficiency. ",
  
    techStack: ["Frontend : HTML, CSS, Javascript",
      "Backend : Python",
      "Database : MySQL"
    ],
    examples: [
      "A user checks their position in the queue before leaving home. Admin updates token numbers from the backend in real time.",
      "The user registers once and then is alloted with a QR code which will be there in their profile everytime they log in. The user books for an appointment and will be given a token number. This token number can be used to view the status of the appointment. The QR code is scanned during the entry and exit of the hospital. The time when the QR scanned is noted and then based on this the list of patients gets updated with the real time update."
    ]
  },
  {
    id: 2,
    title: "Blockchain Based Security for Cloud Data Storage",
    //image: "/blockchain_storage.png",
    shortDesc: "This is a secure file storage with AES encryption and blockchain.",
    details: "This project breaks files into encrypted chunks using AES, stores them in cloud, and logs metadata on the blockchain via smart contracts.",
    techStack: ["Frontend : HTML, CSS, Javascript",
      "Backend : Python",
      "Tools : Web3, Smart contract for Blockchain",
      "Database : MySQL"
    ],
    examples: [
      "User after logging in has two options, encrypt and decrypt. The user when upload a file along with a password, it gets splitted into chunks (Block splitting) annd then each chunk is encrypted using AES algorithm. After a confirmation for the transaction to happen, the encrypted chunks are stored in the cloud and the metadata of the file is stored in the blockchain. The user then receives a file Id. The file Id and password must be there during the decryption process. The same user or any other user who have the credentials can then decrypt the file after confirming the transaction. The file is then retrieved from the cloud,decrypted and then downloaded."
    ]
  },
  {
    id: 3,
    title: "Handwritted Notes to Digital using Uipath",
    //image: "/RPA.png",
    shortDesc: "This project converts spot handwritten entries to digital and stores them in an excel.",
    details: "The project aims automation process using Uipath. This is a simple automation process where the handwrittend entries are converted to digital.",
    techStack: ["Tool : Uipath",
      "Concept : Robotics Process Automation"
    ],
    examples: [
      "This project is developed when there are last minute registrations during an event or if there is some issue in the google forms. During these times, we usually note the students names and details in a sheet of paper. But after this we dont have the need to type all the entries, instead we can upload the image of the sheet.The user has to upload an image of the paper in a neat format. The image is then sent to online editor where the text is extracted. It then returns an excel file with column names. This then gets attached with the existing excel file at the end."
    ]
  },
  {
    id: 4,
    title: "Compound Search Website",
    //image: "/compound.png",
    shortDesc: "This project gives details about compounds by search.",
    details: "This is a simple website where user can view the details of chemical compounds by search.",
    techStack: ["Framework : React.js",
      "Backend : Express.js",
      "Database : MySQL"
    ],
    examples: [
      "All the details of the chemical compounds present was stored in a database (310 compounds). The home page has a search bar where the user can search for the compound. There was also a page where all the compounds were listed in a card format. The chemical compounds where classified into 4 categories and was placed in the navigation bar. Each link leads to a page where all the compounds of that category is listed."
    ]
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section-wrapper" id='projects'>
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map(project => (
          <div className="project-card" key={project.id} onClick={() => setSelected(project)}>
            <h3>{project.title}</h3>
            <p>{project.shortDesc}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="project-overlay" onClick={() => setSelected(null)}>
          <div className="project-detail">
            <h3>{selected.title}</h3>
            {/*<img src={selected.image} alt={selected.title} />*/}
            <p>{selected.details}</p>

            <h4>Tech Stack</h4>
            <ul>
              {selected.techStack.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          
            <h4>Workflow</h4>
            <p>{selected.examples}</p>

            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
