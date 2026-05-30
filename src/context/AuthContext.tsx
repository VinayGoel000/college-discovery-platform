"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type AuthUserType = "guest" | "student";

export type AuthUser = {
  id: string;
  name: string;
  email?: string;
  type: AuthUserType;
};

type StudentProfile = Omit<AuthUser, "type">;

type AuthContextValue = {
  user: AuthUser;
  isGuest: boolean;
  isSignedIn: boolean;
  signInAsGuest: () => void;
  signInAsStudent: (user: StudentProfile) => void;
  registerAsStudent: (user: StudentProfile) => void;
  logout: () => void;
  authPromptOpen: boolean;
  openAuthPrompt: () => void;
  closeAuthPrompt: () => void;
};

const AUTH_STORAGE_KEY = "college-discovery-auth-user";

const guestUser: AuthUser = {
  id: "guest",
  name: "Guest User",
  type: "guest"
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function isStudentUser(value: unknown): value is AuthUser {
  if (!value || typeof value !== "object") return false;

  const maybeUser = value as Partial<AuthUser>;
  return (
    typeof maybeUser.id === "string" &&
    typeof maybeUser.name === "string" &&
    (maybeUser.type === "guest" || maybeUser.type === "student")
  );
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser>(guestUser);
  const [authPromptOpen, setAuthPromptOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (isStudentUser(parsed) && parsed.type === "student") {
          setUser(parsed);
        }
      }
    } catch {
      // Ignore malformed auth storage and stay in guest mode.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    if (user.type === "guest") {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
      return;
    }

    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  }, [hydrated, user]);

  const signInAsGuest = () => setUser(guestUser);

  const signInAsStudent = (nextUser: StudentProfile) =>
    setUser({
      ...nextUser,
      type: "student"
    });

  const registerAsStudent = signInAsStudent;
  const logout = signInAsGuest;
  const openAuthPrompt = () => setAuthPromptOpen(true);
  const closeAuthPrompt = () => setAuthPromptOpen(false);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isGuest: user.type === "guest",
      isSignedIn: user.type === "student",
      signInAsGuest,
      signInAsStudent,
      registerAsStudent,
      logout,
      authPromptOpen,
      openAuthPrompt,
      closeAuthPrompt
    }),
    [user, authPromptOpen]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
