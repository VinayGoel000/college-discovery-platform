import { mockColleges } from "@/data/mockColleges";
import { type College } from "@/types";

export interface CollegeRepository {
  list(): Promise<College[]>;
}

export class MockCollegeRepository implements CollegeRepository {
  async list(): Promise<College[]> {
    return mockColleges;
  }
}

export const collegeRepository: CollegeRepository = new MockCollegeRepository();
