import { FormEvent, useState } from 'react';

type EntrySubmit = FormEvent<HTMLFormElement> & {
  target: {
    entry: { value: string };
  };
};

const JournalEntryForm = () => {
  const handleSubmit = async (e: EntrySubmit) => {
    e.preventDefault();
    setJournalEntry(e.target.entry.value);
  };

  const [journalEntry, setJournalEntry] = useState('');

  console.log(`Journal entry: ${journalEntry}`);
  return (
    <section className='section entry-form__section'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='entry'></label>
        <textarea name='' id='entry' cols={50} rows={15}></textarea>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default JournalEntryForm;
