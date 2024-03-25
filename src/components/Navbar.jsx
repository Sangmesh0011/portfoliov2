import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 150;
      const scrollPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav style={{backgroundColor:"rgba(1, 1, 1, 0.5)",backdropFilter:"blur(2px)"}} className="py-1 rounded-full w-auto h-auto fixed">
      <div className="w-[45vw] mx-auto flex justify-center rounded-full items-center p-3 gap-6">
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => scrollToSection("homepage")}
              className="text-white hover:text-gray-300 hover:cursor-none"
            >
              HOME
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-gray-300 hover:cursor-none"
            >
              PROJECTS
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-gray-300 hover:cursor-none"
            >
              KNOW ME
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("edu")}
              className="text-white hover:text-gray-300 hover:cursor-none"
            >
              EDUCATION
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("quote")}
              className="text-white hover:text-gray-300 hover:cursor-none"
            >
              QUOTE
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contactpage")}
              className="text-white hover:text-gray-300 hover:cursor-none"
            >
              CONTACT
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
