
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music, CalendarClock, User } from "lucide-react";

const Navigation = () => {
  return (
    <header className="border-b bg-background sticky top-0 z-10">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <Music className="h-6 w-6 text-music-purple" />
          <span className="font-bold text-xl">GigFinder Unite</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/bands" className="text-foreground hover:text-music-purple transition-colors">
            Find Bands
          </Link>
          <Link to="/how-it-works" className="text-foreground hover:text-music-purple transition-colors">
            How It Works
          </Link>
          <Link to="/about" className="text-foreground hover:text-music-purple transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
