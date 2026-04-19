import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { experiences } from "../data/resume";

const typeColors: Record<string, string> = {
  ambassador: "text-secondary border-secondary/30 bg-secondary/10",
  leadership: "text-primary border-primary/30 bg-primary/10",
  internship: "text-muted-foreground border-border bg-muted",
};

const typeLabels: Record<string, string> = {
  ambassador: "🎯 Campus Ambassador",
  leadership: "👥 Co-Founder & Leader",
  internship: "💼 Internship",
};

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 bg-background">
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
            Experience
          </Badge>
          <h2 className="section-title mb-4">Leadership & Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building communities, leading workshops, and creating measurable
            impact
          </p>
        </motion.div>

        <div
          className="space-y-8 max-w-4xl mx-auto"
          data-ocid="leadership.list"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.14 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-smooth group"
              data-ocid={`leadership.item.${i + 1}`}
            >
              {/* Top accent strip */}
              <div
                className={`h-1 w-full ${exp.type === "ambassador" ? "bg-secondary" : "bg-primary"} opacity-80`}
              />

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start gap-5 mb-6">
                  {/* Org logo area */}
                  {exp.organization === "Google" ? (
                    <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center shrink-0 shadow-sm">
                      <svg
                        viewBox="0 0 48 48"
                        className="w-9 h-9"
                        role="img"
                        aria-label="Google logo"
                      >
                        <title>Google logo</title>
                        <path
                          fill="#4285F4"
                          d="M43.6 20.1H24v7.7h11.3c-1.1 5.4-5.7 8.5-11.3 8.5-7 0-12.7-5.7-12.7-12.7S17 10.9 24 10.9c3.1 0 5.9 1.1 8.1 2.9l5.5-5.5C34.1 5.1 29.3 3 24 3 12.3 3 3 12.3 3 24s9.3 21 21 21c10.7 0 20-7.8 20-21 0-1.3-.1-2.6-.4-3.9z"
                        />
                        <path
                          fill="#34A853"
                          d="M6.3 14.7l6.4 4.7c1.7-4.9 6.3-8.5 11.3-8.5 3.1 0 5.9 1.1 8.1 2.9l5.5-5.5C34.1 5.1 29.3 3 24 3c-7.7 0-14.4 4.4-17.7 11.7z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M24 45c5.2 0 9.9-1.9 13.5-5l-6.2-5.2c-2 1.4-4.5 2.2-7.3 2.2-5.5 0-10.1-3.7-11.8-8.7l-6.3 4.9C8 40.4 15.4 45 24 45z"
                        />
                        <path
                          fill="#EA4335"
                          d="M43.6 20.1H24v7.7h11.3c-0.5 2.5-2 4.6-4.1 5.9l6.2 5.2c3.6-3.3 5.6-8.3 5.6-14.8 0-1.3-.1-2.6-.4-3.9l1 0z"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center shrink-0 shadow-sm text-2xl">
                      🎤
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-smooth">
                        {exp.role}
                      </h3>
                      <Badge
                        variant="outline"
                        className={`text-xs font-semibold ${typeColors[exp.type]}`}
                      >
                        {typeLabels[exp.type]}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {exp.organization}
                      </span>
                      <span>📍 {exp.location}</span>
                      <span>🗓 {exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-5">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${exp.type === "ambassador" ? "bg-secondary" : "bg-primary"}`}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground font-medium mr-1 self-center">
                      Key wins:
                    </span>
                    {exp.achievements.map((a) => (
                      <div
                        key={a}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-xs font-medium"
                      >
                        <span>✦</span> {a}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
