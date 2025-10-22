import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlanningSection from "@/components/PlanningSection";
import SectionSeparator from "@/components/SectionSeparator";
import ExperienceSection from "@/components/ExperienceSection";
import HotelsSection from "@/components/HotelsSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ThemesSection from "@/components/ThemesSection";
import ParksShowcase from "@/components/ParksShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PlanningSection />
        <SectionSeparator />
        <ExperienceSection />
        <SectionSeparator />
        <HotelsSection />
        <FeaturesGrid />
        <SectionSeparator />
        <ThemesSection />
        <SectionSeparator />
        <ParksShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
