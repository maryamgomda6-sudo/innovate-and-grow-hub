import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Isabella Rodriguez",
      role: "Celebrity Stylist",
      company: "A-List Entertainment",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Maryam's designs are absolutely breathtaking. Her evening gowns have graced red carpets and award shows, making my clients feel like absolute royalty. The craftsmanship and attention to detail are unmatched in the industry."
    },
    {
      name: "Catherine Wells",
      role: "Fortune 500 Executive",
      company: "Global Tech Corporation", 
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "My custom business wardrobe from Maryam Ibrahim has transformed how I present myself in the boardroom. The pieces are powerful yet feminine, giving me confidence in every important meeting. Worth every penny."
    },
    {
      name: "Sophia Martinez",
      role: "Bride",
      company: "Dream Wedding Client",
      image: "/api/placeholder/80/80", 
      rating: 5,
      text: "My wedding dress was a masterpiece. Maryam listened to every detail of my vision and created something even more beautiful than I imagined. I felt like a princess on the most important day of my life."
    },
    {
      name: "Olivia Chen",
      role: "Fashion Editor",
      company: "Vogue Magazine",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Maryam Ibrahim is one of the most talented designers I've worked with. Her collections consistently showcase innovation while maintaining timeless elegance. A true artist who understands the modern woman."
    },
    {
      name: "Amanda Thompson",
      role: "Business Owner",
      company: "Luxury Boutique",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The ready-to-wear collection from Maryam is flying off our shelves. Our customers love the quality, fit, and sophisticated style. It's luxury fashion that women actually want to wear every day."
    },
    {
      name: "Grace Williams",
      role: "Social Media Influencer",
      company: "Fashion & Lifestyle",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Every piece I've worn from Maryam Ibrahim gets incredible engagement from my followers. The designs photograph beautifully and make me feel confident and elegant. My go-to designer for special events."
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            What Clients Say About <span className="text-gradient">Maryam Ibrahim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From red carpet moments to intimate celebrations, see how Maryam Ibrahim designs 
            have made women feel confident, beautiful, and authentically themselves.
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
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Custom Pieces</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24hrs</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;