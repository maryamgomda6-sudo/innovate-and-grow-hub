import { ExternalLink, Github, TrendingUp, Users, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const collections = [
    {
      title: "Midnight Elegance Collection",
      description: "A sophisticated evening wear collection featuring flowing silhouettes, luxurious fabrics, and intricate beadwork. Perfect for galas, premieres, and special occasions where making an unforgettable impression is essential.",
      image: "/api/placeholder/600/400",
      materials: ["Italian Silk", "French Lace", "Swarovski Crystals", "Hand Beading", "Couture Satin"],
      highlights: [
        { icon: TrendingUp, label: "Featured in Vogue", value: "Cover Story" },
        { icon: Users, label: "Celebrity Clients", value: "25+" },
        { icon: Zap, label: "Fashion Week Shows", value: "5" }
      ],
      shopUrl: "#",
      lookbookUrl: "#",
      category: "Evening Couture"
    },
    {
      title: "Power Woman Professional",
      description: "Contemporary workwear designed for the ambitious woman. Sharp tailoring meets feminine details in pieces that command respect while celebrating your unique style and confidence in any boardroom.",
      image: "/api/placeholder/600/400",
      materials: ["Luxury Wool", "Stretch Cotton", "Italian Leather", "Mother of Pearl", "Premium Silk"],
      highlights: [
        { icon: Brain, label: "Fortune 500 Clients", value: "100%" },
        { icon: TrendingUp, label: "Repeat Customers", value: "85%" },
        { icon: Users, label: "Corporate Orders", value: "200+" }
      ],
      shopUrl: "#",
      lookbookUrl: "#",
      category: "Professional Wear"
    },
    {
      title: "Eternal Romance Bridal",
      description: "Timeless bridal designs that celebrate love in its purest form. Each gown is meticulously crafted with the finest materials and attention to detail that ensures you feel absolutely radiant on your special day.",
      image: "/api/placeholder/600/400",
      materials: ["French Tulle", "Venetian Lace", "Silk Mikado", "Pearl Details", "Crystal Embellishments"],
      highlights: [
        { icon: TrendingUp, label: "Dream Weddings", value: "500+" },
        { icon: Users, label: "Bridal Reviews", value: "5 Stars" },
        { icon: Zap, label: "Custom Designs", value: "100%" }
      ],
      shopUrl: "#",
      lookbookUrl: "#",
      category: "Bridal Collection"
    },
    {
      title: "Weekend Luxe Casual",
      description: "Elevated casual wear that brings sophistication to your downtime. Comfort meets couture in pieces designed for the woman who refuses to compromise on style, even during her most relaxed moments.",
      image: "/api/placeholder/600/400",
      materials: ["Cashmere Blends", "Organic Cotton", "Merino Wool", "Sustainable Fabrics", "Luxury Knits"],
      highlights: [
        { icon: Brain, label: "Sustainable Materials", value: "80%" },
        { icon: Users, label: "Lifestyle Features", value: "50+" },
        { icon: TrendingUp, label: "Customer Satisfaction", value: "98%" }
      ],
      shopUrl: "#",
      lookbookUrl: "#",
      category: "Luxury Casual"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Featured <span className="text-gradient">Fashion Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each collection represents a unique vision of modern femininity, combining 
            timeless elegance with contemporary innovation and impeccable craftsmanship.
          </p>
        </div>
        
        <div className="space-y-16">
          {collections.map((collection, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="card-elevated h-full">
                  <div className="aspect-video bg-gradient-primary rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-white text-lg font-semibold">Collection Preview</div>
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                  {collection.category}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">{collection.title}</h3>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {collection.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {collection.highlights.map((highlight, highlightIndex) => {
                    const IconComponent = highlight.icon;
                    return (
                      <div key={highlightIndex} className="text-center p-4 bg-card rounded-xl border">
                        <IconComponent className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="font-bold text-lg">{highlight.value}</div>
                        <div className="text-xs text-muted-foreground">{highlight.label}</div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold mb-3">Premium Materials:</div>
                  <div className="flex flex-wrap gap-2">
                    {collection.materials.map((material, materialIndex) => (
                      <span key={materialIndex} className="px-3 py-1 bg-muted text-sm rounded-full font-medium">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button className="btn-hero group">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Shop Collection
                  </Button>
                  <Button variant="outline" className="btn-secondary">
                    <Github className="h-4 w-4 mr-2" />
                    View Lookbook
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in a custom piece or scheduling a consultation?
          </p>
          <Button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-hero"
          >
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;