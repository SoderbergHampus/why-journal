import { loremIpsum } from 'lorem-ipsum';
import { addEntryToApi } from './globalFuntions';
import { Entry, TrackedData } from './types';

// Helper function for random
const randomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
};

/**
 * Function to generate mock data for user history
 * @param n The number of entries to mock.
 * @param weights Weights for generating issue score
 * @returns List of n Entry objects.
 */
export const generateMockData = (n: number, weights: number[]): Entry[] => {
  // Define some constants
  const paramNames = ['sleep', 'diet', 'stress'];
  const issueName = 'headache';

  const listOfEntries: Entry[] = [];

  // Loop through and mock n entries
  let maxIssueScore = 0;
  for (let i = 0; i < n; i++) {
    // Mock parameters randomly
    const params: TrackedData[] = [];
    for (let j = 0; j < paramNames.length; j++) {
      const paramScore = randomNumber();
      params.push({ name: paramNames[j], score: paramScore });
    }

    // Mock issueScore as weighted result of parameters
    const issueScore =
      params[0].score * weights[0] +
      params[1].score * weights[1] +
      params[2].score * weights[2];
    // issueScore = Math.round(issueScore);

    if (issueScore > maxIssueScore) {
      maxIssueScore = issueScore;
    }

    const issue: TrackedData = { name: issueName, score: issueScore };

    // Mock date
    const dateNow = new Date();
    dateNow.setDate(dateNow.getDate() - i);

    let dd: number | string = dateNow.getDate();
    dd < 10 ? (dd = '0' + dd) : (dd = '' + dd);

    let mm: number | string = dateNow.getMonth() + 1;
    mm < 10 ? (mm = '0' + mm) : (mm = '' + mm);

    const yyyy = dateNow.getFullYear().toString();

    const date = `${yyyy}-${mm}-${dd}`;

    // Mock journalentry
    const journalEntry = loremIpsum({ count: 30, paragraphLowerBound: 3 });

    // Create object for mocked data and add it to result list
    const entry: Entry = {
      id: i,
      date: date,
      issue: issue,
      parameters: params,
      journalEntry: journalEntry,
    };

    listOfEntries.push(entry);
  }

  listOfEntries.map(
    (entry) =>
      (entry.issue.score = Math.round(
        (entry.issue.score / maxIssueScore) * 100
      ))
  );

  return listOfEntries;
};

/**
 * Function that mocks a fetch of user history from api
 * @returns Promise containing a response of mocked data.
 */
export const mockFetchHistory = (): Promise<Response> => {
  const userHistory = generateMockData(3, [0.7, 0.2, 0.1]);
  const mockedResponse = new Response(JSON.stringify(userHistory));

  return new Promise<Response>((resolve, reject) => {
    if (userHistory !== undefined) {
      resolve(mockedResponse);
    }
    reject(new Error('Mocked fetch failed'));
  });
};

/**
 * Function that mocks the response of a POST fetch of a new entry
 * @param entry The entry to post. If entry.journalEntry equals 'failedpost',
 * the function will mock a failed post.
 * @returns A promise containing the mocked response
 */
export const mockPostEntry = (entry: Entry): Promise<Response> => {
  let mockedResponse: Response;
  entry.journalEntry !== 'failedPost'
    ? (mockedResponse = new Response(JSON.stringify(entry), { status: 201 }))
    : (mockedResponse = new Response('Failed to create entry', {
        status: 404,
      }));

  return new Promise<Response>((resolve, reject) => {
    if (mockedResponse.status === 201) {
      resolve(mockedResponse);
    }
    reject(mockedResponse);
  });
};

export const mockToApi = (n: number, weights: number[]): Promise<string> => {
  const entries = generateMockData(n, weights);
  return new Promise<string>((resolve, reject) => {
    entries.forEach((entry) => {
      addEntryToApi(entry)
        .then((res) => resolve(res))
        .catch((res) => reject(res));
    });
  });

  // if (error === undefined) {
  //   return new Promise((resolve) => resolve('Mocked entries successfully'));
  // } else {
  //   return error;
  // }
};
