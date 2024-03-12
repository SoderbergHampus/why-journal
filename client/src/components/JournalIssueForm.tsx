import { FormEvent, useEffect, useState } from 'react';
import { Entry } from '../types';
import { mockPostEntry } from '../dataMock';

// type JournalIssueFormProps = {
//   issue: string;
//   params: string[];
// };

type JournalIssueFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    headacheInput: { value: number };
    sleepInput: { value: number };
    dietInput: { value: number };
    stressInput: { value: number };
    journalEntry: { value: string };
  };
};

/**
 * Function to get current date.
 * @returns Current date in format 'yyyy-mm-dd'
 */
const getCurrentDate = (): string => {
  const date = new Date();
  let dd: number | string = date.getDate();
  dd < 10 ? (dd = '0' + dd) : (dd = '' + dd);

  let mm: number | string = date.getMonth() + 1;
  mm < 10 ? (mm = '0' + mm) : (mm = '' + mm);

  const yyyy = date.getFullYear().toString();

  return `${yyyy}-${mm}-${dd}`;
};

/**
 * Component
 * @returns
 */
const JournalIssueForm = () => {
  const [entry, setEntry] = useState<Entry | undefined>();
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    if (entry !== undefined) {
      mockPostEntry(entry)
        .then((response) => {
          if (response.status === 201) {
            setSubmitMessage('Your daily journal has been submitted!');
          } else if (response.status === 404) {
            setSubmitMessage(
              'Error when submitting message, incorrect submit input'
            );
          }
        })
        .catch(() => setSubmitMessage('Unknown error when submitting'));
    }
  }, [entry]);

  const handleSubmit = (e: JournalIssueFormEvent) => {
    e.preventDefault();

    setEntry({
      date: getCurrentDate(),
      issue: { name: 'headache', score: e.target.headacheInput.value },
      params: [
        { name: 'sleep', score: e.target.sleepInput.value },
        { name: 'diet', score: e.target.dietInput.value },
        { name: 'stress', score: e.target.stressInput.value },
      ],
      journalEntry: e.target.journalEntry.value,
    });
  };

  console.log(entry);

  return (
    <section className='section edit-issue--section'>
      JournalIssueForm
      <h2>Input your daily scores:</h2>
      <form onSubmit={handleSubmit}>
        <h3>Main issue:</h3>
        <label htmlFor='headacheInput'>Headache</label>
        <input type='text' id='headacheInput' />

        <hr />
        <h3>Parameters:</h3>
        <label htmlFor='sleepInput'>Sleep</label>
        <input type='text' id='sleepInput' />

        <hr />
        <label htmlFor='dietInput'>Diet</label>
        <input type='text' id='dietInput' />

        <hr />
        <label htmlFor='stressInput'>Stress</label>
        <input type='text' id='stressInput' />

        <hr />
        <h2>(Optional) Add a journal entry: </h2>
        <label htmlFor='journalEntry'></label>
        <textarea
          name=''
          id='journalEntry'
          defaultValue={''}
          cols={50}
          rows={15}
        ></textarea>

        <hr />
        <button type='submit'>Submit</button>
      </form>
      {submitMessage !== '' && (
        <h3 className='submit-msg entry-form__submit-msg'>{submitMessage}</h3>
      )}
    </section>
  );
};

export default JournalIssueForm;
