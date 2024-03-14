import { Entry } from './types';

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

export const addEntryToApi = (
  entry: Entry,
  setSubmitMsg?: (p: string) => void,
  setErrorMsg?: (p: string) => void
) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  };

  if (setSubmitMsg !== undefined && setErrorMsg !== undefined) {
    fetch('http://localhost:3000/api/journalEntries', options)
      .then((response) => {
        if (response.status === 201) {
          setSubmitMsg('Your daily journal has been submitted!');
          setErrorMsg('');
        } else if (response.status === 404) {
          setErrorMsg('Error when submitting message, incorrect submit input');
          setSubmitMsg('');
        }
      })
      .catch(() => {
        setErrorMsg('Unknown error when submitting');
        setSubmitMsg('');
      });
  } else {
    fetch('http://localhost:3000/api/journalEntries', options)
      .then((response) => {
        if (response.status !== 201) {
          throw Error('Something went wrong in POST-fetch');
        }
      })
      .catch(() => {
        console.log('POST fetch rejected');
      });
  }
};
