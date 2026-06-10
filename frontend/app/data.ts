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
    title: "Live Streaming & OTT",
    desc:
      "Low-latency live video, VOD libraries, and interactive broadcast experiences built for resilience under heavy load.",
    points: [
      "HLS / DASH adaptive streaming",
      "Live chat, polls & reactions",
      "CDN, DRM & geo-restriction",
      "Analytics & viewer insights",
    ],
    icon: "play",
  },
  {
    tag: "02",
    title: "HRMS Platforms",
    desc:
      "Modern Human Resource Management systems — attendance, payroll, leaves, performance and onboarding in one clean workspace.",
    points: [
      "Attendance & shift management",
      "Payroll, taxes & compliance",
      "Performance & OKR tracking",
      "Role-based access & audit trails",
    ],
    icon: "users",
  },
  {
    tag: "03",
    title: "Test Series & EdTech",
    desc:
      "High-traffic test platforms — from question banks and proctored exams to analytics dashboards that students and educators actually use.",
    points: [
      "Adaptive & timed test engines",
      "Live class & doubt-solving chat",
      "Auto-evaluation & rank analytics",
      "Mobile-first student experience",
    ],
    icon: "check",
  },
  {
    tag: "04",
    title: "Cloud & DevOps on AWS",
    desc:
      "Production-grade infrastructure on AWS & Kubernetes — built for 99.95% uptime, autoscaling, and zero-downtime deploys.",
    points: [
      "EKS, Terraform & CI/CD pipelines",
      "ALB path routing · dynamic DNS · CloudFront signed URLs",
      "Blue-green, canary & feature-flag releases",
      "Observability, cost optimisation & on-call",
    ],
    icon: "cloud",
  },
  {
    tag: "05",
    title: "Website Development",
    desc:
      "Fast, conversion-focused websites and web apps — designed in-house, built on modern frameworks, optimized for Core Web Vitals.",
    points: [
      "Marketing sites & landing pages",
      "Headless CMS & e-commerce",
      "Custom dashboards & portals",
      "Accessibility & performance audits",
    ],
    icon: "globe",
  },
  {
    tag: "06",
    title: "SEO & Growth",
    desc:
      "Technical and content SEO that compounds — engineered into the product, not bolted on after launch.",
    points: [
      "Technical SEO audits",
      "Schema, sitemaps & Core Web Vitals",
      "Content strategy & topic clusters",
      "GA4, GSC & ranking dashboards",
    ],
    icon: "search",
  },
  {
    tag: "07",
    title: "iOS & Android Apps",
    desc:
      "Native and React Native mobile apps with first-class deep linking — Firebase Dynamic Links, Universal Links, deferred attribution, and App Store-quality standards from day one.",
    points: [
      "Firebase Dynamic Links & universal deep linking",
      "Universal Links (iOS) · App Links (Android)",
      "Payments, subscriptions & push-notification routing",
      "Store submission, CI rollout & crash tracking",
    ],
    icon: "phone",
  },
  {
    tag: "08",
    title: "UI / UX Design",
    desc:
      "Product design that turns features into experiences — research, flows, prototypes and design systems that scale with your team.",
    points: [
      "User research & journey mapping",
      "Wireframes & high-fidelity UI",
      "Design systems in Figma",
      "Usability testing & iteration",
    ],
    icon: "grid",
  },
  {
    tag: "09",
    title: "Analytics & Dashboards",
    desc:
      "Decision-grade analytics — event tracking, warehouses, and clean dashboards your founders, growth and ops teams will actually open.",
    points: [
      "Event taxonomy & tracking plans",
      "Grafana & Metabase dashboards",
      "Funnel, retention & cohort views",
      "Alerts, SLOs & reporting",
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
    kicker: "OTT · Real-time",
    title: "Low-latency live streaming for 60K+ viewers",
    desc:
      "End-to-end live streaming stack with adaptive bitrate playback, real-time chat on EMQX, and elastic infrastructure that holds steady during peak events.",
    meta: [
      { label: "Stack", value: "HLS · EMQX · EKS · CloudFront" },
      { label: "Scale", value: "60K+ concurrent" },
      { label: "Latency", value: "~2s glass-to-glass" },
    ],
    shot: "screenshots/live-streaming.svg",
    shotTitle: "Live Streaming Platform",
  },
  {
    kicker: "HR Tech · SaaS",
    title: "A modern HRMS your team will actually use",
    desc:
      "Attendance, payroll, leaves, performance reviews and onboarding — unified in a clean workspace with role-based access and audit-ready logs.",
    meta: [
      { label: "Modules", value: "9+ HR workflows" },
      { label: "Roles", value: "Granular RBAC" },
      { label: "Compliance", value: "Audit trails & exports" },
    ],
    shot: "screenshots/hrms.svg",
    shotTitle: "HRMS Suite",
  },
  {
    kicker: "EdTech · High traffic",
    title: "Test platform built for exam-day spikes",
    desc:
      "Adaptive test engine, anti-cheat checks, instant evaluation and rank analytics — engineered to absorb traffic spikes on national exam days.",
    meta: [
      { label: "Engine", value: "Adaptive & timed" },
      { label: "Analytics", value: "Rank & topic gaps" },
      { label: "Reach", value: "Mobile-first" },
    ],
    shot: "screenshots/test-series.svg",
    shotTitle: "Test Series Platform",
  },
  {
    kicker: "Cloud · Infrastructure",
    title: "Production-grade AWS & Kubernetes platform",
    desc:
      "Multi-account AWS environment with EKS, autoscaling, blue-green deploys, cross-region backups, and a full observability stack on Grafana & Prometheus.",
    meta: [
      { label: "Cluster", value: "EKS · HPA · Cluster Autoscaler" },
      { label: "CI/CD", value: "GitHub Actions · Bitbucket" },
      { label: "Monitoring", value: "Grafana · CloudWatch · PagerDuty" },
    ],
    shot: "screenshots/aws-architecture.svg",
    shotTitle: "AWS Architecture Diagram",
  },
  {
    kicker: "Mobile · Deep linking",
    title: "Mobile apps shipped on iOS & Android",
    desc:
      "Native-feeling React Native, Swift and Kotlin apps — with Firebase Dynamic Links, Universal Links, deferred deep linking, push-notification routing and payments all wired in from day one.",
    meta: [
      { label: "Links", value: "Firebase Dynamic Links · Universal Links" },
      { label: "Releases", value: "Store submission & CI" },
      { label: "Quality", value: "Crash-free > 99.5%" },
    ],
    shot: "screenshots/mobile-app.svg",
    shotTitle: "iOS / Android App",
  },
  {
    kicker: "Web · Growth",
    title: "Marketing websites that rank and convert",
    desc:
      "Headless, fast, SEO-engineered websites with strong technical fundamentals, structured data, and conversion-tuned page templates.",
    meta: [
      { label: "CWV", value: "Green Core Web Vitals" },
      { label: "SEO", value: "Schema · Sitemaps · Internal links" },
      { label: "CMS", value: "Headless / Next.js" },
    ],
    shot: "screenshots/web-seo.svg",
    shotTitle: "Website & SEO",
  },
];

export const CAPABILITIES = [
  {
    title: "Kubernetes on EKS",
    desc:
      "Highly available clusters with HPA, Cluster Autoscaler, RBAC, namespaces, ConfigMaps and network policies.",
  },
  {
    title: "Real-time at scale",
    desc:
      "EMQX, WebSocket and MQTT infrastructures for chat and messaging under heavy concurrent load.",
  },
  {
    title: "CI/CD, feature flags & safe deploys",
    desc:
      "GitHub Actions and Bitbucket Pipelines with blue-green, canary releases and feature-flag-gated rollouts.",
  },
  {
    title: "Infra as Code",
    desc:
      "Reusable Terraform modules for multi-account AWS environments, isolated networking, and repeatable provisioning.",
  },
  {
    title: "Performance & cost",
    desc:
      "Latency reduced with CloudFront, Redis and caching; node utilization tuned for cost efficiency.",
  },
  {
    title: "Security & compliance",
    desc:
      "AWS WAF, IAM, SSL/TLS termination, secrets management, and security best practices end-to-end.",
  },
  {
    title: "Disaster recovery",
    desc:
      "Fault-tolerant designs with cross-region backups, automated failover and DR runbooks.",
  },
  {
    title: "Observability",
    desc:
      "Grafana, Prometheus, CloudWatch, ELK Stack and PagerDuty — alerts that mean something.",
  },
  {
    title: "Dynamic links & mobile routing",
    desc:
      "Firebase Dynamic Links, Universal Links, App Links, deferred deep linking for install attribution, and QR-encoded routing across iOS & Android.",
  },
  {
    title: "Multi-tenant DNS & path routing",
    desc:
      "Per-tenant subdomain provisioning, Route53 automation, wildcard TLS, CloudFront signed URLs and ALB path-based routing rules.",
  },
];

export const TECH_STACK = [
  "AWS · EC2 · EKS · RDS · S3 · Lambda · Route53 · IAM · VPC · ElastiCache",
  "Kubernetes",
  "Docker",
  "Terraform",
  "GitHub Actions",
  "Bitbucket Pipelines",
  "Nginx · Apache",
  "Redis",
  "EMQX",
  "Grafana",
  "Prometheus",
  "CloudWatch",
  "ELK Stack",
  "PagerDuty",
  "Linux · Bash",
];

export const PROCESS_STEPS = [
  { n: "01", title: "Discovery", desc: "We map your goals, users and constraints — then propose the smallest path to value." },
  { n: "02", title: "Design & architect", desc: "UI flows, API contracts and infrastructure diagrams agreed upfront, before code." },
  { n: "03", title: "Build & ship", desc: "Weekly demos, CI/CD from day one, and feature flags to ship safely to production." },
  { n: "04", title: "Operate", desc: "Observability, on-call playbooks and post-launch iterations — we stay with you." },
];
