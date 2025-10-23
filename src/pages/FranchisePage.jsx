import React, { useEffect, useMemo, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { MODELS } from "../utils/franchiseData";
import HeroSection from "../components/franchise/HeroSection";
import StatsOverview from "../components/Franchise/StatsOverview";
import ModelsComparison from "../components/franchise/ModelsComparison";
import ROISection from "../components/franchise/ROISection";
import ProcessTimeline from "../components/franchise/ProcessTimeline";
import InsightsSupport from "../components/franchise/InsightsSupport";
import TestimonialsSection from "../components/franchise/TestimonialsSection";
import SalesProfitExplanation from "../components/Franchise/SalesProfitExplanation";
import StoreGallery from "../components/Franchise/StoreGallery";

export default function FranchisePage() {
  const [monthlyLeads, setMonthlyLeads] = useState(0);
  const [topCity, setTopCity] = useState("--");
  const [growthData, setGrowthData] = useState([10, 20, 30, 50, 70, 90]);

  // ROI calculator state
  const [investment, setInvestment] = useState(700000);
  const [expectedRoiPct, setExpectedRoiPct] = useState(45);
  const [selectedCalcModel, setSelectedCalcModel] = useState("grab");

  // Enquiry form state
  const [enquiry, setEnquiry] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    model: "grab",
    budget: "",
    message: "",
  });
  const [enquiryStatus, setEnquiryStatus] = useState(null);

  useEffect(() => {
    async function fetchLeads() {
      try {
        const snap = await getDocs(collection(db, "franchiseLeads"));
        setMonthlyLeads(snap.size || 0);
      } catch (err) {
        console.warn("Failed to fetch franchiseLeads:", err);
      }
    }
    fetchLeads();
  }, []);

  const expectedMonthlyReturn = useMemo(() => {
    const monthly = ((Number(investment) * Number(expectedRoiPct)) / 100) / 12;
    return Math.round(monthly);
  }, [investment, expectedRoiPct]);

  const paybackMonths = useMemo(() => {
    const monthly = expectedMonthlyReturn || 1;
    return Math.max(1, Math.round(Number(investment) / monthly));
  }, [investment, expectedMonthlyReturn]);

  async function submitEnquiry(e) {
    e.preventDefault();
    setEnquiryStatus("loading");
    try {
      await addDoc(collection(db, "franchiseEnquiries"), {
        ...enquiry,
        createdAt: new Date(),
      });
      setEnquiryStatus("success");
      setEnquiry({
        name: "",
        phone: "",
        email: "",
        city: "",
        model: "grab",
        budget: "",
        message: "",
      });
    } catch (err) {
      console.error("Enquiry submit failed:", err);
      setEnquiryStatus("error");
    } finally {
      setTimeout(() => setEnquiryStatus(null), 4000);
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <HeroSection />
      <StatsOverview />

      <ModelsComparison
        models={MODELS}
      />

      <StoreGallery/>

      <ROISection
        models={MODELS}
        investment={investment}
        setInvestment={setInvestment}
        expectedRoiPct={expectedRoiPct}
        setExpectedRoiPct={setExpectedRoiPct}
        selectedCalcModel={selectedCalcModel}
        setSelectedCalcModel={setSelectedCalcModel}
        expectedMonthlyReturn={expectedMonthlyReturn}
        paybackMonths={paybackMonths}
      />

      <SalesProfitExplanation />

      <ProcessTimeline />
      <InsightsSupport monthlyLeads={monthlyLeads} topCity={topCity} />
      <TestimonialsSection />
    </div>
  );
}