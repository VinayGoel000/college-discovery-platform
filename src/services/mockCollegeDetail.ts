import { type CollegeDetail } from "@/types";

const topRecruiters = ["Google", "Microsoft", "Amazon", "TCS", "Infosys"] as const;

export const mockCollegeDetails: Record<string, CollegeDetail> = {
  "iit-delhi": {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    state: "Delhi",
    location: "Hauz Khas, New Delhi",
    rating: 4.9,
    fees: 250000,
    availableCourses: ["BTech", "MTech", "MBA", "MSc"],
    acceptedExams: [
      { exam: "JEE Advanced", closingRank: 500 },
      { exam: "JEE Main", closingRank: 250 }
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80",
    description: "Premier engineering institute with top-tier research and placements.",
    establishedYear: 1961,
    ownershipType: "Public",
    websiteUrl: "https://home.iitd.ac.in",
    courses: [
      {
        id: "iitd-c1",
        name: "B.Tech Computer Science and Engineering",
        duration: "4 Years",
        totalFees: "₹8,00,000",
        degreeType: "Undergraduate",
        seatsAvailable: 120
      },
      {
        id: "iitd-c2",
        name: "B.Tech Electrical Engineering",
        duration: "4 Years",
        totalFees: "₹8,00,000",
        degreeType: "Undergraduate",
        seatsAvailable: 90
      },
      {
        id: "iitd-c3",
        name: "MBA",
        duration: "2 Years",
        totalFees: "₹10,00,000",
        degreeType: "Postgraduate",
        seatsAvailable: 60
      }
    ],
    placement: {
      averagePackage: "₹20.5 LPA",
      highestPackage: "₹1.2 Cr",
      placementPercentage: "98%",
      totalRecruiters: 180,
      topRecruiters: [...topRecruiters]
    },
    reviews: [
      {
        id: "iitd-r1",
        studentName: "Ananya Sharma",
        rating: 5,
        reviewText: "Campus life is excellent, faculty support is strong, and placements are outstanding.",
        reviewDate: "2026-04-18"
      },
      {
        id: "iitd-r2",
        studentName: "Rahul Verma",
        rating: 5,
        reviewText: "The peer group is exceptional and the academic environment pushes you to grow fast.",
        reviewDate: "2026-03-12"
      }
    ]
  },
  "iit-bombay": {
    id: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    state: "Maharashtra",
    location: "Powai, Mumbai",
    rating: 4.9,
    fees: 250000,
    availableCourses: ["BTech", "MTech", "MBA", "PhD"],
    acceptedExams: [
      { exam: "JEE Advanced", closingRank: 300 },
      { exam: "JEE Main", closingRank: 180 }
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
    description: "Top-ranked institute known for innovation, research, and strong alumni impact.",
    establishedYear: 1958,
    ownershipType: "Public",
    websiteUrl: "https://www.iitb.ac.in",
    courses: [
      {
        id: "iitb-c1",
        name: "B.Tech Computer Science and Engineering",
        duration: "4 Years",
        totalFees: "₹8,00,000",
        degreeType: "Undergraduate",
        seatsAvailable: 130
      },
      {
        id: "iitb-c2",
        name: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        totalFees: "₹8,00,000",
        degreeType: "Undergraduate",
        seatsAvailable: 110
      },
      {
        id: "iitb-c3",
        name: "MBA",
        duration: "2 Years",
        totalFees: "₹10,00,000",
        degreeType: "Postgraduate",
        seatsAvailable: 70
      }
    ],
    placement: {
      averagePackage: "₹21.8 LPA",
      highestPackage: "₹1.4 Cr",
      placementPercentage: "97%",
      totalRecruiters: 200,
      topRecruiters: [...topRecruiters]
    },
    reviews: [
      {
        id: "iitb-r1",
        studentName: "Meera Nair",
        rating: 5,
        reviewText: "The campus ecosystem is unmatched, and the career opportunities are incredible.",
        reviewDate: "2026-04-05"
      }
    ]
  },
  "iit-kanpur": {
    id: "iit-kanpur",
    name: "Indian Institute of Technology Kanpur",
    state: "Uttar Pradesh",
    location: "Kanpur, Uttar Pradesh",
    rating: 4.8,
    fees: 220000,
    availableCourses: ["BTech", "MTech", "MBA", "MSc"],
    acceptedExams: [
      { exam: "JEE Advanced", closingRank: 1200 },
      { exam: "JEE Main", closingRank: 350 }
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1400&q=80",
    description: "Research-focused IIT with deep technical rigor and strong placement outcomes.",
    establishedYear: 1959,
    ownershipType: "Public",
    websiteUrl: "https://www.iitk.ac.in",
    courses: [
      {
        id: "iitk-c1",
        name: "B.Tech Computer Science and Engineering",
        duration: "4 Years",
        totalFees: "₹7,80,000",
        degreeType: "Undergraduate",
        seatsAvailable: 100
      },
      {
        id: "iitk-c2",
        name: "B.Tech Aerospace Engineering",
        duration: "4 Years",
        totalFees: "₹7,80,000",
        degreeType: "Undergraduate",
        seatsAvailable: 60
      },
      {
        id: "iitk-c3",
        name: "MBA",
        duration: "2 Years",
        totalFees: "₹9,50,000",
        degreeType: "Postgraduate",
        seatsAvailable: 50
      }
    ],
    placement: {
      averagePackage: "₹19.2 LPA",
      highestPackage: "₹1.1 Cr",
      placementPercentage: "96%",
      totalRecruiters: 165,
      topRecruiters: [...topRecruiters]
    },
    reviews: [
      {
        id: "iitk-r1",
        studentName: "Arjun Singh",
        rating: 5,
        reviewText: "The academic culture is intense but extremely rewarding for serious students.",
        reviewDate: "2026-03-28"
      }
    ]
  },
  "nit-trichy": {
    id: "nit-trichy",
    name: "National Institute of Technology Trichy",
    state: "Tamil Nadu",
    location: "Tiruchirappalli, Tamil Nadu",
    rating: 4.8,
    fees: 120000,
    availableCourses: ["BTech", "MTech", "MBA", "MCA"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 12000 },
      { exam: "GATE", closingRank: 2500 }
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
    description: "One of India's most respected NITs with strong core engineering programs.",
    establishedYear: 1964,
    ownershipType: "Public",
    websiteUrl: "https://www.nitt.edu",
    courses: [
      {
        id: "nitt-c1",
        name: "B.Tech Computer Science and Engineering",
        duration: "4 Years",
        totalFees: "₹6,20,000",
        degreeType: "Undergraduate",
        seatsAvailable: 120
      },
      {
        id: "nitt-c2",
        name: "B.Tech Electronics and Communication Engineering",
        duration: "4 Years",
        totalFees: "₹6,20,000",
        degreeType: "Undergraduate",
        seatsAvailable: 110
      },
      {
        id: "nitt-c3",
        name: "MCA",
        duration: "2 Years",
        totalFees: "₹2,40,000",
        degreeType: "Postgraduate",
        seatsAvailable: 60
      }
    ],
    placement: {
      averagePackage: "₹16.8 LPA",
      highestPackage: "₹45 LPA",
      placementPercentage: "95%",
      totalRecruiters: 140,
      topRecruiters: [...topRecruiters]
    },
    reviews: [
      {
        id: "nitt-r1",
        studentName: "Karthik R",
        rating: 5,
        reviewText: "Great academic balance and strong placements in core and software roles.",
        reviewDate: "2026-04-01"
      },
      {
        id: "nitt-r2",
        studentName: "Priya S",
        rating: 4,
        reviewText: "Excellent faculty and a disciplined environment with active student clubs.",
        reviewDate: "2026-02-19"
      }
    ]
  },
  "nit-surathkal": {
    id: "nit-surathkal",
    name: "NIT Karnataka Surathkal",
    state: "Karnataka",
    location: "Surathkal, Mangaluru",
    rating: 4.7,
    fees: 110000,
    availableCourses: ["BTech", "MTech", "MBA", "MCA"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 15000 },
      { exam: "GATE", closingRank: 3000 }
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-0b3d6b1f5d12?auto=format&fit=crop&w=1400&q=80",
    description: "Popular NIT with a strong seaside campus and active placement season.",
    establishedYear: 1960,
    ownershipType: "Public",
    websiteUrl: "https://www.nitk.ac.in",
    courses: [
      {
        id: "nitk-c1",
        name: "B.Tech Computer Science and Engineering",
        duration: "4 Years",
        totalFees: "₹5,50,000",
        degreeType: "Undergraduate",
        seatsAvailable: 110
      },
      {
        id: "nitk-c2",
        name: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        totalFees: "₹5,50,000",
        degreeType: "Undergraduate",
        seatsAvailable: 90
      },
      {
        id: "nitk-c3",
        name: "MBA",
        duration: "2 Years",
        totalFees: "₹3,20,000",
        degreeType: "Postgraduate",
        seatsAvailable: 50
      }
    ],
    placement: {
      averagePackage: "₹14.7 LPA",
      highestPackage: "₹40 LPA",
      placementPercentage: "93%",
      totalRecruiters: 125,
      topRecruiters: [...topRecruiters]
    },
    reviews: [
      {
        id: "nitk-r1",
        studentName: "Sanjana M",
        rating: 5,
        reviewText: "Strong alumni network and a very student-friendly campus atmosphere.",
        reviewDate: "2026-03-15"
      }
    ]
  },
  "vit-vellore": {
    id: "vit-vellore",
    name: "VIT Vellore",
    state: "Tamil Nadu",
    location: "Vellore, Tamil Nadu",
    rating: 4.6,
    fees: 230000,
    availableCourses: ["BTech", "MBA", "MCA", "BSc"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 45000 },
      { exam: "CAT", closingRank: 6000 },
      { exam: "NEET", closingRank: 18000 }
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80",
    description: "Private university known for scale, internships, and diverse programs.",
    establishedYear: 1984,
    ownershipType: "Private",
    websiteUrl: "https://vit.ac.in",
    courses: [
      {
        id: "vit-c1",
        name: "B.Tech Computer Science and Engineering",
        duration: "4 Years",
        totalFees: "₹9,20,000",
        degreeType: "Undergraduate",
        seatsAvailable: 180
      },
      {
        id: "vit-c2",
        name: "MBA",
        duration: "2 Years",
        totalFees: "₹5,80,000",
        degreeType: "Postgraduate",
        seatsAvailable: 120
      },
      {
        id: "vit-c3",
        name: "MCA",
        duration: "2 Years",
        totalFees: "₹4,40,000",
        degreeType: "Postgraduate",
        seatsAvailable: 90
      }
    ],
    placement: {
      averagePackage: "₹9.6 LPA",
      highestPackage: "₹88 LPA",
      placementPercentage: "91%",
      totalRecruiters: 220,
      topRecruiters: [...topRecruiters]
    },
    reviews: [
      {
        id: "vit-r1",
        studentName: "Nikhil P",
        rating: 4,
        reviewText: "Good industry exposure and plenty of opportunities for internships and projects.",
        reviewDate: "2026-04-09"
      },
      {
        id: "vit-r2",
        studentName: "Anushka R",
        rating: 4,
        reviewText: "Large campus with many clubs and an active placement ecosystem.",
        reviewDate: "2026-02-22"
      }
    ]
  },
  "srm-chennai": {
    id: "srm-chennai",
    name: "SRM Institute of Science and Technology",
    state: "Tamil Nadu",
    location: "Kattankulathur, Chennai",
    rating: 4.4,
    fees: 240000,
    availableCourses: ["BTech", "MBA", "MCA", "BSc"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 42000 },
      { exam: "CAT", closingRank: 9000 },
      { exam: "CUET", closingRank: 18000 },
      { exam: "NEET", closingRank: 25000 }
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=80",
    description: "Large private university with a broad academic portfolio.",
    establishedYear: 1985,
    ownershipType: "Private",
    websiteUrl: "https://www.srmist.edu.in",
    courses: [
      {
        id: "srm-c1",
        name: "B.Tech Computer Science and Engineering",
        duration: "4 Years",
        totalFees: "₹10,00,000",
        degreeType: "Undergraduate",
        seatsAvailable: 240
      },
      {
        id: "srm-c2",
        name: "B.Tech Artificial Intelligence and Data Science",
        duration: "4 Years",
        totalFees: "₹10,50,000",
        degreeType: "Undergraduate",
        seatsAvailable: 180
      },
      {
        id: "srm-c3",
        name: "MCA",
        duration: "2 Years",
        totalFees: "₹4,80,000",
        degreeType: "Postgraduate",
        seatsAvailable: 90
      }
    ],
    placement: {
      averagePackage: "₹8.9 LPA",
      highestPackage: "₹50 LPA",
      placementPercentage: "88%",
      totalRecruiters: 210,
      topRecruiters: [...topRecruiters]
    },
    reviews: [
      {
        id: "srm-r1",
        studentName: "Divya K",
        rating: 4,
        reviewText: "The campus is well equipped and has a wide range of opportunities.",
        reviewDate: "2026-03-03"
      }
    ]
  },
  "amity-noida": {
    id: "amity-noida",
    name: "Amity University Noida",
    state: "Uttar Pradesh",
    location: "Noida, Uttar Pradesh",
    rating: 4.0,
    fees: 200000,
    availableCourses: ["BTech", "MBA", "MCA", "BCA"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 65000 },
      { exam: "CAT", closingRank: 12000 },
      { exam: "CUET", closingRank: 30000 }
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1400&q=80",
    description: "Wide-ranging private university with many professional programs.",
    establishedYear: 2005,
    ownershipType: "Private",
    websiteUrl: "https://www.amity.edu/noida",
    courses: [
      {
        id: "amity-c1",
        name: "B.Tech Computer Science and Engineering",
        duration: "4 Years",
        totalFees: "₹9,60,000",
        degreeType: "Undergraduate",
        seatsAvailable: 200
      },
      {
        id: "amity-c2",
        name: "MBA",
        duration: "2 Years",
        totalFees: "₹6,80,000",
        degreeType: "Postgraduate",
        seatsAvailable: 150
      },
      {
        id: "amity-c3",
        name: "BCA",
        duration: "3 Years",
        totalFees: "₹4,20,000",
        degreeType: "Undergraduate",
        seatsAvailable: 180
      }
    ],
    placement: {
      averagePackage: "₹7.2 LPA",
      highestPackage: "₹32 LPA",
      placementPercentage: "84%",
      totalRecruiters: 190,
      topRecruiters: [...topRecruiters]
    },
    reviews: [
      {
        id: "amity-r1",
        studentName: "Ritika A",
        rating: 4,
        reviewText: "Good infrastructure and a large choice of courses with decent placement support.",
        reviewDate: "2026-04-12"
      },
      {
        id: "amity-r2",
        studentName: "Mohit T",
        rating: 4,
        reviewText: "A good option if you want a private university with broad exposure.",
        reviewDate: "2026-01-29"
      }
    ]
  }
};

export function getMockCollegeDetail(id: string): CollegeDetail | undefined {
  return mockCollegeDetails[id];
}
