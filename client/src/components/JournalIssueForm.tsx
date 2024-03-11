import { FormEvent, useState } from 'react';

type JournalIssueFormProps = {
  issue: string;
  params: string[];
};

type JournalIssueFormEvent = FormEvent<HTMLFormElement> & {
  target: {
    issueInput: { value: number };
    param0Input: { value: number };
    param1Input: { value: number };
    param2Input: { value: number };
  };
};

const JournalIssueForm = ({ issue, params }: JournalIssueFormProps) => {
  const [issueScore, setIssueScore] = useState<number>(0);
  const InitialParamScores: number[] = [];
  params.forEach(() => InitialParamScores.push(-1));
  const [paramScores, setParamScores] = useState<number[]>(InitialParamScores);

  const handleSubmit = (e: JournalIssueFormEvent) => {
    e.preventDefault();

    setIssueScore(e.target.issueInput.value);
    setParamScores([
      e.target.param0Input.value,
      e.target.param1Input.value,
      e.target.param2Input.value,
    ]);
  };

  console.log(`Issue score: ${issueScore}`);
  console.log(`Parameter scores: ${paramScores}`);

  return (
    <section className='section edit-issue--section'>
      JournalIssueForm
      <h2>Input your daily scores:</h2>
      <form onSubmit={handleSubmit}>
        <h3>Main issue:</h3>
        <label htmlFor='issueInput'>{issue}</label>
        <input type='text' id='issueInput' />

        <hr />
        <h3>Parameters:</h3>
        <label htmlFor='param0Input'>{params[0]}</label>
        <input type='text' id='param0Input' />

        <hr />
        <label htmlFor='param1Input'>{params[1]}</label>
        <input type='text' id='param1Input' />

        <hr />
        <label htmlFor='param2Input'>{params[2]}</label>
        <input type='text' id='param2Input' />

        <hr />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default JournalIssueForm;
