import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Globe, Users, Maximize2, X } from "lucide-react";
import { useState, useEffect } from "react";

const Programs = () => {
  // State for Image Modal (Lightbox)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Events Data
  const events = [
    {
      title: "Designing the Future: AI Memory & Economic Innovation",
      date: "March 1, 2026",
      location: "Online / Virtual",
      description:
        "Explore the critical role of AI memory systems and sustainable economic innovation in architecting tomorrow's world. A must-attend for researchers and non-profit leaders focused on long-term societal impact.",
      poster: "/upcomingEvent.jpg",
    },
    {
      title: "Toronto AI & Data Science + Certificate",
      date: "February 15, 2026",
      location: "Toronto, Canada",
      description:
        "An intensive session focused on the practical applications of Data Science and AI, concluding with professional certification for participants.",
      poster: "/pastEvent.jpg",
    },
  ];

  // Countdown Logic (Same as before, fixed for TS)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const targetDate = new Date("2026-03-01T00:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:scale-110 transition">
            <X size={40} />
          </button>
          <img
            src={selectedImage}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            alt="Full size poster"
          />
        </div>
      )}

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Our <span className="text-gradient">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Visual showcase of our educational initiatives and community
              events.
            </p>
          </div>

          {/* PAST EVENT - Wide Layout */}
          <section className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-2">Previous Milestones</h3>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="space-y-10">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Poster */}
                    <div
                      className="group relative cursor-zoom-in flex-1"
                      onClick={() => setSelectedImage(event.poster)}
                      style={{ minHeight: "300px" }}
                    >
                      <img
                        src={event.poster}
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition duration-500"
                        alt={event.title}
                      />

                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />

                      <p className="absolute bottom-4 left-4 text-xs text-white bg-black/50 p-2 rounded-lg">
                        Click to enlarge
                      </p>
                    </div>

                    {/* Info */}
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Users size={18} />
                        <span className="text-sm font-medium uppercase tracking-wider">
                          Archive
                        </span>
                      </div>

                      <h3 className="text-3xl font-bold mb-4">{event.title}</h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-primary" />
                          <span>{event.date}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Globe size={16} className="text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
