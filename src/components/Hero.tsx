import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-section overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary))_1px,transparent_0)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Multi-Disciplinary Professional
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                {" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Dr Nay Win Aung
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                CTO, Data Analyst, Research Consultant & Frontend Developer
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Solving complex problems through data insights, strategic research, 
              innovative development, and technical leadership at NWA IT & Education Services Co., Ltd.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Core Expertise Areas</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="professional" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="ghost" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="relative overflow-hidden rounded-2xl shadow-glow">
                <img
                  src={heroImage}
                  alt="Professional Portrait"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary-glow/10 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
