import { Entry, TrackedData } from './types';
import { v4 as uuid } from 'uuid';

// Helper function for random
const randomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
};

// Mock n data entries
export const generateMockData = (n: number) => {
  // Define some constants
  const paramNames = ['sleep', 'diet', 'stress'];
  const issueName = 'headache';

  const day = 1;
  const listOfEntries: Entry[] = [];

  // Loop through and mock n entries
  for (let i = 0; i < n; i++) {
    // Mock parameters randomly
    const params: TrackedData[] = [];
    for (let j = 0; j < paramNames.length; j++) {
      const paramScore = randomNumber();
      params.push({ name: paramNames[j], score: paramScore });
    }

    // Mock issueScore as weighted result of parameters
    let issueScore = 100;
    issueScore -=
      params[0].score * 0.5 + params[1].score * 0.25 + params[2].score * 0.1;
    issueScore = Math.round(issueScore);

    const issue: TrackedData = { name: issueName, score: issueScore };

    // Mock date
    let date;
    day + i < 10 ? (date = `0${day + i}`) : (date = '' + (day + i));
    date = '2024-03-' + date;

    // Mock journalentry
    const journalEntry = `${date} | `.repeat(10);

    // Create object for mocked data and add it to result list
    const entry: Entry = {
      id: uuid(),
      date: date,
      issue: issue,
      params: params,
      journalEntry: journalEntry,
    };

    listOfEntries.push(entry);
  }

  return listOfEntries;
};
