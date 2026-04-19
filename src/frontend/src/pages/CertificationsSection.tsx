import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2, Star } from "lucide-react";
import { motion } from "motion/react";
import { certifications } from "../data/resume";

const achievements = [
  "Recognized for exceptional communication skills, translating complex technical concepts for diverse audiences",
  "Demonstrated initiative in self-directed learning across Python, SQL, Power BI, and cloud technologies",
  "Established a track record of leadership through founding and scaling a student-led educational initiative",
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-background">
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
            Certifications
          </Badge>
          <h2 className="section-title mb-4">Credentials & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials validating my technical expertise in
            AI, cloud, and data
          </p>
        </motion.div>

        <div
          className="max-w-4xl mx-auto space-y-6"
          data-ocid="certifications.list"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-smooth group"
              data-ocid={`certifications.item.${i + 1}`}
            >
              {/* Top accent */}
              <div className="h-1 bg-primary opacity-80 w-full" />
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-6">
                  {/* Oracle badge visual */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center shadow-sm group-hover:bg-primary/20 transition-smooth">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start gap-3 mb-2">
                      <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-smooth leading-tight">
                        {cert.name}
                      </h3>
                      <Badge className="bg-secondary/15 text-secondary border-secondary/30 text-xs font-semibold shrink-0">
                        {cert.year}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <span className="font-semibold text-foreground">
                        {cert.issuer}
                      </span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">
                        Official Certification
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* What it validates */}
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        "AI/ML fundamentals & model concepts",
                        "Cloud infrastructure & services",
                        "Enterprise AI use cases & deployment",
                        "Data concepts & analytics foundations",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Key achievements card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Key Achievements
            </h3>
            <ul className="space-y-4">
              {achievements.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
