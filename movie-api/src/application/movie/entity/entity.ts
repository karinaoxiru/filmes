
export default abstract class Entity {

  public constructor(private _id: number) {}

  get id(): number {
    return this._id;
  }
}
