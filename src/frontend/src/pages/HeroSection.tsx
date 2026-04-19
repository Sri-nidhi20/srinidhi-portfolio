import { Button } from "@/components/ui/button";
import { Briefcase, ChevronDown, Download, MapPin } from "lucide-react";
import { motion } from "motion/react";

function scrollTo(href: string) {
  const el = document.getElementById(href.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url(/assets/generated/hero-data-bg.dim_1600x900.jpg)",
        }}
      />
      {/* Deep overlay for text readability */}
      <div className="absolute inset-0 bg-background/80" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, oklch(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Radial glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-7"
        >
          <div className="relative">
            {/* Outer glow halo */}
            <div className="absolute inset-0 rounded-full bg-primary/25 blur-2xl scale-125 pointer-events-none" />
            {/* Ring + avatar */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-primary/50 shadow-2xl shadow-primary/30">
              <img
                src="/assets/profile-photo.jpeg"
                alt="Srinidhi Kukutam"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
          </div>
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for Internships & Entry-Level Roles
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold tracking-tight leading-none mb-6 hero-text-shadow"
          style={{ fontSize: "clamp(3rem, 10vw, 6.5rem)" }}
        >
          <span className="block text-foreground">SRINIDHI</span>
          <span className="block gradient-text">KUKUTAM</span>
        </motion.h1>

        {/* Role tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-body max-w-3xl mx-auto mb-4 leading-snug"
        >
          BCA Data Analytics Student&nbsp;
          <span className="text-primary/70">|</span>&nbsp; Aspiring Data
          Analyst&nbsp;
          <span className="text-primary/70">|</span>&nbsp; Unlocking Insights
          from Complex Data
        </motion.p>

        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-10"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            Hyderabad, Telangana, India
          </span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="flex items-center gap-1.5">
            <span className="text-base">🎓</span>
            Google Student Campus Ambassador
          </span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-secondary" />
            Oracle Cloud AI Certified
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            type="button"
            size="lg"
            onClick={() => scrollTo("#projects")}
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-3 text-base shadow-lg shadow-primary/25 glow-cyan"
            data-ocid="hero.explore_projects_button"
          >
            Explore Projects
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            onClick={() => window.print()}
            className="gap-2 border-primary/40 hover:border-primary hover:bg-primary/10 text-foreground px-10 py-3 text-base transition-smooth"
            data-ocid="hero.download_resume_button"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
        </motion.div>

        {/* Tech stack row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3"
        >
          {["Python", "SQL", "Power BI", "Excel", "PySpark", "NLP"].map(
            (tech, i) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full bg-card/60 border border-border text-muted-foreground text-xs font-medium backdrop-blur-sm hover:border-primary/40 hover:text-primary transition-smooth"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {tech}
              </span>
            ),
          )}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-smooth"
        aria-label="Scroll down"
        data-ocid="hero.scroll_down_button"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.button>
    </section>
  );
}
