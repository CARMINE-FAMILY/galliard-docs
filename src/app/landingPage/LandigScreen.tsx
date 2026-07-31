import Footer from "./Footer";
import Hero from "../../components/page/Hero";
import CardsContainer from "../../components/page/CardsContainer";
import CodeExample from "../../components/page/CodeContainer";

export default function LandingScreen() {
  return (
    <div className="landing-screen">
      <Hero />
      <CardsContainer />
      <CodeExample />
      <Footer />
    </div>
  );
}