
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, CalendarClock, User } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">How GigFinder Unite Works</h1>
      <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto text-center">
        Our platform makes it easy to connect talented musicians with event hosts looking for the perfect musical experience.
      </p>
      
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-4">For Event Hosts</h2>
          <p className="text-muted-foreground mb-6">
            Finding the perfect musical act for your event has never been easier.
          </p>
          
          <ol className="space-y-8">
            <li className="flex gap-4">
              <div className="bg-music-purple/10 h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                <span className="font-bold text-music-purple">1</span>
              </div>
              <div>
                <h3 className="font-medium text-lg">Create your account</h3>
                <p className="text-muted-foreground">Sign up as an event host and tell us about your preferences.</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="bg-music-purple/10 h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                <span className="font-bold text-music-purple">2</span>
              </div>
              <div>
                <h3 className="font-medium text-lg">Browse available bands</h3>
                <p className="text-muted-foreground">Search by genre, price range, availability, and location.</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="bg-music-purple/10 h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                <span className="font-bold text-music-purple">3</span>
              </div>
              <div>
                <h3 className="font-medium text-lg">Listen to sample tracks</h3>
                <p className="text-muted-foreground">Preview each band's music to find your perfect match.</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="bg-music-purple/10 h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                <span className="font-bold text-music-purple">4</span>
              </div>
              <div>
                <h3 className="font-medium text-lg">Book and coordinate</h3>
                <p className="text-muted-foreground">Book your chosen band and use our platform to coordinate details.</p>
              </div>
            </li>
          </ol>
          
          <div className="mt-8">
            <Link to="/signup?type=client">
              <Button size="lg" className="bg-music-purple hover:bg-music-purple/90">Find Musicians Now</Button>
            </Link>
          </div>
        </div>
        
        <div className="relative order-1 md:order-2">
          <div className="bg-music-light-purple/30 p-1 rounded-lg rotate-3 shadow-xl">
            <div className="bg-white rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
                alt="Event host browsing" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-music-orange/20"></div>
          <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-music-purple/20"></div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div className="relative">
          <div className="bg-music-orange/30 p-1 rounded-lg -rotate-2 shadow-xl">
            <div className="bg-white rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                alt="Musician setting up profile" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-music-light-purple/20"></div>
          <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-music-orange/20"></div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-4">For Musicians & Bands</h2>
          <p className="text-muted-foreground mb-6">
            Showcase your talent and find new opportunities to perform.
          </p>
          
          <ol className="space-y-8">
            <li className="flex gap-4">
              <div className="bg-music-orange/10 h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                <span className="font-bold text-music-orange">1</span>
              </div>
              <div>
                <h3 className="font-medium text-lg">Create your profile</h3>
                <p className="text-muted-foreground">Showcase your band with photos, bio, and music samples.</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="bg-music-orange/10 h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                <span className="font-bold text-music-orange">2</span>
              </div>
              <div>
                <h3 className="font-medium text-lg">Set your availability</h3>
                <p className="text-muted-foreground">Update your calendar with dates you're available to perform.</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="bg-music-orange/10 h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                <span className="font-bold text-music-orange">3</span>
              </div>
              <div>
                <h3 className="font-medium text-lg">Receive booking requests</h3>
                <p className="text-muted-foreground">Get notified when clients want to book you for their events.</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="bg-music-orange/10 h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-1">
                <span className="font-bold text-music-orange">4</span>
              </div>
              <div>
                <h3 className="font-medium text-lg">Perform and build reputation</h3>
                <p className="text-muted-foreground">Grow your fan base through reviews and repeat bookings.</p>
              </div>
            </li>
          </ol>
          
          <div className="mt-8">
            <Link to="/signup?type=band">
              <Button size="lg" variant="outline">Join as a Musician</Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-card p-8 rounded-xl shadow-sm max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-8">
          Join GigFinder Unite today and be part of a community that celebrates live music!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup?type=client">
            <Button size="lg">Find Musicians</Button>
          </Link>
          <Link to="/signup?type=band">
            <Button size="lg" variant="outline">Join as a Musician</Button>
          </Link>
        </div>
      </div>
      
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto grid gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-2">How much does it cost to use GigFinder Unite?</h3>
            <p className="text-muted-foreground">
              Creating an account is free for both musicians and clients. Musicians pay a small commission only when they receive a booking through our platform.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-2">How are musicians vetted?</h3>
            <p className="text-muted-foreground">
              We review all musician profiles before approval, checking music samples, images, and descriptions for quality and accuracy.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-2">What if I need to cancel a booking?</h3>
            <p className="text-muted-foreground">
              We understand that plans change. Our platform has built-in rescheduling and cancellation policies to protect both parties.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-2">Can I request specific songs for my event?</h3>
            <p className="text-muted-foreground">
              Yes! When booking, you can communicate directly with musicians to discuss your song preferences and special requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
