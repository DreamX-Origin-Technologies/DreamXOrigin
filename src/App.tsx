import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Whatsapp } from "@/components/whatsapp";
import { Home } from "@/pages/Home";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { RefundAndCancellationPolicy } from "@/pages/RefundAndCancellationPolicy";
import { TermsAndConditions } from "@/pages/TermsAndConditions";
import { ReactNextJsPage } from "@/pages/services/ReactNextJsPage";
import { FlutterPage } from "@/pages/services/FlutterPage";
import { ReactNativePage } from "@/pages/services/ReactNativePage";
import { AndroidKotlinPage } from "@/pages/services/AndroidKotlinPage";
import { FullStackPage } from "@/pages/services/FullStackPage";
import { CloudPage } from "@/pages/services/CloudPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/react-nextjs-web-development" element={<ReactNextJsPage />} />
        <Route path="/services/flutter-app-development" element={<FlutterPage />} />
        <Route path="/services/react-native-app-development" element={<ReactNativePage />} />
        <Route path="/services/android-native-kotlin-development" element={<AndroidKotlinPage />} />
        <Route path="/services/full-stack-development" element={<FullStackPage />} />
        <Route path="/services/cloud-application-development" element={<CloudPage />} />
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
