import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User } from 'firebase/auth';
import authService, { AuthUser, SignUpData, LoginData } from '../services/authService';
import firestoreService, { UserProfile } from '../services/firestoreService';
// Import Firebase config to ensure proper initialization
import '../config/firebase';

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signUp: (data: SignUpData) => Promise<void>;
  signIn: (data: LoginData) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  refreshUserProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true); // Start with loading true
  const [initialized, setInitialized] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false); // Track signup process

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const initializeAuth = async () => {
      try {
        // Small delay to ensure Firebase is fully initialized
        await new Promise(resolve => setTimeout(resolve, 100));
        
        unsubscribe = authService.onAuthStateChanged(async (user) => {
          console.log('Auth state changed:', user?.uid || 'No user');
          setUser(user);
          
          if (user) {
            // Skip profile fetch if we're in the middle of signup process
            // The signup function will handle profile creation and setting
            if (!isSigningUp) {
              // Fetch user profile from Firestore
              try {
                const profile = await firestoreService.getUserProfile(user.uid);
                setUserProfile(profile);
                
                // Update last login (non-blocking)
                firestoreService.updateLastLogin(user.uid).catch(error => {
                  console.warn('Failed to update last login:', error);
                });
              } catch (error) {
                console.error('Error fetching user profile:', error);
                setUserProfile(null);
              }
            }
          } else {
            setUserProfile(null);
          }
          
          // Only set loading to false if we're not in signup process
          if (!isSigningUp) {
            setLoading(false);
            setInitialized(true);
          }
        });
      } catch (error) {
        console.error('Error initializing auth listener:', error);
        setLoading(false);
        setInitialized(true);
      }
    };

    initializeAuth();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [isSigningUp]); // Add isSigningUp to dependencies

  const signUp = async (data: SignUpData): Promise<void> => {
    setIsSigningUp(true);
    setLoading(true);
    try {
      // Create Firebase Auth user
      const authUser = await authService.signUp(data);
      
      // Create user profile in Firestore
      const userProfileData = {
        uid: authUser.uid,
        email: authUser.email || '',
        firstName: data.firstName,
        lastName: data.lastName
      };
      
      await firestoreService.createUserProfile(userProfileData);
      
      // Manually set the user profile to avoid race condition
      const newProfile = await firestoreService.getUserProfile(authUser.uid);
      setUserProfile(newProfile);
      
      console.log('User signed up successfully');
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    } finally {
      setIsSigningUp(false);
      setLoading(false);
      setInitialized(true);
    }
  };

  const signIn = async (data: LoginData): Promise<void> => {
    setLoading(true);
    try {
      await authService.signIn(data);
      console.log('User signed in successfully');
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async (): Promise<void> => {
    setLoading(true);
    try {
      await authService.signOut();
      setUserProfile(null);
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string): Promise<void> => {
    try {
      await authService.resetPassword(email);
      console.log('Password reset email sent');
    } catch (error) {
      console.error('Password reset error:', error);
      throw error;
    }
  };

  const refreshUserProfile = async (): Promise<void> => {
    if (user) {
      try {
        const profile = await firestoreService.getUserProfile(user.uid);
        setUserProfile(profile);
      } catch (error) {
        console.error('Error refreshing user profile:', error);
      }
    }
  };

  const value: AuthContextType = {
    user,
    userProfile,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    refreshUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
