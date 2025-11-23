import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Collaborate = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_APPLICATION;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (publicKey) emailjs.init(publicKey);
  }, [publicKey]);

  const [formType, setFormType] = useState<
    "organization" | "board" | "volunteer" | null
  >(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const [expertise, setExpertise] = useState("");
  const [motivation, setMotivation] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      from_name: name,
      from_email: email,
      country,
      role,
      expertise,
      motivation,
      formType,
      to_email: "info@maple-ai.ca",
    };

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Error",
        description: "Email service not configured properly.",
      });
      return;
    }

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(() => {
        toast({
          title: "Application Submitted!",
          description:
            "Your application has been sent to info@maple-ai.ca and our team will review it shortly.",
        });
        // ریست فرم
        setFormType(null);
        setName("");
        setEmail("");
        setCountry("");
        setRole("");
        setExpertise("");
        setMotivation("");
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send application. Please try again later.",
        });
      });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Collaboration <span className="text-gradient">Opportunities</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our global network and contribute to the future of AI
              innovation
            </p>
          </div>

          {!formType ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Organizational Partnership */}
              <div className="bg-card border border-border rounded-2xl p-8 hover-lift flex flex-col">
                <div className="flex flex-col flex-1">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                    <Building className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Organizational Partnership
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    For institutions and companies wishing to collaborate on
                    research, innovation, and AI advancement projects.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <li>• Joint research initiatives</li>
                    <li>• Technology transfer programs</li>
                    <li>• Co-hosted events and conferences</li>
                    <li>• Shared resources and expertise</li>
                  </ul>
                </div>
                <Button
                  className="w-full bg-gradient-primary hover:opacity-90"
                  onClick={() => setFormType("organization")}
                >
                  Apply as Organization
                </Button>
              </div>

              {/* Scientific Board */}
              <div className="bg-card border border-border rounded-2xl p-8 hover-lift flex flex-col">
                <div className="flex flex-col flex-1">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mb-6">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Scientific Board Membership
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    For professionals who wish to join as voluntary advisors,
                    reviewers, or scientific board members.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <li>• Guide strategic initiatives</li>
                    <li>• Review research proposals</li>
                    <li>• Mentor researchers and startups</li>
                    <li>• Shape AI policy and standards</li>
                  </ul>
                </div>
                <Button
                  className="w-full bg-gradient-secondary hover:opacity-90"
                  onClick={() => setFormType("board")}
                >
                  Apply for Board
                </Button>
              </div>

              {/* Volunteering */}
              <div className="bg-card border border-border rounded-2xl p-8 hover-lift flex flex-col">
                <div className="flex flex-col flex-1">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6">
                    <Heart className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Volunteering Program
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    For individuals passionate about AI and global innovation
                    who want to contribute their time and skills.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <li>• Support research projects</li>
                    <li>• Assist in organizing events</li>
                    <li>• Content creation and outreach</li>
                    <li>• Community engagement</li>
                  </ul>
                </div>
                <Button
                  className="w-full bg-gradient-accent hover:opacity-90"
                  onClick={() => setFormType("volunteer")}
                >
                  Apply to Volunteer
                </Button>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <Button
                variant="outline"
                onClick={() => setFormType(null)}
                className="mb-6"
              >
                ← Back to Options
              </Button>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">
                  {formType === "organization" &&
                    "Organizational Partnership Application"}
                  {formType === "board" &&
                    "Scientific Board Membership Application"}
                  {formType === "volunteer" && "Volunteer Program Application"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name / Organization Name</Label>
                    <Input
                      id="name"
                      required
                      className="mt-2"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="mt-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      required
                      className="mt-2"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="role">Role / Position</Label>
                    <Input
                      id="role"
                      required
                      className="mt-2"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="expertise">Area of Expertise</Label>
                    <Input
                      id="expertise"
                      required
                      className="mt-2"
                      value={expertise}
                      onChange={(e) => setExpertise(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="motivation">
                      Why do you want to collaborate with Maple AI?
                    </Label>
                    <Textarea
                      id="motivation"
                      value={motivation}
                      onChange={(e) => setMotivation(e.target.value)}
                      required
                      className="mt-2"
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90"
                  >
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collaborate;
