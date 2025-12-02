import fs from "fs";
import Játékos from "@/app/Játékos";

//magunktol beírva ez, többi importálva

export default class Megoldás {
  #játékosok: Játékos[] = []; //inicalizálása

  constructor(forrás: string) {
    fs.readFileSync(forrás)
      .toString()
      .split("\r\n")
      .forEach((sor) => {
        const aktSor: string = sor.trim(); //Maradék vezérlőkarakterek eltávolítása ()
        if (aktSor.length > 0) {
          this.#játékosok.push(new Játékos(aktSor));
        }
      });
  }
}
