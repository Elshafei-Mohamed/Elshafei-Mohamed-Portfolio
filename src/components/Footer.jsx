import React from "react";
import { personalInfo } from "../data/portfolioData";

const currentYear = new Date().getFullYear();

const Footer = React.memo(() => {
  return (
    <footer className="py-8 px-4 bg-[#0a0a0f] border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-gray-400 text-center text-sm">
          &copy; {currentYear} {personalInfo.name}. All rights reserved
        </div>
      </div>
    </footer>
  );
});

export default Footer;
