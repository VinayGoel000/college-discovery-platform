export type DiscussionAnswer = {
  id: string;
  author: string;
  message: string;
  createdAt: string;
};

export type DiscussionQuestion = {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  answers: DiscussionAnswer[];
};

export type CollegeDiscussions = {
  collegeId: string;
  questions: DiscussionQuestion[];
};

const makeQuestion = (
  id: string,
  title: string,
  description: string,
  author: string,
  createdAt: string,
  answers: DiscussionAnswer[]
): DiscussionQuestion => ({
  id,
  title,
  description,
  author,
  createdAt,
  answers
});

export const mockDiscussions: CollegeDiscussions[] = [
  {
    collegeId: "iit-delhi",
    questions: [
      makeQuestion(
        "iitd-q1",
        "How are placements at IIT Delhi for CSE?",
        "I want to know the average package, top recruiters, and whether product companies visit regularly.",
        "Rahul",
        "2026-05-12",
        [
          { id: "iitd-q1-a1", author: "Ananya", message: "Placements are excellent for CSE and product roles are common.", createdAt: "2026-05-12" },
          { id: "iitd-q1-a2", author: "Karan", message: "Average package is generally strong and the tech crowd is very active.", createdAt: "2026-05-13" },
          { id: "iitd-q1-a3", author: "Meera", message: "Google, Microsoft, and Amazon are regular recruiters.", createdAt: "2026-05-14" }
        ]
      ),
      makeQuestion(
        "iitd-q2",
        "Is hostel compulsory for first year students?",
        "I am trying to understand the hostel policy and whether day scholars are allowed.",
        "Priya",
        "2026-05-08",
        [
          { id: "iitd-q2-a1", author: "Nikhil", message: "For most first-year students, hostel allotment is the default arrangement.", createdAt: "2026-05-08" },
          { id: "iitd-q2-a2", author: "Aman", message: "You should check the latest institute rules, but hostel life is usually encouraged.", createdAt: "2026-05-09" }
        ]
      ),
      makeQuestion(
        "iitd-q3",
        "How is the faculty support for core branches?",
        "Are professors approachable if you need project guidance or research opportunities?",
        "Sneha",
        "2026-04-29",
        [
          { id: "iitd-q3-a1", author: "Aditya", message: "Faculty support is strong, especially if you show initiative in projects.", createdAt: "2026-04-29" },
          { id: "iitd-q3-a2", author: "Ishita", message: "Research opportunities are available through labs and student projects.", createdAt: "2026-04-30" }
        ]
      ),
      makeQuestion(
        "iitd-q4",
        "What about fees and ROI for MBA?",
        "Is the fee justified compared to the placements and brand value?",
        "Harsh",
        "2026-04-18",
        [
          { id: "iitd-q4-a1", author: "Pooja", message: "The ROI is considered good because of the brand and strong recruiter network.", createdAt: "2026-04-18" },
          { id: "iitd-q4-a2", author: "Rohit", message: "Fees are on the higher side, but placement outcomes usually make it worthwhile.", createdAt: "2026-04-19" }
        ]
      ),
      makeQuestion(
        "iitd-q5",
        "Are there good coding clubs and hackathons?",
        "I want to know if the student ecosystem is active for tech and innovation events.",
        "Tanya",
        "2026-04-02",
        [
          { id: "iitd-q5-a1", author: "Vivek", message: "Yes, the campus has a very active coding and hackathon culture.", createdAt: "2026-04-02" },
          { id: "iitd-q5-a2", author: "Naina", message: "Multiple student societies keep organising workshops and competitions.", createdAt: "2026-04-03" }
        ]
      )
    ]
  },
  {
    collegeId: "iit-bombay",
    questions: [
      makeQuestion(
        "iitb-q1",
        "How is the coding culture at IIT Bombay?",
        "I am mainly interested in software placements and peer learning.",
        "Arjun",
        "2026-05-10",
        [
          { id: "iitb-q1-a1", author: "Riya", message: "The coding culture is outstanding and peer learning is one of the biggest strengths.", createdAt: "2026-05-10" },
          { id: "iitb-q1-a2", author: "Kabir", message: "You will find very strong competition and support at the same time.", createdAt: "2026-05-11" }
        ]
      ),
      makeQuestion(
        "iitb-q2",
        "Are internships easy to get here?",
        "Do students usually get good summer internship opportunities on campus?",
        "Simran",
        "2026-05-03",
        [
          { id: "iitb-q2-a1", author: "Mihir", message: "Internship opportunities are strong, especially for tech and analytics roles.", createdAt: "2026-05-03" },
          { id: "iitb-q2-a2", author: "Tanvi", message: "Many students also get off-campus internships because of the brand value.", createdAt: "2026-05-04" }
        ]
      ),
      makeQuestion(
        "iitb-q3",
        "How expensive is the campus life overall?",
        "I am trying to budget for food, stay, and other expenses apart from tuition.",
        "Deepak",
        "2026-04-24",
        [
          { id: "iitb-q3-a1", author: "Anika", message: "Living expenses are manageable if you plan well, but Mumbai is still expensive.", createdAt: "2026-04-24" },
          { id: "iitb-q3-a2", author: "Sourav", message: "Hostel and mess facilities help keep costs under control.", createdAt: "2026-04-25" }
        ]
      ),
      makeQuestion(
        "iitb-q4",
        "Is research exposure good for undergrads?",
        "Can undergraduates get into labs and work on projects early?",
        "Neha",
        "2026-04-12",
        [
          { id: "iitb-q4-a1", author: "Om", message: "Yes, undergrads can join labs and research groups if they reach out early.", createdAt: "2026-04-12" },
          { id: "iitb-q4-a2", author: "Ira", message: "There are many projects and opportunities through faculty and student clubs.", createdAt: "2026-04-13" }
        ]
      ),
      makeQuestion(
        "iitb-q5",
        "How active is the alumni network?",
        "I want to know if alumni mentorship and referrals are useful here.",
        "Rakesh",
        "2026-04-01",
        [
          { id: "iitb-q5-a1", author: "Pallavi", message: "The alumni network is excellent and very active across industries.", createdAt: "2026-04-01" },
          { id: "iitb-q5-a2", author: "Dev", message: "You can find alumni mentoring through clubs and department events.", createdAt: "2026-04-02" }
        ]
      )
    ]
  },
  {
    collegeId: "iit-kanpur",
    questions: [
      makeQuestion(
        "iitk-q1",
        "How is the academic pressure at IIT Kanpur?",
        "I want to understand if the workload is manageable for a new student.",
        "Aditi",
        "2026-05-09",
        [
          { id: "iitk-q1-a1", author: "Yash", message: "The workload is serious but structured, so you can manage it with discipline.", createdAt: "2026-05-09" },
          { id: "iitk-q1-a2", author: "Kriti", message: "Expect a strong focus on concepts and problem solving.", createdAt: "2026-05-10" }
        ]
      ),
      makeQuestion(
        "iitk-q2",
        "Are placements better for core or software roles?",
        "I am confused about whether core branches also get good offers.",
        "Sahil",
        "2026-05-01",
        [
          { id: "iitk-q2-a1", author: "Puneet", message: "Both core and software roles are present, but software attracts more students.", createdAt: "2026-05-01" },
          { id: "iitk-q2-a2", author: "Isha", message: "Core roles are decent if you build projects and keep a good CGPA.", createdAt: "2026-05-02" }
        ]
      ),
      makeQuestion(
        "iitk-q3",
        "How are the hostels and campus facilities?",
        "I want to know if the campus has good facilities for daily student life.",
        "Gaurav",
        "2026-04-21",
        [
          { id: "iitk-q3-a1", author: "Ruchi", message: "Hostels are comfortable and the campus environment is very student-friendly.", createdAt: "2026-04-21" },
          { id: "iitk-q3-a2", author: "Harini", message: "There are plenty of sports, tech, and cultural facilities to stay active.", createdAt: "2026-04-22" }
        ]
      ),
      makeQuestion(
        "iitk-q4",
        "Is MBA at IIT Kanpur worth it?",
        "How are the placements and peer group for the management program?",
        "Varun",
        "2026-04-08",
        [
          { id: "iitk-q4-a1", author: "Maya", message: "The MBA is niche and benefits from the overall IIT brand.", createdAt: "2026-04-08" },
          { id: "iitk-q4-a2", author: "Naman", message: "It can be a solid choice if you want a management degree with a technical ecosystem.", createdAt: "2026-04-09" }
        ]
      ),
      makeQuestion(
        "iitk-q5",
        "Can freshers get into coding clubs quickly?",
        "How welcoming are the student clubs for first-year students?",
        "Snehal",
        "2026-03-28",
        [
          { id: "iitk-q5-a1", author: "Jatin", message: "Yes, clubs usually welcome freshers and there are many open events.", createdAt: "2026-03-28" },
          { id: "iitk-q5-a2", author: "Neel", message: "If you participate consistently, it is easy to build a network fast.", createdAt: "2026-03-29" }
        ]
      )
    ]
  },
  {
    collegeId: "nit-trichy",
    questions: [
      makeQuestion(
        "nitt-q1",
        "How are placements in NIT Trichy for CSE?",
        "I am comparing it with other NITs and want to know the placement strength.",
        "Manish",
        "2026-05-11",
        [
          { id: "nitt-q1-a1", author: "Lakshmi", message: "CSE placements are strong and consistently among the better ones in the NIT ecosystem.", createdAt: "2026-05-11" },
          { id: "nitt-q1-a2", author: "Arun", message: "Software and product companies visit regularly during placement season.", createdAt: "2026-05-12" }
        ]
      ),
      makeQuestion(
        "nitt-q2",
        "Is hostel life good at NIT Trichy?",
        "How are the hostel rooms, food, and campus environment?",
        "Shreya",
        "2026-05-04",
        [
          { id: "nitt-q2-a1", author: "Hari", message: "Hostel life is lively and the campus has a very active student atmosphere.", createdAt: "2026-05-04" },
          { id: "nitt-q2-a2", author: "Kavin", message: "Mess food is decent and the facilities are generally well maintained.", createdAt: "2026-05-05" }
        ]
      ),
      makeQuestion(
        "nitt-q3",
        "How is the faculty in electronics branches?",
        "I am looking for a place where faculty is approachable and practical.",
        "Keshav",
        "2026-04-26",
        [
          { id: "nitt-q3-a1", author: "Divya", message: "Faculty quality is very good and most professors are approachable.", createdAt: "2026-04-26" },
          { id: "nitt-q3-a2", author: "Rohan", message: "You can get help for labs and projects if you stay consistent.", createdAt: "2026-04-27" }
        ]
      ),
      makeQuestion(
        "nitt-q4",
        "What is the average package for MBA?",
        "Is it reasonable compared to other management programs in NITs?",
        "Aarav",
        "2026-04-14",
        [
          { id: "nitt-q4-a1", author: "Madhuri", message: "The package is decent for the fee structure and campus reputation.", createdAt: "2026-04-14" },
          { id: "nitt-q4-a2", author: "Pranav", message: "Management roles are fewer than engineering roles, so expectations should be realistic.", createdAt: "2026-04-15" }
        ]
      ),
      makeQuestion(
        "nitt-q5",
        "Does the campus have enough clubs and hackathons?",
        "I want an active student life along with studies.",
        "Iqra",
        "2026-04-03",
        [
          { id: "nitt-q5-a1", author: "Sanjay", message: "Yes, there are many clubs, hackathons, and student-run tech events.", createdAt: "2026-04-03" },
          { id: "nitt-q5-a2", author: "Tushar", message: "The environment is balanced between academics and extracurriculars.", createdAt: "2026-04-04" }
        ]
      )
    ]
  },
  {
    collegeId: "vit-vellore",
    questions: [
      makeQuestion(
        "vit-q1",
        "How are placements at VIT Vellore for CSE?",
        "I want to know whether the large intake affects placement opportunities.",
        "Nisha",
        "2026-05-13",
        [
          { id: "vit-q1-a1", author: "Aman", message: "Placements are decent overall, especially for students who build skills early.", createdAt: "2026-05-13" },
          { id: "vit-q1-a2", author: "Pallavi", message: "Many companies visit, but strong profiles stand out the most.", createdAt: "2026-05-14" }
        ]
      ),
      makeQuestion(
        "vit-q2",
        "How strict are the academic rules?",
        "I heard there are many attendance and discipline rules. Is that true?",
        "Siddharth",
        "2026-05-06",
        [
          { id: "vit-q2-a1", author: "Kavya", message: "Rules are definitely more structured than some other private universities.", createdAt: "2026-05-06" },
          { id: "vit-q2-a2", author: "Manoj", message: "If you stay organized, the system is manageable.", createdAt: "2026-05-07" }
        ]
      ),
      makeQuestion(
        "vit-q3",
        "Are internships easy to find from campus?",
        "I want to know whether the institute helps with internship opportunities.",
        "Trisha",
        "2026-04-25",
        [
          { id: "vit-q3-a1", author: "Arnav", message: "Yes, there are a lot of internship opportunities through alumni and recruiters.", createdAt: "2026-04-25" },
          { id: "vit-q3-a2", author: "Pooja", message: "Students also apply off-campus using the campus brand and projects.", createdAt: "2026-04-26" }
        ]
      ),
      makeQuestion(
        "vit-q4",
        "How is hostel life at VIT?",
        "I want to know about food, crowd, and day-to-day living.",
        "Ritika",
        "2026-04-13",
        [
          { id: "vit-q4-a1", author: "Vikas", message: "Hostel life is active and there are many student communities to join.", createdAt: "2026-04-13" },
          { id: "vit-q4-a2", author: "Anmol", message: "Food and facilities are okay, though experiences vary by hostel block.", createdAt: "2026-04-14" }
        ]
      ),
      makeQuestion(
        "vit-q5",
        "Does the campus have good faculty for MBA?",
        "I am comparing business school options and want an honest perspective.",
        "Mira",
        "2026-04-01",
        [
          { id: "vit-q5-a1", author: "Dinesh", message: "Faculty is decent and the program has a practical orientation.", createdAt: "2026-04-01" },
          { id: "vit-q5-a2", author: "Shruti", message: "The exposure is helpful if you participate in events and internships actively.", createdAt: "2026-04-02" }
        ]
      )
    ]
  }
];

