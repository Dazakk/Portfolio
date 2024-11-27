import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbwx1cKK5THLV6KcvJh65T9VG71DPFNr7AxIwRRt1hEN8vsysnObqjZBx_luqKCxxD49/exec';

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const msg = document.getElementById('msg');

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = 'Message sent successfully';
        setTimeout(() => {
          msg.innerHTML = '';
        }, 2000); // Il messaggio scompare dopo 2 secondi
        form.reset();
      })
      .catch((error) => {
        alert('Error!', error.message);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contatto sinistro */}
          <div className="contact-left px-32">
            <h1 className="text-5xl font-bold text-primary mb-6">Contact Me</h1>
            <p className="mb-4">
              <i className="fa-solid fa-paper-plane text-primary"></i> 
              <a href="mailto:daniele.zappettini@gmail.com">daniele.zappettini@gmail.com</a>
            </p>
            <p className="mb-4">
              <i className="fa-solid fa-phone text-primary"></i> 3470585947
            </p>
            <div className="social-icons flex space-x-4 mb-6">
              <a href="https://www.linkedin.com/in/daniele-zappettini104034172/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-primary text-2xl" />
              </a>
              <a href="https://www.instagram.com/daniele.zappettini/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-primary text-2xl" />
              </a>
            </div>
            <a
              href="../assets/CV.pdf"
              download
              className="inline-block bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Contatto destro */}
          <div className="contact-right px-32 pl-0">
            <form id="formToSheet" onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-primary"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-all duration-300"
              >
                Submit
              </button>
            </form>
            <span id="msg" className="block mt-4 text-center text-green-600"></span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-gray-600">Copyright © Daniele Zappettini</p>
      </div>
    </section>
  );
};

export default Contact;
