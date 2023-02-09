import "./App.css";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Price from "./sections/Price";
import Services from "./sections/Services";
import ServicesExpanded from "./sections/ServicesExpanded";
import Skills from "./sections/Skills";
import SplitSection from "./sections/SplitSection";
import SplitSectionB from "./sections/SplitSectionB";
import Support from "./sections/Support";
import Video from "./sections/Video";
import { useWindowWidth } from "@react-hook/window-size";
import { useEffect, useState } from "react";

function App() {
  const width = useWindowWidth();
  const [checked, SetChecked] = useState(false);

  useEffect(() => {
    if (!checked && width < 1024) {
      alert("This site is not optimized to use on mobile device");
      SetChecked(true)
    }
  },[checked, width]);

  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Services />
        <SplitSection />
      </div>
      <Video />
      <div className="container">
        <SplitSectionB />
        <ServicesExpanded />
        <Skills />
      </div>
      <CallToAction />
      <div className="container">
        <Price />
        <Support />
      </div>
      <Footer />
    </>
  );
}

export default App;
