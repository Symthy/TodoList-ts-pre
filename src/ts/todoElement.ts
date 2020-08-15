const TodoElements = {
  TITLE: 'Title',
  DETAIL: 'Detail',
  ESTIMATE: 'EstimateTime',
  RESULT: 'ResultTime',
} as const;
type TodoElementsType = typeof TodoElements;
export type TodoElement = TodoElementsType[keyof TodoElementsType];
