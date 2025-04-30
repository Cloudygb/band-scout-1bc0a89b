import { Link } from "react-router-dom";
import { Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Music className="h-6 w-6 text-music-teal" />
              <span className="font-bold text-xl">Band Scout</span>
            </Link>
            <p className="text-muted-foreground">
              Connecting talented musicians with event hosts for unforgettable experiences.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Musicians</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/signup?type=band" className="text-muted-foreground hover:text-music-purple transition-colors">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-music-purple transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-music-purple transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-music-purple transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Event Hosts</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/signup?type=client" className="text-muted-foreground hover:text-music-purple transition-colors">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/bands" className="text-muted-foreground hover:text-music-purple transition-colors">
                  Find Musicians
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-music-purple transition-colors">
                  Event Planning
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-music-purple transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-music-purple transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-music-purple transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-music-purple transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-music-purple transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Band Scout. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-music-purple transition-colors">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-music-purple transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-music-purple transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-music-purple transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
