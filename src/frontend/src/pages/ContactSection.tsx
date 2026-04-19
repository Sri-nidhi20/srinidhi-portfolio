import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Download,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { contactLinks } from "../data/resume";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="w-6 h-6" />,
  mail: <Mail className="w-6 h-6" />,
  phone: <Phone className="w-6 h-6" />,
};

const iconColors: Record<string, string> = {
  linkedin: "bg-primary/10 text-primary group-hover:bg-primary/20",
  mail: "bg-secondary/10 text-secondary group-hover:bg-secondary/20",
  phone: "bg-primary/10 text-primary group-hover:bg-primary/20",
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 text-primary border-primary/30 bg-primary/10 font-semibold tracking-wide uppercase text-xs"
          >
            Contact
          </Badge>
          <h2 className="section-title mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm actively seeking internships and entry-level data analytics
            roles. Reach out — let's build something meaningful together.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact cards */}
          <div
            className="grid sm:grid-cols-3 gap-4 mb-8"
            data-ocid="contact.links"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === "LinkedIn" ? "_blank" : undefined}
                rel={
                  link.label === "LinkedIn" ? "noopener noreferrer" : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-smooth group flex flex-col items-center gap-3"
                data-ocid={`contact.${link.label.toLowerCase()}_link`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-smooth ${iconColors[link.icon] ?? "bg-primary/10 text-primary group-hover:bg-primary/20"}`}
                >
                  {iconMap[link.icon]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground mb-1">
                    {link.label}
                  </div>
                  <div className="text-xs text-muted-foreground truncate max-w-[160px]">
                    {link.value}
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-smooth" />
              </motion.a>
            ))}
          </div>

          {/* Resume CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-primary/20 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center text-3xl mx-auto mb-5 shadow-lg shadow-primary/20">
                📄
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Download My Resume
              </h3>
              <p className="text-muted-foreground mb-7 max-w-md mx-auto text-sm">
                Get a complete overview of my skills, projects, education,
                certifications, and leadership experience in one clean document.
              </p>
              <Button
                type="button"
                size="lg"
                onClick={() => window.print()}
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 px-8 glow-cyan"
                data-ocid="contact.download_resume_button"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </Button>
            </div>
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="text-center text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2"
          >
            <MapPin className="w-3.5 h-3.5 text-primary" />
            Based in Hyderabad, Telangana, India &nbsp;·&nbsp; Open to remote
            opportunities worldwide
          </motion.p>
        </div>
      </div>
    </section>
  );
}
