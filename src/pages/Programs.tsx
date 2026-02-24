// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Calendar, Globe, Users } from "lucide-react";
// import { Link } from "react-router-dom";

// const Programs = () => {
//   const events = [
//     {
//       title: "Online AI in Inventions Event",
//       date: "Date to be announced soon",
//       location: "Virtual Event",
//       icon: Globe,
//       description:
//         "Join us for an exclusive online event exploring the intersection of AI and inventions. Learn from leading innovators and practitioners about breakthrough AI applications in the invention space.",
//       highlights: [
//         "Expert keynote speakers",
//         "Live demonstrations",
//         "Interactive Q&A sessions",
//         "Networking opportunities",
//       ],
//     },
//     {
//       title: "Maple AI Community Event",
//       date: "Coming Soon",
//       location: "To be announced",
//       icon: Users,
//       description:
//         "Connect with the Maple AI community, share insights, and collaborate on groundbreaking AI projects. This event brings together researchers, educators, students, and AI enthusiasts.",
//       highlights: [
//         "Community networking",
//         "Project showcases",
//         "Collaboration workshops",
//         "Future roadmap discussions",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       <main className="pt-32 pb-24">
//         <div className="container mx-auto px-4">
//           {/* Header */}
//           <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               Programs & <span className="text-gradient">Events</span>
//             </h1>
//             <p className="text-xl text-muted-foreground">
//               Join us in shaping the future of AI through collaborative events
//               and community gatherings
//             </p>
//           </div>

//           {/* Events Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//             {events.map((event, index) => (
//               <div
//                 key={index}
//                 className="bg-card border border-border rounded-2xl p-8 hover-lift group"
//               >
//                 <div className="flex items-start gap-4 mb-6">
//                   <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
//                     <event.icon className="text-white" size={32} />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-2xl font-semibold mb-2">
//                       {event.title}
//                     </h3>
//                     <div className="flex items-center gap-2 text-muted-foreground mb-1">
//                       <Calendar size={16} className="text-primary" />
//                       <span className="text-sm">{event.date}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-muted-foreground">
//                       <Globe size={16} className="text-primary" />
//                       <span className="text-sm">{event.location}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <p className="text-muted-foreground mb-6">
//                   {event.description}
//                 </p>

//                 <div className="space-y-2">
//                   <h4 className="font-semibold text-sm text-primary mb-3">
//                     Event Highlights:
//                   </h4>
//                   <ul className="space-y-2">
//                     {event.highlights.map((highlight, idx) => (
//                       <li
//                         key={idx}
//                         className="flex items-center gap-2 text-sm text-muted-foreground"
//                       >
//                         <div className="w-1.5 h-1.5 bg-primary rounded-full" />
//                         {highlight}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Section */}
//           <div className="max-w-4xl mx-auto mt-16">
//             <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center hover-lift">
//               <h3 className="text-2xl font-semibold mb-3">Stay Updated</h3>
//               <p className="text-muted-foreground mb-6">
//                 Be the first to know about upcoming events, workshops, and
//                 community gatherings. Join our network to receive exclusive
//                 invitations and updates.
//               </p>
//               <Link
//                 to="/contact"
//                 className="inline-block bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
//               >
//                 Get Notified
//               </Link>
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Programs;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Globe, Users, Maximize2, X } from "lucide-react";
import { useState, useEffect } from "react";

const Programs = () => {
  // State for Image Modal (Lightbox)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Events Data
  const pastEvent = {
    title: "Toronto AI & Data Science + Certificate",
    date: "February 15, 2026",
    location: "Toronto, Canada",
    description:
      "An intensive session focused on the practical applications of Data Science and AI, concluding with professional certification for participants.",
    poster: "/pastEvent.jpg",
  };

  const upcomingEvent = {
    title: "Designing the Future: AI Memory & Economic Innovation",
    date: "March 1, 2026",
    location: "Online / Virtual",
    poster: "/upcomingEvent.jpg",
    description:
      "Explore the critical role of AI memory systems and sustainable economic innovation in architecting tomorrow's world. A must-attend for researchers and non-profit leaders focused on long-term societal impact.",
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf--cyKH6K1hfbb1P7LKvbBqOefXPOCHVueE9Y2x-1bwM0DcA/viewform",
  };

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

          {/* UPCOMING EVENT - Hero Style */}
          <section className="max-w-6xl mx-auto mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Poster Side */}
              <div
                className="relative group cursor-zoom-in"
                onClick={() => setSelectedImage(upcomingEvent.poster)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                  <img
                    src={upcomingEvent.poster}
                    alt={upcomingEvent.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
                      <Maximize2 size={32} />
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3 italic">
                  Click poster to enlarge
                </p>
              </div>

              {/* Info Side */}
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    Upcoming Event
                  </div>
                  <h2 className="text-4xl font-bold mb-4">
                    {upcomingEvent.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {upcomingEvent.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">
                        Date
                      </p>
                      <p className="font-medium">{upcomingEvent.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase">
                        Location
                      </p>
                      <p className="font-medium">{upcomingEvent.location}</p>
                    </div>
                  </div>
                </div>

                {/* Countdown Box */}
                <div className="bg-secondary/50 p-6 rounded-2xl border border-border">
                  <p className="text-center text-sm font-semibold uppercase tracking-widest mb-4">
                    Starts In
                  </p>
                  <div className="flex justify-between items-center text-center">
                    {[
                      { val: timeLeft.days, label: "Days" },
                      { val: timeLeft.hours, label: "Hours" },
                      { val: timeLeft.minutes, label: "Mins" },
                      { val: timeLeft.seconds, label: "Secs" },
                    ].map((item, i) => (
                      <div key={i} className="flex-1">
                        <div className="text-3xl font-bold text-primary">
                          {item.val ?? 0}
                        </div>
                        <div className="text-[10px] uppercase text-muted-foreground">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={upcomingEvent.formLink}
                  target="_blank"
                  className="w-full py-4 bg-gradient-primary text-white rounded-xl font-bold text-center hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  Register for Participation
                </a>
              </div>
            </div>
          </section>

          {/* PAST EVENT - Wide Layout */}
          <section className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-2">Previous Milestones</h3>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]">
              <div className=" flex flex-col md:flex-row">
                {/* Poster column (Full Height & Width) */}
                <div
                  className="group relative cursor-zoom-in flex-1"
                  onClick={() => setSelectedImage(pastEvent.poster)}
                  style={{ minHeight: "300px" }}
                >
                  <img
                    src={pastEvent.poster}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition duration-500"
                    alt="Past event"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
                  <p className="absolute bottom-4 left-4 text-xs text-white bg-black/50 p-2 rounded-lg">
                    Click to enlarge
                  </p>
                </div>

                {/* Info column (Stacked vertically) */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Users size={18} />
                    <span className="text-sm font-medium uppercase tracking-wider">
                      Archive
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{pastEvent.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pastEvent.description}
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>{pastEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe size={16} className="text-primary" />
                      <span>{pastEvent.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
