import { Brain, Code, TrendingUp, Palette, Database, Rocket } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Automation Tools",
      description: "Leveraging cutting-edge AI for marketing automation and business intelligence",
      skills: [
        "ChatGPT & Claude Integration",
        "Marketing Automation (HubSpot, Zapier)",
        "Predictive Analytics",
        "AI Content Generation",
        "Machine Learning Models",
        "Conversion Optimization AI"
      ]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, performant web applications with modern technologies",
      skills: [
        "React & TypeScript",
        "Next.js & Tailwind CSS",
        "Node.js & Express",
        "REST APIs & GraphQL",
        "Database Design",
        "Performance Optimization"
      ]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven strategies that convert prospects into loyal customers",
      skills: [
        "SEO & Content Strategy",
        "PPC Campaign Management",
        "Social Media Marketing",
        "Email Marketing Automation",
        "Conversion Rate Optimization",
        "Analytics & Reporting"
      ]
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Creating intuitive user experiences that drive engagement and conversions",
      skills: [
        "UI/UX Design Principles",
        "Figma & Design Systems",
        "User Journey Mapping",
        "A/B Testing Design",
        "Brand Identity",
        "Responsive Design"
      ]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Transforming raw data into actionable insights for strategic decision-making",
      skills: [
        "Google Analytics 4",
        "Google Tag Manager",
        "Data Visualization",
        "Customer Segmentation",
        "Attribution Modeling",
        "Performance Dashboards"
      ]
    },
    {
      icon: Rocket,
      title: "Business Strategy",
      description: "Aligning technology solutions with business objectives for sustainable growth",
      skills: [
        "Growth Hacking",
        "Product-Market Fit",
        "Go-to-Market Strategy",
        "Competitive Analysis",
        "ROI Optimization",
        "Stakeholder Management"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Technical Expertise Meets <span className="text-gradient">Creative Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set that spans the entire digital ecosystem, from AI-powered 
            automation to human-centered design principles.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="card-interactive">
                <div className="mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Certifications & Tools */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Trusted by Industry-Leading Tools</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="font-mono text-lg font-semibold">Google Analytics</div>
            <div className="font-mono text-lg font-semibold">HubSpot</div>
            <div className="font-mono text-lg font-semibold">OpenAI</div>
            <div className="font-mono text-lg font-semibold">Vercel</div>
            <div className="font-mono text-lg font-semibold">Figma</div>
            <div className="font-mono text-lg font-semibold">Zapier</div>
            <div className="font-mono text-lg font-semibold">Shopify</div>
            <div className="font-mono text-lg font-semibold">WordPress</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;