import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { UserCheck, Award, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Board = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Scientific & <span className="text-gradient">Advisory Board</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Distinguished experts guiding our vision and advancing artificial
              intelligence through research, education, and ethical leadership
            </p>
          </div>

          {/* Board Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <p className="text-muted-foreground">Board Members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">20+</div>
              <p className="text-muted-foreground">Countries Represented</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">100+</div>
              <p className="text-muted-foreground">Research Publications</p>
            </div>
          </div>

          {/* Board Members Coming Soon */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Distinguished Members
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-12 text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="text-white" size={40} />
                </div>
                <p className="text-xl text-muted-foreground">
                  The list of members will be announced soon.
                </p>
              </div>
            </div>
          </section>

          {/* Join CTA */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Join Our Scientific Advisory Board
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We welcome experienced AI researchers, educators, and scholars
                interested in contributing to our voluntary scientific advisory
                board. Members support open research, ethical review, and
                educational initiatives for public benefit.
              </p>
              <div className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">
                    Contribute to open and non‑commercial AI research
                    initiatives
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">
                    Engage with a global community of researchers and educators
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-muted-foreground">
                    Provide academic guidance and ethical review for research
                    programs
                  </p>
                </div>
              </div>
              <Link to="/get-involved">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Board;
