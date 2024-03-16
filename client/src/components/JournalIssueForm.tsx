import { FormEvent, useEffect, useState } from 'react';
import { Entry, SliderInputs } from '../types';
import SliderInput from './SliderInput';
import { addEntryToApi, formatDate } from '../api';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { mockToApi } from '../dataMock';
import toast, { Toaster } from 'react-hot-toast';
import { PiCalendarDuotone } from 'react-icons/pi';

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
  const [sliderInputs, setSliderInputs] = useState<SliderInputs>({
    values: [10, 10, 10, 10],
  });
  const [date, setDate] = useState(new Date());

  const handleMock = (e: FormEventMock) => {
    e.preventDefault();

    const weights: number[] = e.target.weights.value.split(',').map((w) => +w);
    const n: number = e.target.n.value;

    mockToApi(n, weights)
      .then((res) => {
        toast.success(res);
      })
      .catch((res) => toast.error(res));
  };

  useEffect(() => {
    if (entry !== undefined) {
      addEntryToApi(entry)
        .then((res) => toast.success(res))
        .catch((res) => toast.error(res));
    }
  }, [entry]);

  const handleSubmit = (e: JournalIssueFormEvent) => {
    e.preventDefault();

    setEntry({
      date: formatDate(date),
      issue: { name: 'headache', score: sliderInputs.values[0] },
      parameters: [
        { name: 'sleep', score: sliderInputs.values[1] },
        { name: 'diet', score: sliderInputs.values[2] },
        { name: 'stress', score: sliderInputs.values[3] },
      ],
      journalEntry: e.target.journalEntry.value,
    });
  };

  return (
    <section className='component'>
      <form onSubmit={handleSubmit}>
        <h2>Select date</h2>
        <div className='grid h-10 w-16 grid-cols-2 place-content-center items-center rounded-l bg-section pl-2'>
          <PiCalendarDuotone size={'full'} className='col-start-1' />
          <DatePicker
            selected={date}
            onChange={(d) => d !== null && setDate(d)}
            dateFormat='yyyy-MM-dd'
            maxDate={new Date()}
            className='button__date'
          />
        </div>

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

        <h2>Entry</h2>
        <section className='section'>
          <textarea
            name=''
            id='journalEntry'
            defaultValue={''}
            className='textarea'
            placeholder='Write about your day...'
          ></textarea>
        </section>

        <button type='submit' className='button'>
          Add Entry
        </button>
      </form>

      <Toaster position='top-center' reverseOrder={false} />

      <h2>Mock data</h2>

      <form onSubmit={handleMock}>
        <section className='section section__mock-form'>
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
        </section>
        <button className='button' type='submit'>
          Mock data
        </button>
      </form>
    </section>
  );
};

export default JournalIssueForm;
