export type Service = {
  tag: string;
  title: string;
  desc: string;
  points: string[];
  icon: "play" | "users" | "check" | "cloud" | "globe" | "search" | "phone" | "grid" | "bars";
};

export const SERVICES: Service[] = [
  {
    tag: "01",
    title: "Live Interactive Classes",
    desc:
      "Daily live classes for JEE Main & Advanced — taught by experienced faculty, with real-time doubt solving in every session.",
    points: [
      "Daily live sessions on a fixed timetable",
      "Chat-based Q&A during class",
      "Recorded playback for revision",
      "Structured, syllabus-mapped batches",
    ],
    icon: "play",
  },
  {
    tag: "02",
    title: "Expert Faculty & Mentorship",
    desc:
      "Learn from mentors who've coached thousands of JEE aspirants — with 1:1 doubt sessions and regular progress check-ins.",
    points: [
      "IIT/NIT-experienced faculty",
      "Weekly 1:1 mentor check-ins",
      "Personalised study plans",
      "Parent progress updates",
    ],
    icon: "users",
  },
  {
    tag: "03",
    title: "Test Series & Rank Analysis",
    desc:
      "Full-syllabus and chapter-wise tests modelled on the real JEE pattern, with instant scoring and All-India rank comparison.",
    points: [
      "Chapter, unit & full-syllabus tests",
      "Instant evaluation & solutions",
      "All-India rank & percentile",
      "Topic-wise weak-area reports",
    ],
    icon: "check",
  },
  {
    tag: "04",
    title: "Recorded Lecture Library",
    desc:
      "Every live class is recorded and organised by chapter, so you can revise at your own pace, anytime, on any device.",
    points: [
      "Chapter-wise video library",
      "Downloadable for offline viewing",
      "Playback speed control",
      "Bookmarks & watch-history sync",
    ],
    icon: "cloud",
  },
  {
    tag: "05",
    title: "Study Material & Notes",
    desc:
      "Curated notes, formula sheets and practice sets built by our faculty — aligned to the latest JEE syllabus.",
    points: [
      "Chapter notes & formula sheets",
      "NCERT-aligned practice sets",
      "Previous-year question banks",
      "Printable PDFs",
    ],
    icon: "globe",
  },
  {
    tag: "06",
    title: "Doubt Solving, Anytime",
    desc:
      "Stuck on a problem at 11 pm? Post it and get a response from a mentor — no question goes unanswered.",
    points: [
      "Live in-class doubt solving",
      "Async doubt forum",
      "Mentor response within hours",
      "Peer discussion threads",
    ],
    icon: "search",
  },
  {
    tag: "07",
    title: "Mission JEET Mobile App",
    desc:
      "Classes, tests, notes and doubt-solving in one app — built for students learning on the go.",
    points: [
      "iOS & Android apps",
      "Offline downloads",
      "Class & test reminders",
      "Push notifications for schedules",
    ],
    icon: "phone",
  },
  {
    tag: "08",
    title: "Practice Question Bank",
    desc:
      "Thousands of curated, difficulty-tagged questions across Physics, Chemistry and Maths for daily practice.",
    points: [
      "10,000+ practice questions",
      "Difficulty & topic tagging",
      "Step-by-step solutions",
      "Daily practice reminders",
    ],
    icon: "grid",
  },
  {
    tag: "09",
    title: "Performance Analytics",
    desc:
      "A clear, honest picture of where you stand — attendance, test scores, rank trends and weak topics, all in one dashboard.",
    points: [
      "Score & rank trend graphs",
      "Attendance & consistency tracking",
      "Subject-wise strength/weakness",
      "Monthly progress reports",
    ],
    icon: "bars",
  },
];

export type Work = {
  kicker: string;
  title: string;
  desc: string;
  meta: { label: string; value: string }[];
  shot: string;
  shotTitle: string;
};

export const WORKS: Work[] = [
  {
    kicker: "JEE Main · Batch results",
    title: "Structured daily classes that build real exam readiness",
    desc:
      "Our JEE Main batches follow a fixed daily timetable across Physics, Chemistry and Maths, with weekly tests to track readiness against the real exam pattern.",
    meta: [
      { label: "Format", value: "Live + recorded" },
      { label: "Tests", value: "Weekly full syllabus" },
      { label: "Batch size", value: "Small, mentor-led" },
    ],
    shot: "screenshots/live-streaming.svg",
    shotTitle: "Live Class Dashboard",
  },
  {
    kicker: "JEE Advanced · Test series",
    title: "Full-syllabus test series modelled on the real paper pattern",
    desc:
      "Chapter-wise and full-syllabus mock tests with instant evaluation, detailed solutions and All-India rank comparison after every attempt.",
    meta: [
      { label: "Tests", value: "50+ per year" },
      { label: "Feedback", value: "Instant + detailed" },
      { label: "Ranking", value: "All-India comparison" },
    ],
    shot: "screenshots/test-series.svg",
    shotTitle: "Test Series & Rank Report",
  },
  {
    kicker: "Mentorship · 1:1",
    title: "Every student gets a dedicated mentor, not just a teacher",
    desc:
      "Weekly 1:1 check-ins on study plans, weak topics and exam strategy — so progress is tracked as a person, not just a batch number.",
    meta: [
      { label: "Check-ins", value: "Weekly 1:1" },
      { label: "Plans", value: "Personalised" },
      { label: "Updates", value: "Shared with parents" },
    ],
    shot: "screenshots/hrms.svg",
    shotTitle: "Mentor Dashboard",
  },
  {
    kicker: "Mobile · Learning on the go",
    title: "Classes, notes and tests — in one app",
    desc:
      "The Mission JEET app brings live classes, recorded lectures, notes and test series together, with offline downloads for low-connectivity areas.",
    meta: [
      { label: "Platforms", value: "iOS · Android" },
      { label: "Downloads", value: "Offline video & notes" },
      { label: "Reminders", value: "Class & test alerts" },
    ],
    shot: "screenshots/mobile-app.svg",
    shotTitle: "Mission JEET App",
  },
  {
    kicker: "Study material",
    title: "Notes and practice sets built specifically for JEE",
    desc:
      "Chapter notes, formula sheets and previous-year question banks curated by our faculty, aligned chapter-by-chapter with the current syllabus.",
    meta: [
      { label: "Notes", value: "Chapter-wise" },
      { label: "Questions", value: "10,000+ bank" },
      { label: "Format", value: "Printable PDFs" },
    ],
    shot: "screenshots/web-seo.svg",
    shotTitle: "Study Material Library",
  },
  {
    kicker: "Analytics",
    title: "A dashboard that tells you the truth about your prep",
    desc:
      "Attendance, test scores, rank trends and weak topics in one view — so every student and parent knows exactly where things stand.",
    meta: [
      { label: "Tracking", value: "Score & rank trends" },
      { label: "Reports", value: "Monthly" },
      { label: "Visibility", value: "Student + parent" },
    ],
    shot: "screenshots/aws-architecture.svg",
    shotTitle: "Progress Analytics",
  },
];

export const CAPABILITIES = [
  {
    title: "Daily live classes",
    desc:
      "A fixed daily timetable across Physics, Chemistry and Maths — so preparation stays consistent, not scattered.",
  },
  {
    title: "Small, mentor-led batches",
    desc:
      "Batches sized so faculty can actually track individual progress, not just teach to a crowd.",
  },
  {
    title: "Test series on the real pattern",
    desc:
      "Chapter-wise and full-syllabus tests modelled closely on JEE Main and Advanced paper patterns.",
  },
  {
    title: "Doubt solving that doesn't wait",
    desc:
      "Live in-class Q&A plus an async doubt forum — mentors respond within hours, not days.",
  },
  {
    title: "Curated notes & question banks",
    desc:
      "Chapter notes, formula sheets and 10,000+ tagged practice questions built in-house by our faculty.",
  },
  {
    title: "Rank & performance analytics",
    desc:
      "Score trends, All-India rank comparison and topic-wise weak areas, visible to students and parents.",
  },
  {
    title: "Learn anywhere, offline too",
    desc:
      "Recorded lectures and notes downloadable in the app — built for students with patchy connectivity.",
  },
  {
    title: "Parent visibility",
    desc:
      "Regular progress updates so parents stay informed without needing to chase teachers for updates.",
  },
  {
    title: "Affordable, flexible batches",
    desc:
      "Course options built for different budgets and timelines — from crash courses to full two-year programs.",
  },
  {
    title: "Free demo before you commit",
    desc:
      "Attend a live class before enrolling, so you know exactly what you're signing up for.",
  },
];

export const TECH_STACK = [
  "Live Classes",
  "Recorded Lectures",
  "Test Series",
  "Rank & Percentile Analytics",
  "Doubt Solving Forum",
  "Chapter Notes & PDFs",
  "Practice Question Bank",
  "Mobile App (iOS · Android)",
  "1:1 Mentorship",
  "Parent Progress Reports",
  "Offline Downloads",
  "WhatsApp Support",
];

export const HERO_SLIDES = [
  { big: 'IOQM', small: 'Crash Course' },
  { big: 'NSEJS + SEHSS', small: 'Crash Course' },
  { big: 'JEE MAIN', small: 'Live Batch 2027' },
];

export type Course = {
  cls: string;
  title: string;
  highlight: string;
  oldPrice: string;
  newPrice: string;
};

export const TRENDING_COURSES: Course[] = [
  { cls: 'Class 11th', title: 'NEET', highlight: 'Drona 2.0 Reloaded', oldPrice: '₹4999/-', newPrice: '₹4499' },
  { cls: 'Class 11th', title: 'JEE', highlight: 'Drona 2.0 Reloaded', oldPrice: '₹4999/-', newPrice: '₹4499' },
  { cls: 'Class 12th', title: 'JEE', highlight: 'Vijay Crash Course', oldPrice: '₹3999/-', newPrice: '₹3499' },
  { cls: 'Dropper', title: 'NEET', highlight: 'Punarvas Batch', oldPrice: '₹5999/-', newPrice: '₹5499' },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Choose your course", desc: "Pick the batch that fits your target exam, class and timeline — JEE Main, Advanced, or a foundation course." },
  { n: "02", title: "Attend a free demo", desc: "Sit in on a live class before you enrol, so you know exactly what daily learning will feel like." },
  { n: "03", title: "Learn & practice daily", desc: "Follow the daily timetable — live classes, notes and practice questions — with mentors tracking your progress." },
  { n: "04", title: "Test, review, improve", desc: "Take weekly tests, review your rank and weak topics, and adjust your study plan with your mentor." },
];
