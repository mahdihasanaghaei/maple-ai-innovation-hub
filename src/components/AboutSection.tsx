import { Shield, Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Government Badge */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center hover-lift">
            <Shield className="mx-auto mb-4 text-primary" size={48} />
            <h3 className="text-2xl font-semibold mb-3">
              An Independent Nonprofit Organization Based in Canada
            </h3>
            <p className="text-muted-foreground">
              The Maple AI Innovation Foundation is a registered nonprofit
              organization based in Canada, committed to advancing ethical AI
              research, education, and international academic collaboration.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-card border border-border rounded-2xl p-8 hover-lift group">
            <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To advance artificial intelligence through collaborative research,
              education, and global knowledge sharing that benefits the public
              and academic community.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover-lift group">
            <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Eye className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              A world where artificial intelligence supports sustainable
              progress, empowers communities globally, and expands access to
              knowledge and education.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover-lift group">
            <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              Scientific integrity, ethical AI development, global
              collaboration, transparency, inclusivity, and commitment to
              advancing AI in the public interest.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-12 hover-lift">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Maple AI Innovation Foundation was established to support
                open research, education, and responsible innovation in the
                field of artificial intelligence. Our work focuses on bridging
                academic research with real-world societal needs through
                collaborative and nonprofit initiatives.
              </p>

              <p>
                The foundation supports a growing international community of
                researchers, educators, students, and volunteers who contribute
                to open research projects, educational programs, and
                public-interest AI initiatives.
              </p>

              <p>
                Through collaboration with academic institutions, nonprofit
                organizations, and research communities, we aim to promote
                responsible AI development and expand access to artificial
                intelligence knowledge worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
