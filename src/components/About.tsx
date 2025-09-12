import { Lightbulb, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6">
              Where <span className="text-gradient">Tradition</span> Meets Modern Elegance
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              My journey from fashion student to internationally recognized designer
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                What began as childhood fascination with fabrics and form has blossomed into a luxury 
                fashion house that celebrates the modern woman. My designs blend traditional craftsmanship 
                with contemporary silhouettes, creating pieces that are both timeless and distinctly current.
              </p>
              
              <p className="text-lg leading-relaxed">
                Each collection tells a story of empowerment, sophistication, and individuality. 
                I believe fashion should make you feel confident and beautiful while reflecting your 
                unique personality. Every stitch, every cut, every detail is carefully considered.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I am not sketching new designs or selecting the finest fabrics, you will find me 
                traveling the world for inspiration, mentoring young designers, or working closely 
                with clients to create their perfect bespoke pieces.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="card-elevated">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Creative Vision</h3>
                    <p className="text-muted-foreground">
                      Every design begins with a vision of empowering women through 
                      fashion that celebrates their strength and femininity.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card-elevated">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
                    <p className="text-muted-foreground">
                      Only the finest materials and traditional techniques ensure 
                      each piece meets the highest standards of luxury fashion.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card-elevated">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
                    <p className="text-muted-foreground">
                      From initial consultation to final fitting, every client receives 
                      personalized attention and bespoke service experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;