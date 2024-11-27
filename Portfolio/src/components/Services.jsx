import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilRuler, faCode, faPalette } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'UX Design',
    description: 'I am passionate about UX design and crafting user-centered experiences. Thanks to my Figma skills, I get to create wireframes and mockups that draw on user research. I then refine them through rigorous testing cycles, ensuring intuitive, engaging interactions.',
    icon: <FontAwesomeIcon icon={faPencilRuler} className="text-primary text-4xl group-hover:text-white transition-all duration-300" />,
  },
  {
    title: 'UI Design',
    description: 'As a UI Designer, I specialize in creating visually compelling, functional interfaces in Figma. I transform research insights into high-fidelity designs, refining them through testing to achieve seamless, user-friendly aesthetics.',
    icon: <FontAwesomeIcon icon={faPalette} className="text-primary text-4xl group-hover:text-white transition-all duration-300" />,
  },
  {
    title: 'Front End Development',
    description: 'As a Front-End Developer with a primary focus on UX and foundational skills in React, I bring designs to life with HTML, CSS, and JavaScript. My main goal is not only making sure that each interface looks great but also delivering a smooth, intuitive user experience.',
    icon: <FontAwesomeIcon icon={faCode} className="text-primary text-4xl group-hover:text-white transition-all duration-300" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 px-32">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-primary mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 shadow-lg rounded-lg text-center hover:bg-primary transition-all duration-300 delay-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4 text-primary group-hover:text-white transition-all duration-200">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 group-hover:text-white transition-all duration-200">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

