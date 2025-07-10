import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationLinks = [
    { label: "Início", target: "hero" },
    { label: "Sobre", target: "about" },
    { label: "Problema", target: "problem" },
    { label: "Solução", target: "solution" },
    { label: "Resultados", target: "results" },
    { label: "Equipe", target: "team" },
    { label: "Investidores", target: "investors" },
    { label: "Contato", target: "contact" },
  ];

  const contactLinks = [
    {
      icon: Phone,
      label: "(11) 98582-9398",
      href: "https://wa.me/5511985829398"
    },
    {
      icon: Mail,
      label: "guilhermecostadefranca@gmail.com",
      href: "mailto:guilhermecostadefranca@gmail.com"
    },
    {
      icon: MapPin,
      label: "São Paulo, Brasil",
      href: "#"
    }
  ];

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="font-montserrat font-bold text-3xl text-secondary mb-2">
                MIA
              </h3>
              <p className="font-open-sans text-gray-300 leading-relaxed">
                Mestre em Inteligência de Atendimento - Transformando o setor gastronômico através da tecnologia.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-gray-300">
              <span className="font-open-sans text-sm">Feito com</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span className="font-open-sans text-sm">para restaurantes brasileiros</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-montserrat font-semibold text-xl mb-6">Navegação</h4>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollToSection(link.target)}
                  className="block font-open-sans text-gray-300 hover:text-secondary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-montserrat font-semibold text-xl mb-6">Contato</h4>
            <div className="space-y-4">
              {contactLinks.map((contact) => (
                <div key={contact.label} className="flex items-start space-x-3">
                  <contact.icon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  {contact.href !== "#" ? (
                    <a 
                      href={contact.href}
                      className="font-open-sans text-gray-300 hover:text-secondary transition-colors duration-200"
                    >
                      {contact.label}
                    </a>
                  ) : (
                    <span className="font-open-sans text-gray-300">
                      {contact.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-montserrat font-semibold text-xl mb-6">Transforme seu Restaurante</h4>
            <p className="font-open-sans text-gray-300 mb-6 leading-relaxed">
              Entre em contato e descubra como a MIA pode revolucionar seu negócio.
            </p>
            
            <button 
              onClick={() => scrollToSection("contact")}
              className="w-full bg-secondary hover:bg-secondary-light text-white font-montserrat font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Entre em Contato
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-600 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-open-sans text-gray-300 text-sm">
                © 2025 MIA Soluções. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="font-open-sans text-gray-300 text-sm">
                Revolucionando o food service brasileiro
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;