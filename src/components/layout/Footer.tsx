
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-800 text-white pt-16 pb-8" id="contact">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white/90 mb-4">Garrett Graham</h3>
            <p className="text-white/70 max-w-md">
              Combining traditional wisdom with modern therapeutic approaches to help you achieve your highest potential.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-amber-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-amber-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-amber-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-serif text-white/90 mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-white/70 hover:text-amber-400 transition-colors duration-300">Home</Link>
              <Link to="/about" className="text-white/70 hover:text-amber-400 transition-colors duration-300">About</Link>
              <Link to="/services" className="text-white/70 hover:text-amber-400 transition-colors duration-300">Services</Link>
              <Link to="/impact" className="text-white/70 hover:text-amber-400 transition-colors duration-300">Impact</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-serif text-white/90 mb-4">Contact</h4>
            <div className="space-y-2">
              <a href="tel:+1234567890" className="flex items-center text-white/70 hover:text-amber-400 transition-colors duration-300">
                <Phone size={18} className="mr-2" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:garrett@example.com" className="flex items-center text-white/70 hover:text-amber-400 transition-colors duration-300">
                <Mail size={18} className="mr-2" />
                <span>garrett@example.com</span>
              </a>
            </div>
            <div className="pt-6">
              <a href="#contact" className="btn-primary">Book a Consultation</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} Garrett Graham. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
