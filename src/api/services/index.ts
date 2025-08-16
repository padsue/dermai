import { FirestoreService } from './firestoreService';
import { User, SkinAnalysis, Product, UserProfile } from '../types';

export class UserService {
  private static COLLECTION = 'users';

  static async createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    return FirestoreService.create<User>(this.COLLECTION, userData as Omit<User, 'id'>);
  }

  static async getUserById(id: string): Promise<User | null> {
    return FirestoreService.getById<User>(this.COLLECTION, id);
  }

  static async updateUser(id: string, userData: Partial<User>): Promise<void> {
    return FirestoreService.update<User>(this.COLLECTION, id, userData);
  }

  static async deleteUser(id: string): Promise<void> {
    return FirestoreService.delete(this.COLLECTION, id);
  }

  static async getUserByEmail(email: string): Promise<User | null> {
    const users = await FirestoreService.getByQuery<User>(this.COLLECTION, 'email', '==', email, 1);
    return users.length > 0 ? users[0] : null;
  }
}

export class SkinAnalysisService {
  private static COLLECTION = 'skinAnalyses';

  static async createAnalysis(
    analysisData: Omit<SkinAnalysis, 'id' | 'createdAt'>
  ): Promise<string> {
    return FirestoreService.create<SkinAnalysis>(
      this.COLLECTION,
      analysisData as Omit<SkinAnalysis, 'id'>
    );
  }

  static async getAnalysisById(id: string): Promise<SkinAnalysis | null> {
    return FirestoreService.getById<SkinAnalysis>(this.COLLECTION, id);
  }

  static async getUserAnalyses(userId: string): Promise<SkinAnalysis[]> {
    return FirestoreService.getByQuery<SkinAnalysis>(this.COLLECTION, 'userId', '==', userId);
  }

  static async deleteAnalysis(id: string): Promise<void> {
    return FirestoreService.delete(this.COLLECTION, id);
  }
}

export class ProductService {
  private static COLLECTION = 'products';

  static async createProduct(productData: Omit<Product, 'id'>): Promise<string> {
    return FirestoreService.create<Product>(this.COLLECTION, productData);
  }

  static async getProductById(id: string): Promise<Product | null> {
    return FirestoreService.getById<Product>(this.COLLECTION, id);
  }

  static async getAllProducts(): Promise<Product[]> {
    return FirestoreService.getAll<Product>(this.COLLECTION);
  }

  static async getProductsByCategory(category: string): Promise<Product[]> {
    return FirestoreService.getByQuery<Product>(this.COLLECTION, 'category', '==', category);
  }

  static async getProductsBySkinType(skinType: string): Promise<Product[]> {
    return FirestoreService.getByQuery<Product>(
      this.COLLECTION,
      'skinTypes',
      'array-contains',
      skinType
    );
  }

  static async updateProduct(id: string, productData: Partial<Product>): Promise<void> {
    return FirestoreService.update<Product>(this.COLLECTION, id, productData);
  }

  static async deleteProduct(id: string): Promise<void> {
    return FirestoreService.delete(this.COLLECTION, id);
  }
}

export class UserProfileService {
  private static COLLECTION = 'userProfiles';

  static async createProfile(profileData: Omit<UserProfile, 'id' | 'updatedAt'>): Promise<string> {
    return FirestoreService.create<UserProfile>(
      this.COLLECTION,
      profileData as Omit<UserProfile, 'id'>
    );
  }

  static async getProfileById(id: string): Promise<UserProfile | null> {
    return FirestoreService.getById<UserProfile>(this.COLLECTION, id);
  }

  static async getProfileByUserId(userId: string): Promise<UserProfile | null> {
    const profiles = await FirestoreService.getByQuery<UserProfile>(
      this.COLLECTION,
      'userId',
      '==',
      userId,
      1
    );
    return profiles.length > 0 ? profiles[0] : null;
  }

  static async updateProfile(id: string, profileData: Partial<UserProfile>): Promise<void> {
    return FirestoreService.update<UserProfile>(this.COLLECTION, id, profileData);
  }

  static async deleteProfile(id: string): Promise<void> {
    return FirestoreService.delete(this.COLLECTION, id);
  }
}
