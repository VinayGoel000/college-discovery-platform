export type College = {
  id: string;
  name: string;
  state: string;
  location: string;
  fees: number;
  rating: number;
  availableCourses: string[];
  acceptedExams: Array<{
    exam: string;
    closingRank: number;
  }>;
  description?: string;
};

export interface Course {
  id: string;
  name: string;
  degreeType: string;
  duration: string;
  totalFees: string;
  seatsAvailable: number;
}

export interface Review {
  id: string;
  studentName: string;
  rating: number;
  reviewText: string;
  reviewDate: string;
}

export type User = {
  id: string;
  name?: string;
  email?: string;
  image?: string;
};

export interface Placement {
  averagePackage: string;
  highestPackage: string;
  placementPercentage: string;
  totalRecruiters: number;
  topRecruiters: string[];
}

export interface CollegeDetail extends College {
  imageUrl: string;
  establishedYear: number;
  ownershipType: string;
  websiteUrl: string;
  courses: Course[];
  placement: Placement;
  reviews: Review[];
}
