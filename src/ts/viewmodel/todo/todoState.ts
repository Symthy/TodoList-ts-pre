export const TodoStates = {
  WAITING: 'Waiting',
  IN_PROGRESS: 'InProgress',
  COMPLETED: 'Completed',
  PENDDING: 'Pending',
} as const;
export type TodoState = typeof TodoStates[keyof typeof TodoStates];

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function isTodoState(state: any): state is TodoState {
  return Object.values(TodoStates).includes(state);
}
