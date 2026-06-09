import { Globe } from "lucide-react";

import canadaFlag from "/canada.svg";
import franceFlag from "/france.png";

const GlobalPresenceSection = () => {
  const branches = [
    {
      flag: canadaFlag,
      country: "Canada",
      city: "Toronto",
      description:
        "Supporting research, education, and community engagement initiatives across Canada.",
    },
    {
      flag: franceFlag,
      country: "France",
      city: "Paris",
      description:
        "Advancing international collaboration and AI research throughout Europe.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center">
            <Globe className="text-white" size={32} />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Global <span className="text-gradient">Presence</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            The Maple AI Innovation Foundation maintains international branches
            that foster collaboration, research, and educational initiatives
            across North America and Europe.
          </p>
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {branches.map((branch) => (
            <div
              key={branch.country}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover-lift hover:border-primary/50 transition-all"
            >
              {/* Flag Image */}
              <div className="overflow-hidden">
                <img
                  src={branch.flag}
                  alt={`${branch.country} Flag`}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">
                  {branch.country}
                </h3>

                <p className="text-primary font-medium mb-4">
                  {branch.city} Branch
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  {branch.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
