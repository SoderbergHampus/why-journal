import { FormEvent, useEffect, useState } from 'react';
import { Entry, SliderInputs } from '../types';
import SliderInput from './SliderInput';
import { addEntryToApi, formatDate } from '../api';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { mockToApi } from '../dataMock';
import toast, { Toaster } from 'react-hot-toast';

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

    toast.success('Data was mocked succesfully!');
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
    setSubmitMsg('Entry was added successfully!');
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

    toast.success('Entry was added successfully!');
  };

  console.log(errorMsg);
  console.log(submitMessage);

  return (
    <section className='component'>
      <form onSubmit={handleSubmit}>
        <h2>Select date</h2>
        <DatePicker
          showIcon
          selected={date}
          onChange={(d) => d !== null && setDate(d)}
          dateFormat='yyyy-MM-dd'
          maxDate={new Date()}
          className='button__date'
        />

        <h2>Main issue</h2>

        <section className='section'>
          <label>Headache</label>
          <SliderInput
            sliderInputs={sliderInputs}
            setSliderInputs={setSliderInputs}
            index={0}
          />
        </section>

        <h2>Parameters</h2>
        <section className='section'>
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
        </section>

        <h2>Write about your day</h2>
        <textarea
          name=''
          id='journalEntry'
          defaultValue={''}
          className='section textarea'
        ></textarea>

        <button type='submit' className='button'>
          Add Entry
        </button>
      </form>

      <Toaster position='top-center' reverseOrder={false} />

      <h2>Mock data</h2>
      <form onSubmit={handleMock} className='section mock-form'>
        <div className='mock-param-container'>
          <label>Number of entries: </label>
          <input
            type='text'
            className='mock-input n'
            id='n'
            defaultValue={'15'}
          />
        </div>

        <div className='mock-param-container'>
          <label>Weights:</label>
          <input
            id='weights'
            type='text'
            className='mock-input weights'
            defaultValue={'0.8,0.4,0.2'}
          />
        </div>
        <button className='button' type='submit'>
          Mock data
        </button>
      </form>
    </section>
  );
};

export default JournalIssueForm;
