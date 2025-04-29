
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlayCircle, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const musicGenres = [
  "Rock", "Pop", "Jazz", "Classical", "Electronic", "Hip-Hop",
  "R&B", "Country", "Folk", "Blues", "Metal", "Punk"
];

const BandProfileSetup = () => {
  const { toast } = useToast();
  const [coverPhoto, setCoverPhoto] = useState<string | null>(null);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [setListItems, setSetListItems] = useState<string[]>([]);
  const [newSetListItem, setNewSetListItem] = useState("");
  const [areasServed, setAreasServed] = useState<string[]>([]);
  const [newArea, setNewArea] = useState("");
  
  const handleAddGenre = (genre: string) => {
    if (!selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };
  
  const handleRemoveGenre = (genre: string) => {
    setSelectedGenres(selectedGenres.filter(g => g !== genre));
  };
  
  const handleAddSetListItem = () => {
    if (newSetListItem.trim() && !setListItems.includes(newSetListItem.trim())) {
      setSetListItems([...setListItems, newSetListItem.trim()]);
      setNewSetListItem("");
    }
  };
  
  const handleAddArea = () => {
    if (newArea.trim() && !areasServed.includes(newArea.trim())) {
      setAreasServed([...areasServed, newArea.trim()]);
      setNewArea("");
    }
  };
  
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would upload to a storage service
      // For now, we'll just use a placeholder
      setCoverPhoto("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80");
      toast({
        title: "Photo uploaded",
        description: "Your cover photo has been uploaded and will be reviewed by our team.",
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would save the band profile in a real application
    toast({
      title: "Profile submitted",
      description: "Your band profile has been created and is pending review.",
    });
    // Redirect to band dashboard
    setTimeout(() => {
      window.location.href = "/band-dashboard";
    }, 1500);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Set Up Your Band Profile</h1>
        <p className="text-muted-foreground mb-8">
          Complete your profile to start receiving booking requests from clients.
        </p>
        
        <form onSubmit={handleSubmit}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Tell clients about your band or musical act</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="band-name">Band/Artist Name</Label>
                <Input id="band-name" placeholder="Your band or stage name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Describe your music, experience, and what makes you unique"
                  className="min-h-[150px]" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label>Music Genre</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedGenres.map(genre => (
                    <div 
                      key={genre} 
                      className="bg-music-purple/20 text-music-purple px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <span>{genre}</span>
                      <button 
                        type="button" 
                        onClick={() => handleRemoveGenre(genre)}
                        className="hover:text-music-purple/80"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <Select onValueChange={handleAddGenre}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select genres" />
                  </SelectTrigger>
                  <SelectContent>
                    {musicGenres.map(genre => (
                      <SelectItem key={genre} value={genre} disabled={selectedGenres.includes(genre)}>
                        {genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="members">Number of Members</Label>
                <Input id="members" type="number" min="1" required />
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cover Photo</CardTitle>
              <CardDescription>Add a photo that represents your band (will be reviewed)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                {coverPhoto ? (
                  <div className="relative">
                    <img 
                      src={coverPhoto} 
                      alt="Band cover" 
                      className="w-full aspect-[16/9] object-cover rounded-lg"
                    />
                    <Button 
                      type="button" 
                      variant="destructive" 
                      size="sm" 
                      className="absolute top-2 right-2" 
                      onClick={() => setCoverPhoto(null)}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                    <p className="mb-2">Drag and drop an image, or click to browse</p>
                    <Input 
                      id="cover-photo" 
                      type="file" 
                      accept="image/*" 
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    <Label htmlFor="cover-photo">
                      <Button type="button" variant="outline">Upload Image</Button>
                    </Label>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Music Samples</CardTitle>
              <CardDescription>Add links to your music so clients can hear you play</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="featured-song">Featured Song Link (YouTube, SoundCloud, etc.)</Label>
                <Input 
                  id="featured-song" 
                  placeholder="https://soundcloud.com/yourbandname/song"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="additional-song">Additional Song (Optional)</Label>
                <Input 
                  id="additional-song" 
                  placeholder="https://youtube.com/watch?v=yoursongid"
                />
              </div>
              
              <div className="space-y-2">
                <Label>Set List</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {setListItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-secondary px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <span>{item}</span>
                      <button 
                        type="button" 
                        onClick={() => setSetListItems(setListItems.filter((_, i) => i !== index))}
                        className="hover:text-muted-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Add songs you perform"
                    value={newSetListItem}
                    onChange={(e) => setNewSetListItem(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddSetListItem())}
                  />
                  <Button type="button" onClick={handleAddSetListItem}>Add</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Service Areas</CardTitle>
              <CardDescription>Where are you willing to perform?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Areas Served</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {areasServed.map((area, index) => (
                    <div 
                      key={index} 
                      className="bg-secondary px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <span>{area}</span>
                      <button 
                        type="button" 
                        onClick={() => setAreasServed(areasServed.filter((_, i) => i !== index))}
                        className="hover:text-muted-foreground"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input 
                    placeholder="City, region, or radius (e.g., 'Boston' or 'Within 50 miles of NYC')"
                    value={newArea}
                    onChange={(e) => setNewArea(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddArea())}
                  />
                  <Button type="button" onClick={handleAddArea}>Add</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="travel-distance">Maximum Travel Distance (miles)</Label>
                <Input id="travel-distance" type="number" min="0" placeholder="50" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Pricing Information</CardTitle>
              <CardDescription>Set your rates for performances</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="hourly-rate">Hourly Rate (USD)</Label>
                <Input id="hourly-rate" type="number" min="0" placeholder="150" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="full-event-rate">Full Event Rate (USD)</Label>
                <Input id="full-event-rate" type="number" min="0" placeholder="800" />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Create Band Profile</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default BandProfileSetup;
