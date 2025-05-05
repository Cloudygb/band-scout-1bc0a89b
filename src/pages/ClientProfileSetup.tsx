
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const ClientProfileSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    location: "",
    phoneNumber: "",
    bio: "",
    preferredGenres: "",
    eventTypes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Client profile data:", formData);
    
    // In a real app, we would save the profile to the database here
    
    // Show success message
    toast.success("Your profile has been set up!", {
      description: "You can now browse bands and book events.",
    });
    
    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="container max-w-4xl py-12 px-4">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Set up your client profile</CardTitle>
          <CardDescription>
            Tell us a bit about yourself so we can help you find the perfect music for your events
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Personal Information</h3>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    name="fullName" 
                    placeholder="Your full name" 
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    name="location" 
                    placeholder="Your city or region" 
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number (optional)</Label>
                  <Input 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    placeholder="Your contact number" 
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">About You (optional)</Label>
                <Textarea 
                  id="bio" 
                  name="bio" 
                  placeholder="Tell us a bit about yourself and what you're looking for" 
                  value={formData.bio}
                  onChange={handleChange}
                  className="min-h-[100px]"
                />
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Music Preferences</h3>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="preferredGenres">Preferred Music Genres</Label>
                  <Input 
                    id="preferredGenres" 
                    name="preferredGenres" 
                    placeholder="e.g., Rock, Jazz, Pop" 
                    value={formData.preferredGenres}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="eventTypes">Types of Events You Host</Label>
                  <Input 
                    id="eventTypes" 
                    name="eventTypes" 
                    placeholder="e.g., Weddings, Corporate Events, Parties" 
                    value={formData.eventTypes}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => navigate("/")}>
              Skip for now
            </Button>
            <Button type="submit">Complete Profile</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default ClientProfileSetup;
