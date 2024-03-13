import { FormEvent, useEffect, useState } from 'react';
import { Entry } from '../types';

type JournalIssueFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    headacheInput: { value: string };
    sleepInput: { value: string };
    dietInput: { value: string };
    stressInput: { value: string };
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
  const [submitMessage, setSubmitMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (entry !== undefined) {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry),
      };

      fetch('http://localhost:3000/api/journalEntries', options)
        .then((response) => {
          if (response.status === 201) {
            setSubmitMsg('Your daily journal has been submitted!');
            setErrorMsg('');
          } else if (response.status === 404) {
            setErrorMsg(
              'Error when submitting message, incorrect submit input'
            );
            setSubmitMsg('');
          }
        })
        .catch(() => {
          setErrorMsg('Unknown error when submitting');
          setSubmitMsg('');
        });
    }
  }, [entry]);

  const handleSubmit = (e: JournalIssueFormEvent) => {
    e.preventDefault();

    // Validation and conversation to number
    const errorMsg = 'Invalid input scores';
    const headacheScoreString = e.target.headacheInput.value;
    const sleepScoreString = e.target.sleepInput.value;
    const dietScoreString = e.target.dietInput.value;
    const stressScoreString = e.target.stressInput.value;

    if (
      isNaN(parseInt(headacheScoreString)) ||
      isNaN(parseInt(sleepScoreString)) ||
      isNaN(parseInt(dietScoreString)) ||
      isNaN(parseInt(stressScoreString))
    ) {
      setErrorMsg(errorMsg);
      setSubmitMsg('');
      setEntry(undefined);
      return;
    }

    const headacheScore = +headacheScoreString;
    const sleepScore = +sleepScoreString;
    const dietScore = +dietScoreString;
    const stressScore = +stressScoreString;

    if (
      headacheScore < 1 ||
      headacheScore > 100 ||
      sleepScore < 1 ||
      sleepScore > 100 ||
      dietScore < 1 ||
      dietScore > 100 ||
      stressScore < 1 ||
      stressScore > 100
    ) {
      setErrorMsg(errorMsg);
      setSubmitMsg('');
      setEntry(undefined);
      return;
    }

    setEntry({
      date: getCurrentDate(),
      issue: { name: 'headache', score: headacheScore },
      parameters: [
        { name: 'sleep', score: sleepScore },
        { name: 'diet', score: dietScore },
        { name: 'stress', score: stressScore },
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
      {submitMessage !== '' ? (
        <h3 className='submit-msg entry-form__submit-msg'>{submitMessage}</h3>
      ) : (
        <h3 className='error-msg entry-form__error-msg'>{errorMsg}</h3>
      )}
    </section>
  );
};

export default JournalIssueForm;
