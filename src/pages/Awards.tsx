import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Trophy, Medal } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      type: "Membership",
      title:
        "Proud Member of the International Federation of Inventors' Associations (IFIA)",
      icon: Award,
      flagEmoji: "🌐",
      countryCode: "global",
    },
    {
      type: "Gold Medal",
      title: "European Inventors Federation",
      country: "European Union",
      icon: Medal,
      flagEmoji: "🇪🇺",
      countryCode: "eu",
    },
    {
      type: "Gold & Silver Medals",
      title: "Teknofest World Invention Championships",
      description: "The world's largest invention fair",
      icon: Trophy,
      flagEmoji: "🌍",
      countryCode: "world",
    },
    {
      type: "Gold Medal",
      title: "Global Invention Competition",
      country: "Switzerland",
      icon: Medal,
      flagEmoji: "🇨🇭",
      countryCode: "ch",
    },
    {
      type: "Gold & Silver Medals",
      title: "World Championships",
      country: "Turkey",
      icon: Trophy,
      flagEmoji: "🇹🇷",
      countryCode: "tr",
    },
    {
      type: "Silver Medal",
      title: "World Championships",
      country: "United Arab Emirates",
      icon: Medal,
      flagEmoji: "🇦🇪",
      countryCode: "ae",
    },
    {
      type: "Special Award",
      title: "England Invention Competition",
      country: "England",
      icon: Award,
      flagEmoji: "🇬🇧",
      countryCode: "gb",
    },
    {
      type: "Special Award",
      title: "World Invention Intellectual Property Associations (WIIPA)",
      icon: Award,
      flagEmoji: "🌐",
      countryCode: "global",
    },
    {
      type: "Special Award",
      title: "European Union of Inventors Association",
      country: "European Union",
      icon: Award,
      flagEmoji: "🇪🇺",
      countryCode: "eu",
    },
    {
      type: "Special Award",
      title: "France",
      country: "France",
      icon: Award,
      flagEmoji: "🇫🇷",
      countryCode: "fr",
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
              Awards & <span className="text-gradient">Achievements</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Global recognition for scientific research, education, and ethical
              innovation
            </p>
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
              <p className="text-sm text-muted-foreground">
                🏆 Recognized by International Scientific Associations
              </p>
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {awards.map((award, index) => (
              <div
                key={index}
                className="relative bg-card backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift group overflow-hidden"
              >
                {/* Flag Background */}
                <div className="absolute top-0 right-0 text-[120px] opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  {award.flagEmoji}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <award.icon
                      className="text-primary group-hover:scale-110 transition-transform"
                      size={32}
                    />
                    <span className="text-3xl">{award.flagEmoji}</span>
                  </div>
                  <div className="inline-block bg-gradient-primary/20 rounded-full px-3 py-1 mb-3">
                    <span className="text-xs font-semibold text-primary">
                      {award.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
                  {award.description && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {award.description}
                    </p>
                  )}
                  {award.country && (
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="text-lg">{award.flagEmoji}</span>
                      {award.country}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Caption */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card border border-primary/20 rounded-2xl p-8 hover-lift">
              <p className="text-lg text-muted-foreground">
                The medals and recognitions we have earned reflect our
                contributions to
                <span className="text-primary font-semibold">
                  non‑commercial scientific research, education, and open
                  innovation
                </span>{" "}
                — representing our commitment to ethical AI development and
                global collaboration for public benefit.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Awards;
