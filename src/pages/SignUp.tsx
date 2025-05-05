
import { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, User } from "lucide-react";
import { UserRole } from "@/types/user";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("type") === "band" ? "band" : "client";
  const [activeTab, setActiveTab] = useState<UserRole>(initialTab as UserRole);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Test Account Available",
      description: "For testing, please use the test account: test@bandit.com / password123",
    });
    
    navigate("/login");
  };

  return (
    <div className="container mx-auto py-16 px-4 max-w-md">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Sign up to find or offer music services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs 
            defaultValue={initialTab} 
            onValueChange={(value) => setActiveTab(value as UserRole)}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="client" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Client</span>
              </TabsTrigger>
              <TabsTrigger value="band" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                <span>Band/Musician</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="client">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="client-name">Name</Label>
                  <Input id="client-name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="client-email">Email</Label>
                  <Input id="client-email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="client-password">Password</Label>
                  <Input id="client-password" type="password" placeholder="Create a password" required />
                </div>
                <Button type="submit" className="w-full">Sign Up as Client</Button>
                
                <div className="text-center text-sm text-muted-foreground mt-4">
                  <p>Or continue with</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <Button variant="outline" type="button" className="flex-1">Google</Button>
                    <Button variant="outline" type="button" className="flex-1">Facebook</Button>
                  </div>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="band">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="band-name">Band/Artist Name</Label>
                  <Input id="band-name" placeholder="Your band name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="band-email">Email</Label>
                  <Input id="band-email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="band-password">Password</Label>
                  <Input id="band-password" type="password" placeholder="Create a password" required />
                </div>
                <Button type="submit" className="w-full">Sign Up as Band/Musician</Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 text-center text-sm">
            Already have an account? <Link to="/login" className="text-music-purple hover:underline">Log in</Link>
          </div>
        </CardContent>
        <CardFooter className="bg-muted/50 p-4 text-sm text-center">
          <div className="w-full">
            <p className="mb-2 font-medium">Testing Account Available</p>
            <p>For testing purposes, use these credentials:</p>
            <p className="mt-1 font-mono bg-background p-2 rounded">
              Email: test@bandit.com<br />
              Password: password123
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
