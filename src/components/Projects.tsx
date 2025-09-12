import { ExternalLink, Github, TrendingUp, Users, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      description: "Built a complete e-commerce solution with AI-driven product recommendations, automated customer segmentation, and predictive analytics. Increased client's conversion rate by 187% and average order value by 34%.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "OpenAI API", "Stripe", "MongoDB"],
      results: [
        { icon: TrendingUp, label: "187% Conversion Increase", value: "187%" },
        { icon: Users, label: "10K+ Active Users", value: "10,000+" },
        { icon: Zap, label: "2.3s Load Time", value: "2.3s" }
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI & E-commerce"
    },
    {
      title: "Marketing Automation Dashboard",
      description: "Developed a comprehensive marketing dashboard that integrates with multiple platforms (Google Ads, Facebook, HubSpot) to provide real-time campaign insights and automated reporting. Reduced manual reporting time by 80%.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "D3.js", "Google APIs", "Tailwind"],
      results: [
        { icon: Brain, label: "80% Time Saved", value: "80%" },
        { icon: TrendingUp, label: "25+ Integrations", value: "25+" },
        { icon: Users, label: "50+ Campaigns Tracked", value: "50+" }
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Marketing Tech"
    },
    {
      title: "SaaS Landing Page Optimizer",
      description: "Created a conversion-focused landing page system with A/B testing capabilities, dynamic content personalization, and advanced analytics. Helped 15+ SaaS startups improve their sign-up rates by an average of 145%.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Framer Motion", "Supabase", "Vercel", "Google Optimize"],
      results: [
        { icon: TrendingUp, label: "145% Sign-up Increase", value: "145%" },
        { icon: Users, label: "15+ Startups Helped", value: "15+" },
        { icon: Zap, label: "95 PageSpeed Score", value: "95" }
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "SaaS & Growth"
    },
    {
      title: "AI Content Strategy Platform",
      description: "Built an AI-powered content strategy platform that analyzes competitor content, identifies trending topics, and generates SEO-optimized content briefs. Currently used by 100+ content creators and marketing teams.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "FastAPI", "React", "OpenAI", "Pinecone", "AWS"],
      results: [
        { icon: Brain, label: "AI Content Analysis", value: "100%" },
        { icon: Users, label: "100+ Active Users", value: "100+" },
        { icon: TrendingUp, label: "300% Content ROI", value: "300%" }
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI & Content"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Projects That Drive <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each project represents a unique challenge solved through innovative technology 
            and strategic thinking. Here's how I've helped businesses transform their digital presence.
          </p>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="card-elevated h-full">
                  <div className="aspect-video bg-gradient-primary rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-white text-lg font-semibold">Project Preview</div>
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                  {project.category}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">{project.title}</h3>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.results.map((result, resultIndex) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={resultIndex} className="text-center p-4 bg-card rounded-xl border">
                        <IconComponent className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="font-bold text-lg">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold mb-3">Technologies Used:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-muted text-sm rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button className="btn-hero group">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    View Live Project
                  </Button>
                  <Button variant="outline" className="btn-secondary">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more projects or discussing a collaboration?
          </p>
          <Button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-hero"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;