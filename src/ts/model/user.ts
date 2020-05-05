export class User {
  constructor(
    private _firstName: string,
    private _lastName: string,
    private _age: number
  ) {}

  get firstName(): string {
    return this._firstName;
  }
  get lastName(): string {
    return this._lastName;
  }
  get age(): number {
    return this._age;
  }
}
