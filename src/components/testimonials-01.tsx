import type { TestimonialType } from "@/components/testimonial-list"
import { TestimonialList } from "@/components/testimonial-list"

export default function Testimonials01() {
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full overflow-hidden" id="customer-stories">
      <div className="mb-12 flex flex-col items-center text-center">
        <style>
          {`
            @keyframes gradient-pan {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
        <h2 
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          style={{ 
            backgroundSize: "200% auto", 
            animation: "gradient-pan 3s ease infinite" 
          }}
        >
          Loved by Our Users
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
          Their experiences speak louder than words
        </p>
      </div>

      <div className="flex flex-col gap-2 [&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch! w-full max-w-7xl mx-auto relative px-4 md:px-8">
        <TestimonialList data={TESTIMONIALS_1} />
        <TestimonialList data={TESTIMONIALS_2} direction="right" />
        
        {/* Fading edge gradients for the marquee sliders */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </div>
  )
}

const TESTIMONIALS_1: TestimonialType[] = [
  {
    authorAvatar: "https://unavatar.io/x/kapehe_ok",
    authorName: "Kap",
    authorTagline: "Head of Developer Community @Vercel",
    url: "https://x.com/kapehe_ok/status/1948104774358106612",
    quote: "one of my favorite projects that submitted! you are crushing it!",
  },
  {
    authorAvatar: "https://unavatar.io/x/rauchg",
    authorName: "Guillermo Rauch",
    authorTagline: "CEO @Vercel",
    url: "https://x.com/rauchg/status/1978913158514237669",
    quote:
      "awesome. Love the components, especially slide-to-unlock. Great job",
  },
  {
    authorAvatar: "https://unavatar.io/x/iamsahaj_xyz",
    authorName: "Sahaj",
    authorTagline: "Creator of tweakcn.com",
    url: "https://x.com/iamsahaj_xyz/status/1982814244501381239",
    quote:
      "remember seeing it on @mannupaaji's review. it's one of the best looking ones I've seen",
  }
]

const TESTIMONIALS_2: TestimonialType[] = [
  {
    authorAvatar: "https://unavatar.io/x/MaxPrilutskiy",
    authorName: "Max Prilutskiy",
    authorTagline: "Creator of Lingo.dev",
    url: "https://x.com/MaxPrilutskiy/status/1923952193893466379",
    quote: "i like your style! :)",
  },
  {
    authorAvatar: "https://unavatar.io/x/jordwalke",
    authorName: "jordwalke",
    authorTagline: "Creator of React",
    url: "https://x.com/jordwalke/status/1937165909778657589",
    quote: "Looks great",
  }
]
