import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Whatsapp } from "@/components/whatsapp";
import { Home } from "@/pages/Home";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { RefundAndCancellationPolicy } from "@/pages/RefundAndCancellationPolicy";
import { TermsAndConditions } from "@/pages/TermsAndConditions";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-cancellation-policy" element={<RefundAndCancellationPolicy />} />
      </Routes>
      <Footer />
      <Whatsapp />
    </>
  );
}

export default App;
