// Define types for all our data structures

export interface Profile {
    name: string;
    age: number;
    school: string;
    introduction: string;
    interests: string[];
    photo: string;
    funFacts: string[];
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    demoLink?: string;
    tags: string[];
  }
  
  export interface Achievement {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
  }
  
  export interface Recommendation {
    id: string;
    name: string;
    role: string;
    content: string;
    image: string;
  }