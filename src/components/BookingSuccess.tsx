
import { Button } from "@/components/ui/button";
import { RACCOON_HEAD } from "@/assets";
import { CalendarCheck, PartyPopper, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

interface BookingSuccessProps {
  bandName?: string;
  eventDate?: string;
  onClose?: () => void;
}

const BookingSuccess = ({ bandName = "the band", eventDate = "your event", onClose }: BookingSuccessProps) => {
  return (
    <div className="bg-gradient-to-b from-bandit-cream to-bandit-muted rounded-lg shadow-xl p-8 max-w-2xl mx-auto text-center">
      <div className="mb-6 flex justify-center">
        <PartyPopper className="h-16 w-16 text-bandit-accent animate-bounce" />
      </div>
      
      <h2 className="text-3xl font-bold text-bandit-brown-dark mb-3">
        Your Musical Heist is Complete!
      </h2>
      
      <div className="flex justify-center my-6">
        <img src={RACCOON_HEAD} alt="Band-it Mascot" className="w-32 h-32 animate-bobble" />
      </div>
      
      <p className="text-xl text-bandit-brown mb-6">
        You've successfully booked <span className="font-semibold">{bandName}</span> for {eventDate}. 
        Your event is going to be amazing!
      </p>
      
      <div className="bg-white rounded-lg p-6 mb-8 shadow-inner">
        <div className="flex items-center justify-center gap-4 mb-4">
          <CalendarCheck className="h-6 w-6 text-bandit-green" />
          <h3 className="text-lg font-medium">Booking Confirmed</h3>
        </div>
        
        <p className="text-bandit-brown-dark">
          We've sent a confirmation email with all the details to your inbox.
          The band will contact you shortly to discuss specific requirements.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <Button className="bg-bandit-green hover:bg-bandit-green-dark">
          View Booking Details
        </Button>
        
        <Button variant="outline" className="border-bandit-brown-light text-bandit-brown">
          <Share2 className="mr-2 h-4 w-4" />
          Share Your Event
        </Button>
      </div>
      
      <div className="text-bandit-brown-dark text-sm">
        <p className="mb-2">
          Need to make changes to your booking?
        </p>
        <p>
          <Link to="/contact" className="text-bandit-green hover:underline">
            Contact our support team
          </Link> or call us at (555) 123-4567
        </p>
      </div>
      
      {onClose && (
        <div className="mt-8">
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookingSuccess;
