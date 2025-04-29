
import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, User } from "lucide-react";
import { UserRole } from "@/types/user";

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("type") === "band" ? "band" : "client";
  const [activeTab, setActiveTab] = useState<UserRole>(initialTab as UserRole);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up form submitted");
    // This would be replaced with actual authentication logic
    window.location.href = activeTab === "band" ? "/band-profile-setup" : "/client-dashboard";
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
      </Card>
    </div>
  );
};

export default SignUp;
