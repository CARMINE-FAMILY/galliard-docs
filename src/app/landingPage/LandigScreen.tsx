import Hero from "../../components/Hero";
import Final from "../Final";
import Nose from "../Nose";
import Card from "../Card";

export default function LandingScreen() {
  return (
    <div className="landing-screen">
      <Hero />
      <Card />
      <Nose />
      <Final />
    </div>
  );
}