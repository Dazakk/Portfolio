import immagine1 from '../assets/work-1.png';
import immagine2 from '../assets/work-2.png';
import immagine3 from '../assets/work-3.png';

const projects = [
  {
    title: 'Relive Your Style',
    description: 'A sleek, modern app that gifts unused clothes new fashion opportunities through circular recycling.',
    image: immagine1,
    downloadLink: 'https://drive.google.com/uc?export=download&id=1Twdg6X_MVgj67nImMVOuh8v0MTLsiDFi',
    downloadName: 'Relive Your Style.pdf',
  },
  {
    title: 'Swap Your Book',
    description: 'A mobile app designed to revolutionize Bookcrossing in Milan, making it faster, self-sustaining, and maximizing the recirculation of used books.',
    image: immagine2,
    downloadLink: 'https://drive.google.com/uc?export=download&id=1GnpItF5MSPKPf0Rwn7fnG7xIn_X5TJ3F',
    downloadName: 'Swap Your Book.pdf',
  },
  {
    title: 'Rush',
    description: 'Inspired by the 2013 movie, this website was crafted with meticulously designed wireframes and mockups on Figma.',
    image: immagine3,
    downloadLink: 'https://drive.google.com/drive/folders/17xZfjVMnKSY4VCMj8a-VK4IzQAqlqE7r?usp=drive_link',
    downloadName: 'Rush.zip',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white px-32">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-primary mb-12">Projects</h2>
        {/* Flex container per le card */}
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.downloadLink}
              className="group bg-white shadow-lg rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 cursor-pointer"
              download={project.downloadName}
              style={{ flex: '1 1 0', minWidth: '300px' }} // Mantiene larghezza uniforme
            >
              {/* Immagine con layer opaco */}
              <div className="relative w-full h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              {/* Contenuto testuale */}
              <div className="flex-1 p-6 transition-all duration-300 group-hover:bg-primary">
                <h3 className="text-2xl font-semibold mb-2 text-primary group-hover:text-white transition-all duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-700 group-hover:text-white transition-all duration-200">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottone centrato "Altri Progetti" */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://drive.google.com/drive/folders/1UITB5cegTCB-qiAVQzUXgC34tb1N-4p4?usp=drive_link"
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-secondary transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Altri progetti
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
