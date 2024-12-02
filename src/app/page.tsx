import AchievementsPage from "./components/Achivements";
import CompanyPage from "./components/Companies";
import CoursePage from "./components/Course";
import ExploreCoursePage from "./components/ExploreCourse";
import FooterPage from "./components/Footer";
import HeaderPage from "./components/Header";
import HeroPage from "./components/Hero";
import NavbarPage from "./components/Navbar";
import TeamPage from "./components/Team";
import TestimonialsPage from "./components/Testimonials";
export default function Home() {
  return (
    <div>
      <NavbarPage />
      <HeaderPage />
      <HeroPage />
      <CompanyPage />
      <ExploreCoursePage />
      <AchievementsPage />
      <CoursePage />
      <TeamPage />
      <TestimonialsPage />
      <FooterPage />
    </div>
  );
}