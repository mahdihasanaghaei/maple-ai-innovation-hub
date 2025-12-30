import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2, University, Rocket, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Supporters = () => {
  const partnerCategories = [
    {
      icon: University,
      title: "Academic Institutions",
      count: "15+",
      description:
        "Universities and research centers collaborating on open and non‑commercial AI research",
    },
    {
      icon: Building2,
      title: "Nonprofit & Research Organizations",
      count: "20+",
      description:
        "Independent organizations supporting education, ethics, and public‑interest AI initiatives",
    },
    {
      icon: Rocket,
      title: "Community Initiatives",
      count: "30+",
      description:
        "Grassroots and community‑led projects focused on AI learning and knowledge sharing",
    },
    {
      icon: Globe,
      title: "International Networks",
      count: "10+",
      description:
        "Global academic and nonprofit networks advancing responsible AI collaboration",
    },
  ];

  const partnerLogos = [
    "7.png",
    "1.jpg",
    "5.png",
    "12.png",
    "13.png",
    "14.png",
    "6.png",
    "15.png",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Collaborations</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Working with academic, nonprofit, and community organizations to
              advance artificial intelligence for education, research, and
              public benefit
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {partnerCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover-lift text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <category.icon className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {category.count}
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>

          {/* Featured Partners */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Collaborating Organizations & Communities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 flex items-center justify-center hover-lift"
                >
                  <img
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    className="w-full h-auto max-h-20 object-contain opacity-80 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Partnership Benefits */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">
                {" "}
                Collaborate With Our Community
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We welcome academic institutions, nonprofit organizations, and
                community groups interested in open research, education, and
                responsible AI initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-involved" className="inline-block">
                  <button className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Get Involved
                  </button>
                </Link>
                <Link to="/contact" className="inline-block">
                  <button className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Supporters;
