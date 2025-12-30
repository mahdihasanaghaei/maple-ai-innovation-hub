import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Licensing = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_LICENSE;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (publicKey) emailjs.init(publicKey);
  }, [publicKey]);

  const [organization, setOrganization] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [motivation, setMotivation] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      from_name: name,
      from_email: email,
      organization,
      position,
      phone,
      country,
      website,
      to_email: "info@maple-ai.ca",
      description,
      motivation,
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
          title: "Submission Received.",
          description:
            "Your information has been sent to info@maple-ai.ca and will be reviewed for nonprofit alignment.",
        });
        // ریست فرم

        setName("");
        setEmail("");
        setCountry("");
        setPosition("");
        setWebsite("");
        setMotivation("");
        setDescription("");
        setOrganization("");
        setPhone("");
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send application. Please try again later.",
        });
      });
  };

  const benefits = [
    "Community acknowledgment for alignment with Maple AI’s nonprofit mission",
    "Participation in nonprofit research and educational initiatives",
    "Connection with a global network of researchers, educators, and volunteers",
    "Inclusion in nonprofit and academic community activities",
    "Invitations to public, nonprofit events and educational programs",
    "Access to shared, open educational and research resources",
  ];

  const steps = [
    {
      title: "Submit Information",
      description:
        "Share information about your organization and its alignment with nonprofit research or educational goals",
    },
    {
      title: "Alignment Review",
      description:
        "Our team reviews submissions to ensure alignment with Maple AI’s nonprofit mission",
    },
    {
      title: "Community Acknowledgment",
      description:
        "Aligned organizations may be acknowledged within relevant nonprofit initiatives",
    },
    {
      title: "Ongoing Participation",
      description:
        "Participate in educational, research, and community-driven activities when applicable",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Maple AI <span className="text-gradient">Licensing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn about Maple AI’s community acknowledgment framework for
              aligned research and educational initiatives
            </p>
          </div>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="text-primary" size={32} />
                  <h2 className="text-3xl font-bold">
                    What Participation Includes
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle
                        className="text-primary flex-shrink-0 mt-1"
                        size={20}
                      />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Participation Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card border border-border rounded-2xl p-6 hover-lift h-full">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Application Form */}
          <section className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="text-primary" size={32} />
                <h2 className="text-3xl font-bold">
                  Nonprofit Participation Form
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="orgName">Organization Name</Label>
                  <Input
                    id="orgName"
                    required
                    className="mt-2"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName">Contact Person Name</Label>
                    <Input
                      id="contactName"
                      required
                      className="mt-2"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Position</Label>
                    <Input
                      id="position"
                      required
                      className="mt-2"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="mt-2"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
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
                  <Label htmlFor="website">Organization Website</Label>
                  <Input
                    id="website"
                    type="url"
                    className="mt-2"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="description">Organization Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="mt-2"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="reason">
                    How does your organization align with Maple AI’s nonprofit
                    research or educational mission?
                  </Label>
                  <Textarea
                    id="reason"
                    required
                    className="mt-2"
                    rows={4}
                    value={motivation}
                    onChange={(e) => setMotivation(e.target.value)}
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
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Licensing;
