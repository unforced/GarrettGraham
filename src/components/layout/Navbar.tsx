import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Impact", path: "/impact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-serif font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-300"
          aria-label="Garrett Graham Logo"
        >
          Garrett Graham
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "relative text-base font-medium transition-colors duration-300",
                location.pathname === link.path
                  ? "text-primary font-semibold after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-primary"
                  : "text-foreground hover:text-primary link-underline"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn-primary"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/98 backdrop-blur-md md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container-custom pt-24 pb-8 flex flex-col space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-2xl font-serif py-2 border-b border-border/50 transition-colors duration-300",
                location.pathname === link.path
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn-primary text-center mt-4"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
