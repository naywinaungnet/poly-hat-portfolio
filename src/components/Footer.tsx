import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Linkedin, 
  Github, 
  Mail, 
  ArrowUp,
  Building2
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Roles & Services", href: "#roles" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "NWA Company", href: "#nwa-company" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername", 
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:your.email@nwa-services.com",
      color: "hover:text-primary"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-section border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-primary">[Your Name]</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Multi-disciplinary professional specializing in data analysis, research consulting, 
              frontend development, and technical leadership at NWA IT & Education Services Co., Ltd.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-primary/10 rounded-lg transition-all duration-300 hover:bg-primary/20 hover:scale-110 ${color}`}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>your.email@nwa-services.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Bangkok, Thailand</p>
            </div>
            <Button 
              variant="professional" 
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="w-full"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} [Your Name]. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Built with React & TypeScript
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="p-2 h-auto"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;