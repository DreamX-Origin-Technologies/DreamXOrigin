import "./App.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Grid from "@/components/ui/grid";
import { DotPattern } from "@/components/ui/dot-pattern";

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

      <div className="bg-background min-h-200 relative flex w-full flex-col items-center justify-center overflow-hidden">
        <DotPattern className="min-h-200" glow/>
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
