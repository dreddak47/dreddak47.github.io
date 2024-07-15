import React, { useEffect, useState } from 'react';
import FlipCard from './components/projectcard'

function App() {
    const [data, setData] = useState([]);

    const projects = [
      {
          frontContent:{
            name:"NLP"
          },
          backContent:{
            description:"What",
            ts:"AI"
          },
      },
      {
        frontContent:{
          name:"NLP"
        },
        backContent:{
          description:"What",
          ts:"AI"
        },
    },{
      frontContent:{
        name:"NLP"
      },
      backContent:{
        description:"What",
        ts:"AI"
      },
  },
      // Add more projects as needed
  ];
    useEffect(() => {
        fetch('/api/')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hi, I am Aekansh Kathunia</h1>
                <nav>
                    <a href="#about">About Me</a>
                    <a href="#projects">Projects</a>
                    <a href="#blogs">Blogs</a>
                    <a href="#contact">Contact</a>
                    <a href="#chatbot">Chatbot</a>
                </nav>
            </header>
            <div className="container">
                <section id="about" className="section">
                    <h2>About Me</h2>
                    <p>Hello! I'm Aekansh Kathunia, an ECE student currently in my Senior Year. I have a deep passion for coding and my interests include Generative AI, Machine Learning, Computer Vision, and Natural Language Processing.</p>
                </section>
                <section id="projects" className="section">
                    <h2>Projects</h2>
                    <div className="projects"> 
                    {projects.map((project, index) => (
                    <FlipCard
                        key={index}
                        frontContent={project.frontContent}
                        backContent={project.backContent}
                    />
                ))}
                    </div>
                    
                </section>
                <section id="blogs" className="section">
                    <h2>Blogs</h2>
                    <p>Coming Soon!</p>
                </section>
                <section id="contact" className="section">
                    <h2>Contact</h2>
                    <p>Email: aekansh@example.com</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/aekansh-kathunia/" target="_blank">Aekansh Kathunia</a></p>
                </section>
                <section id="chatbot" className="section chatbot">
                    <h2>Chatbot</h2>
                    <p>Interact with my chatbot below:</p>
                </section>
            </div>
            <footer>
                <p>&copy; 2024 Aekansh Kathunia. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
