export default class Játékos {
  //Adattagok: TS 3.8.0-tól a privát adattagok jelölése #
  #név: string;
  #tippek: number[] = [];

  public get tippekSzáma(): number {
    return this.#tippek.length;
  }
  //Kódtagok

  //Konstruktor:
  constructor(sor: string) {
    const m: string[] = sor.split("");
    this.#név = m[0]; //Ő lesz a 0.tag, az első tag
    for (let i = 1; i < m.length; i++) {
      this.#tippek.push(Number(m[i])); //M i-edik elemének meghívása. Numberre konvertálálás
    }
  }
}
