import { Badge } from "@/components/ui/badge";
import { Award, Database, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    value: "3+",
    label: "Real Projects Built",
    icon: <Database className="w-4 h-4" />,
    color: "text-primary",
  },
  {
    value: "5+",
    label: "Technologies Mastered",
    icon: <TrendingUp className="w-4 h-4" />,
    color: "text-secondary",
  },
  {
    value: "45%",
    label: "Workshop Confidence Boost",
    icon: <Users className="w-4 h-4" />,
    color: "text-primary",
  },
  {
    value: "2025",
    label: "Oracle AI Certified",
    icon: <Award className="w-4 h-4" />,
    color: "text-secondary",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary/30 bg-primary/10 font-semibold tracking-wide uppercase text-xs"
            >
              About Me
            </Badge>
            <h2 className="section-title mb-6">
              Turning Raw Data into{" "}
              <span className="gradient-text">Business Insights</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              I'm a BCA student at Osmania University specializing in Data
              Analytics and Business Intelligence. With hands-on experience in
              SQL, Excel, Power BI, and Python, I build real-world projects that
              extract meaningful insights from complex business data.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a{" "}
              <span className="text-primary font-semibold">
                Google Student Campus Ambassador
              </span>
              , I've led workshops on cloud technologies, data analytics, and
              AI/ML — translating technical concepts into accessible knowledge
              for diverse audiences. My mission: bridge the gap between raw data
              and strategic decision-making.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Strong in problem-solving, communication, and{" "}
              <span className="text-secondary font-medium">
                data storytelling
              </span>{" "}
              — with a proven track record of presenting data-driven insights to
              non-technical audiences and co-founding a student-led educational
              initiative.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Analytics",
                "Business Intelligence",
                "ETL Pipelines",
                "Python",
                "Power BI",
                "SQL",
                "Data Storytelling",
              ].map((tag) => (
                <span key={tag} className="skill-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Avatar with ring */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />
              <div className="relative w-52 h-52 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl shadow-primary/20">
                <img
                  src="/assets/profile-photo.jpeg"
                  alt="Srinidhi Kukutam"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 15%" }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-card border border-border rounded-full px-3 py-1.5 text-xs font-semibold text-secondary flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Open to Work
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/40 transition-smooth group"
                  data-ocid={`about.stat.${i + 1}`}
                >
                  <div
                    className={`flex justify-center mb-2 ${stat.color} opacity-60 group-hover:opacity-100 transition-smooth`}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className={`text-3xl font-display font-bold ${stat.color} mb-1`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
