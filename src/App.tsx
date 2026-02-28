import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Whatsapp } from "@/components/whatsapp";
import { Home } from "@/pages/Home";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { TermsAndConditions } from "@/pages/TermsAndConditions";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
      <Whatsapp />
    </>
  );
}

export default App;
