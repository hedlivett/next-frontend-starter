import Megoldás from "@/app/Megoldás";

export default function HomePage() {
  const m: Megoldás = new Megoldás("egyszamjatek.txt");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-300">
      <div className="w-xl rounded-xl bg-white p-5 shadow-xl">
        <form>
          <div className="space-y-5"></div>
          <h1 className="text-center text-2xl font-bold">Egyszámjáték feladat</h1>
          <p className="text-xl">3.feladat: Játékosok száma: {m.játékosokSzáma}</p>
          <p className="text-xl">4.feladat: Fordulók száma: {m.fordulókSzáma}</p>
        </form>
      </div>
    </div>
  );
}
