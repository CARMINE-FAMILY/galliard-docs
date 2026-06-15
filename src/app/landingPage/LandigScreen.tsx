import Hero from "../../components/Hero";
import Final from "../Final";
import Nose from "../Nose";
import Prueba from "../Prueba";

export default function LandingScreen() {
  return (
    <div className="landing-screen">
      <Hero />
      <Prueba />
      <Nose />
      <Final />
    </div>
  );
}