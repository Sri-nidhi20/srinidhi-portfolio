import { Layout } from "./components/Layout";
import AboutSection from "./pages/AboutSection";
import CertificationsSection from "./pages/CertificationsSection";
import ContactSection from "./pages/ContactSection";
import EducationSection from "./pages/EducationSection";
import HeroSection from "./pages/HeroSection";
import LeadershipSection from "./pages/LeadershipSection";
import ProjectsSection from "./pages/ProjectsSection";
import SkillsSection from "./pages/SkillsSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <LeadershipSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </Layout>
  );
}
