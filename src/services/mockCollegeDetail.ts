import { type CollegeDetail } from "@/types";

export const mockCollegeDetails: Record<string, CollegeDetail> = {
  "iit-delhi": {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    state: "Delhi",
    location: "Hauz Khas, New Delhi",
    rating: 4.9,
    fees: 250000,
    availableCourses: ["BTech", "MTech", "MBA", "MSc"],
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80",
    description:
      "Premier engineering institute with top-tier research and placements.",
    establishedYear: 1961,
    ownershipType: "Public",
    websiteUrl: "https://home.iitd.ac.in",
    courses: [
      { id: "iitd-c1", name: "B.Tech Computer Science and Engineering", duration: "4 Years", totalFees: "INR 8L", degreeType: "Undergraduate", seatsAvailable: 120 },
      { id: "iitd-c2", name: "B.Tech Electrical Engineering", duration: "4 Years", totalFees: "INR 8L", degreeType: "Undergraduate", seatsAvailable: 90 },
      { id: "iitd-c3", name: "MBA", duration: "2 Years", totalFees: "INR 10L", degreeType: "Postgraduate", seatsAvailable: 60 }
    ],
    placement: {
      averagePackage: "INR 20.5 LPA",
      highestPackage: "INR 1.2 Cr",
      placementPercentage: "98%",
      totalRecruiters: 180,
      topRecruiters: ["Google", "Microsoft", "Apple", "Uber"]
    },
    reviews: []
  },
  "nit-trichy": {
    id: "nit-trichy",
    name: "National Institute of Technology Trichy",
    state: "Tamil Nadu",
    location: "Tiruchirappalli, Tamil Nadu",
    rating: 4.8,
    fees: 120000,
    availableCourses: ["BTech", "MTech", "MBA", "MCA"],
    imageUrl:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
    description:
      "One of India's most respected NITs with strong core engineering programs.",
    establishedYear: 1964,
    ownershipType: "Public",
    websiteUrl: "https://www.nitt.edu",
    courses: [],
    placement: {
      averagePackage: "INR 16.8 LPA",
      highestPackage: "INR 45 LPA",
      placementPercentage: "95%",
      totalRecruiters: 140,
      topRecruiters: ["Amazon", "Oracle", "TCS", "Intel"]
    },
    reviews: []
  },
  "vit-vellore": {
    id: "vit-vellore",
    name: "VIT Vellore",
    state: "Tamil Nadu",
    location: "Vellore, Tamil Nadu",
    rating: 4.6,
    fees: 230000,
    availableCourses: ["BTech", "MBA", "MCA", "BSc"],
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-0b3d6b1f5d12?auto=format&fit=crop&w=1400&q=80",
    description:
      "Private university known for scale, internships, and diverse programs.",
    establishedYear: 1984,
    ownershipType: "Private",
    websiteUrl: "https://vit.ac.in",
    courses: [],
    placement: {
      averagePackage: "INR 9.6 LPA",
      highestPackage: "INR 88 LPA",
      placementPercentage: "91%",
      totalRecruiters: 220,
      topRecruiters: ["Accenture", "Adobe", "Bosch", "Wipro"]
    },
    reviews: []
  }
};

export function getMockCollegeDetail(id: string): CollegeDetail | undefined {
  return mockCollegeDetails[id];
}
