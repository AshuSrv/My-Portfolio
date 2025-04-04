import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const sections = [
    "hero",
    "experience",
    "projects",
    "skills",
    "achievements",
    "contact",
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of section is visible
    };

    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        });
      }, observerOptions);

      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black backdrop-blur-lg z-50 border-b border-gray-900">
      <div className="max-w-7xl mx-auto  py-3 flex justify-between items-center">
        <span
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("hero")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          Ashutosh Shrivastava
        </span>

        <div className="flex space-x-6">
          {sections.slice(1).map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === section
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 transition-all ${
                  activeSection === section
                    ? "bg-gradient-to-r from-blue-400 to-purple-500"
                    : "bg-transparent"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
