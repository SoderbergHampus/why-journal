import { FormEvent, useEffect, useState } from 'react';
import { Entry, SliderInputs } from '../types';
import SliderInput from './SliderInput';
import { addEntryToApi, getCurrentDate } from '../api';

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
 * Component
 * @returns
 */
const JournalIssueForm = () => {
  const [entry, setEntry] = useState<Entry | undefined>();
  const [submitMessage, setSubmitMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [sliderInputs, setSliderInputs] = useState<SliderInputs>({
    values: [10, 10, 10, 10],
  });

  useEffect(() => {
    if (entry !== undefined) {
      addEntryToApi(entry, setSubmitMsg, setErrorMsg);
    }
  }, [entry]);

  const handleSubmit = (e: JournalIssueFormEvent) => {
    e.preventDefault();

    // Validation and conversation to number
    const errorMsg = 'Invalid input scores';
    const headacheScore = sliderInputs.values[0];
    const sleepScore = sliderInputs.values[1];
    const dietScore = sliderInputs.values[2];
    const stressScore = sliderInputs.values[3];

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

  return (
    <section className='col-span-5 col-start-2'>
      <h2>Input your daily scores:</h2>
      <form onSubmit={handleSubmit}>
        {/* <h3>Slider testing</h3>
        <SliderInput /> */}
        <h3>Main issue:</h3>

        <label>Headache:</label>
        <SliderInput
          sliderInputs={sliderInputs}
          setSliderInputs={setSliderInputs}
          index={0}
        />

        <h3>Parameters:</h3>
        <label>Sleep:</label>
        <SliderInput
          sliderInputs={sliderInputs}
          setSliderInputs={setSliderInputs}
          index={1}
        />

        <label>Diet:</label>
        <SliderInput
          sliderInputs={sliderInputs}
          setSliderInputs={setSliderInputs}
          index={2}
        />

        <label>Stress:</label>
        <SliderInput
          sliderInputs={sliderInputs}
          setSliderInputs={setSliderInputs}
          index={3}
        />

        <h2>(Optional) Add a journal entry: </h2>
        <label htmlFor='journalEntry'></label>
        <textarea
          name=''
          id='journalEntry'
          defaultValue={''}
          cols={50}
          rows={15}
        ></textarea>

        <button type='submit' className='button'>
          Submit
        </button>
      </form>
      {submitMessage !== '' ? <h3>{submitMessage}</h3> : <h3>{errorMsg}</h3>}
    </section>
  );
};

export default JournalIssueForm;
