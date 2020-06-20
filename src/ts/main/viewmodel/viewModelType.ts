export const ViewModelTypes = {
  TODO: 'Todo',
  SORTLABEL: 'SortLabel'
} as const;
export type ViewModelType = typeof ViewModelTypes[keyof typeof ViewModelTypes];
