import { Entry } from './types';

const ENTRIES_URL = 'https://why-journal.azurewebsites.net/api/journalEntries';

/**
 * Function to get current date.
 * @returns Current date in format 'yyyy-mm-dd'
 */
export const getCurrentDate = (): string => {
  const date = new Date();
  let dd: number | string = date.getDate();
  dd < 10 ? (dd = '0' + dd) : (dd = '' + dd);

  let mm: number | string = date.getMonth() + 1;
  mm < 10 ? (mm = '0' + mm) : (mm = '' + mm);

  const yyyy = date.getFullYear().toString();

  return `${yyyy}-${mm}-${dd}`;
};

export const formatDate = (date: Date): string => {
  let dd: number | string = date.getDate();
  dd < 10 ? (dd = '0' + dd) : (dd = '' + dd);

  let mm: number | string = date.getMonth() + 1;
  mm < 10 ? (mm = '0' + mm) : (mm = '' + mm);

  const yyyy = date.getFullYear().toString();

  return `${yyyy}-${mm}-${dd}`;
};

export const fetchEntries = async (): Promise<Entry[]> => {
  const response: Response = await fetch(ENTRIES_URL);
  const responseJson: Promise<Entry[]> = await response.json();
  return responseJson;
};

export const addEntryToApi = (entry: Entry): Promise<string> => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  };

  return new Promise<string>((resolve, reject) => {
    fetch(ENTRIES_URL, options)
      .then((response) => {
        if (response.status !== 201) {
          reject(
            `Failed to add entry, recieved status code ${response.status}`
          );
        } else {
          resolve('Entry was added successfully');
        }
      })
      .catch(() => {
        reject(
          'Failed to add entry, likely an issue with the api. Try again later'
        );
      });
  });
};
