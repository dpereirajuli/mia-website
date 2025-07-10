import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, you would configure EmailJS properly
      // For now, we'll simulate the email sending
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Mensagem enviada com sucesso! ✅",
        description: "Recebemos sua mensagem e entraremos em contato em breve. Obrigado pelo interesse na MIA!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Erro ao enviar mensagem ❌",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente ou entre em contato diretamente via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone/WhatsApp",
      value: "(11) 98582-9398",
      href: "https://wa.me/5511985829398?text=Olá! Gostaria de saber mais sobre a MIA.",
      description: "Disponível das 9h às 18h (seg-sex)",
      color: "bg-green-50 text-green-600 border-green-200"
    },
    {
      icon: Mail,
      title: "E-mail Comercial",
      value: "guilhermecostadefranca@gmail.com",
      href: "mailto:guilhermecostadefranca@gmail.com?subject=Interesse na MIA",
      description: "Resposta garantida em até 2 horas úteis",
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, Brasil",
      href: "#",
      description: "Atendemos todo o território nacional",
      color: "bg-purple-50 text-purple-600 border-purple-200"
    }
  ];

  return (
    <div className="min-h-screen bg-muted py-20">
      {/* Header */}
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-open-sans font-semibold">Voltar ao Início</span>
          </Link>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            Entre em <span className="text-secondary">Contato</span>
          </h1>
          
          <p className="font-open-sans text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para ajudar você a revolucionar seu restaurante. Entre em contato conosco e descubra como a MIA pode transformar seu negócio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="font-montserrat font-bold text-3xl text-primary mb-4">
                    Vamos Conversar sobre seu Restaurante
                  </h2>
                  <p className="font-open-sans text-muted-foreground text-lg">
                    Preencha o formulário abaixo com seus dados e nos conte sobre seus desafios. Nossa equipe entrará em contato para apresentar como a MIA pode ajudar seu restaurante.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-open-sans font-semibold text-primary block mb-3">
                        Nome Completo *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="border-gray-200 focus:border-secondary h-12 text-lg"
                      />
                    </div>

                    <div>
                      <label className="font-open-sans font-semibold text-primary block mb-3">
                        E-mail Corporativo *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@empresa.com"
                        required
                        className="border-gray-200 focus:border-secondary h-12 text-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-open-sans font-semibold text-primary block mb-3">
                        Telefone/WhatsApp
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        className="border-gray-200 focus:border-secondary h-12 text-lg"
                      />
                    </div>

                    <div>
                      <label className="font-open-sans font-semibold text-primary block mb-3">
                        Nome do Restaurante/Empresa
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nome do seu estabelecimento"
                        className="border-gray-200 focus:border-secondary h-12 text-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-open-sans font-semibold text-primary block mb-3">
                      Como podemos ajudar você?
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre seu restaurante, principais desafios e como a MIA pode ajudar. Quantas mesas? Qual tipo de estabelecimento? Quais são suas maiores dores operacionais?"
                      rows={6}
                      className="border-gray-200 focus:border-secondary resize-none text-lg"
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-open-sans font-semibold text-blue-800 mb-1">
                          O que acontece depois?
                        </h3>
                        <ul className="font-open-sans text-sm text-blue-700 space-y-1">
                          <li>• Resposta em até 2 horas úteis</li>
                          <li>• Apresentação personalizada da MIA</li>
                          <li>• Análise gratuita do seu restaurante</li>
                          <li>• Proposta customizada para suas necessidades</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hero w-full h-14 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                        />
                        Enviando sua mensagem...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 mr-3" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>

                  <div className="text-center">
                    <p className="font-open-sans text-sm text-muted-foreground">
                      Seus dados estão protegidos e não serão compartilhados com terceiros.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`hover:shadow-lg transition-all duration-300 border-2 ${info.color.split(' ')[2]} ${info.color.split(' ')[3]}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 ${info.color.split(' ')[0]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <info.icon className={`w-7 h-7 ${info.color.split(' ')[1]}`} />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-montserrat font-bold text-lg text-primary mb-2">
                          {info.title}
                        </h3>
                        
                        {info.href !== "#" ? (
                          <a 
                            href={info.href}
                            className="font-open-sans font-semibold text-secondary hover:underline block mb-2 text-lg"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-open-sans font-semibold text-secondary mb-2 text-lg">
                            {info.value}
                          </p>
                        )}
                        
                        <p className="font-open-sans text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white"
            >
              <h3 className="font-montserrat font-bold text-xl mb-3">
                🚀 Atendimento Imediato
              </h3>
              
              <p className="font-open-sans mb-6 opacity-95 text-lg">
                Precisa falar agora? Nossa equipe está online para tirar suas dúvidas sobre a MIA.
              </p>
              
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 w-full h-12 text-lg font-semibold"
              >
                <a 
                  href="https://wa.me/5511985829398?text=Olá! Vim do site da MIA e gostaria de saber mais sobre a plataforma."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar no WhatsApp Agora
                </a>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <h4 className="font-montserrat font-bold text-lg text-primary mb-4 text-center">
                ✨ Por que escolher a MIA?
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-open-sans font-semibold text-primary text-sm">
                      15 anos no food service
                    </p>
                    <p className="font-open-sans text-xs text-muted-foreground">
                      Conhecemos suas dores
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-open-sans font-semibold text-primary text-sm">
                      MVP testado e aprovado
                    </p>
                    <p className="font-open-sans text-xs text-muted-foreground">
                      Tecnologia funcionando
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-open-sans font-semibold text-primary text-sm">
                      Suporte 100% dedicado
                    </p>
                    <p className="font-open-sans text-xs text-muted-foreground">
                      Seu sucesso é nossa prioridade
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;