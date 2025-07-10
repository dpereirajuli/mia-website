import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  // Remover isSubmitting e handleSubmit

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Remover handleSubmit

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone/WhatsApp",
      value: "(11) 98582-9398",
      href: "https://wa.me/5511985829398",
      description: "Disponível das 9h às 18h"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "guilhermecostadefranca@gmail.com",
      href: "mailto:guilhermecostadefranca@gmail.com",
      description: "Resposta em até 2 horas"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, Brasil",
      href: "#",
      description: "Atendemos todo o território nacional"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
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
            Vamos <span className="text-secondary">Conversar</span>?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-open-sans text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Pronto para revolucionar seu restaurante? Entre em contato conosco e descubra como a MIA pode transformar seu negócio.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="font-montserrat font-bold text-2xl text-primary mb-2">
                    Fale Conosco
                  </h3>
                  <p className="font-open-sans text-muted-foreground">
                    Preencha o formulário e descubra como a MIA pode transformar seu restaurante.
                  </p>
                </div>

                <form
                  action="https://formspree.io/f/xblyndbj"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-open-sans font-semibold text-primary block mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome completo"
                        required
                        className="border-gray-200 focus:border-secondary"
                      />
                    </div>

                    <div>
                      <label className="font-open-sans font-semibold text-primary block mb-2">
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        required
                        className="border-gray-200 focus:border-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-open-sans font-semibold text-primary block mb-2">
                      Telefone/WhatsApp
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="border-gray-200 focus:border-secondary"
                    />
                  </div>

                  <div>
                    <label className="font-open-sans font-semibold text-primary block mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos sobre seu restaurante e como podemos ajudar..."
                      rows={4}
                      className="border-gray-200 focus:border-secondary resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn-hero w-full"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-open-sans">
                      Resposta garantida em até 2 horas úteis
                    </span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-secondary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-secondary" />
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-montserrat font-semibold text-primary mb-1">
                            {info.title}
                          </h3>
                          
                          {info.href !== "#" ? (
                            <a 
                              href={info.href}
                              className="font-open-sans font-semibold text-secondary hover:underline block mb-1"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-open-sans font-semibold text-secondary mb-1">
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
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl p-6 text-white"
            >
              <h3 className="font-montserrat font-bold text-xl mb-4">
                Precisa de Atendimento Imediato?
              </h3>
              
              <p className="font-open-sans mb-6 opacity-90">
                Fale diretamente conosco via WhatsApp e tire todas suas dúvidas sobre a MIA.
              </p>
              
              <Button
                asChild
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-secondary w-full"
              >
                <a 
                  href="https://wa.me/5511985829398?text=Olá! Gostaria de saber mais sobre a MIA."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <h4 className="font-montserrat font-semibold text-primary mb-4 text-center">
                Por que confiar na MIA?
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-open-sans text-sm text-muted-foreground">
                    15 anos de experiência no setor gastronômico
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-open-sans text-sm text-muted-foreground">
                    MVP desenvolvido e testado
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-open-sans text-sm text-muted-foreground">
                    Equipe 100% dedicada ao seu sucesso
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;