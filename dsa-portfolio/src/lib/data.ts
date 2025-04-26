import fs from 'fs';
import path from 'path';
import { Profile, Project, Achievement, Recommendation } from './types';

// Path to our JSON data files
const dataDirectory = path.join(process.cwd(), 'src/data');

/**
 * Generic function to safely load JSON data
 */
function safelyLoadJsonFile<T>(filename: string, fallback: T): T {
  try {
    // Check if directory exists
    if (!fs.existsSync(dataDirectory)) {
      console.warn(`Data directory ${dataDirectory} does not exist. Creating it...`);
      fs.mkdirSync(dataDirectory, { recursive: true });
      return fallback;
    }

    const filePath = path.join(dataDirectory, filename);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.warn(`File ${filePath} does not exist.`);
      return fallback;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as T;
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return fallback;
  }
}

/**
 * Load profile data from JSON
 */
export function getProfile(): Profile | null {
  const defaultProfile: Profile = {
    name: "Student Name",
    age: 11,
    school: "School Name",
    introduction: "Introduction text goes here.",
    interests: [],
    photo: "/images/default-profile.jpg",
    funFacts: []
  };
  
  return safelyLoadJsonFile<Profile>('profile.json', defaultProfile);
}

/**
 * Load projects data from JSON
 */
export function getProjects(): Project[] {
  return safelyLoadJsonFile<Project[]>('projects.json', []);
}

/**
 * Load achievements data from JSON
 */
export function getAchievements(): Achievement[] {
  return safelyLoadJsonFile<Achievement[]>('achievements.json', []);
}

/**
 * Load recommendations data from JSON
 */
export function getRecommendations(): Recommendation[] {
  return safelyLoadJsonFile<Recommendation[]>('recommendations.json', []);
}