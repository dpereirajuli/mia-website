import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
const Team = () => {
  const teamMembers = [{
    name: "Guilherme Costa",
    role: "CEO & Fundador",
    experience: "15 anos no setor gastronômico",
    description: "Especialista em operações de restaurantes, identificou e viveu os principais problemas do setor. Visionário por trás da MIA.",
    skills: ["Gestão de Operações", "Estratégia de Negócios", "Setor Gastronômico", "Liderança"],
    email: "guilhermecostadefranca@gmail.com",
    avatar: "G"
  }, {
    name: "Daniel Oliveira",
    role: "CTO & Co-fundador",
    experience: "10+ anos em desenvolvimento",
    description: "Expert em tecnologia e desenvolvimento de sistemas. Responsável pela arquitetura técnica e inovação da plataforma MIA.",
    skills: ["Desenvolvimento Full-Stack", "Arquitetura de Software", "IA & Machine Learning", "DevOps"],
    email: "danyelpj412@gmail.com",
    linkedin: "https://www.linkedin.com/in/juliaodaniel/",
    avatar: "D"
  }];
  return <section id="team" className="py-20 bg-muted">
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
            Conheça Nossa <span className="text-secondary">Equipe</span>
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
            Fundadores experientes que combinam conhecimento do setor gastronômico com expertise tecnológica
          </motion.p>
        </motion.div>

        {/* Team Photo */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="relative mb-16">
          <div className="max-w-4xl mx-auto relative">
            
            
            
            {/* Overlay Text */}
            

            {/* Floating Achievement */}
            
          </div>
        </motion.div>

        {/* Team Members Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => <motion.div key={member.name} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.2
        }} viewport={{
          once: true
        }} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-secondary/20">
                {/* Avatar & Header */}
                <div className="flex items-start space-x-6 mb-6">
                  <motion.div whileHover={{
                scale: 1.1
              }} className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg">
                      <span className="font-montserrat font-bold text-2xl text-white">
                        {member.avatar}
                      </span>
                    </div>
                  </motion.div>

                  <div className="flex-grow">
                    <h3 className="font-montserrat font-bold text-2xl text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="font-montserrat font-semibold text-secondary mb-2">
                      {member.role}
                    </p>
                    <p className="font-open-sans text-sm text-muted-foreground">
                      {member.experience}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-open-sans text-muted-foreground mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-montserrat font-semibold text-primary mb-3">
                    Especialidades:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map(skill => <span key={skill} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-open-sans font-medium">
                        {skill}
                      </span>)}
                  </div>
                </div>

                {/* Contact Links */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                  <motion.a whileHover={{
                scale: 1.1
              }} href={`mailto:${member.email}`} className="flex items-center space-x-2 text-muted-foreground hover:text-secondary transition-colors duration-200">
                    <Mail className="w-5 h-5" />
                    <span className="font-open-sans text-sm">E-mail</span>
                  </motion.a>
                  {member.linkedin && (
                    <motion.a whileHover={{
                  scale: 1.1
                }} href={member.linkedin} className="flex items-center space-x-2 text-muted-foreground hover:text-secondary transition-colors duration-200">
                      <Linkedin className="w-5 h-5" />
                      <span className="font-open-sans text-sm">LinkedIn</span>
                    </motion.a>
                  )}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/5 to-secondary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>)}
        </div>

        {/* Company Info */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} viewport={{
        once: true
      }} className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="font-montserrat font-semibold text-primary">São Paulo, Brasil</span>
            </div>
            
            <p className="font-open-sans text-muted-foreground">
              Baseados no coração do ecossistema de inovação brasileiro, nossa equipe combina 
              expertise local com visão global para revolucionar o setor gastronômico.
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Team;