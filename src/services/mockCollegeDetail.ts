import { type CollegeDetail } from "@/types";

export const mockCollegeDetails: Record<string, CollegeDetail> = {
  c1: {
    id: "c1",
    name: "National Institute of Technology",
    location: "Delhi, India",
    rating: 4.7,
    fees: "INR 1.8L / year",
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80",
    description:
      "A highly regarded engineering institution known for strong academics, disciplined campus culture, and solid placement outcomes.",
    establishedYear: 2010,
    ownershipType: "Public",
    websiteUrl: "https://nitdelhi.ac.in",
    courses: [
      {
        id: "c1",
        name: "B.Tech Computer Science",
        duration: "4 Years",
        totalFees: "INR 7.2L",
        degreeType: "Undergraduate",
        seatsAvailable: 120
      },
      {
        id: "c2",
        name: "B.Tech Electronics",
        duration: "4 Years",
        totalFees: "INR 6.8L",
        degreeType: "Undergraduate",
        seatsAvailable: 90
      },
      {
        id: "c3",
        name: "M.Tech Data Science",
        duration: "2 Years",
        totalFees: "INR 2.4L",
        degreeType: "Postgraduate",
        seatsAvailable: 30
      }
    ],
    placement: {
      averagePackage: "INR 12.4 LPA",
      highestPackage: "INR 38 LPA",
      placementPercentage: "92%",
      totalRecruiters: 110,
      topRecruiters: ["Google", "Amazon", "Microsoft", "Infosys"]
    },
    reviews: [
      {
        id: "r1",
        studentName: "Ananya Sharma",
        rating: 5,
        reviewText: "Excellent faculty and a very focused academic environment.",
        reviewDate: "2026-03-18"
      },
      {
        id: "r2",
        studentName: "Rahul Verma",
        rating: 4,
        reviewText: "Placements are strong and the course structure is industry-aligned.",
        reviewDate: "2026-02-11"
      }
    ]
  },
  c2: {
    id: "c2",
    name: "St. Xavier's College",
    location: "Mumbai, India",
    rating: 4.5,
    fees: "INR 1.4L / year",
    imageUrl:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
    description:
      "A respected institution with strong humanities, commerce, and arts programs supported by active campus life.",
    establishedYear: 1869,
    ownershipType: "Private Aided",
    websiteUrl: "https://xaviers.edu",
    courses: [
      {
        id: "c2-1",
        name: "B.A. Economics",
        duration: "3 Years",
        totalFees: "INR 4.2L",
        degreeType: "Undergraduate",
        seatsAvailable: 60
      },
      {
        id: "c2-2",
        name: "B.Com",
        duration: "3 Years",
        totalFees: "INR 4.5L",
        degreeType: "Undergraduate",
        seatsAvailable: 80
      }
    ],
    placement: {
      averagePackage: "INR 8.2 LPA",
      highestPackage: "INR 22 LPA",
      placementPercentage: "85%",
      totalRecruiters: 75,
      topRecruiters: ["Deloitte", "EY", "KPMG", "HDFC Bank"]
    },
    reviews: [
      {
        id: "r3",
        studentName: "Meera Nair",
        rating: 4,
        reviewText: "Great atmosphere for holistic learning and extracurricular growth.",
        reviewDate: "2026-04-02"
      }
    ]
  },
  c3: {
    id: "c3",
    name: "Christ University",
    location: "Bengaluru, India",
    rating: 4.6,
    fees: "INR 2.1L / year",
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-0b3d6b1f5d12?auto=format&fit=crop&w=1400&q=80",
    description:
      "A multidisciplinary university with modern facilities, structured academics, and good industry exposure.",
    establishedYear: 1969,
    ownershipType: "Private",
    websiteUrl: "https://christuniversity.in",
    courses: [
      {
        id: "c3-1",
        name: "BBA",
        duration: "3 Years",
        totalFees: "INR 6.3L",
        degreeType: "Undergraduate",
        seatsAvailable: 120
      },
      {
        id: "c3-2",
        name: "MBA",
        duration: "2 Years",
        totalFees: "INR 6.8L",
        degreeType: "Postgraduate",
        seatsAvailable: 90
      }
    ],
    placement: {
      averagePackage: "INR 7.9 LPA",
      highestPackage: "INR 21 LPA",
      placementPercentage: "88%",
      totalRecruiters: 95,
      topRecruiters: ["Accenture", "Capgemini", "Wipro", "Cognizant"]
    },
    reviews: [
      {
        id: "r4",
        studentName: "Aditya Rao",
        rating: 5,
        reviewText: "Well-managed campus and a strong option for business programs.",
        reviewDate: "2026-01-27"
      }
    ]
  }
};

export function getMockCollegeDetail(id: string): CollegeDetail | undefined {
  return mockCollegeDetails[id];
}
