export const State = {
  WAITING: "Waiting",
  IN_PROGRESS: "In progress",
  COMPLETED: "Completed",
} as const;
type State = typeof State[keyof typeof State];

export class Todo {
  constructor(
    private _title: string,
    private _createDate: Date,
    private _estimateHour: number,
    private _resultHour: number,
    private _workState: State,
    private _displayOrder: number
  ) {}

  get title(): string {
    return this._title;
  }

  get createDate(): Date {
    return this._createDate;
  }

  get estimateHour(): number {
    return this._estimateHour;
  }

  get resultHour(): number {
    return this._resultHour;
  }

  get workState(): string {
    return this._workState;
  }

  get displayOrder(): number {
    return this._displayOrder;
  }
}
