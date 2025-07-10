import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Target, Download, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Investors = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fundingUsage = [
    {
      icon: Users,
      title: "Expansão de Vendas",
      percentage: "40%",
      amount: "R$ 48.000",
      description: "Contratação e treinamento de equipe comercial"
    },
    {
      icon: Zap,
      title: "Desenvolvimento",
      percentage: "35%",
      amount: "R$ 42.000", 
      description: "Aprimoramento da plataforma e novas funcionalidades"
    },
    {
      icon: TrendingUp,
      title: "Marketing",
      percentage: "25%",
      amount: "R$ 30.000",
      description: "Campanhas de aquisição e branding"
    }
  ];

  const metrics = [
    {
      title: "Mercado Endereçável",
      value: "R$ 2.8B",
      description: "Setor de food service no Brasil",
      growth: "+8.5% ao ano"
    },
    {
      title: "Restaurantes",
      value: "1.5M+",
      description: "Estabelecimentos no Brasil",
      growth: "Mercado em expansão"
    },
    {
      title: "Ticket Médio",
      value: "R$ 299",
      description: "Mensalidade por restaurante",
      growth: "Recorrência alta"
    },
    {
      title: "ROI Esperado",
      value: "300%",
      description: "Retorno em 24 meses",
      growth: "Base conservadora"
    }
  ];

  return (
    <section id="investors" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
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
            Oportunidade para <span className="text-secondary">Investidores</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-open-sans text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Junte-se a nós na revolução do setor gastronômico brasileiro. Uma oportunidade única de investir na próxima unicórnio de foodtech.
          </motion.p>
        </motion.div>

        {/* Funding Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-16 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="font-montserrat font-bold text-3xl text-primary mb-2">
              R$ 120.000
            </h3>
            <p className="font-open-sans text-lg text-muted-foreground">
              Investimento para escalar operações e acelerar crescimento
            </p>
          </div>

          {/* Usage Breakdown */}
          <div className="grid md:grid-cols-3 gap-8">
            {fundingUsage.map((usage, index) => (
              <motion.div
                key={usage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <usage.icon className="w-8 h-8 text-purple-600" />
                </div>
                
                <div className="mb-3">
                  <div className="font-montserrat font-bold text-2xl text-secondary">
                    {usage.percentage}
                  </div>
                  <div className="font-montserrat font-semibold text-lg text-primary">
                    {usage.amount}
                  </div>
                </div>
                
                <h4 className="font-montserrat font-semibold text-primary mb-2">
                  {usage.title}
                </h4>
                <p className="font-open-sans text-sm text-muted-foreground">
                  {usage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="font-montserrat font-bold text-3xl text-secondary mb-2">
                    {metric.value}
                  </div>
                  
                  <h3 className="font-montserrat font-semibold text-primary mb-2">
                    {metric.title}
                  </h3>
                  
                  <p className="font-open-sans text-muted-foreground mb-3">
                    {metric.description}
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-1">
                    <span className="font-open-sans font-semibold text-green-700 text-sm">
                      📈 {metric.growth}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-montserrat font-bold text-3xl mb-6">
                  Por que Investir na MIA?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-montserrat font-semibold mb-1">Mercado Bilionário</h4>
                      <p className="font-open-sans text-gray-200">R$ 2.8B em food service, crescendo 8.5% ao ano</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-montserrat font-semibold mb-1">Tração Comprovada</h4>
                      <p className="font-open-sans text-gray-200">MVP funcionando + 47 vendedores em 2 semanas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-montserrat font-semibold mb-1">Equipe Experiente</h4>
                      <p className="font-open-sans text-gray-200">25+ anos de experiência combinada no setor</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="font-montserrat font-bold text-4xl text-secondary mb-2">
                    1.5M+
                  </div>
                  <p className="font-open-sans text-lg">
                    Restaurantes no Brasil
                  </p>
                  <p className="font-open-sans text-sm text-gray-200 mt-2">
                    Mercado endereçável total
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="font-montserrat font-bold text-2xl text-primary mb-4">
              Interesse em Investir?
            </h3>
            <p className="font-open-sans text-muted-foreground">
              Entre em contato para receber nosso pitch deck completo e agendar uma reunião.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="btn-hero flex-1"
            >
              Entrar em Contato
            </Button>
            
            <Button 
              variant="outline"
              className="btn-outline flex-1"
              onClick={() => {
                // Simulate pitch deck download
                const link = document.createElement('a');
                link.href = 'src/assets/MIA_apresentacao.pdf';
                link.download = 'MIA_apresentacao.pdf';
                link.click();
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Pitch Deck
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="font-open-sans text-sm text-muted-foreground">
              Contato direto: {" "}
              <a 
                href="mailto:guilhermecostadefranca@gmail.com" 
                className="text-secondary hover:underline font-semibold"
              >
                guilhermecostadefranca@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Investors;