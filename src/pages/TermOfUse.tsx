import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Scale, ShieldCheck, Users } from "lucide-react";

const TermsOfUse = () => {
  const sections = [
    {
      title: "Purpose of This Website",
      icon: FileText,
      content: [
        "This website is operated by Maple AI Innovation Foundation, an independent nonprofit organization based in Canada",
        "All content is provided for educational, research, and informational purposes",
        "No content on this website constitutes commercial, legal, or professional advice",
      ],
    },
    {
      title: "Acceptable Use",
      icon: Users,
      content: [
        "Users may access and use content for personal, educational, or nonprofit purposes",
        "Content may not be used for unlawful, misleading, or harmful activities",
        "Users must respect open knowledge principles and community guidelines",
      ],
    },
    {
      title: "Intellectual Property & Content Use",
      icon: Scale,
      content: [
        "Original content is shared to support open research and education",
        "Third‑party materials remain the property of their respective owners",
        "Proper attribution is required when reusing or referencing content",
      ],
    },
    {
      title: "Limitations & Responsibilities",
      icon: ShieldCheck,
      content: [
        "We make reasonable efforts to ensure accuracy, but do not guarantee completeness or correctness",
        "The Foundation is not responsible for external links or third‑party content",
        "Use of this website is at the user’s own discretion and responsibility",
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
              Terms of <span className="text-gradient">Use</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              These terms outline the principles and conditions for using
              maple‑ai.ca in alignment with our nonprofit mission.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover-lift group"
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <section.icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>

                <ul className="space-y-2">
                  {section.content.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              These terms apply solely to the use of maple‑ai.ca and are
              intended to support ethical, open, and responsible access to
              information.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
