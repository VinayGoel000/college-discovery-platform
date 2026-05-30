import { type College } from "@/types";

export const COLLEGE_COURSE_OPTIONS = ["BTech", "MBA", "MCA", "BCA", "MBBS", "BSc"] as const;

export const INDIAN_STATES_AND_UTS = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
] as const;

export type CollegeSortDirection = "default" | "asc" | "desc";

export type CollegeFiltersState = {
  search: string;
  states: string[];
  feesSort: CollegeSortDirection;
  ratingSort: CollegeSortDirection;
};

export const defaultCollegeFilters: CollegeFiltersState = {
  search: "",
  states: [],
  feesSort: "default",
  ratingSort: "default"
};

export function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

function matchesSearch(college: College, search: string) {
  if (!search.trim()) {
    return true;
  }

  const normalizedSearch = normalizeText(search);
  const searchableText = [
    college.name,
    college.state,
    college.location,
    college.availableCourses.join(" ")
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(normalizedSearch);
}

function matchesStates(college: College, states: string[]) {
  if (states.length === 0) {
    return true;
  }

  return states.includes(college.state);
}

export function filterColleges(colleges: College[], filters: CollegeFiltersState) {
  return colleges.filter((college) => matchesSearch(college, filters.search) && matchesStates(college, filters.states));
}

export function sortColleges(colleges: College[], filters: CollegeFiltersState) {
  return [...colleges].sort((left, right) => {
    if (filters.feesSort !== "default") {
      const feeDelta = filters.feesSort === "asc" ? left.fees - right.fees : right.fees - left.fees;
      if (feeDelta !== 0) {
        return feeDelta;
      }
    }

    if (filters.ratingSort !== "default") {
      const ratingDelta =
        filters.ratingSort === "asc" ? left.rating - right.rating : right.rating - left.rating;
      if (ratingDelta !== 0) {
        return ratingDelta;
      }
    }

    return left.name.localeCompare(right.name);
  });
}

export function getActiveFilterSummary(filters: CollegeFiltersState) {
  return {
    search: filters.search.trim(),
    states: filters.states,
    feesSort: filters.feesSort,
    ratingSort: filters.ratingSort
  };
}
