import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Wifi, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.jpg";

const Solution = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      metric: "50%",
      description: "Redução de erros nos pedidos",
      icon: CheckCircle
    },
    {
      metric: "30%",
      description: "Aumento na eficiência operacional",
      icon: CheckCircle
    },
    {
      metric: "40%",
      description: "Melhoria na satisfação do cliente",
      icon: CheckCircle
    },
    {
      metric: "25%",
      description: "Aumento no ticket médio",
      icon: CheckCircle
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Cliente",
      description: "Acessa o menu e escolhe suas preferências",
      icon: Smartphone
    },
    {
      step: "2",
      title: "MIA Sugere",
      description: "Inteligência artificial faz sugestões personalizadas",
      icon: Wifi
    },
    {
      step: "3",
      title: "Pedido Pronto",
      description: "Pedido otimizado e preparado com eficiência",
      icon: CheckCircle
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6"
          >
            A <span className="text-secondary">Solução</span> que Transforma
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-open-sans text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Um ecossistema integrado que conecta clientes, garçons e cozinha em perfeita harmonia
          </motion.p>
        </motion.div>

        {/* Interactive Process Diagram */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex flex-col lg:flex-row items-center">
                {/* Step */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left"
                >
                  {/* Icon Circle */}
                  <div className="relative w-24 h-24 bg-white rounded-full shadow-lg border-4 border-secondary/20 flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <step.icon className="w-10 h-10 text-secondary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <span className="font-montserrat font-bold text-white text-sm">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-montserrat font-bold text-xl text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-open-sans text-muted-foreground max-w-xs">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="hidden lg:block mx-8"
                  >
                    <ArrowRight className="w-8 h-8 text-secondary" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Mockup */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-montserrat font-bold text-3xl text-primary mb-8">
              Resultados <span className="text-secondary">Comprovados</span>
            </h3>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-xl shadow-lg border border-blue-100"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-montserrat font-bold text-3xl text-secondary mb-2">
                    {benefit.metric}
                  </h4>
                  <p className="font-open-sans text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* App Mockup with Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Main Phone */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="relative z-10"
              >
                <img 
                  src={appMockup} 
                  alt="MIA App in Action" 
                  className="w-full h-auto rounded-3xl shadow-2xl border-8 border-white"
                />
              </motion.div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-3xl blur-3xl scale-110 -z-10"></div>

              {/* Feature Callouts */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute top-16 -left-8 bg-white rounded-lg px-3 py-2 shadow-lg border border-green-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-open-sans text-xs font-semibold text-green-700">Pedido Enviado</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
                className="absolute bottom-16 -right-8 bg-white rounded-lg px-3 py-2 shadow-lg border border-blue-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="font-open-sans text-xs font-semibold text-blue-700">Tempo: 2min</span>
                </div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-8 -right-8 w-12 h-12 bg-secondary/20 rounded-full blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-sm"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;