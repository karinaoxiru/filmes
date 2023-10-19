import Entity from "./entity";
import Rating from "./rating";

export default class Movie extends Entity {
  constructor(
    _id: number,
    private _title: string,
    private _year: number,
    private _released: string,
    private _runtime: string,
    private _gerne: string,
    private _director: string,
    private _actors: string,
    private _poster: string,
    private _plot: string,
    private _ratings: Rating[],
  ) {
    super(_id);

    this.validation();
  }

  private validation() {
    if (this._title === '') {
      throw new Error("title is required!");
    }
  }
}
