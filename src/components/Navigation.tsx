
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music, CalendarClock, User, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <header className="border-b bg-background sticky top-0 z-10">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <Music className="h-6 w-6 text-bandit-green" />
          <span className="font-bold text-xl">Band-it</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/bands" className="text-foreground hover:text-bandit-green transition-colors">
            Find Bands
          </Link>
          <Link to="/how-it-works" className="text-foreground hover:text-bandit-green transition-colors">
            How It Works
          </Link>
          <Link to="/about" className="text-foreground hover:text-bandit-green transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-1">
            <Download className="h-4 w-4 mr-1" />
            Download App
          </Button>
          
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
