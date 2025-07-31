import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Award, Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  const skills = {
    "Data Analysis": ["Python", "SQL", "Power BI", "Excel", "Tableau", "R"],
    "Research": ["Qualitative Methods", "Quantitative Analysis", "SPSS", "Survey Design", "Academic Writing"],
    "Frontend Development": ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind", "Next.js"],
    "Leadership & Strategy": ["Team Management", "Strategic Planning", "Project Management", "Agile", "Stakeholder Relations"]
  };

  const highlights = [
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering high-quality solutions across multiple disciplines"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building effective teams and fostering innovation"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focus on measurable outcomes and business impact"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A versatile professional combining analytical thinking, research expertise, 
            technical development skills, and strategic leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                As Chief Technical Officer at <strong>NWA IT & Education Services Co., Ltd.</strong>, 
                I bring together a unique combination of analytical prowess, research methodology, 
                frontend development expertise, and strategic leadership.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey spans across data-driven decision making, comprehensive research consulting, 
                modern web development, and technology leadership. This diverse background enables me 
                to approach complex challenges from multiple perspectives and deliver holistic solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about leveraging technology and data to drive meaningful insights, 
                creating intuitive user experiences, and building scalable systems that empower 
                organizations to achieve their goals.
              </p>
            </div>

            <Button variant="professional" size="lg" className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume
            </Button>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 text-primary">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12">What Drives Me</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;