import "./App.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { GradientBackground } from "@/components/animate-ui/components/backgrounds/gradient";
import Hero from "@/components/hero";
import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";
import Grid from "@/components/ui/grid";

function App() {
  return (
    <>
      <Header />

      {/* <HexagonBackground className="z-1">  */}
      <div
        aria-hidden="true"
        className="absolute inset-0 h-175 overflow-hidden"
      >
        <div className="transform-[translate3d(0,0,0)] absolute -inset-x-10 bottom-0 h-[60%] opacity-60 blur-[100px] dark:opacity-0">
          <div className="mask-[radial-gradient(closest-side,black_100%,transparent_100%)]  h-175 -scale-y-100 hero-gradiant"></div>
        </div>
      </div>
      <Grid columns={25} rows={10} className="absolute h-160 "></Grid>
      <Hero />
      {/* </HexagonBackground> */}
      {/* <GradientBackground className="before:animate-rainbow pointer-events-none absolute inset-0 h-100 w-full min-h-screen z-2 mask-[linear-gradient(to_bottom,transparent,var(--background))] opacity-20 top-14.5" /> */}
      {/* <GradientBackground className="before:animate-rainbow pointer-events-none absolute inset-0 h-100 w-full min-h-screen z-0 before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-[80%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:bg-size-[200%] before:opacity-20 before:filter-[blur(calc(4*1rem))]" /> */}

      {/* <div className="before:animate-rainbow pointer-events-none inset-0 h-50 w-full before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-[80%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:bg-size-[200%] before:opacity-20 before:filter-[blur(calc(4*1rem))]"></div> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
