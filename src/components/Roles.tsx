import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Search, 
  Code, 
  Users, 
  ExternalLink,
  TrendingUp,
  FileText,
  Laptop,
  Shield
} from "lucide-react";
import dataAnalysisImage from "@/assets/data-analysis.jpg";
import researchImage from "@/assets/research-consulting.jpg";
import frontendImage from "@/assets/frontend-dev.jpg";
import ctoImage from "@/assets/cto-leadership.jpg";

const Roles = () => {
  const roles = [
    {
      id: "data-analyst",
      title: "Data Analyst",
      icon: BarChart3,
      image: dataAnalysisImage,
      description: "Transforming raw data into actionable insights through advanced analytics and visualization",
      tools: ["Python", "SQL", "Power BI", "Excel", "Tableau", "Pandas", "NumPy"],
      capabilities: [
        "Descriptive & Predictive Analytics",
        "Data Visualization & Dashboards", 
        "Statistical Modeling",
        "Business Intelligence",
        "Performance Metrics & KPIs"
      ],
      achievements: "Led 20+ data projects resulting in 15% efficiency improvements"
    },
    {
      id: "research-consultant",
      title: "Research Consultant", 
      icon: Search,
      image: researchImage,
      description: "Providing evidence-based research solutions across academic, industry, and educational sectors",
      tools: ["SPSS", "R", "NVivo", "Qualtrics", "Atlas.ti", "Survey Design"],
      capabilities: [
        "Qualitative & Quantitative Research",
        "Mixed-Method Approaches",
        "Academic Writing & Publication",
        "Grant Proposal Development",
        "Policy Analysis & Recommendations"
      ],
      achievements: "Completed 50+ research projects for universities and corporations"
    },
    {
      id: "frontend-developer",
      title: "Frontend Developer",
      icon: Code,
      image: frontendImage,
      description: "Creating responsive, user-centric web applications with modern technologies and best practices",
      tools: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind", "Next.js", "Git"],
      capabilities: [
        "Responsive Web Design",
        "UI/UX Implementation",
        "Component Architecture",
        "Performance Optimization",
        "Cross-Browser Compatibility"
      ],
      achievements: "Developed 30+ web applications with 99.5% uptime"
    },
    {
      id: "cto",
      title: "Chief Technical Officer",
      icon: Shield,
      image: ctoImage,
      description: "Leading technical strategy and innovation at NWA IT & Education Services Co., Ltd.",
      tools: ["Strategic Planning", "Team Leadership", "Agile", "Cloud Architecture", "DevOps"],
      capabilities: [
        "Technology Strategy & Vision",
        "Team Leadership & Development", 
        "Project Management",
        "Stakeholder Communication",
        "Innovation & Growth Planning"
      ],
      achievements: "Scaled team from 5 to 25+ professionals, 200% revenue growth"
    }
  ];

  return (
    <section id="roles" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roles & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four distinct yet interconnected roles that enable comprehensive 
            problem-solving and strategic innovation
          </p>
        </div>

        <Tabs defaultValue="data-analyst" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto p-2 bg-card shadow-card mb-8">
            {roles.map(({ id, title, icon: Icon }) => (
              <TabsTrigger 
                key={id} 
                value={id} 
                className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
              >
                <Icon className="h-6 w-6" />
                <span className="text-sm font-medium">{title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {roles.map((role) => (
            <TabsContent key={role.id} value={role.id} className="mt-8">
              <Card className="shadow-elegant bg-gradient-card border-0">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Content */}
                  <CardContent className="p-8 space-y-6">
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-hero rounded-xl">
                          <role.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{role.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {role.description}
                      </p>
                    </CardHeader>

                    {/* Tools */}
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {role.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="bg-primary/10 text-primary">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Capabilities */}
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Capabilities</h4>
                      <ul className="space-y-2">
                        {role.capabilities.map((capability) => (
                          <li key={capability} className="flex items-center gap-2 text-muted-foreground">
                            <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievement */}
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-primary">Key Achievement</span>
                      </div>
                      <p className="text-muted-foreground">{role.achievements}</p>
                    </div>

                    <Button variant="professional" className="w-full sm:w-auto">
                      View Related Projects
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>

                  {/* Image */}
                  <div className="relative p-8">
                    <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-card">
                      <img
                        src={role.image}
                        alt={role.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Roles;