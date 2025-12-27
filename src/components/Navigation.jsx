import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavButton = ({ label, onClick, className }) => (
  <button
    onClick={onClick}
    className={`text-gray-300 hover:text-cyan-400 transition-colors ${className}`}
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
  </button>
);

const Navigation = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "About", id: "about" },
      { label: "Projects", id: "projects" },
      { label: "Skills", id: "skills" },
      { label: "Contact", id: "contact" },
    ],
    []
  );

  const handleNavClick = useCallback(
    (id) => {
      onNavigate(id);
      setIsOpen(false);
    },
    [onNavigate]
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-cyan-500/20 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Elshafei
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              label={item.label}
              onClick={() => handleNavClick(item.id)}
              className="relative group"
            />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-[#0a0a0f] border-b border-cyan-500/20 md:hidden"
            >
              <div className="flex flex-col gap-4 p-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-left py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default React.memo(Navigation);
