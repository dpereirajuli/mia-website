import { motion } from "framer-motion";
import { Brain, Smartphone, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.jpg";

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Brain,
      title: "Inteligência",
      description: "IA avançada para otimizar operações"
    },
    {
      icon: Smartphone,
      title: "Mobilidade",
      description: "App intuitivo para clientes e equipe"
    },
    {
      icon: Users,
      title: "Atendimento",
      description: "Experiência personalizada para cada cliente"
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Aumente eficiência e lucros"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6"
            >
              <span className="text-secondary">M</span>estre em{" "}
              <span className="text-secondary">I</span>nteligência de{" "}
              <span className="text-secondary">A</span>tendimento
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-open-sans text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              A MIA é uma plataforma revolucionária que transforma a experiência gastronômica através da tecnologia. Nossa solução integra inteligência artificial, mobilidade e atendimento personalizado para criar o sistema nervoso perfeito do seu restaurante.
            </motion.p>

            {/* Features Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-primary mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-open-sans text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <Button 
                onClick={() => scrollToSection("solution")}
                className="btn-secondary"
              >
                Saiba Como Funciona
              </Button>
            </motion.div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Phone Frame Effect */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative"
              >
                <img 
                  src={appMockup} 
                  alt="MIA App Interface" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-secondary/20 to-primary/20 blur-xl -z-10 scale-110"></div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;