
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music, CalendarClock, User, Sun, Moon, Download, LogOut } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useAuth } from "@/context/AuthContext";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuItem 
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  
  return (
    <header className="border-b bg-background sticky top-0 z-50">
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
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {user?.name || "User"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/welcome" className="cursor-pointer">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-500">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
