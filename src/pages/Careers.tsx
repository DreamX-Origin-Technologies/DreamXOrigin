import { useState, Fragment, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SeoHead } from "@/components/SeoHead";
import { ArrowRightIcon, ChevronDownIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const PAGE_TITLE = "Careers | Join DreamX Origin";
const PAGE_DESCRIPTION =
  "We're hiring a Full Stack Developer (2+ years experience). Join DreamX Origin.";

const DEPARTMENTS = ["Engineering", "HR"] as const;
type Department = (typeof DEPARTMENTS)[number];

type OpenRole = {
  id: string;
  title: string;
  department: Department;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  internshipDetails?: { duration: string; mode: string };
  applyEmail: string;
  applySubject: string;
};

const OPEN_ROLES: OpenRole[] = [
  {
    id: "full-stack-developer-intern",
    title: "Full Stack Developer Intern",
    department: "Engineering",
    location: "Bangalore / Remote (Flexible)",
    type: "Internship",
    experience: "Intern",
    summary:
      "DreamX Origin Technologies is looking for a Full Stack Developer Intern to learn and contribute to our web and mobile applications. This role offers hands-on experience with React, Node.js, and modern tools alongside our engineering team.",
    responsibilities: [
      "Assist in building web applications using React, Next.js, or similar frontend frameworks",
      "Support API and backend development with Node.js, Go, or Python",
      "Work with databases and integrate with external services",
      "Collaborate with designers and developers to ship features",
      "Write clean code and participate in code reviews",
    ],
    requirements: [
      "Pursuing or completed degree in Computer Science or related field",
      "Basic knowledge of JavaScript/TypeScript and interest in React or similar",
      "Understanding of REST APIs and backend basics",
      "Familiarity with Git and willingness to learn DevOps basics",
      "Good communication skills and team-oriented",
    ],
    internshipDetails: {
      duration: "3–6 months",
      mode: "Internship (potential full-time opportunity based on performance)",
    },
    applyEmail: "info@dreamxorigin.com",
    applySubject: "Application: Full Stack Developer Intern",
  },
  {
    id: "golang-developer-intern",
    title: "Golang Developer Intern",
    department: "Engineering",
    location: "Bangalore / Remote (Flexible)",
    type: "Internship",
    experience: "Intern",
    summary:
      "DreamX Origin Technologies is looking for a Golang Developer Intern to support the development and scaling of our backend services and SaaS platforms. This role provides hands-on exposure to real product development and system architecture.",
    responsibilities: [
      "Develop backend services using Golang",
      "Build and maintain REST APIs",
      "Work with PostgreSQL databases",
      "Assist in scaling backend systems and improving performance",
      "Collaborate with frontend and product teams",
    ],
    requirements: [
      "Basic knowledge of Golang",
      "Understanding of REST APIs",
      "Knowledge of databases (PostgreSQL / MySQL)",
      "Familiarity with Git and backend fundamentals",
    ],
    niceToHave: [
      "Understanding of microservices",
      "Experience with Docker or cloud platforms",
      "Interest in system design and scalable backend systems",
    ],
    internshipDetails: {
      duration: "3–6 months",
      mode: "Internship (potential full-time opportunity based on performance)",
    },
    applyEmail: "info@dreamxorigin.com",
    applySubject: "Application: Golang Developer Intern",
  },
  {
    id: "hr-intern",
    title: "HR Intern",
    department: "HR",
    location: "Bangalore / Remote",
    type: "Internship",
    experience: "Intern",
    summary:
      "DreamX Origin Technologies is looking for an HR Intern to support recruitment operations and talent management for our growing engineering team.",
    responsibilities: [
      "Source candidates from LinkedIn and job platforms",
      "Coordinate interview scheduling",
      "Manage candidate communication and follow-ups",
      "Maintain hiring pipeline and recruitment data",
      "Support employer branding initiatives",
    ],
    requirements: [
      "Strong communication skills",
      "Interest in recruitment and HR operations",
      "Familiarity with LinkedIn and job portals",
      "Organized and detail oriented",
    ],
    internshipDetails: {
      duration: "3–6 months",
      mode: "Opportunity to convert to a full-time HR role",
    },
    applyEmail: "info@dreamxorigin.com",
    applySubject: "Application: HR Intern",
  },
];

const LOCATIONS = ["All Locations", "Bangalore, India · Remote", "Bangalore / Remote (Flexible)", "Bangalore / Remote"];

export function Careers() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedDepartments, setSelectedDepartments] = useState<Department[]>([]);
  const [departmentFilter, setDepartmentFilter] = useState<string>("All Departments");
  const [locationFilter, setLocationFilter] = useState<string>("All Locations");
  const [departmentDropdownOpen, setDepartmentDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  const scrollToRoles = () => {
    document.getElementById("open-roles")?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDepartmentPill = (dept: Department) => {
    setSelectedDepartments((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]
    );
  };

  const clearFilters = () => {
    setSelectedDepartments([]);
    setDepartmentFilter("All Departments");
    setLocationFilter("All Locations");
  };

  const filteredRoles = useMemo(() => {
    return OPEN_ROLES.filter((role) => {
      const matchDept =
        selectedDepartments.length === 0 || selectedDepartments.includes(role.department);
      const matchDeptDropdown =
        departmentFilter === "All Departments" || role.department === departmentFilter;
      const matchLocation =
        locationFilter === "All Locations" || role.location === locationFilter;
      return matchDept && matchDeptDropdown && matchLocation;
    });
  }, [selectedDepartments, departmentFilter, locationFilter]);

  const hasActiveFilters =
    selectedDepartments.length > 0 ||
    departmentFilter !== "All Departments" ||
    locationFilter !== "All Locations";

  return (
    <>
      <SeoHead
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        canonical="/careers"
      />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden bg-background">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/2 opacity-[0.06] dark:opacity-[0.08]"
          >
            <svg className="size-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="careers-pattern"
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M0 0L30 0L30 30L0 30Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
                  <path d="M30 30L60 30L60 60L30 60Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#careers-pattern)" className="text-foreground" />
            </svg>
          </div>

          {/* Left - careers hero illustration (businessman on steps) + existing SVGs */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 hidden w-64 -translate-y-1/2 md:block lg:left-8 lg:w-72 xl:w-80"
          >
            <img
              src="/careers-hero-illustration.png"
              alt=""
              className="h-auto max-h-[300px] w-full object-contain object-center opacity-95"
              width={360}
              height={300}
            />
          </div>

          {/* Left - multi-color circles + plus (pulse & float) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/3 hidden md:block lg:left-8"
            style={{ animation: "careers-float-slow 5s ease-in-out infinite" }}
          >
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" className="opacity-90">
              <ellipse cx="80" cy="80" rx="60" ry="60" fill="#f97316" fillOpacity="0.1" style={{ animation: "careers-pulse 3s ease-in-out infinite" }} />
              <ellipse cx="80" cy="80" rx="38" ry="38" fill="#38bdf8" fillOpacity="0.08" style={{ animation: "careers-pulse 3s ease-in-out infinite 0.5s" }} />
              <path d="M60 80h40M80 60v40M72 72l16 16M88 72l-16 16" stroke="#a78bfa" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
              <circle cx="80" cy="80" r="6" fill="#4db6ac" fillOpacity="0.25" />
            </svg>
          </div>

          {/* Bottom left - multi-color briefcase (float) */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-1/4 left-[15%] hidden lg:block"
            style={{ animation: "careers-float 4s ease-in-out infinite" }}
          >
            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" className="opacity-85">
              <rect x="14" y="28" width="60" height="44" rx="5" stroke="#f97316" strokeOpacity="0.5" strokeWidth="2" fill="#fb923c" fillOpacity="0.08" />
              <path d="M28 28V22a5 5 0 015-5h22a5 5 0 015 5v6" stroke="#f97316" strokeOpacity="0.5" strokeWidth="2" fill="none" />
              <path d="M38 50h12M38 58h8" stroke="#38bdf8" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="20" y="34" width="48" height="32" rx="2" fill="#a78bfa" fillOpacity="0.06" stroke="#a78bfa" strokeOpacity="0.25" strokeWidth="1" />
            </svg>
          </div>

          {/* Right - abstract layered shapes (blobs + geometric) */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 md:block lg:right-8"
          >
            <svg
              width="320"
              height="280"
              viewBox="0 0 320 280"
              fill="none"
              className="opacity-95"
            >
              {/* Organic blob - violet (back) */}
              <path
                d="M260 80c0-24 28-44 52-36 18 6 24 28 16 48-10 22-38 32-58 24-24-10-10-24-10-36z"
                fill="#a78bfa"
                fillOpacity="0.22"
                style={{ animation: "careers-float-slow 6s ease-in-out infinite" }}
              />
              {/* Organic blob - ice blue */}
              <path
                d="M220 180c12-20 44-18 56 4 14 24-4 52-28 56-28 4-40-24-28-60z"
                fill="#7dd3fc"
                fillOpacity="0.28"
                style={{ animation: "careers-float 5s ease-in-out infinite 0.5s" }}
              />
              {/* Rounded rectangle stack - orange/teal */}
              <g transform="translate(120, 60)">
                <rect x="0" y="32" width="72" height="48" rx="8" fill="#4db6ac" fillOpacity="0.18" stroke="#4db6ac" strokeOpacity="0.45" strokeWidth="1.5" />
                <rect x="8" y="20" width="72" height="48" rx="8" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeOpacity="0.5" strokeWidth="1.5" />
                <rect x="16" y="8" width="72" height="48" rx="8" fill="#f97316" fillOpacity="0.25" stroke="#f97316" strokeOpacity="0.55" strokeWidth="1.5" />
              </g>
              {/* Hexagon - violet accent */}
              <path
                d="M248 200l22-12.7v-25.4L248 149l-22 12.7v25.4L248 200z"
                fill="#c4b5fd"
                fillOpacity="0.2"
                stroke="#a78bfa"
                strokeOpacity="0.5"
                strokeWidth="2"
                style={{ animation: "careers-float 4s ease-in-out infinite 1s" }}
              />
              {/* Small circles cluster */}
              <circle cx="268" cy="50" r="12" fill="#f97316" fillOpacity="0.2" stroke="#fb923c" strokeOpacity="0.5" strokeWidth="1.5" />
              <circle cx="268" cy="50" r="5" fill="#fb923c" fillOpacity="0.6" />
              <circle cx="180" cy="220" r="18" fill="#38bdf8" fillOpacity="0.15" stroke="#7dd3fc" strokeOpacity="0.45" strokeWidth="1.5" />
              <circle cx="180" cy="220" r="7" fill="#7dd3fc" fillOpacity="0.5" />
              {/* Curved line accent - teal */}
              <path
                d="M80 100 Q140 60 200 100 T320 100"
                stroke="#4db6ac"
                strokeOpacity="0.35"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          {/* Right side - multi-color orbiting dots (spin-slow) */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-32 top-1/4 hidden opacity-90 xl:block"
            style={{ animation: "careers-spin-slow 20s linear infinite" }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="2.5" fill="#f97316" fillOpacity="0.7" />
              <circle cx="50" cy="18" r="2" fill="#38bdf8" fillOpacity="0.6" />
              <circle cx="82" cy="50" r="2" fill="#a78bfa" fillOpacity="0.6" />
              <circle cx="50" cy="82" r="2" fill="#4db6ac" fillOpacity="0.5" />
              <circle cx="18" cy="50" r="2" fill="#fb923c" fillOpacity="0.5" />
              <circle cx="68" cy="32" r="1.5" fill="#7dd3fc" fillOpacity="0.5" />
              <circle cx="68" cy="68" r="1.5" fill="#c4b5fd" fillOpacity="0.45" />
              <circle cx="32" cy="68" r="1.5" fill="#26a69a" fillOpacity="0.45" />
              <circle cx="32" cy="32" r="1.5" fill="#f97316" fillOpacity="0.4" />
            </svg>
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 py-20 text-center md:px-6 md:py-28 lg:px-8 lg:py-32">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Let's build{" "}
              <span className="gradient-text-animate">better</span> products
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground leading-relaxed md:text-lg">
              At DreamX Origin, we build scalable web and mobile applications that help startups and businesses win. We make product development better for everyone: our clients ship faster and reach more users, while our engineers do meaningful work on products that matter.
            </p>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              Want to join our team? See open roles below.
            </p>
            <RainbowButton
              variant="default"
              size="lg"
              className="mt-8"
              onClick={scrollToRoles}
            >
              View open roles
              <ArrowRightIcon className="size-4" />
            </RainbowButton>
          </div>
        </section>

        {/* Current job openings */}
        <section
          id="open-roles"
          className="bg-gradient-to-br from-[#7c3aed]/[0.08] via-[#e9e0f5]/90 to-[#dbeafe]/80 dark:from-[#6366f1]/[0.12] dark:via-[#4f46e5]/[0.06] dark:to-[#818cf8]/[0.08]"
        >
          <div className="mx-auto w-full max-w-5xl px-4 py-16 md:py-24">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground">
              Current job openings
            </h2>

            {/* Filter bar */}
            <div className="mb-6 rounded-xl border border-border bg-card p-4 shadow-sm md:p-5">
              <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold text-foreground">Filter</span>
                  <div className="flex flex-wrap gap-2">
                    {DEPARTMENTS.map((dept) => (
                      <button
                        key={dept}
                        type="button"
                        onClick={() => toggleDepartmentPill(dept)}
                        className={cn(
                          "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                          selectedDepartments.includes(dept)
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "bg-muted text-muted-foreground hover:bg-muted/80 dark:bg-muted/60",
                        )}
                      >
                        {dept.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setDepartmentDropdownOpen(!departmentDropdownOpen);
                        setLocationDropdownOpen(false);
                      }}
                      className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm hover:bg-muted/50"
                    >
                      {departmentFilter}
                      <ChevronDownIcon className="size-4" />
                    </button>
                    {departmentDropdownOpen && (
                      <div className="absolute left-0 top-full z-10 mt-1 min-w-[180px] rounded-lg border border-border bg-card py-1 shadow-lg">
                        {["All Departments", ...DEPARTMENTS].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            className="w-full px-4 py-2 text-left text-sm hover:bg-muted/50"
                            onClick={() => {
                              setDepartmentFilter(opt);
                              setDepartmentDropdownOpen(false);
                            }}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setLocationDropdownOpen(!locationDropdownOpen);
                        setDepartmentDropdownOpen(false);
                      }}
                      className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm hover:bg-muted/50"
                    >
                      {locationFilter}
                      <ChevronDownIcon className="size-4" />
                    </button>
                    {locationDropdownOpen && (
                      <div className="absolute left-0 top-full z-10 mt-1 min-w-[200px] rounded-lg border border-border bg-card py-1 shadow-lg">
                        {LOCATIONS.map((loc) => (
                          <button
                            key={loc}
                            type="button"
                            className="w-full px-4 py-2 text-left text-sm hover:bg-muted/50"
                            onClick={() => {
                              setLocationFilter(loc);
                              setLocationDropdownOpen(false);
                            }}
                          >
                            {loc}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {hasActiveFilters && (
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    >
                      <XIcon className="size-4" />
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Job table */}
            <div className="overflow-x-auto overflow-y-hidden rounded-xl border border-border bg-card shadow-sm">
              <table className="w-full min-w-[600px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-border bg-muted/30 dark:bg-muted/20">
                    <th className="px-4 py-4 text-sm font-bold text-foreground md:px-6 whitespace-nowrap">Role</th>
                    <th className="px-4 py-4 text-sm font-bold text-foreground md:px-6 whitespace-nowrap">Department</th>
                    <th className="px-4 py-4 text-sm font-bold text-foreground md:px-6 whitespace-nowrap">Location</th>
                    <th className="w-24 px-4 py-4 md:px-6" aria-label="Details" />
                  </tr>
                </thead>
                <tbody>
                  {filteredRoles.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-4 py-12 text-center text-sm text-muted-foreground md:px-6">
                        No roles match your filters. Try clearing filters.
                      </td>
                    </tr>
                  ) : (
                    filteredRoles.map((role) => (
                      <Fragment key={role.id}>
                        <tr className="border-b border-border last:border-b-0">
                          <td className="px-4 py-4 font-medium text-foreground md:px-6">
                            {role.title}
                          </td>
                          <td className="px-4 py-4 text-sm text-muted-foreground md:px-6">
                            {role.department}
                          </td>
                          <td className="px-4 py-4 text-sm text-muted-foreground md:px-6">
                            {role.location}
                          </td>
                          <td className="px-4 py-4 md:px-6">
                            <Button
                              variant="secondary"
                              size="sm"
                              className="bg-muted text-foreground hover:bg-muted/80"
                              onClick={() => setExpandedId((prev) => (prev === role.id ? null : role.id))}
                            >
                              Details
                            </Button>
                          </td>
                        </tr>
                        {expandedId === role.id && (
                          <tr className="bg-muted/20 dark:bg-muted/10">
                            <td colSpan={4} className="px-4 py-0 md:px-6">
                              <div className="border-t border-border px-4 py-6 md:px-6">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {role.summary}
                                </p>
                                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                                  <div>
                                    <h3 className="text-sm font-semibold text-foreground">
                                      Key Responsibilities
                                    </h3>
                                    <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                      {role.responsibilities.map((item, i) => (
                                        <li key={i} className="flex gap-2">
                                          <span className="text-[#4db6ac] dark:text-[#5dc9bf]">·</span>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <h3 className="text-sm font-semibold text-foreground">
                                      Requirements
                                    </h3>
                                    <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                      {role.requirements.map((item, i) => (
                                        <li key={i} className="flex gap-2">
                                          <span className="text-[#4db6ac] dark:text-[#5dc9bf]">·</span>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                                {role.niceToHave && role.niceToHave.length > 0 && (
                                  <div className="mt-6">
                                    <h3 className="text-sm font-semibold text-foreground">
                                      Good to Have
                                    </h3>
                                    <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                                      {role.niceToHave.map((item, i) => (
                                        <li key={i} className="flex gap-2">
                                          <span className="text-[#4db6ac] dark:text-[#5dc9bf]">·</span>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                {role.internshipDetails && (
                                  <div className="mt-6 rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
                                    <p>
                                      <span className="font-medium text-foreground">Duration:</span>{" "}
                                      {role.internshipDetails.duration}
                                    </p>
                                    <p className="mt-1">
                                      <span className="font-medium text-foreground">Mode:</span>{" "}
                                      {role.internshipDetails.mode}
                                    </p>
                                  </div>
                                )}
                                <a
                                  href={`mailto:${role.applyEmail}?subject=${encodeURIComponent(role.applySubject)}`}
                                  className="mt-6 inline-block"
                                >
                                  <Button size="default" className="gap-2">
                                    Apply for this role
                                    <ArrowRightIcon className="size-4" />
                                  </Button>
                                </a>
                              </div>
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Questions? <Link to="/#contact-us" className="text-primary cursor-pointer">Contact us</Link>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
