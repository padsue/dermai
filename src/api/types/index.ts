export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  photoURL: string;
  userType: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

export interface SkinAnalysis {
  id: string;
  userId: string;
  imageUrl: string;
  analysis: {
    skinType: string;
    conditions: string[];
    recommendations: string[];
    confidence: number;
  };
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  ingredients: string[];
  skinTypes: string[];
  price: number;
  rating: number;
  imageUrl: string;
  description: string;
}

export interface UserProfile {
  id: string;
  userId: string;
  skinType: string;
  skinConcerns: string[];
  allergies: string[];
  currentRoutine: Product[];
  preferences: {
    budget: string;
    brandPreferences: string[];
  };
  updatedAt: Date;
}
