import { getProfile, getProjects, getAchievements, getRecommendations } from '@/lib/data';
import { Profile, Project, Achievement, Recommendation } from '@/lib/types';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Introduction from '@/components/sections/Introduction';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Recommendations from '@/components/sections/Recommendations';

export default function Home() {
  // Load data from JSON files with error handling
  let profile: Profile | null = null;
  let projects: Project[] = [];
  let achievements: Achievement[] = [];
  let recommendations: Recommendation[] = [];

  try {
    profile = getProfile();
  } catch (error) {
    console.error('Error loading profile data:', error);
    profile = null;
  }

  try {
    projects = getProjects();
  } catch (error) {
    console.error('Error loading projects data:', error);
    projects = [];
  }

  try {
    achievements = getAchievements();
  } catch (error) {
    console.error('Error loading achievements data:', error);
    achievements = [];
  }

  try {
    recommendations = getRecommendations();
  } catch (error) {
    console.error('Error loading recommendations data:', error);
    recommendations = [];
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Introduction profile={profile} />
        <Projects projects={projects} />
        <Achievements achievements={achievements} />
        <Recommendations recommendations={recommendations} />
      </main>
      <Footer />
    </div>
  );
}