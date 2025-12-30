import { Globe, Users, Lightbulb, Award } from "lucide-react";

const MissionSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Collaboration",
      description:
        "Connecting researchers, educators, and nonprofit institutions worldwide to advance open AI research.",
    },
    {
      icon: Users,
      title: "Research & Education",
      description:
        "Supporting rigorous research and educational initiatives that expand access to artificial intelligence knowledge.",
    },
    {
      icon: Lightbulb,
      title: "Open Innovation",
      description:
        "Encouraging responsible and open innovation through community-driven research and experimentation.",
    },
    {
      icon: Award,
      title: "Community Impact",
      description:
        "Enabling positive social impact through open research, education, and public-interest AI initiatives.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The Maple AI Innovation Foundation connects science, education, and
            open research on a global scale. We are dedicated to advancing
            artificial intelligence through collaborative research initiatives,
            knowledge sharing, and inclusive community participation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover-lift hover:border-primary/50 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
