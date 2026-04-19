import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, GitBranch } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { projects } from "../data/resume";

const projectIcons: Record<string, string> = {
  "etl-pipeline": "⚙️",
  mindscribe: "🧠",
  "asha-ai": "🤖",
};

const projectColors: Record<string, string> = {
  "etl-pipeline": "border-l-primary",
  mindscribe: "border-l-secondary",
  "asha-ai": "border-l-primary",
};

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-muted/20">
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
            Portfolio
          </Badge>
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world data engineering and analytics solutions built to solve
            practical business problems
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto" data-ocid="projects.list">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`project-card border-l-4 ${projectColors[project.id] ?? "border-l-primary"} group`}
              data-ocid={`projects.item.${i + 1}`}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary/20 transition-smooth">
                      {projectIcons[project.id]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-smooth">
                          {project.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="text-xs shrink-0 bg-secondary/15 text-secondary border-secondary/30"
                        >
                          {project.year}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4 text-[0.93rem]">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="skill-tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setExpanded(expanded === project.id ? null : project.id)
                    }
                    className="shrink-0 gap-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-smooth"
                    data-ocid={`projects.expand_button.${i + 1}`}
                  >
                    {expanded === project.id ? (
                      <>
                        <ChevronUp className="w-4 h-4" /> Hide Details
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" /> View Details
                      </>
                    )}
                  </Button>
                </div>

                <AnimatePresence>
                  {expanded === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-5 border-t border-border">
                        <div className="flex items-center gap-2 mb-4">
                          <GitBranch className="w-4 h-4 text-primary" />
                          <h4 className="text-sm font-semibold text-foreground">
                            Key Highlights
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          {project.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
