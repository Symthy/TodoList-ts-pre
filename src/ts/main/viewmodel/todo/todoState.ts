export const TodoStates = {
  WAITING: 'Waiting',
  IN_PROGRESS: 'InProgress',
  COMPLETED: 'Completed',
  PENDDING: 'Pending',
} as const;
export type TodoState = typeof TodoStates[keyof typeof TodoStates];
