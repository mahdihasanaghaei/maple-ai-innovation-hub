import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">M</span>
              </div>
              <div>
                <span className="text-lg font-bold text-gradient">
                  Maple AI
                </span>
                <p className="text-xs text-muted-foreground">
                  Innovation Foundation
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Advancing artificial intelligence through open research,
              education, and global collaboration in the public interest.
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                to="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/supporters"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Community
                </Link>
              </li>
              <li>
                <Link
                  to="/board"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Scientific Board
                </Link>
              </li>
            </ul>
          </div>

          {/* Opportunities */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Opportunities</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/get-involved"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  to="/licensing"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Licensing
                </Link>
              </li>
              <li>
                <Link
                  to="/awards"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Canada (Independent nonprofit organization)</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="flex-shrink-0" />
                <a
                  href="mailto:info@maple-ai.ca"
                  className="hover:text-primary transition-colors"
                >
                  info@maple-ai.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Maple AI Innovation Foundation. All
            rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            An independent, nonprofit, research-focused organization based in
            Canada
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
