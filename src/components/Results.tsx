import { motion } from "framer-motion";
import { TrendingUp, Users, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const Results = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const achievements = [{
    icon: TrendingUp,
    title: "MVP Desenvolvido",
    description: "Plataforma completa em funcionamento",
    highlight: "100% Funcional"
  }, {
    icon: Users,
    title: "47 Restaurantes Interessados",
    description: "Cadastrados em apenas 2 semanas",
    highlight: "Crescimento Rápido"
  }, {
    icon: Calendar,
    title: "15 Anos",
    description: "De experiência no setor gastronômico",
    highlight: "Expertise Comprovada"
  }, {
    icon: Star,
    title: "Inovação",
    description: "Primeira plataforma integrada do Brasil",
    highlight: "Pioneirismo"
  }];
  const testimonials = [{
    quote: "A MIA revolucionou nosso atendimento. Reduzimos o tempo de espera em 60% e nossos clientes estão muito mais satisfeitos.",
    author: "Carlos Silva",
    position: "Proprietário - Restaurante Dom Carlos",
    rating: 5
  }, {
    quote: "Implementamos a MIA há 3 meses e já vemos o retorno. Menos erros, mais eficiência e clientes mais felizes.",
    author: "Ana Beatriz",
    position: "Gerente - Bistrô da Ana",
    rating: 5
  }, {
    quote: "O que mais me impressiona é como a plataforma se adapta ao nosso fluxo de trabalho. É como se tivesse sido feita especialmente para nós.",
    author: "Roberto Santos",
    position: "Franqueado - Rede FastFood+",
    rating: 5
  }];
  const growthData = [{
    month: "Jan",
    value: 10,
    label: "10 restaurantes"
  }, {
    month: "Fev",
    value: 25,
    label: "25 restaurantes"
  }, {
    month: "Mar",
    value: 47,
    label: "47 vendedores"
  }, {
    month: "Abr",
    value: 75,
    label: "Meta: 75 parceiros"
  }];
  return <section id="results" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            <span className="text-secondary">Resultados</span> que Falam por Si
          </motion.h2>
          
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="font-open-sans text-xl text-muted-foreground max-w-3xl mx-auto">
            Números reais de uma plataforma que já está transformando o mercado gastronômico brasileiro
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => <motion.div key={achievement.title} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <achievement.icon className="w-8 h-8 text-green-600" />
              </div>

              {/* Content */}
              <h3 className="font-montserrat font-bold text-xl text-primary mb-2">
                {achievement.title}
              </h3>
              
              <p className="font-open-sans text-muted-foreground mb-3">
                {achievement.description}
              </p>

              {/* Highlight Badge */}
              <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-1">
                <span className="font-open-sans font-semibold text-green-700 text-sm">
                  ✨ {achievement.highlight}
                </span>
              </div>
            </motion.div>)}
        </div>

        {/* Growth Chart */}
        

        {/* Testimonials Carousel */}
        

        {/* CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center">
          <Button onClick={() => scrollToSection("contact")} className="btn-hero text-lg px-8 py-4">
            Seja um Parceiro
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default Results;