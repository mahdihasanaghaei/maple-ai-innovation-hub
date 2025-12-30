import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Eye, Database, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        "Basic contact information voluntarily provided through forms",
        "Limited technical information such as browser type and anonymized analytics",
        "No sensitive personal data collection",
      ],
    },
    {
      title: "How We Use Information",
      icon: Eye,
      content: [
        "To support nonprofit research, education, and community initiatives",
        "To respond to inquiries and community communications",
        "To improve website accessibility and educational content",
      ],
    },
    {
      title: "Data Protection & Security",
      icon: Shield,
      content: [
        "We do not sell, rent, or trade personal data",
        "Data is stored using industry‑standard security practices",
        "Access to information is strictly limited to authorized personnel",
      ],
    },
    {
      title: "Contact & Transparency",
      icon: Mail,
      content: [
        "Users may request access or correction of their personal information",
        "Privacy‑related inquiries can be directed to our contact email",
        "We remain committed to transparency and ethical data use",
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
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Maple AI Innovation Foundation is committed to protecting privacy
              and handling information responsibly in support of our nonprofit
              mission.
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
              This privacy policy applies solely to maple‑ai.ca and reflects our
              commitment as an independent, nonprofit, research‑focused
              organization based in Canada.
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

export default PrivacyPolicy;
