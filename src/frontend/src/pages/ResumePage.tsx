import {
  certifications,
  experiences,
  projects,
  skillCategories,
} from "../data/resume";

export default function ResumePage() {
  return (
    <div
      id="resume-printable"
      className="max-w-[210mm] mx-auto p-8 font-body text-foreground bg-background"
      style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: "11pt",
        color: "#0f172a",
      }}
    >
      {/* Header */}
      <div className="border-b-2 border-primary pb-4 mb-5">
        <h1 className="text-3xl font-display font-bold text-foreground">
          Srinidhi Kukutam
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          BCA Data Analytics Student | Google Student Campus Ambassador
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-xs text-muted-foreground">
          <span>📍 Hyderabad, Telangana, India</span>
          <span>📞 +91 7842316396</span>
          <span>✉ kukutamsrinidhi@gmail.com</span>
          <span>🔗 linkedin.com/in/srinidhikukutam</span>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
          Professional Summary
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          BCA student specializing in Data Analytics and Business Intelligence
          with hands-on experience in SQL, Excel, Power BI, and Python. Built
          real-world projects involving data cleaning, analysis, dashboards, and
          automation to extract insights from business data. Strong in
          problem-solving, communication, and data storytelling, with experience
          presenting data-driven insights to non-technical audiences. Google
          Student Campus Ambassador with proven leadership through workshops and
          community building.
        </p>
      </section>

      {/* Education */}
      <section className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
          Education
        </h2>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Bachelor of Computer Applications (BCA)
            </p>
            <p className="text-xs text-muted-foreground">
              Osmania University, Hyderabad, India
            </p>
            <p className="text-xs text-muted-foreground">
              Coursework: Data Structures, DBMS, Business Analytics, Statistical
              Methods
            </p>
          </div>
          <span className="text-xs text-muted-foreground shrink-0 ml-4">
            2023 – 2026
          </span>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
          Technical Skills
        </h2>
        <div className="space-y-1">
          {skillCategories.slice(0, 4).map((cat) => (
            <div key={cat.category} className="flex gap-2 text-xs">
              <span className="font-semibold text-foreground w-32 shrink-0">
                {cat.category}:
              </span>
              <span className="text-muted-foreground">
                {cat.skills.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
          Leadership & Experience
        </h2>
        {experiences.map((exp) => (
          <div key={exp.role} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {exp.role}
                </p>
                <p className="text-xs text-muted-foreground">
                  {exp.organization} · {exp.location}
                </p>
              </div>
              <span className="text-xs text-muted-foreground shrink-0 ml-4">
                {exp.duration}
              </span>
            </div>
            <ul className="mt-1 space-y-0.5">
              {exp.highlights.map((h) => (
                <li
                  key={h}
                  className="text-xs text-muted-foreground flex gap-2"
                >
                  <span className="shrink-0">•</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
          Projects
        </h2>
        {projects.map((p) => (
          <div key={p.id} className="mb-3">
            <div className="flex justify-between items-start">
              <p className="text-sm font-semibold text-foreground">{p.title}</p>
              <span className="text-xs text-muted-foreground shrink-0 ml-4">
                {p.year}
              </span>
            </div>
            <p className="text-xs text-muted-foreground italic mb-0.5">
              Tech: {p.tech.join(", ")}
            </p>
            <ul className="space-y-0.5">
              {p.highlights.slice(0, 2).map((h) => (
                <li
                  key={h}
                  className="text-xs text-muted-foreground flex gap-2"
                >
                  <span className="shrink-0">•</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">
          Certifications
        </h2>
        {certifications.map((c) => (
          <div key={c.name} className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-foreground">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.issuer}</p>
            </div>
            <span className="text-xs text-muted-foreground shrink-0 ml-4">
              {c.year}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
