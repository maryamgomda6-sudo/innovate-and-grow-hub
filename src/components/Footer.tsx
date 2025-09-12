import { Heart, Mail, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", href: "about" },
    { label: "Collections", href: "collections" },
    { label: "Featured Work", href: "projects" },
    { label: "Testimonials", href: "testimonials" },
    { label: "Contact", href: "contact" }
  ];

  const socialLinks = [
    { icon: Mail, href: "mailto:hello@maryamibrahim.com", label: "Email" },
    { icon: Linkedin, href: "#", label: "Instagram" },    
    { icon: Github, href: "#", label: "Pinterest" },
    { icon: Twitter, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="font-bold text-xl text-gradient mb-4">
                Maryam Ibrahim Fashion House
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Creating timeless elegance through contemporary luxury fashion. 
                Every piece is crafted with passion, precision, and an unwavering commitment to quality.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Evening Couture</li>
                <li>Bridal Collections</li>
                <li>Professional Wardrobe</li>
                <li>Bespoke Design</li>
                <li>Personal Styling</li>
                <li>Alterations & Fittings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Maryam Ibrahim Fashion House. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Crafted with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for discerning women worldwide</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;