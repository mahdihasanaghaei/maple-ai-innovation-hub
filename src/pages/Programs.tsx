import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const events = [
    {
      title: "Online AI in Inventions Event",
      date: "Date to be announced soon",
      location: "Virtual Event",
      icon: Globe,
      description:
        "Join us for an exclusive online event exploring the intersection of AI and inventions. Learn from leading innovators and researchers about breakthrough AI applications in the invention space.",
      highlights: [
        "Expert keynote speakers",
        "Live demonstrations",
        "Interactive Q&A sessions",
        "Networking opportunities",
      ],
    },
    {
      title: "Maple AI Community Event",
      date: "Coming Soon",
      location: "To be announced",
      icon: Users,
      description:
        "Connect with the Maple AI community, share insights, and collaborate on groundbreaking AI projects. This event brings together researchers, entrepreneurs, and AI enthusiasts.",
      highlights: [
        "Community networking",
        "Project showcases",
        "Collaboration workshops",
        "Future roadmap discussions",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Programs & <span className="text-gradient">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us in shaping the future of AI through collaborative events
              and community gatherings
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover-lift group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <event.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Calendar size={16} className="text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Globe size={16} className="text-primary" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {event.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary mb-3">
                    Event Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center hover-lift">
              <h3 className="text-2xl font-semibold mb-3">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Be the first to know about upcoming events, workshops, and
                community gatherings. Join our network to receive exclusive
                invitations and updates.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get Notified
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
