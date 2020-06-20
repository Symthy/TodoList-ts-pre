export const TodoStates = {
  WAITING: 'Waiting',
  IN_PROGRESS: 'In progress',
  COMPLETED: 'Completed',
  PENDDING: 'Pendding',
} as const;
export type TodoState = typeof TodoStates[keyof typeof TodoStates];
