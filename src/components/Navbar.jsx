import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"; // ✅ FIX

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about-us" },
    { name: "E-Rickshaw", link: "#rickshaw" },
    { name: "Blog", link: "#blog" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 bg-white transition-all ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <img
          src={logo}          // ✅ FIX
          alt="Logo"
          className="w-32 object-contain"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
          {menu.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.link}
                className="py-2 transition-colors hover:text-emerald-600"
              >
                {item.name}
              </a>
              <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-50"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${open && "rotate-45 translate-y-2"}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${open && "opacity-0"}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${open && "-rotate-45 -translate-y-2"}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-6"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <ul className="flex flex-col gap-5 text-sm font-medium text-gray-700">
                {menu.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <a
                      href={item.link}
                      onClick={() => setOpen(false)}
                      className="block hover:text-emerald-600 transition"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
