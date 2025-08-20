"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ImageCarousel } from "./components/ImageCarousel";
import { MarqueeSection } from "./components/MarqueeSection";
import { YearlyPlans } from "./components/YearlyPlans";
import { MonthlyPlans } from "./components/MonthlyPlans";
import { RulesRegulations } from "./components/RulesRegulations";
import { FacilitiesPayment } from "./components/FacilitiesPayment";
// import { PaymentMethods } from "./components/PaymentMethods";
// import { Branches } from "./components/Branches";
import { NearbyInstitutions } from "./components/NearbyInstitutions";
import { CallToAction } from "./components/CallToAction";
import { Toaster } from "./components/ui/sonner";
import { PaymentNotice } from "./components/PaymentNotice";
import { Footer } from "./components/Footer";

export default function App() {
  const location = useLocation();

  // Scroll to hash targets reliably after route/hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const navHeight = 80;
      let attempts = 0;
      const maxAttempts = 15;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: "smooth" });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };
      // delay a bit to allow content to mount
      setTimeout(tryScroll, 100);
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* <PaymentNotice /> */}

      {/* Hero Section */}
      <HeroSection />

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Facilities */}
      <FacilitiesPayment />

      {/* Nearby Colleges & Universities */}
      <NearbyInstitutions />

      {/* Image Carousel */}
      <ImageCarousel />

      

      {/* Monthly Plans */}
      <MonthlyPlans />

      {/* Yearly Plans */}
      <YearlyPlans />

      {/* Rules & Regulations */}
      {/* <RulesRegulations /> */}

      {/* Payment Methods & Extra Services */}
      {/* <PaymentMethods /> */}

      {/* Call to Action */}
      <CallToAction />

      {/* Branch Locations */}
      {/* <Branches /> */}

      {/* Enhanced Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
