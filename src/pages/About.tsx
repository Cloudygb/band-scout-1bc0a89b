
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Band-it</h1>
        
        <div className="prose prose-lg">
          <p className="text-xl text-muted-foreground mb-8">
            Band-it is a platform dedicated to connecting musical talent with event hosts, creating unforgettable experiences through the power of live music.
          </p>
          
          <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
          <p className="mb-6">
            We believe that live music has the power to transform any event into a memorable experience. Our mission is to make it easy for event planners to find and book the perfect musical talent, while helping musicians find opportunities to share their craft and grow their careers.
          </p>
          
          <h2 className="text-2xl font-semibold mt-12 mb-4">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-medium mb-2">For Bands & Musicians</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Create your professional profile</li>
                <li>Showcase your music with sample tracks</li>
                <li>Set your availability and pricing</li>
                <li>Receive booking requests directly</li>
                <li>Build your reputation with client reviews</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">For Event Hosts</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Browse diverse musical talent in your area</li>
                <li>Filter by genre, price, and availability</li>
                <li>Listen to music samples before booking</li>
                <li>Coordinate details through our platform</li>
                <li>Share feedback after your event</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mt-12 mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-xl">
              <h3 className="text-xl font-medium mb-2">Community</h3>
              <p className="text-muted-foreground">Supporting local music scenes and fostering connections between artists and audiences.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl">
              <h3 className="text-xl font-medium mb-2">Quality</h3>
              <p className="text-muted-foreground">Curating exceptional musical talent and ensuring professional experiences.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl">
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p className="text-muted-foreground">Continuously improving our platform to better serve musicians and event hosts.</p>
            </div>
          </div>
          
          <div className="bg-bandit-green/10 p-8 rounded-xl text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="mb-6 max-w-lg mx-auto">
              Whether you're a musician looking to showcase your talent or an event host seeking the perfect sound, Band-it is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup?type=band">
                <Button size="lg" className="bg-bandit-green hover:bg-bandit-green-dark">Join as a Musician</Button>
              </Link>
              <Link to="/signup?type=client">
                <Button size="lg" variant="outline">Find Musicians</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
