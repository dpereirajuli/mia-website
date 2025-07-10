import { motion } from "framer-motion";
import { Clock, AlertTriangle, TrendingDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Problem = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const problems = [
    {
      icon: Clock,
      title: "Filas Intermináveis",
      description: "Clientes esperando 15-30 minutos para fazer pedidos",
      impact: "30% dos clientes desistem"
    },
    {
      icon: AlertTriangle,
      title: "Erros de Pedido",
      description: "Comunicação falha entre garçons e cozinha",
      impact: "50% mais erros nos pedidos"
    },
    {
      icon: TrendingDown,
      title: "Perda de Receita",
      description: "Ineficiência operacional reduz lucros",
      impact: "25% menos vendas/hora"
    },
    {
      icon: Users,
      title: "Experiência Ruim",
      description: "Clientes insatisfeitos não retornam",
      impact: "40% não voltam"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
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
            Os Desafios que Todo{" "}
            <span className="text-secondary">Restaurante</span> Enfrenta
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-open-sans text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Identificamos os principais problemas que afetam a eficiência e lucros dos restaurantes brasileiros
          </motion.p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 hover:border-red-200"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>

              {/* Content */}
              <h3 className="font-montserrat font-bold text-xl text-primary mb-3 text-center">
                {problem.title}
              </h3>
              
              <p className="font-open-sans text-muted-foreground mb-4 text-center">
                {problem.description}
              </p>

              {/* Impact Badge */}
              <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-center">
                <span className="font-open-sans font-semibold text-red-700 text-sm">
                  📉 {problem.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CEO Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto"
        >
          <div className="text-center">
            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span className="text-3xl text-secondary">"</span>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="font-open-sans text-xl md:text-2xl text-primary mb-6 italic leading-relaxed"
            >
              "Vivi essas dores na pele por 15 anos no setor gastronômico. Vi restaurantes falirem por problemas que poderiam ser facilmente resolvidos com a tecnologia certa. Foi por isso que criei a MIA."
            </motion.blockquote>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-4"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="font-montserrat font-bold text-white text-lg">G</span>
              </div>
              <div className="text-left">
                <p className="font-montserrat font-bold text-primary">Guilherme Costa</p>
                <p className="font-open-sans text-muted-foreground">CEO & Fundador da MIA</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            onClick={() => scrollToSection("solution")}
            className="btn-hero text-lg px-8 py-4"
          >
            Veja Como Resolvemos
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;