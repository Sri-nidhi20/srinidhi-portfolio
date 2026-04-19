import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { featuredSkills, skillCategories } from "../data/resume";

const categoryColors: Record<string, string> = {
  "Data Analytics": "text-primary border-primary/30 bg-primary/10",
  Programming: "text-secondary border-secondary/30 bg-secondary/10",
  Databases: "text-primary border-primary/30 bg-primary/10",
  "Concepts & Methods": "text-secondary border-secondary/30 bg-secondary/10",
  "Soft Skills": "text-chart-3 border-chart-3/30 bg-chart-3/10",
};

const tagVariantByCategory: Record<string, string> = {
  "Data Analytics": "skill-tag",
  Programming: "skill-tag-emerald",
  Databases: "skill-tag",
  "Concepts & Methods": "skill-tag-emerald",
  "Soft Skills":
    "px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border transition-smooth hover:bg-muted/80",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background">
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
            Technical Skills
          </Badge>
          <h2 className="section-title mb-4">My Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through real-world projects and
            continuous self-learning
          </p>
        </motion.div>

        {/* Featured skills grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
          data-ocid="skills.list"
        >
          {featuredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="project-card p-6 group"
              data-ocid={`skills.item.${i + 1}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary/20 transition-smooth">
                  {skill.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-smooth text-base">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {skill.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="skill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All skills by category */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card/60 rounded-xl border border-border p-5 hover:border-primary/30 transition-smooth"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-base">
                  {cat.icon}
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${categoryColors[cat.category] ?? "text-primary border-primary/30 bg-primary/10"}`}
                >
                  {cat.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className={
                      tagVariantByCategory[cat.category] ?? "skill-tag"
                    }
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
