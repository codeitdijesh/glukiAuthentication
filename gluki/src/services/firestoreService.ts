import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  collection, 
  query, 
  where, 
  getDocs,
  Timestamp 
} from 'firebase/firestore';
import { firestore } from '../config/firebase';

export interface UserProfile {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  dateOfBirth?: string;
  parentEmail?: string;
  isChild?: boolean;
  // Account Info fields
  childName?: string;
  age?: string;
  diagnosisDate?: string;
  accountSetupComplete?: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CreateUserProfileData {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  parentEmail?: string;
  isChild?: boolean;
}

class FirestoreService {
  private usersCollection = 'users';

  /**
   * Create a new user profile in Firestore
   */
  async createUserProfile(userData: CreateUserProfileData): Promise<void> {
    try {
      console.log('Creating user profile:', userData);
      const userRef = doc(firestore, this.usersCollection, userData.uid);
      console.log('User ref:', userRef);
      
      const userProfile: UserProfile = {
        ...userData,
        displayName: userData.lastName ? `${userData.firstName} ${userData.lastName}` : userData.firstName,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      console.log('User profile:', userProfile);

      await setDoc(userRef, userProfile);
      console.log('User profile created successfully');
    } catch (error: any) {
      console.error('Error creating user profile:', error);
      throw new Error('Failed to create user profile');
    }
  }

  /**
   * Get user profile by UID
   */
  async getUserProfile(uid: string): Promise<UserProfile | null> {
    try {
      const userRef = doc(firestore, this.usersCollection, uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        return userSnap.data() as UserProfile;
      } else {
        console.log('No user profile found');
        return null;
      }
    } catch (error: any) {
      console.error('Error fetching user profile:', error);
      throw new Error('Failed to fetch user profile');
    }
  }

  /**
   * Update user profile
   */
  async updateUserProfile(uid: string, updates: Partial<UserProfile>): Promise<void> {
    try {
      const userRef = doc(firestore, this.usersCollection, uid);
      
      const updateData = {
        ...updates,
        updatedAt: Timestamp.now()
      };

      await updateDoc(userRef, updateData);
      console.log('User profile updated successfully');
    } catch (error: any) {
      console.error('Error updating user profile:', error);
      throw new Error('Failed to update user profile');
    }
  }

  /**
   * Delete user profile
   */
  async deleteUserProfile(uid: string): Promise<void> {
    try {
      const userRef = doc(firestore, this.usersCollection, uid);
      await deleteDoc(userRef);
      console.log('User profile deleted successfully');
    } catch (error: any) {
      console.error('Error deleting user profile:', error);
      throw new Error('Failed to delete user profile');
    }
  }

  /**
   * Check if user profile exists
   */
  async userProfileExists(uid: string): Promise<boolean> {
    try {
      const userRef = doc(firestore, this.usersCollection, uid);
      const userSnap = await getDoc(userRef);
      return userSnap.exists();
    } catch (error: any) {
      console.error('Error checking user profile existence:', error);
      return false;
    }
  }

  /**
   * Get children profiles for a parent
   */
  async getChildrenProfiles(parentEmail: string): Promise<UserProfile[]> {
    try {
      const usersRef = collection(firestore, this.usersCollection);
      const q = query(
        usersRef, 
        where('parentEmail', '==', parentEmail),
        where('isChild', '==', true)
      );
      
      const querySnapshot = await getDocs(q);
      const children: UserProfile[] = [];
      
      querySnapshot.forEach((doc) => {
        children.push(doc.data() as UserProfile);
      });
      
      return children;
    } catch (error: any) {
      console.error('Error fetching children profiles:', error);
      throw new Error('Failed to fetch children profiles');
    }
  }

  /**
   * Update user's last login timestamp
   */
  async updateLastLogin(uid: string): Promise<void> {
    try {
      const userRef = doc(firestore, this.usersCollection, uid);
      await updateDoc(userRef, {
        lastLogin: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
    } catch (error: any) {
      console.error('Error updating last login:', error);
      // Don't throw error for this non-critical operation
    }
  }

  /**
   * Update account information (child name, age, diagnosis date)
   */
  async updateAccountInfo(uid: string, accountInfo: {
    childName: string;
    age: string;
    diagnosisDate: string;
  }): Promise<void> {
    try {
      const userRef = doc(firestore, this.usersCollection, uid);
      
      const updateData = {
        childName: accountInfo.childName,
        age: accountInfo.age,
        diagnosisDate: accountInfo.diagnosisDate,
        accountSetupComplete: true,
        updatedAt: Timestamp.now()
      };

      await updateDoc(userRef, updateData);
      console.log('Account information updated successfully');
    } catch (error: any) {
      console.error('Error updating account information:', error);
      throw new Error('Failed to update account information');
    }
  }

  /**
   * Batch create multiple user profiles (useful for family setup)
   */
  async createMultipleUserProfiles(usersData: CreateUserProfileData[]): Promise<void> {
    try {
      const promises = usersData.map(userData => this.createUserProfile(userData));
      await Promise.all(promises);
      console.log('Multiple user profiles created successfully');
    } catch (error: any) {
      console.error('Error creating multiple user profiles:', error);
      throw new Error('Failed to create multiple user profiles');
    }
  }
}

export default new FirestoreService();
