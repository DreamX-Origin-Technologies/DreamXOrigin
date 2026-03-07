export type ServiceSeo = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { h2: string; content: string; h3?: { h3: string; content: string }[] }[];
  ctaPrimary: string;
  ctaSecondary?: string;
  internalLinks: { label: string; href: string }[];
};

export const SERVICES_SEO: Record<string, ServiceSeo> = {
  "react-nextjs": {
    slug: "/services/react-nextjs-web-development",
    title: "React & Next.js Web Development | Custom Web Apps for Startups",
    metaDescription:
      "Hire expert React and Next.js developers. We build fast, scalable web applications for startups and SMBs. Get a free consultation.",
    h1: "React & Next.js Web Development for Startups & Businesses",
    intro:
      "We build fast, scalable web applications with React and Next.js. From MVPs to production-ready SaaS, our team delivers performant frontends and SEO-friendly experiences for startups and growing businesses.",
    sections: [
      {
        h2: "Why Choose React and Next.js for Your Web App",
        content:
          "React offers a component-based architecture that speeds development and keeps UIs maintainable. Next.js adds server-side rendering, static generation, and built-in optimizations—so your app is fast and discoverable from day one.",
      },
      {
        h2: "Our React & Next.js Development Process",
        h3: [
          {
            h3: "From Discovery to Launch",
            content:
              "We start with discovery to align on scope and goals, then iterate in sprints with clear deliverables. You get a launch-ready product with documentation and handoff support.",
          },
        ],
        content: "",
      },
      {
        h2: "What We Build: Web Apps, Dashboards, SaaS Products",
        h3: [
          { h3: "Performance & SEO with Next.js", content: "Next.js gives you fast LCP and crawlable pages out of the box." },
          { h3: "Component-Based Architecture", content: "Reusable components and clear structure for long-term maintainability." },
        ],
        content: "",
      },
      {
        h2: "Technologies We Use",
        content:
          "React, Next.js, TypeScript, and modern tooling. We pair frontends with Node.js, Go, or Python backends and deploy on AWS when you need cloud-ready applications.",
      },
      {
        h2: "Get Your React or Next.js Project Started",
        content:
          "Tell us about your product idea, timeline, and goals. We'll recommend an approach and provide a transparent quote. No commitment required.",
      },
    ],
    ctaPrimary: "Get a Free Technical Consultation",
    ctaSecondary: "Discuss Your Web App Idea",
    internalLinks: [
      { label: "Full-stack development", href: "/services/full-stack-development" },
      { label: "Cloud application development", href: "/services/cloud-application-development" },
      { label: "MVP development", href: "/" },
    ],
  },
  flutter: {
    slug: "/services/flutter-app-development",
    title: "Flutter App Development | Cross-Platform Mobile Apps for Startups",
    metaDescription:
      "Expert Flutter app development for iOS and Android. One codebase, fast delivery. Ideal for MVPs and scalable mobile apps. Get a quote.",
    h1: "Flutter App Development: One Codebase, Two Platforms",
    intro:
      "We build cross-platform mobile apps with Flutter so you can ship to iOS and Android from a single codebase. Ideal for MVPs and B2B apps that need fast delivery and a consistent experience.",
    sections: [
      {
        h2: "Why Startups Choose Flutter for Mobile Apps",
        content:
          "Flutter delivers native-like performance and a single codebase for iOS and Android. Hot reload speeds development, and the ecosystem is mature for production apps.",
      },
      {
        h2: "What We Build with Flutter",
        h3: [
          { h3: "MVPs and Product Launches", content: "Get to market quickly with one codebase and predictable timelines." },
          { h3: "B2B and SaaS Mobile Apps", content: "Internal tools, field apps, and customer-facing mobile experiences." },
        ],
        content: "",
      },
      {
        h2: "Our Flutter Development Process",
        content:
          "We scope with you, design key flows, then build in iterations. You get regular demos and a launch-ready app with backend integration and store submission support.",
      },
      {
        h2: "Flutter vs React Native: When to Choose Flutter",
        content:
          "Flutter suits teams that want one codebase and strong UI consistency; React Native suits teams that already use React and JavaScript. We help you decide based on your stack and goals.",
      },
      {
        h2: "Flutter + Backend: Full-Stack Mobile Solutions",
        content:
          "We integrate Flutter apps with Node.js, Go, or Python backends and AWS. From auth and APIs to push and analytics, we deliver end-to-end mobile solutions.",
      },
      {
        h2: "Get Your Flutter App Built",
        content:
          "Share your app idea and timeline. We'll outline an approach and provide a clear quote. No obligation.",
      },
    ],
    ctaPrimary: "Start Your Flutter Project",
    ctaSecondary: "Compare Flutter vs React Native",
    internalLinks: [
      { label: "React Native app development", href: "/services/react-native-app-development" },
      { label: "Android native (Kotlin) development", href: "/services/android-native-kotlin-development" },
      { label: "Full-stack development", href: "/services/full-stack-development" },
    ],
  },
  "react-native": {
    slug: "/services/react-native-app-development",
    title: "React Native App Development | iOS & Android Apps for Startups",
    metaDescription:
      "React Native app development for iOS and Android. Reuse web skills, ship faster. Perfect for MVPs and scaling startups. Talk to our team.",
    h1: "React Native App Development for Startups & Scale-Ups",
    intro:
      "We build iOS and Android apps with React Native so you can leverage JavaScript and React. Ship faster, iterate with one codebase, and scale with your team's existing skills.",
    sections: [
      {
        h2: "Why React Native for Your Mobile App",
        content:
          "React Native lets you reuse logic and patterns from web React. One team can own web and mobile, and you get near-native performance with a single codebase.",
      },
      {
        h2: "React Native vs Flutter: Which Is Right for You?",
        h3: [
          { h3: "When to Choose React Native", content: "You already use React, want to share code with web, or prefer the JavaScript ecosystem." },
          { h3: "When to Choose Flutter", content: "You want maximum UI consistency and a single, non-JS codebase with strong tooling." },
        ],
        content: "",
      },
      {
        h2: "Our React Native Development Approach",
        content:
          "We follow a structured process: discovery, design of core flows, then iterative development with testing on both platforms. We integrate with your backend and deploy to the stores.",
      },
      {
        h2: "From MVP to Production at Scale",
        content:
          "We build MVPs that are ready to scale. Clean architecture, proper state management, and performance best practices from the start.",
      },
      {
        h2: "React Native + Node.js / Backend Integration",
        content:
          "We connect React Native apps to Node.js, Go, or Python backends and AWS. Auth, APIs, push notifications, and analytics are all part of our delivery.",
      },
      {
        h2: "Start Your React Native Project",
        content:
          "Tell us about your app and timeline. We'll propose an approach and a transparent quote.",
      },
    ],
    ctaPrimary: "Get a React Native Quote",
    ctaSecondary: "Book a Technical Call",
    internalLinks: [
      { label: "Flutter app development", href: "/services/flutter-app-development" },
      { label: "Full-stack development", href: "/services/full-stack-development" },
      { label: "React & Next.js web development", href: "/services/react-nextjs-web-development" },
    ],
  },
  "android-kotlin": {
    slug: "/services/android-native-kotlin-development",
    title: "Android Native (Kotlin) App Development | High-Performance Android Apps",
    metaDescription:
      "Kotlin-based Android native app development. Best performance and platform fit for Android-first products. Get a custom quote.",
    h1: "Android Native App Development with Kotlin",
    intro:
      "We build high-performance Android apps with Kotlin. When your product is Android-first or needs the full power of the platform, native development delivers the best experience and long-term maintainability.",
    sections: [
      {
        h2: "When to Choose Native Android Over Cross-Platform",
        content:
          "Choose native when you need the latest Android APIs, maximum performance, or a single-platform focus. Ideal for Android-only products and apps that rely on platform-specific features.",
      },
      {
        h2: "Why We Use Kotlin for Android",
        h3: [
          { h3: "Performance & Platform Capabilities", content: "Full access to Android SDK and system APIs with no bridge overhead." },
          { h3: "Long-Term Maintainability", content: "Kotlin is the recommended language for Android; the ecosystem is mature and well-supported." },
        ],
        content: "",
      },
      {
        h2: "Our Kotlin Android Development Process",
        content:
          "We scope features, design architecture, and build in sprints. You get a production-ready app with tests, CI/CD, and optional Play Store submission support.",
      },
      {
        h2: "Types of Apps We Build",
        content:
          "Consumer apps, B2B tools, device-heavy apps, and Android-first MVPs. We integrate with REST/GraphQL APIs and cloud services including AWS.",
      },
      {
        h2: "Android + Backend & Cloud (AWS)",
        content:
          "We pair Kotlin Android apps with Node.js, Go, or Python backends and AWS. From auth and sync to push and analytics, we deliver full solutions.",
      },
      {
        h2: "Start Your Android Native Project",
        content:
          "Share your Android app goals and timeline. We'll recommend an approach and provide a clear quote.",
      },
    ],
    ctaPrimary: "Discuss Your Android App",
    ctaSecondary: "Get a Kotlin Development Quote",
    internalLinks: [
      { label: "Flutter app development", href: "/services/flutter-app-development" },
      { label: "React Native app development", href: "/services/react-native-app-development" },
      { label: "Cloud application development", href: "/services/cloud-application-development" },
    ],
  },
  "full-stack": {
    slug: "/services/full-stack-development",
    title: "Full-Stack Web Development | Node.js, Go & Python for Startups",
    metaDescription:
      "Full-stack development with Node.js, Go, and Python. APIs, backends, and full products for startups and SMBs. Start your project.",
    h1: "Full-Stack Web Development: Node.js, Go & Python",
    intro:
      "We build backends and full-stack products with Node.js, Go, and Python. From APIs and auth to full web and mobile products, we deliver scalable systems for startups and SMBs.",
    sections: [
      {
        h2: "What Is Full-Stack Development?",
        content:
          "Full-stack means we own both frontend and backend: UI (e.g. React, Next.js), APIs, databases, auth, and deployment. You get one team and one place to go for your product.",
      },
      {
        h2: "Our Full-Stack Tech Stack",
        h3: [
          { h3: "Node.js for APIs and Real-Time Apps", content: "Fast iteration, rich ecosystem, and great fit for real-time and APIs." },
          { h3: "Go (Golang) for Performance-Critical Backends", content: "High throughput, low latency, and simple deployment for scale." },
          { h3: "Python for Data & Integrations", content: "ML, data pipelines, and integrations with a huge library ecosystem." },
        ],
        content: "",
      },
      {
        h2: "Frontend + Backend: React, Next.js, and More",
        content:
          "We pair these backends with React and Next.js for web, and Flutter or React Native for mobile. One team, consistent architecture.",
      },
      {
        h2: "Our Full-Stack Development Process",
        content:
          "Discovery, architecture, then iterative development with clear milestones. We focus on scalability and maintainability from the start.",
      },
      {
        h2: "From MVP to Scalable Product",
        content:
          "We build MVPs that can scale. Clean APIs, proper auth, and cloud-ready deployment so you can grow without rewrites.",
      },
      {
        h2: "Start Your Full-Stack Project",
        content:
          "Tell us about your product—web, mobile, or both—and we'll propose a stack and a transparent quote.",
      },
    ],
    ctaPrimary: "Get a Full-Stack Quote",
    ctaSecondary: "Discuss Your Backend Needs",
    internalLinks: [
      { label: "React & Next.js web development", href: "/services/react-nextjs-web-development" },
      { label: "Cloud application development", href: "/services/cloud-application-development" },
      { label: "Flutter app development", href: "/services/flutter-app-development" },
    ],
  },
  cloud: {
    slug: "/services/cloud-application-development",
    title: "Cloud Application Development | AWS-Ready Web & Mobile Apps",
    metaDescription:
      "Cloud-ready application development on AWS. Scalable, secure backends and infrastructure for startups and growing products. Learn more.",
    h1: "Cloud-Ready Application Development on AWS",
    intro:
      "We build and deploy applications on AWS so they scale from day one. From serverless APIs to managed databases and CI/CD, we deliver cloud-native solutions for startups and growing products.",
    sections: [
      {
        h2: "Why Build Cloud-Native from Day One",
        content:
          "Cloud-native design avoids costly rewrites later. You get scalability, reliability, and security built in, with pay-as-you-grow economics.",
      },
      {
        h2: "Our AWS Development Capabilities",
        h3: [
          { h3: "Scalable Backends & APIs", content: "APIs and backends that scale with traffic and data." },
          { h3: "Serverless & Managed Services", content: "Lambda, API Gateway, RDS, and more—we choose the right fit for your product." },
        ],
        content: "",
      },
      {
        h2: "Security, Compliance & Cost Optimization",
        content:
          "We follow security best practices and help you optimize cost as you grow. We can align with common compliance requirements where needed.",
      },
      {
        h2: "Cloud + Frontend & Mobile",
        content:
          "We integrate AWS backends with React, Next.js, Flutter, and React Native. Full-stack, cloud-ready products in one place.",
      },
      {
        h2: "Our Cloud Development Process",
        content:
          "We design for scale from the start: architecture, infrastructure as code, monitoring, and CI/CD. You get a production-ready, operable system.",
      },
      {
        h2: "Get Your Cloud-Ready App Built",
        content:
          "Share your product goals and scale expectations. We'll propose an architecture and a clear quote.",
      },
    ],
    ctaPrimary: "Discuss Your Cloud Architecture",
    ctaSecondary: "Get an AWS Development Quote",
    internalLinks: [
      { label: "Full-stack development", href: "/services/full-stack-development" },
      { label: "React & Next.js web development", href: "/services/react-nextjs-web-development" },
      { label: "MVP and startup development", href: "/" },
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES_SEO) as (keyof typeof SERVICES_SEO)[];
