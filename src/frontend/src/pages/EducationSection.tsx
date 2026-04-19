import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";
import { motion } from "motion/react";

const coursework = [
  "Data Structures",
  "Database Management Systems",
  "Business Analytics",
  "Statistical Methods",
];

const focusAreas = [
  { label: "Data Analytics", color: "skill-tag" },
  { label: "Artificial Intelligence", color: "skill-tag-emerald" },
  { label: "Machine Learning", color: "skill-tag" },
  { label: "Business Intelligence", color: "skill-tag-emerald" },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-muted/20">
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
            Education
          </Badge>
          <h2 className="section-title mb-4">Academic Background</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Building a strong foundation in computing, analytics, and business
            intelligence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
          data-ocid="education.card"
        >
          <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-smooth shadow-lg shadow-primary/5">
            {/* Gradient top strip */}
            <div className="gradient-accent h-1.5" />

            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0 glow-cyan">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-2xl text-foreground mb-1">
                    Bachelor of Computer Applications
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    (BCA) — Specialization in Data Analytics
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-8">
                    <span className="flex items-center gap-1.5 font-semibold text-foreground">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      Osmania University
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      Hyderabad, India
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      2023 – 2026
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        Relevant Coursework
                      </h4>
                      <ul className="space-y-2.5">
                        {coursework.map((c) => (
                          <li
                            key={c}
                            className="flex items-center gap-2.5 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Focus Areas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {focusAreas.map((f) => (
                          <span key={f.label} className={f.color}>
                            {f.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
