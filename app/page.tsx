import Megoldás from "@/app/Megoldás";

export default function HomePage() {
  const m: Megoldás = new Megoldás("egyszamjatek.txt");

  return <div>Egyszámjáték</div>;
}
