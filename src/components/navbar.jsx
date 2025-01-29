import { Link } from "react-router-dom";
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../assets/logo-white.png";
import navLine from "../assets/nav-line.svg";
import { navLinks } from "../utils/nav-details";
import { AnimatePresence, motion } from "framer-motion";

const linkClass = "hover:drop-shadow-[0_0px_10px_rgba(255,255,255,1)]";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <nav className="p-4 px-20 z-50 max-md:px-4 max-md:top-0 max-md:static sticky">
      <div className="container mx-auto flex justify-between mb-3 ">
        <Link to="/">
          <img src={logo} alt="logo" className="max-h-10 max-md:max-h-7 mt-3" />
        </Link>
        <div className="flex justify-between w-2/3 items-center font-jockey text-xl font-normal max-lg:hidden">
          {navLinks.map(({ href, title }) => (
            <Link key={href} to={href} className={linkClass}>
              {title}
            </Link>
          ))}
        </div>
        <div ref={ref} className="justify-end hidden max-lg:block">
          <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-6 absolute left-0 right-0 top-[3.5rem] p-5 backdrop-blur drop-shadow-lg bg-black/60"
              >
                <ul className="grid gap-2">
                  {navLinks.map((route, idx) => {
                    return (
                      <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                          delay: 0.1 + idx / 10,
                        }}
                        key={route.title}
                        className="w-full p-[0.08rem] rounded-xl"
                      >
                        <a
                          onClick={() => setOpen((prev) => !prev)}
                          className={
                            "flex items-center justify-start w-full p-5 rounded-xl bg-transparent hover:bg-black hover:bg-opacity-10 transition-all duration-300 ease-in-out"
                          }
                          href={route.href}
                        >
                          <span className="flex gap-1 text-lg">
                            {route.title}
                          </span>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <img src={navLine} alt="navLine" />
    </nav>
  );
};

export default Navbar;
