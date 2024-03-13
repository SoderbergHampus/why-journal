export type TrackedData = {
  name: string;
  score: number;
};

export type Entry = {
  id?: number;
  date: string;
  issue: TrackedData;
  parameters: TrackedData[];
  journalEntry?: string;
};
