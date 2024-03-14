import { FormEvent, useEffect, useState } from 'react';
import { Entry, SliderInputs } from '../types';
import SliderInput from './SliderInput';
import { addEntryToApi, formatDate } from '../api';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { mockToApi } from '../dataMock';

type JournalIssueFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    headacheInput: { value: string };
    sleepInput: { value: string };
    dietInput: { value: string };
    stressInput: { value: string };
    journalEntry: { value: string };
  };
};

type FormEventMock = FormEvent<HTMLFormElement> & {
  target: {
    n: { value: number };
    weights: { value: string };
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
  const [date, setDate] = useState(new Date());

  const handleMock = (e: FormEventMock) => {
    e.preventDefault();

    const weights: number[] = e.target.weights.value.split(',').map((w) => +w);
    const n: number = e.target.n.value;
    mockToApi(n, weights);
  };

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
      date: formatDate(date),
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
      <h2>Input your daily scores</h2>
      <form onSubmit={handleSubmit}>
        <h3>Main issue</h3>

        <label>Headache</label>
        <SliderInput
          sliderInputs={sliderInputs}
          setSliderInputs={setSliderInputs}
          index={0}
        />

        <h3>Parameters</h3>
        <label>Sleep</label>
        <SliderInput
          sliderInputs={sliderInputs}
          setSliderInputs={setSliderInputs}
          index={1}
        />

        <label>Diet</label>
        <SliderInput
          sliderInputs={sliderInputs}
          setSliderInputs={setSliderInputs}
          index={2}
        />

        <label>Stress</label>
        <SliderInput
          sliderInputs={sliderInputs}
          setSliderInputs={setSliderInputs}
          index={3}
        />

        <h3>Select date</h3>
        <DatePicker
          showIcon
          selected={date}
          onChange={(d) => d !== null && setDate(d)}
          dateFormat='yyyy-MM-dd'
          maxDate={new Date()}
          className='button flex h-8 w-32 items-center justify-end'
        />

        <h2>Write in your journal</h2>
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

      <hr />
      <h2>Mock data</h2>
      <form onSubmit={handleMock} className='flex gap-5'>
        <label>n</label>
        <input
          type='number'
          className='mock-input n'
          id='n'
          defaultValue={'5'}
        />
        <label>weights</label>
        <input
          id='weights'
          type='text'
          className='mock-input weights'
          defaultValue={'0.8,0.4,0.2'}
        />
        <button className='button' type='submit'>
          Mock data
        </button>
      </form>
    </section>
  );
};

export default JournalIssueForm;
