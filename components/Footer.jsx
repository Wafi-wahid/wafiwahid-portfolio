import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center text-center py-6 text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700">
      <p>© {new Date().getFullYear()} Wafi Wahid. Built with 💻 and ☕</p>
    </footer>
  );
};

export default Footer;
