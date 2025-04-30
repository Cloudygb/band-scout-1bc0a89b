
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Users, CalendarClock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { BandProfile } from "@/types/user";
import { mockPopularBands } from "@/data/mockBands";

const Hero = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: number | undefined;
    
    if (autoPlay) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mockPopularBands.length);
      }, 4000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-music-teal/10 to-background py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find the Perfect Band for Your Next Event
            </h1>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Connect with local musicians and bands tailored to your event needs. Book directly and make your occasion unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/signup?type=client">
                <Button size="lg" className="bg-music-teal hover:bg-music-teal/90">
                  Find Musicians
                </Button>
              </Link>
              <Link to="/signup?type=band">
                <Button size="lg" variant="outline" className="border-music-orange text-music-orange hover:bg-music-orange/10">
                  Join as a Musician
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 animate-scale-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-music-orange opacity-80"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-music-teal opacity-60"></div>
              
              <Carousel className="w-full" 
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
              >
                <CarouselContent>
                  {mockPopularBands.map((band, index) => (
                    <CarouselItem key={band.id}>
                      <div className="bg-card shadow-2xl rounded-2xl p-6 relative">
                        <div className="aspect-video bg-black/5 rounded-lg overflow-hidden">
                          <img 
                            src={band.coverPhoto} 
                            alt={band.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div>
                            <h3 className="font-semibold">{band.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {band.genre.join(", ")} • {band.members}-piece band
                            </p>
                          </div>
                          <Button size="sm" className="bg-music-orange hover:bg-music-orange/80">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">How Band Scout Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-music-teal/10 mb-4">
                <Users className="text-music-teal" />
              </div>
              <h3 className="font-semibold mb-2">Sign Up</h3>
              <p className="text-muted-foreground">Register as a client looking for musicians or as a band offering services.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-music-teal/10 mb-4">
                <Music className="text-music-teal" />
              </div>
              <h3 className="font-semibold mb-2">Browse & Listen</h3>
              <p className="text-muted-foreground">Explore local bands, listen to their music, and find the perfect match.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-music-teal/10 mb-4">
                <CalendarClock className="text-music-teal" />
              </div>
              <h3 className="font-semibold mb-2">Book Directly</h3>
              <p className="text-muted-foreground">Schedule your event and coordinate details all in one place.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
