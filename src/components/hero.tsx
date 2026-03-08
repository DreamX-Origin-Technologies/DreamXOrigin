import { AnimatedGrid } from "@/components/ui/animated-grid";
import { LightRays } from "@/components/ui/light-rays";
import heroImage from "@/assets/Hero img.svg";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[75dvh] min-h-[75vh] flex-col overflow-hidden bg-background lg:flex-row lg:items-center">
      {/* Magic UI: animated grid + light rays for ambient background */}
      <AnimatedGrid
        gridSize={56}
        gridColor="rgba(0,0,0,0.05)"
        gridFadeStart={0}
        gridFadeEnd={0.85}
        className="z-0"
      />
      <LightRays
        count={11}
        colors={[
          "rgba(125, 211, 252, 0.48)",
          "rgba(251, 146, 60, 0.44)",
          "rgba(167, 139, 250, 0.44)",
          "rgba(45, 212, 191, 0.4)",
        ]}
        blur={2}
        length="75vh"
        className="z-0"
      />
      {/* Secondary warm/cool orbs for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-65 dark:opacity-55"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 70% 20%, rgba(251, 146, 60, 0.28), transparent 55%), radial-gradient(ellipse 60% 40% at 20% 60%, rgba(125, 211, 252, 0.25), transparent 50%)",
          filter: "blur(50px)",
        }}
      />

      {/* Left - multi-color circles + plus (pulse & float) */}
      {/* <div
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
      </div> */}

      {/* Bottom left - multi-color briefcase (float) */}
      {/* <div
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
      </div> */}

      {/* Right side - multi-color orbiting dots (spin-slow) - behind illustration */}
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

      {/* Left column - main content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-16 text-center lg:px-8 lg:py-24 xl:pl-12 xl:pr-8">
        <div className="mx-auto items-center w-full max-w-xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Where Ideas Become{" "}
            <span className="gradient-text-animate">Intelligent</span> Solutions
          </h1>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed md:mt-8 md:text-lg">
            Innovation starts here — engineered for impact, built for scale. We build next-generation mobile and web applications powered by intelligent{" "}
            <span className="rainbow-text">AI solutions</span>.
          </p>
        </div>
      </div>

      {/* Right column - hero image */}
      <div
        aria-hidden
        className="relative flex flex-1 items-center justify-center px-4 py-8 lg:min-h-0 lg:py-12 lg:pr-8 xl:pr-16"
      >
        <div
          className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
          style={{ animation: "careers-float-slow 6s ease-in-out infinite" }}
        >
          <img
            src={heroImage}
            alt=""
            className="h-auto w-full object-contain object-center opacity-95"
          />
        </div>
      </div>
    </section>
  );
}
