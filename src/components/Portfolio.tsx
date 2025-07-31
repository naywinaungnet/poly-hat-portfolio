import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  BarChart3, 
  Search, 
  Code, 
  Building2,
  Filter
} from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects", icon: Filter },
    { id: "data", label: "Data Analytics", icon: BarChart3 },
    { id: "research", label: "Research", icon: Search },
    { id: "frontend", label: "Development", icon: Code },
    { id: "nwa", label: "NWA Projects", icon: Building2 }
  ];

  const projects = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      category: "data",
      description: "Interactive Power BI dashboard analyzing sales trends, customer behavior, and revenue optimization for a retail client.",
      tools: ["Power BI", "SQL", "Python", "Excel"],
      image: "/api/placeholder/400/250",
      demoLink: "#",
      codeLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Educational Technology Adoption Study",
      category: "research", 
      description: "Comprehensive research study examining the impact of digital tools on learning outcomes across 50+ educational institutions.",
      tools: ["SPSS", "Survey Design", "Academic Writing", "Statistical Analysis"],
      image: "/api/placeholder/400/250",
      reportLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "frontend",
      description: "Modern, responsive e-commerce platform built with React and TypeScript, featuring real-time inventory management.",
      tools: ["React", "TypeScript", "Tailwind", "Node.js"],
      image: "/api/placeholder/400/250",
      demoLink: "#",
      codeLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "NWA Learning Management System",
      category: "nwa",
      description: "Custom LMS platform designed for educational institutions, supporting online courses, assessments, and progress tracking.",
      tools: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "/api/placeholder/400/250",
      demoLink: "#",
      featured: true
    },
    {
      id: 5,
      title: "Market Research Analysis",
      category: "research",
      description: "Mixed-method research analyzing consumer behavior trends in Southeast Asian markets for multinational corporation.",
      tools: ["R", "NVivo", "Survey Analysis", "Focus Groups"],
      image: "/api/placeholder/400/250",
      reportLink: "#",
      featured: false
    },
    {
      id: 6,
      title: "Real-time Analytics Dashboard",
      category: "data",
      description: "Live business intelligence dashboard tracking KPIs and performance metrics with automated reporting capabilities.",
      tools: ["React", "D3.js", "Python", "PostgreSQL"],
      image: "/api/placeholder/400/250",
      demoLink: "#",
      codeLink: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio & Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of successful projects across data analysis, research consulting, 
            frontend development, and strategic initiatives
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant={activeFilter === id ? "default" : "ghost"}
              onClick={() => setActiveFilter(id)}
              className={`flex items-center gap-2 ${
                activeFilter === id 
                  ? "bg-gradient-hero text-white shadow-glow" 
                  : "hover:bg-primary/10"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className={`shadow-card hover:shadow-elegant transition-all duration-300 group ${
                project.featured ? "ring-2 ring-primary/20" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 bg-gradient-card flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-3">
                      {project.category === "data" && <BarChart3 className="h-8 w-8 text-white" />}
                      {project.category === "research" && <Search className="h-8 w-8 text-white" />}
                      {project.category === "frontend" && <Code className="h-8 w-8 text-white" />}
                      {project.category === "nwa" && <Building2 className="h-8 w-8 text-white" />}
                    </div>
                    <p className="text-sm text-muted-foreground">Project Preview</p>
                  </div>
                </div>
                {project.featured && (
                  <Badge className="absolute top-3 right-3 bg-gradient-hero border-0">
                    Featured
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-1">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-xs bg-primary/10 text-primary">
                      {tool}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  {project.demoLink && (
                    <Button variant="professional" size="sm" className="flex-1">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                  )}
                  {project.codeLink && (
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.reportLink && (
                    <Button variant="professional" size="sm" className="flex-1">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Report
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;