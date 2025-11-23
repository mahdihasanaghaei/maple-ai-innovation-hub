import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2, University, Rocket, Globe } from "lucide-react";

const Partnerships = () => {
  const partnerCategories = [
    {
      icon: University,
      title: "Academic Institutions",
      count: "15+",
      description: "Leading universities and research centers worldwide",
    },
    {
      icon: Building2,
      title: "Technology Companies",
      count: "20+",
      description: "Industry leaders in AI and innovation",
    },
    {
      icon: Rocket,
      title: "Startups",
      count: "30+",
      description: "Emerging AI ventures in our ecosystem",
    },
    {
      icon: Globe,
      title: "International Organizations",
      count: "10+",
      description: "Global innovation networks and federations",
    },
  ];

  const partnerLogos = [
    "17.png",
    "18.png",
    "3.png",
    "4.png",
    "1.jpg",
    "2.jpg",
    "5.png",
    "6.png",
    "7.png",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.png",
    "13.png",
    "14.png",
    "15.png",
    "16.png",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Partnerships</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Collaborating with world-class institutions and organizations to
              advance AI innovation
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
              Featured Global Partners
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
              <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our global network of innovators, researchers, and
                institutions shaping the future of AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/collaborate" className="inline-block">
                  <button className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Apply for Partnership
                  </button>
                </a>
                <a href="/contact" className="inline-block">
                  <button className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
                    Contact Our Team
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partnerships;
