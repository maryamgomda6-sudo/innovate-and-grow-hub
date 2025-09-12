import { Mail, Phone, MapPin, Download, Linkedin, Github, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Ready to <span className="text-gradient">Transform Your Business</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's discuss how AI-powered solutions and strategic marketing can accelerate your growth. 
            I'm always excited to collaborate on innovative projects.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card-elevated">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company/Organization
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full"
                  placeholder="Tell me about your project, goals, and how I can help..."
                />
              </div>
              
              <Button type="submit" className="btn-hero w-full">
                <MessageCircle className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-elevated">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:hello@yourname.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@yourname.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">San Francisco, CA</div>
                    <div className="text-sm text-muted-foreground">Open to remote collaboration worldwide</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="card-elevated">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="flex items-center space-x-3 p-4 border rounded-xl hover:bg-muted/50 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-4 border rounded-xl hover:bg-muted/50 transition-colors">
                  <Github className="h-5 w-5 text-primary" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-4 border rounded-xl hover:bg-muted/50 transition-colors">
                  <Twitter className="h-5 w-5 text-primary" />
                  <span className="font-medium">Twitter</span>
                </a>
                <Button className="btn-ghost flex items-center space-x-3">
                  <Download className="h-4 w-4" />
                  <span>Resume PDF</span>
                </Button>
              </div>
            </div>
            
            {/* Availability */}
            <div className="card-elevated">
              <h3 className="text-xl font-semibold mb-4">Current Availability</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="font-medium text-accent">Available for new projects</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I typically respond to inquiries within 24 hours and can start new projects 
                within 1-2 weeks depending on scope and complexity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;