import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  const opentab = (tabname) => {
    setActiveTab(tabname);

    const section = document.getElementById(tabname);
    if (section) {
      // Scroll verso la sezione con un ritardo per assicurare che l'elemento sia pronto
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth", // Effetto smooth
          block: "start", // Inizia a scrollare dalla parte superiore della sezione
        });

        // Aggiungi un offset fisso di 80px per evitare che la navbar copra il titolo
        window.scrollTo({
          top: section.offsetTop - 180, // Abbassa di 100px rispetto alla posizione dell'elemento
          behavior: "smooth", // Scroll con effetto smooth
        });
      }, 50);
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 mt-4">
        <h2 className="text-5xl font-bold text-primary mb-6 px-32">About Me</h2>
        <p className="text-lg text-gray-700 px-32">
          I'm a UX/UI Designer and Front-End Developer, passionate about crafting intuitive, user-centered digital experiences inspired by my love for trekking and nature. My Figma experience and my skills in user research allow me to create wireframes and mockups, which I then refine through rigorous testing. I implement these designs using HTML, CSS, JavaScript, and React, making sure that every interface is visually appealing and user-friendly. My goal is to blend design and development to create fresh digital interactions.
        </p>

        {/* Tab Links */}
        <div className="tab-titles flex gap-8 mt-16 px-32">
          <button
            className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
            onClick={() => opentab("education")}
          >
            Education
          </button>
          <button
            className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
            onClick={() => opentab("experience")}
          >
            Experience
          </button>
          <button
            className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
            onClick={() => opentab("skills")}
          >
            Skills
          </button>
        </div>

        {/* Tab Contents */}
        <div className="tab-contents !mt-8 px-32 text-lg text-gray-700">
          <div
            id="education"
            className={`tab-content ${activeTab === "education" ? "active-tab" : "hidden"}`}
          >
            <ul>
              <li><span className="text-xl text-primary mb-8">2012 - 2017</span><br /><div className="pt-2">Scientific High School with a focus on Applied Sciences</div></li>
              <li><span className="text-xl text-primary mb-8">2017 - 2020</span><br /><div className="pt-2">Bachelor’s Degree in Communication and Society, 105/110 at the University of Milan</div></li>
              <li><span className="text-xl text-primary mb-8">2020 - 2023</span><br /><div className="pt-2">Master’s Degree in Communication Theory and Technology, 106/110 at the University of Milan-Bicocca</div></li>
            </ul>
          </div>

          <div
            id="experience"
            className={`tab-content ${activeTab === "experience" ? "active-tab" : "hidden"}`}
          >
            <ul>
              <li>
                <span className="text-xl  text-primary mb-8">NewsF1 - Editor 01/2022 - 12/2022</span><br />
                <div className="pt-2">At newsF1, I contributed to the website's development on WordPress and authored engaging articles, with the purpose of enhancing both the platform's functionality and its content quality.</div>
              </li>
              <li>
                <span className="text-xl text-primary mb-8">Lombardia Segreta - Social Media Manager 09/2022 - 12/2022</span><br />
                <div className="pt-2">As a Social Media Manager intern, I designed graphics with Figma and Canva and scheduled content on the Meta Business Platform, thereby boosting the brand's engagement on social media platforms.</div>
              </li>
              <li>
                <span className="text-xl text-primary mb-8">Parco Nord Milano - Communications Department 05/2024 - 10/2024</span><br />
                <div className="pt-2">As a Graphic Designer in the Communications Department, I studied user experience from social media touchpoints to the website, creating cohesive visuals that enhance user interaction.</div>
              </li>
            </ul>
          </div>

          <div
            id="skills"
            className={`tab-content ${activeTab === "skills" ? "active-tab" : "hidden"}`}
          >
            <ul>
              <li><span className="text-xl  text-primary mb-8">UX</span><br /><div className="pt-2">Designing user experiences. I design experiences that make users feel understood, ensuring every interaction is simple and enjoyable.</div></li>
              <li><span className="text-xl  text-primary mb-8">UI</span><br /><div className="pt-2">Crafting visual interfaces. I create visually appealing interfaces that not only look great but also make it easy for users to navigate and interact.</div></li>
              <li><span className="text-xl  text-primary mb-8">Front-End Developer</span><br /><div className="pt-2">Building interactive websites. I build interactive websites that engage users, making their online experience smooth and intuitive.</div></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
