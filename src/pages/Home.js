import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import CategorySection from "../components/CategorySection";
import FeaturedSalons from "../components/FeaturedSalons";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import AIRecommendation from "../components/AIRecommendation";
import ClientStories from "../components/ClientStories";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <CategorySection />
      <FeaturedSalons />
      <AIRecommendation />
      <Testimonials />
      <ClientStories />
       <Footer />


    </>
  );
}
export default Home;