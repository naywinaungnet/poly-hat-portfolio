import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Award,
  ExternalLink,
  Target,
  Zap,
  Globe
} from "lucide-react";

const NWACompany = () => {
  const services = [
    "IT Consulting & Solutions",
    "Educational Technology",
    "Data Analytics Services", 
    "Research & Development",
    "Digital Transformation",
    "Training & Capacity Building"
  ];

  const achievements = [
    { icon: Users, label: "Team Members", value: "25+" },
    { icon: TrendingUp, label: "Revenue Growth", value: "200%" },
    { icon: Award, label: "Successful Projects", value: "150+" },
    { icon: Globe, label: "Countries Served", value: "5+" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Delivering exceptional quality in every project and service"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pioneering cutting-edge solutions and technologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with clients and communities"
    }
  ];

  return (
    <section id="nwa-company" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Building2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">NWA IT & Education Services</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading technological innovation and educational excellence under my technical leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Company Overview */}
          <div className="space-y-6">
            <Card className="shadow-elegant bg-gradient-card border-0 p-8">
              <CardContent className="p-0 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Company Overview</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As Chief Technical Officer, I lead the strategic technology vision and implementation 
                    at NWA IT & Education Services Co., Ltd. Our company specializes in bridging the 
                    gap between technology and education through innovative solutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Under my technical leadership, we've transformed from a small consulting firm 
                    into a comprehensive technology solutions provider, serving clients across 
                    multiple industries and educational institutions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Our Services</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service) => (
                      <Badge key={service} variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map(({ icon: Icon, label, value }) => (
              <Card key={label} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-hero rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* My Leadership Role */}
        <Card className="shadow-elegant bg-gradient-section border-0 mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">My Leadership Impact</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-3 text-primary">Strategic Vision</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Developed comprehensive technology roadmaps that align with business objectives 
                  and market opportunities, driving sustainable growth.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-3 text-primary">Team Development</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Built and mentored a high-performing technical team, fostering innovation 
                  and professional growth across all departments.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-3 text-primary">Digital Transformation</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Led the company's digital transformation initiatives, implementing modern 
                  technologies and optimizing operational efficiency.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Values */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
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

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="mr-4">
            Work with NWA
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="professional" size="lg">
            Visit Company Website
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NWACompany;