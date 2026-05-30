"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { useAuth } from "@/context/AuthContext";

const COLLEGES_STORAGE_KEY = "college-discovery-saved-colleges";
const COMPARISONS_STORAGE_KEY = "college-discovery-saved-comparisons";

type SavedItemsContextValue = {
  savedColleges: string[];
  savedComparisons: string[][];
  toggleSavedCollege: (collegeId: string) => { saved: boolean; message?: string };
  saveComparison: (collegeIds: string[]) => { saved: boolean; message?: string };
  removeSavedCollege: (collegeId: string) => void;
  clearSavedComparisons: () => void;
  isSavedCollege: (collegeId: string) => boolean;
  hasSavedComparison: (collegeIds: string[]) => boolean;
};

const SavedItemsContext = createContext<SavedItemsContextValue | undefined>(undefined);

function normalizeComparison(collegeIds: string[]) {
  return [...new Set(collegeIds)].sort();
}

function areSameComparisons(left: string[], right: string[]) {
  if (left.length !== right.length) return false;
  return normalizeComparison(left).every((id, index) => id === normalizeComparison(right)[index]);
}

export function SavedItemsProvider({ children }: { children: React.ReactNode }) {
  const { isGuest } = useAuth();
  const [savedColleges, setSavedColleges] = useState<string[]>([]);
  const [savedComparisons, setSavedComparisons] = useState<string[][]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedColleges = window.localStorage.getItem(COLLEGES_STORAGE_KEY);
      const storedComparisons = window.localStorage.getItem(COMPARISONS_STORAGE_KEY);

      if (storedColleges) {
        const parsed: unknown = JSON.parse(storedColleges);
        if (Array.isArray(parsed)) {
          setSavedColleges(parsed.filter((id): id is string => typeof id === "string"));
        }
      }

      if (storedComparisons) {
        const parsed: unknown = JSON.parse(storedComparisons);
        if (Array.isArray(parsed)) {
          setSavedComparisons(
            parsed
              .filter((entry): entry is string[] => Array.isArray(entry))
              .map((entry) => entry.filter((id): id is string => typeof id === "string"))
          );
        }
      }
    } catch {
      // Ignore malformed saved item storage and keep defaults.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    window.localStorage.setItem(COLLEGES_STORAGE_KEY, JSON.stringify(savedColleges));
    window.localStorage.setItem(COMPARISONS_STORAGE_KEY, JSON.stringify(savedComparisons));
  }, [hydrated, savedColleges, savedComparisons]);

  const toggleSavedCollege = (collegeId: string) => {
    if (isGuest) {
      return { saved: false, message: "Please sign in to continue." };
    }

    const alreadySaved = savedColleges.includes(collegeId);
    setSavedColleges((current) => (alreadySaved ? current.filter((id) => id !== collegeId) : [...current, collegeId]));
    return { saved: !alreadySaved };
  };

  const saveComparison = (collegeIds: string[]) => {
    if (isGuest) {
      return { saved: false, message: "Please sign in to continue." };
    }

    const normalized = normalizeComparison(collegeIds);
    setSavedComparisons((current) => {
      if (current.some((existing) => areSameComparisons(existing, normalized))) {
        return current;
      }
      return [...current, normalized];
    });

    return { saved: true };
  };

  const removeSavedCollege = (collegeId: string) => {
    setSavedColleges((current) => current.filter((id) => id !== collegeId));
  };

  const clearSavedComparisons = () => setSavedComparisons([]);

  const value = useMemo<SavedItemsContextValue>(
    () => ({
      savedColleges,
      savedComparisons,
      toggleSavedCollege,
      saveComparison,
      removeSavedCollege,
      clearSavedComparisons,
      isSavedCollege: (collegeId: string) => savedColleges.includes(collegeId),
      hasSavedComparison: (collegeIds: string[]) =>
        savedComparisons.some((existing) => areSameComparisons(existing, collegeIds))
    }),
    [savedColleges, savedComparisons, isGuest]
  );

  return <SavedItemsContext.Provider value={value}>{children}</SavedItemsContext.Provider>;
}

export function useSavedItems() {
  const context = useContext(SavedItemsContext);
  if (!context) {
    throw new Error("useSavedItems must be used within a SavedItemsProvider");
  }
  return context;
}
