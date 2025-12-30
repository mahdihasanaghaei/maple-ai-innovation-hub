import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Maple AI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              An independent nonprofit organization advancing artificial
              intelligence through open research, education, and global
              collaboration
            </p>
          </div>

          {/* Government Badge */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center">
              <Shield className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-2xl font-semibold mb-3">
                Independent Nonprofit Organization
              </h3>
              <p className="text-muted-foreground">
                Maple AI is an independent, nonprofit, research-focused
                foundation based in Canada, committed to ethical AI development,
                transparency, and public benefit.
              </p>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-card border border-border rounded-2xl p-8 hover-lift">
              <Target className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To advance artificial intelligence through global collaboration,
                scientific research, and innovation, connecting brilliant minds
                across continents to solve humanity's greatest challenges.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover-lift">
              <Eye className="text-secondary mb-4" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where AI innovation drives sustainable progress,
                empowers communities globally, and creates opportunities for
                researchers, educators, students, and communities worldwide.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover-lift">
              <Heart className="text-accent mb-4" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Scientific excellence, ethical innovation, global collaboration,
                transparency, and commitment to advancing AI for the benefit of
                all humanity.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Maple AI Innovation Foundation was established to advance
                  artificial intelligence through open research, education, and
                  international collaboration. Our work focuses on creating
                  publicly accessible knowledge and fostering inclusive
                  participation in AI research.
                </p>

                <p>
                  Through community-driven initiatives and educational programs,
                  we support researchers, students, and volunteers from diverse
                  backgrounds to collaborate on ethically aligned AI projects
                  with real-world impact.
                </p>

                <p>
                  Today, Maple AI continues to grow as a global, nonprofit
                  research community, working with academic institutions and
                  civil society organizations to promote responsible and
                  transparent AI development for the public good.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
