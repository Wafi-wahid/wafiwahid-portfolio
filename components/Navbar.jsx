import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [active, setActive] = useState("hero");

  const links = [
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "blog", label: "Blog" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white dark:bg-slate-800 shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-teal-600">Wafi Wahid</div>
        <ul className="flex gap-6 items-center text-sm md:text-base">
          {links.map(({ to, label }) => (
            <li key={to} className="relative">
              <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active-link"
                onSetActive={() => setActive(to)}
                className="cursor-pointer transition-colors duration-300 hover:text-teal-500 px-1"
              >
                {label}
                {active === to && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-500 rounded"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="text-xl transition-transform hover:scale-110 ml-4"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
