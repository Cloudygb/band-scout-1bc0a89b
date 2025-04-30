
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { BandProfile } from "@/types/user";
import { format } from "date-fns";
import { CalendarIcon, Play } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { mockBands } from "@/data/mockBands";

const BandsListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedBand, setSelectedBand] = useState<BandProfile | null>(null);
  
  const filteredBands = mockBands.filter((band) => {
    const matchesSearch = band.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        band.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesGenre = selectedGenre === "" || band.genre.includes(selectedGenre);
    
    const matchesPrice = band.pricing?.hourlyRate && 
                        band.pricing.hourlyRate >= priceRange[0] && 
                        band.pricing.hourlyRate <= priceRange[1];
    
    return matchesSearch && matchesGenre && matchesPrice;
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">Find Your Perfect Band</h1>
      <p className="text-muted-foreground mb-8">Browse and listen to talented musicians available for your event</p>
      
      {/* Filters */}
      <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="search" className="mb-2 block">Search</Label>
            <Input 
              id="search"
              placeholder="Search by name or description" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="genre" className="mb-2 block">Genre</Label>
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger id="genre">
                <SelectValue placeholder="All Genres" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Genres</SelectItem>
                <SelectItem value="Rock">Rock</SelectItem>
                <SelectItem value="Jazz">Jazz</SelectItem>
                <SelectItem value="Classical">Classical</SelectItem>
                <SelectItem value="Pop">Pop</SelectItem>
                <SelectItem value="Folk">Folk</SelectItem>
                <SelectItem value="Blues">Blues</SelectItem>
                <SelectItem value="Electronic">Electronic</SelectItem>
                <SelectItem value="Funk">Funk</SelectItem>
                <SelectItem value="Soul">Soul</SelectItem>
                <SelectItem value="R&B">R&B</SelectItem>
                <SelectItem value="Ambient">Ambient</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label className="mb-2 block">Event Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <Label className="mb-2 block">Hourly Rate Range: ${priceRange[0]} - ${priceRange[1]}</Label>
            <Slider
              defaultValue={priceRange}
              min={0}
              max={300}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="py-4"
            />
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <Button variant="outline" className="mr-2" onClick={() => {
            setSearchTerm("");
            setSelectedGenre("");
            setSelectedDate(undefined);
            setPriceRange([0, 300]);
          }}>
            Reset Filters
          </Button>
          <Button className="bg-music-teal hover:bg-music-teal/90">Apply Filters</Button>
        </div>
      </div>
      
      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBands.map((band) => (
          <div 
            key={band.id} 
            className="band-card bg-card rounded-lg overflow-hidden shadow-md cursor-pointer"
            onClick={() => setSelectedBand(band)}
          >
            <div className="aspect-[16/9] overflow-hidden relative">
              <img 
                src={band.coverPhoto} 
                alt={band.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-xl">{band.name}</h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {band.genre.slice(0, 3).map((g) => (
                    <Badge key={g} variant="outline" className="bg-black/50 text-white border-none">
                      {g}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-muted-foreground text-sm">{band.members}-piece band</p>
                  <p className="font-medium mt-1">${band.pricing?.hourlyRate}/hour</p>
                </div>
                <div className="audio-player cursor-pointer">
                  <Play className="h-4 w-4 text-music-teal" />
                  <span className="text-xs">Listen</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{band.bio}</p>
              <div className="mt-4 flex justify-end">
                <Button size="sm" className="bg-music-orange hover:bg-music-orange/90">View Details</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Band details modal */}
      <Dialog open={!!selectedBand} onOpenChange={(open) => !open && setSelectedBand(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedBand && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedBand.name}</DialogTitle>
                <DialogDescription>
                  {selectedBand.genre.join(", ")} • {selectedBand.members}-piece band
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <div className="aspect-[16/9] rounded-md overflow-hidden">
                  <img 
                    src={selectedBand.coverPhoto} 
                    alt={selectedBand.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">About</h3>
                  <p className="text-muted-foreground">{selectedBand.bio}</p>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Sample Music</h3>
                  {selectedBand.sampleSongs.map((song, i) => (
                    <div key={i} className="audio-player p-3 mb-2">
                      <div className="flex items-center gap-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                          <Play className="h-4 w-4" />
                        </Button>
                        <span>{song.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Set List Preview</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {selectedBand.setList.map((song, i) => (
                        <li key={i}>{song}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Areas Served</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedBand.areasServed.map((area, i) => (
                        <Badge key={i} variant="secondary">{area}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-2">Pricing</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary p-4 rounded-md text-center">
                      <p className="text-sm text-muted-foreground">Hourly Rate</p>
                      <p className="text-2xl font-bold">${selectedBand.pricing?.hourlyRate}</p>
                    </div>
                    <div className="bg-secondary p-4 rounded-md text-center">
                      <p className="text-sm text-muted-foreground">Full Event</p>
                      <p className="text-2xl font-bold">${selectedBand.pricing?.fullEventRate}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end space-x-4">
                  <Button variant="outline" onClick={() => setSelectedBand(null)}>Close</Button>
                  <Button className="bg-music-teal hover:bg-music-teal/90">Book This Band</Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BandsListing;
