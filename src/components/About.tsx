import { Lightbulb, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-6">
              Bridging the Gap Between <span className="text-gradient">Innovation</span> and Results
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              My journey from marketing enthusiast to AI-powered business strategist
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                What started as a fascination with consumer psychology evolved into a passion for 
                leveraging cutting-edge technology to solve real business challenges. Today, I specialize 
                in creating AI-powered marketing solutions that don't just follow trends—they set them.
              </p>
              
              <p className="text-lg leading-relaxed">
                My unique blend of creative marketing insight and technical expertise allows me to 
                build systems that scale, strategies that convert, and partnerships that last. 
                I believe the best solutions emerge when human creativity meets artificial intelligence.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I'm not optimizing conversion funnels or training AI models, you'll find me 
                exploring the latest web technologies, mentoring aspiring marketers, or collaborating 
                with startup founders to bring their visions to life.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="card-elevated">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                    <p className="text-muted-foreground">
                      Always exploring emerging technologies to create competitive advantages 
                      for my clients and partners.
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
                    <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                    <p className="text-muted-foreground">
                      Every strategy is built with clear KPIs and measurable outcomes. 
                      Success is quantified, not assumed.
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
                    <h3 className="text-xl font-semibold mb-2">Rapid Execution</h3>
                    <p className="text-muted-foreground">
                      Fast-moving markets require agile solutions. I deliver quality work 
                      at startup speed without compromising excellence.
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