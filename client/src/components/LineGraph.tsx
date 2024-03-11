import { Data, Layout } from 'plotly.js';
import { Entry } from '../types';
import Plot from 'react-plotly.js';

type LineGraphProps = {
  entries: Entry[];
};

const LineGraph = ({ entries }: LineGraphProps) => {
  // Define plot params
  const xAxis: number[] = [...Array(entries.length).keys()];

  const issueScores: number[] = [];
  const sleepScores: number[] = [];
  const dietScores: number[] = [];
  const stressScores: number[] = [];
  entries.forEach((entry) => {
    issueScores.push(entry.issue.score);
    sleepScores.push(entry.params[0].score);
    dietScores.push(entry.params[1].score);
    stressScores.push(entry.params[2].score);
  });

  const plotData: Data[] = [
    {
      x: xAxis,
      y: issueScores,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'red' },
      name: 'Issue score',
    },
    {
      x: xAxis,
      y: sleepScores,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'blue' },
      name: 'Sleep score',
    },
    {
      x: xAxis,
      y: dietScores,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'green' },
      name: 'Diet score',
    },
    {
      x: xAxis,
      y: stressScores,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'yellow' },
      name: 'Yellow score',
    },
  ];

  const plotLayout: Partial<Layout> = {
    title: 'Scores',
    yaxis: { range: [0, 100] },
    showlegend: true,
  };

  return (
    <>
      <div>LineGraph</div>
      <Plot data={plotData} layout={plotLayout}></Plot>
    </>
  );
};

export default LineGraph;
