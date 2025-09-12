import { Scissors, Palette, Crown, Sparkles, Heart, Star } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      icon: Crown,
      title: "Evening Couture",
      description: "Exquisite evening gowns and formal wear for life's most important moments",
      items: [
        "Red Carpet Gowns",
        "Cocktail Dresses", 
        "Formal Evening Wear",
        "Award Show Pieces",
        "Gala Collection",
        "Black Tie Attire"
      ]
    },
    {
      icon: Sparkles,
      title: "Contemporary Ready-to-Wear",
      description: "Modern, sophisticated pieces perfect for the professional woman",
      items: [
        "Business Suits",
        "Day Dresses",
        "Blouses & Tops",
        "Tailored Trousers",
        "Luxury Knitwear",
        "Statement Jackets"
      ]
    },
    {
      icon: Heart,
      title: "Bridal Collection",
      description: "Romantic, timeless designs for the most special day of your life",
      items: [
        "Wedding Gowns",
        "Bridal Separates",
        "Reception Dresses",
        "Bridal Accessories",
        "Mother of the Bride",
        "Bridesmaid Options"
      ]
    },
    {
      icon: Palette,
      title: "Casual Luxury",
      description: "Elevated everyday wear that brings sophistication to comfort",
      items: [
        "Designer Casual Wear",
        "Weekend Collections",
        "Luxury Loungewear",
        "Travel Essentials",
        "Resort Wear",
        "Seasonal Capsules"
      ]
    },
    {
      icon: Scissors,
      title: "Bespoke Services",
      description: "Completely custom designs tailored to your unique style and measurements",
      items: [
        "Personal Consultations",
        "Custom Pattern Making",
        "Fabric Selection",
        "Multiple Fittings",
        "Style Guidance",
        "Wardrobe Planning"
      ]
    },
    {
      icon: Star,
      title: "Accessories & Details",
      description: "Finishing touches that complete your look with signature elegance",
      items: [
        "Statement Jewelry",
        "Luxury Handbags",
        "Designer Scarves",
        "Custom Belts",
        "Evening Clutches",
        "Seasonal Accessories"
      ]
    }
  ];

  return (
    <section id="collections" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Curated Collections for <span className="text-gradient">Every Occasion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From red carpet glamour to everyday elegance, each collection is designed 
            to celebrate the multifaceted woman of today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => {
            const IconComponent = collection.icon;
            return (
              <div key={index} className="card-interactive">
                <div className="mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{collection.title}</h3>
                  <p className="text-muted-foreground mb-4">{collection.description}</p>
                </div>
                
                <div className="space-y-2">
                  {collection.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Featured Brands & Materials */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Premium Materials & Partners</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="font-mono text-lg font-semibold">Italian Silk</div>
            <div className="font-mono text-lg font-semibold">French Lace</div>
            <div className="font-mono text-lg font-semibold">Cashmere</div>
            <div className="font-mono text-lg font-semibold">Swarovski</div>
            <div className="font-mono text-lg font-semibold">Luxury Cotton</div>
            <div className="font-mono text-lg font-semibold">Designer Fabrics</div>
            <div className="font-mono text-lg font-semibold">Custom Embroidery</div>
            <div className="font-mono text-lg font-semibold">Hand Beading</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;