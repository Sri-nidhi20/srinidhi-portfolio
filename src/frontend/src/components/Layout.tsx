import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sectionIds = [
        "hero",
        "about",
        "skills",
        "projects",
        "leadership",
        "education",
        "certifications",
        "contact",
      ];
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            type="button"
            className="font-display font-bold text-xl text-foreground hover:text-primary transition-smooth"
            data-ocid="nav.logo"
          >
            Srinidhi<span className="text-primary">.</span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  data-ocid={`nav.${link.label.toLowerCase()}_link`}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + mobile menu */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="hidden md:flex gap-2 bg-primary hover:bg-primary/90"
              data-ocid="nav.download_resume_button"
              onClick={() => window.print()}
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </Button>
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-smooth"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.mobile_menu_toggle"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-card/98 backdrop-blur-md border-b border-border px-4 pb-4"
            >
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => {
                    scrollTo(link.href);
                    setMenuOpen(false);
                  }}
                  data-ocid={`nav.mobile.${link.label.toLowerCase()}_link`}
                  className="block w-full text-left px-4 py-3 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth"
                >
                  {link.label}
                </button>
              ))}
              <Button
                size="sm"
                className="mt-2 w-full gap-2"
                data-ocid="nav.mobile.download_resume_button"
                onClick={() => {
                  window.print();
                  setMenuOpen(false);
                }}
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Srinidhi Kukutam. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
