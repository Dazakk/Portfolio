import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const homeSection = document.getElementById("home");

      if (aboutSection && homeSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top; // Posizione della sezione about
        const homeBottom = homeSection.getBoundingClientRect().bottom; // Fine della sezione home

        // Cambia stato se si è superata la sezione home
        setIsScrolled(homeBottom <= 0 || aboutTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md" : "bg-[#1F2E3A]"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-20 py-4">
        {/* Logo */}
        <div
          className={`text-4xl font-bold tracking-widest ${
            isScrolled ? "text-primary" : "text-white"
          }`}
        >
          DZ
        </div>

        {/* Menu */}
        <ul className="flex space-x-12">
          {["home", "about", "services", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`text-lg transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-800 hover:text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
