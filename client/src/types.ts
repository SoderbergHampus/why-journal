export type TrackedData = {
  name: string;
  score: number;
};

export type Entry = {
  id: string;
  date: string;
  issue: TrackedData;
  params: TrackedData[];
  journalEntry: string;
};
