import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, FileText, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  const resources = [
    {
      title: "Open AI Research Papers",
      icon: FileText,
      description:
        "Access a curated collection of openly available AI research papers focused on ethical AI, transparency, and real-world applications.",
      items: [
        "Open-access academic publications",
        "Summaries of recent AI research",
        "Ethical AI and policy discussions",
        "Community-recommended reading lists",
      ],
    },
    {
      title: "Free Educational Guides",
      icon: GraduationCap,
      description:
        "Explore beginner-friendly and advanced educational materials designed to support learning and teaching in artificial intelligence.",
      items: [
        "Introductory AI learning guides",
        "Responsible AI best practices",
        "Educational workshops materials",
        "Learning paths for students and educators",
      ],
    },
    {
      title: "Community Knowledge Hub",
      icon: BookOpen,
      description:
        "Discover resources created and shared by our global community, supporting open knowledge exchange and collaborative learning.",
      items: [
        "Community-contributed tutorials",
        "Open datasets and references",
        "Public research notes",
        "Collaborative project documentation",
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
              Free <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Open educational resources designed to support learning, research,
              and community collaboration in artificial intelligence
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover-lift group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <resource.icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {resource.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {resource.description}
                </p>

                <ul className="space-y-2">
                  {resource.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center hover-lift">
              <h3 className="text-2xl font-semibold mb-3">
                Contribute to Open Knowledge
              </h3>
              <p className="text-muted-foreground mb-6">
                Have a resource to share with the community? Help support open
                research and education by contributing your knowledge.
              </p>
              <Link
                to="/get-involved"
                className="inline-block bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
