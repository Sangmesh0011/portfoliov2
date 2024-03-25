import React from 'react';

const NavFoo = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-800 py-4 rounded-full">
      <div className="w-[45vw] mx-auto flex justify-center rounded-full items-center p-3 gap-6">
        <ul className="flex space-x-4">
          <li><button onClick={() => scrollToSection('homepage')} className="text-white hover:text-gray-300 hover:cursor-none">Home</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="text-white hover:text-gray-300 hover:cursor-none">Projects</button></li>
          <li><button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300 hover:cursor-none">Know me</button></li>
          <li><button onClick={() => scrollToSection('edu')} className="text-white hover:text-gray-300 hover:cursor-none">Education</button></li>
          <li><button onClick={() => scrollToSection('quote')} className="text-white hover:text-gray-300 hover:cursor-none">Quote</button></li>
          <li><button onClick={() => scrollToSection('contactpage')} className="text-white hover:text-gray-300 hover:cursor-none">Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavFoo;
