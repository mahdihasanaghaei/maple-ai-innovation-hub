import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroImage from "/hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="AI Innovation"
          className="w-full h-full object-cover opacity-80"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-background/30 to-background/50" /> */}
      </div>

      {/* Animated Grid Background */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" /> */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card border border-primary/20 rounded-full mb-8 animate-fade-in">
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm text-muted-foreground">
            An independent nonprofit AI research foundation based in Canada
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Advancing Artificial Intelligence
          <br />
          <span className="text-gradient">
            Through Open Research & Education
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in">
          Through open research, educational programs, and global collaboration
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12 animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift">
            <div className="text-4xl font-bold text-gradient mb-2">2</div>
            <p className="text-muted-foreground">Open Research Projects</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift">
            <div className="text-4xl font-bold text-gradient mb-2">3</div>
            <p className="text-muted-foreground">Educational AI Initiatives</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift">
            <div className="text-4xl font-bold text-gradient mb-2">50+</div>
            <p className="text-muted-foreground">
              Community Researchers & Volunteers
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Link to="/about">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-lg px-8"
            >
              Discover Our Mission
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          <Link to="/get-involved">
            <Button variant="outline">Get Involved as a Volunteer</Button>
          </Link>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
