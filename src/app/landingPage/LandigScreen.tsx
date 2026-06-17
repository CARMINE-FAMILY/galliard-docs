import Hero from "../../components/Hero";
import CardsContainer from "../CardsContainer";
import Final from "../Final";

export default function LandingScreen() {
  return (
    <div className="landing-screen">
      <Hero />
      <CardsContainer />
      {/* <Final /> */}
    </div>
  );
}