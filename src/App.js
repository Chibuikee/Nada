import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import CompaniesLogos from "./components/CompaniesLogos";
import PlatformSection from "./components/PlatformSection";
import UnlockEquitySection from "./components/UnlockEquitySection";
import ComingSoonSection from "./components/ComingSoonSection";
import InvestingSection from "./components/InvestingSection";
import Testimonials from "./components/Testimonials";
import Ratings from "./components/Ratings";
import VideoTestimonial from "./components/VideoTestimonial";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="main">
        <Herosection />
        <CompaniesLogos />
        <PlatformSection />
        <UnlockEquitySection />
        <InvestingSection />
        <ComingSoonSection />
        <Testimonials />
        <Ratings />
        <VideoTestimonial />
      </main>
      <Footer />
    </div>
  );
}

export default App;
