import Hero from "../../components/Hero";
import CardsContainer from "../CardsContainer";
import CodeExample from "../CodeContainer";

export default function LandingScreen() {
  return (
    <div className="landing-screen">
      <Hero />
      <CardsContainer />
      <CodeExample />
    </div>
  );
}