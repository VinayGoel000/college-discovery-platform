import { type College } from "@/types";

export const mockColleges: College[] = [
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    state: "Delhi",
    location: "Hauz Khas, New Delhi",
    fees: 250000,
    rating: 4.9,
    availableCourses: ["BTech", "MTech", "MBA", "MSc"],
    acceptedExams: [
      { exam: "JEE Advanced", closingRank: 500 },
      { exam: "JEE Main", closingRank: 250 }
    ],
    description: "Premier engineering institute with top-tier research and placements."
  },
  {
    id: "nit-trichy",
    name: "National Institute of Technology Trichy",
    state: "Tamil Nadu",
    location: "Tiruchirappalli, Tamil Nadu",
    fees: 120000,
    rating: 4.8,
    availableCourses: ["BTech", "MTech", "MBA", "MCA"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 12000 },
      { exam: "GATE", closingRank: 2500 }
    ],
    description: "One of India's most respected NITs with strong core engineering programs."
  },
  {
    id: "vit-vellore",
    name: "VIT Vellore",
    state: "Tamil Nadu",
    location: "Vellore, Tamil Nadu",
    fees: 230000,
    rating: 4.6,
    availableCourses: ["BTech", "MBA", "MCA", "BSc"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 45000 },
      { exam: "CAT", closingRank: 6000 },
      { exam: "NEET", closingRank: 18000 }
    ],
    description: "Private university known for scale, internships, and diverse programs."
  },
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    state: "Maharashtra",
    location: "Powai, Mumbai",
    fees: 250000,
    rating: 4.9,
    availableCourses: ["BTech", "MTech", "MBA", "PhD"],
    acceptedExams: [
      { exam: "JEE Advanced", closingRank: 300 },
      { exam: "JEE Main", closingRank: 180 }
    ],
    description: "A top-ranked institute with strong innovation and industry outcomes."
  },
  {
    id: "iit-madras",
    name: "Indian Institute of Technology Madras",
    state: "Tamil Nadu",
    location: "Chennai, Tamil Nadu",
    fees: 240000,
    rating: 4.9,
    availableCourses: ["BTech", "MTech", "MBA", "MSc"],
    acceptedExams: [
      { exam: "JEE Advanced", closingRank: 800 },
      { exam: "JEE Main", closingRank: 220 }
    ],
    description: "Research-led campus with excellent technology and entrepreneurship support."
  },
  {
    id: "iit-kanpur",
    name: "Indian Institute of Technology Kanpur",
    state: "Uttar Pradesh",
    location: "Kanpur, Uttar Pradesh",
    fees: 220000,
    rating: 4.8,
    availableCourses: ["BTech", "MTech", "MBA", "MSc"],
    acceptedExams: [
      { exam: "JEE Advanced", closingRank: 1200 },
      { exam: "JEE Main", closingRank: 350 }
    ],
    description: "Known for rigorous academics, research, and strong technical culture."
  },
  {
    id: "iit-kharagpur",
    name: "Indian Institute of Technology Kharagpur",
    state: "West Bengal",
    location: "Kharagpur, West Bengal",
    fees: 210000,
    rating: 4.8,
    availableCourses: ["BTech", "MTech", "MBA", "BArch"],
    acceptedExams: [
      { exam: "JEE Advanced", closingRank: 1800 },
      { exam: "JEE Main", closingRank: 500 }
    ],
    description: "Historic IIT with broad academic offerings and a large campus."
  },
  {
    id: "iit-roorkee",
    name: "Indian Institute of Technology Roorkee",
    state: "Uttarakhand",
    location: "Roorkee, Uttarakhand",
    fees: 205000,
    rating: 4.7,
    availableCourses: ["BTech", "MTech", "MBA", "BArch"],
    acceptedExams: [
      { exam: "JEE Advanced", closingRank: 2200 },
      { exam: "JEE Main", closingRank: 650 }
    ],
    description: "A legacy institute with strong civil, mechanical, and architecture programs."
  },
  {
    id: "nit-surathkal",
    name: "NIT Karnataka Surathkal",
    state: "Karnataka",
    location: "Surathkal, Mangaluru",
    fees: 110000,
    rating: 4.7,
    availableCourses: ["BTech", "MTech", "MBA", "MCA"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 15000 },
      { exam: "GATE", closingRank: 3000 },
      { exam: "CAT", closingRank: 6500 }
    ],
    description: "Popular NIT with a strong seaside campus and active placement season."
  },
  {
    id: "nit-warangal",
    name: "National Institute of Technology Warangal",
    state: "Telangana",
    location: "Warangal, Telangana",
    fees: 115000,
    rating: 4.7,
    availableCourses: ["BTech", "MTech", "MBA", "MCA"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 14000 },
      { exam: "GATE", closingRank: 2800 },
      { exam: "CAT", closingRank: 7000 }
    ],
    description: "Flagship NIT with excellent engineering programs and campus life."
  },
  {
    id: "nit-rourkela",
    name: "National Institute of Technology Rourkela",
    state: "Odisha",
    location: "Rourkela, Odisha",
    fees: 108000,
    rating: 4.6,
    availableCourses: ["BTech", "MTech", "MBA", "MSc"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 17000 },
      { exam: "GATE", closingRank: 3200 },
      { exam: "CAT", closingRank: 7500 }
    ],
    description: "Well-regarded technical campus with steady industry outcomes."
  },
  {
    id: "iiit-hyderabad",
    name: "International Institute of Information Technology Hyderabad",
    state: "Telangana",
    location: "Gachibowli, Hyderabad",
    fees: 280000,
    rating: 4.8,
    availableCourses: ["BTech", "MTech", "MSc"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 6000 },
      { exam: "GATE", closingRank: 900 }
    ],
    description: "Specialized institute focused on computer science and research excellence."
  },
  {
    id: "iiit-bangalore",
    name: "International Institute of Information Technology Bangalore",
    state: "Karnataka",
    location: "Electronic City, Bengaluru",
    fees: 260000,
    rating: 4.7,
    availableCourses: ["BTech", "MTech", "MBA"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 10000 },
      { exam: "CAT", closingRank: 5000 },
      { exam: "GATE", closingRank: 2500 }
    ],
    description: "Industry-connected technology institute with a strong startup ecosystem."
  },
  {
    id: "iiit-allahabad",
    name: "Indian Institute of Information Technology Allahabad",
    state: "Uttar Pradesh",
    location: "Prayagraj, Uttar Pradesh",
    fees: 175000,
    rating: 4.6,
    availableCourses: ["BTech", "MTech", "MBA"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 20000 },
      { exam: "CAT", closingRank: 7000 },
      { exam: "GATE", closingRank: 3500 }
    ],
    description: "One of the leading IIITs for software, systems, and applied research."
  },
  {
    id: "iiit-delhi",
    name: "Indraprastha Institute of Information Technology Delhi",
    state: "Delhi",
    location: "Okhla, New Delhi",
    fees: 225000,
    rating: 4.7,
    availableCourses: ["BTech", "MTech", "PhD"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 8000 },
      { exam: "GATE", closingRank: 1800 }
    ],
    description: "Research-driven university with strong CS and design programs."
  },
  {
    id: "vit-chennai",
    name: "VIT Chennai",
    state: "Tamil Nadu",
    location: "Chennai, Tamil Nadu",
    fees: 220000,
    rating: 4.5,
    availableCourses: ["BTech", "MBA", "MCA", "BCA"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 35000 },
      { exam: "CAT", closingRank: 8000 },
      { exam: "CUET", closingRank: 12000 }
    ],
    description: "Modern private campus with varied undergraduate and postgraduate options."
  },
  {
    id: "srm-chennai",
    name: "SRM Institute of Science and Technology",
    state: "Tamil Nadu",
    location: "Kattankulathur, Chennai",
    fees: 240000,
    rating: 4.4,
    availableCourses: ["BTech", "MBA", "MCA", "BSc"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 42000 },
      { exam: "CAT", closingRank: 9000 },
      { exam: "CUET", closingRank: 18000 },
      { exam: "NEET", closingRank: 25000 }
    ],
    description: "Large private university with a broad academic portfolio."
  },
  {
    id: "amity-noida",
    name: "Amity University Noida",
    state: "Uttar Pradesh",
    location: "Noida, Uttar Pradesh",
    fees: 200000,
    rating: 4.0,
    availableCourses: ["BTech", "MBA", "MCA", "BCA"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 65000 },
      { exam: "CAT", closingRank: 12000 },
      { exam: "CUET", closingRank: 30000 }
    ],
    description: "Wide-ranging private university with many professional programs."
  },
  {
    id: "galgotias",
    name: "Galgotias University",
    state: "Uttar Pradesh",
    location: "Greater Noida, Uttar Pradesh",
    fees: 150000,
    rating: 3.8,
    availableCourses: ["BTech", "MBA", "MCA", "BCA"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 75000 },
      { exam: "CAT", closingRank: 15000 },
      { exam: "CUET", closingRank: 35000 }
    ],
    description: "Career-oriented private university with affordable options."
  },
  {
    id: "manipal",
    name: "Manipal Institute of Technology",
    state: "Karnataka",
    location: "Manipal, Karnataka",
    fees: 245000,
    rating: 4.5,
    availableCourses: ["BTech", "MTech", "MBA", "BSc"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 18000 },
      { exam: "CAT", closingRank: 6500 },
      { exam: "CUET", closingRank: 15000 }
    ],
    description: "Established private engineering college with strong alumni reach."
  },
  {
    id: "pes-bengaluru",
    name: "PES University",
    state: "Karnataka",
    location: "Bengaluru, Karnataka",
    fees: 210000,
    rating: 4.6,
    availableCourses: ["BTech", "MBA", "MCA", "BCA"],
    acceptedExams: [
      { exam: "JEE Main", closingRank: 12000 },
      { exam: "CAT", closingRank: 6000 },
      { exam: "CUET", closingRank: 14000 }
    ],
    description: "Well-known for tech, management, and computer applications programs."
  },
  {
    id: "christ-bengaluru",
    name: "Christ University",
    state: "Karnataka",
    location: "Bengaluru, Karnataka",
    fees: 190000,
    rating: 4.5,
    availableCourses: ["MBA", "MCA", "BCA", "BSc"],
    acceptedExams: [
      { exam: "CAT", closingRank: 5500 },
      { exam: "CUET", closingRank: 13000 }
    ],
    description: "Popular multidisciplinary university with strong management programs."
  },
  {
    id: "banaras-hindu",
    name: "Banaras Hindu University",
    state: "Uttar Pradesh",
    location: "Varanasi, Uttar Pradesh",
    fees: 50000,
    rating: 4.4,
    availableCourses: ["BSc", "MBA", "MCA", "MBBS"],
    acceptedExams: [
      { exam: "CUET", closingRank: 10000 },
      { exam: "NEET", closingRank: 25000 },
      { exam: "CAT", closingRank: 12000 }
    ],
    description: "Large public university with diverse academic and medical programs."
  },
  {
    id: "aiims-delhi",
    name: "AIIMS Delhi",
    state: "Delhi",
    location: "Ansari Nagar, New Delhi",
    fees: 5000,
    rating: 4.9,
    availableCourses: ["MBBS", "BSc", "MSc", "MD"],
    acceptedExams: [
      { exam: "NEET", closingRank: 1000 },
      { exam: "CUET", closingRank: 2000 }
    ],
    description: "Premier medical institute with exceptional clinical training and reputation."
  },
  {
    id: "apollo-medical-chennai",
    name: "Apollo Institute of Medical Sciences and Research",
    state: "Tamil Nadu",
    location: "Chennai, Tamil Nadu",
    fees: 185000,
    rating: 4.2,
    availableCourses: ["MBBS", "BSc", "MD"],
    acceptedExams: [
      { exam: "NEET", closingRank: 18000 },
      { exam: "CUET", closingRank: 14000 }
    ],
    description: "Private medical institute with hospital-linked practical exposure."
  },
  {
    id: "maharaja-sayajirao",
    name: "Maharaja Sayajirao University of Baroda",
    state: "Gujarat",
    location: "Vadodara, Gujarat",
    fees: 60000,
    rating: 4.1,
    availableCourses: ["BSc", "MCA", "MBA", "BCA"],
    acceptedExams: [
      { exam: "CUET", closingRank: 18000 },
      { exam: "CAT", closingRank: 14000 }
    ],
    description: "Large public university with affordable professional education."
  }
];
