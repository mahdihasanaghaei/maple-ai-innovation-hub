import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID_2;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACTUS;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_2;

  useEffect(() => {
    if (publicKey) emailjs.init(publicKey);
  }, [publicKey]);

  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      from_name: firstname,
      from_email: email,
      firstname,
      lastname,
      email,
      subject,
      message,
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
          title: "Message Submitted!",
          description:
            "Your message has been sent to info@maple-ai.ca and our team will review it shortly.",
        });
        // ریست فرم

        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
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
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team. We're here to answer your questions
              and support community, research, and educational initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6 hover-lift">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:info@maple-ai.ca"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@maple-ai.ca
                </a>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 hover-lift">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Canada
                  <br />
                  <span className="text-xs">
                    An independent, nonprofit organization based in Canada
                  </span>
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 hover-lift">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Community Inquiries</h3>
                <a href="tel:+14376027860" className="text-muted-foreground">
                  +14376027860
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        required
                        className="mt-2"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        required
                        className="mt-2"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
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
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      required
                      className="mt-2"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      required
                      className="mt-2"
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
