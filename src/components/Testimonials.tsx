import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Solutions",
      company: "Series A Startup",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Working with this talented professional was a game-changer for our marketing strategy. Their AI-powered automation system increased our lead quality by 200% while reducing our acquisition costs by 40%. The technical expertise combined with marketing acumen is rare to find."
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "GrowthLab Agency", 
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Exceptional work on our client dashboard project. The integration of multiple marketing platforms into one cohesive interface saved our team 15+ hours per week. The attention to detail and user experience design exceeded our expectations completely."
    },
    {
      name: "Emily Watson",
      role: "VP of Marketing",
      company: "CloudScale Enterprise",
      image: "/api/placeholder/80/80", 
      rating: 5,
      text: "The landing page optimization project delivered remarkable results - 180% increase in conversions within 60 days. The combination of technical implementation and marketing psychology insights created a perfect storm for success. Highly recommended for any serious business."
    },
    {
      name: "David Park",
      role: "Product Manager",
      company: "InnovateAI Startup",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Outstanding collaboration on our AI content platform. The architecture decisions and implementation quality were top-notch. What impressed me most was the ability to understand both the technical requirements and business objectives seamlessly."
    },
    {
      name: "Lisa Thompson",
      role: "Head of Digital",
      company: "BrandForward Agency",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Delivered a comprehensive marketing automation solution that transformed how we handle client campaigns. The ROI tracking and reporting features have become essential tools for our agency. Professional, reliable, and incredibly skilled."
    },
    {
      name: "Alex Kumar",
      role: "Co-founder",
      company: "DataDriven SaaS",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The growth hacking strategies and technical implementation helped us achieve product-market fit faster than we ever imagined. The data-driven approach to optimization and the custom analytics dashboard became our competitive advantage."
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what clients and collaborators 
            say about working with me on game-changing projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-interactive">
              <div className="mb-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Social Proof Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150%</div>
              <div className="text-sm text-muted-foreground">Avg. ROI Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">48hrs</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Long-term Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;