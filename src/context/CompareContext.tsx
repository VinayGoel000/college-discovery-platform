"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { mockCollegeDetails } from "@/services/mockCollegeDetail";
import { type CollegeDetail } from "@/types";

const STORAGE_KEY = "college-discovery-compare";
const MAX_COMPARE = 3;

type CompareContextValue = {
  selectedCollegeIds: string[];
  selectedColleges: CollegeDetail[];
  count: number;
  addCollegeById: (collegeId: string) => { added: boolean; message?: string };
  addCollege: (college: CollegeDetail) => { added: boolean; message?: string };
  removeCollege: (collegeId: string) => void;
  clearComparison: () => void;
  canCompare: boolean;
};

const CompareContext = createContext<CompareContextValue | undefined>(undefined);

function isValidCollegeId(id: string): id is keyof typeof mockCollegeDetails {
  return id in mockCollegeDetails;
}

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [selectedCollegeIds, setSelectedCollegeIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setHydrated(true);
      return;
    }

    try {
      const parsed: unknown = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        const sanitized = parsed.filter((id): id is string => typeof id === "string" && isValidCollegeId(id));
        setSelectedCollegeIds(sanitized.slice(0, MAX_COMPARE));
      }
    } catch {
      // Ignore malformed storage and fall back to empty selection.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedCollegeIds));
  }, [hydrated, selectedCollegeIds]);

  const selectedColleges = useMemo(
    () => selectedCollegeIds.map((id) => mockCollegeDetails[id]).filter(Boolean) as CollegeDetail[],
    [selectedCollegeIds]
  );

  const addCollegeById = (collegeId: string) => {
    if (!isValidCollegeId(collegeId)) {
      return { added: false, message: "College is not available for comparison." };
    }

    if (selectedCollegeIds.includes(collegeId)) {
      return { added: false, message: "College already added to compare." };
    }

    if (selectedCollegeIds.length >= MAX_COMPARE) {
      return { added: false, message: "You can compare a maximum of 3 colleges." };
    }

    setSelectedCollegeIds((current) => [...current, collegeId]);
    return { added: true };
  };

  const addCollege = (college: CollegeDetail) => addCollegeById(college.id);

  const removeCollege = (collegeId: string) => {
    setSelectedCollegeIds((current) => current.filter((id) => id !== collegeId));
  };

  const clearComparison = () => setSelectedCollegeIds([]);

  const value = useMemo<CompareContextValue>(
    () => ({
      selectedCollegeIds,
      selectedColleges,
      count: selectedCollegeIds.length,
      addCollegeById,
      addCollege,
      removeCollege,
      clearComparison,
      canCompare: selectedCollegeIds.length >= 2
    }),
    [selectedCollegeIds, selectedColleges]
  );

  return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>;
}

export function useCompare() {
  const context = useContext(CompareContext);

  if (!context) {
    throw new Error("useCompare must be used within a CompareProvider");
  }

  return context;
}
