import { Data, Layout } from 'plotly.js';
import { Entry } from '../types';
import Plot from 'react-plotly.js';

type LineGraphProps = {
  entries: Entry[] | undefined;
};

const LineGraph = ({ entries }: LineGraphProps) => {
  let plotData: Data[] | undefined;
  let plotLayout: Partial<Layout> | undefined;

  if (entries !== undefined) {
    // Define plot params
    const xAxis: number[] = [...Array(entries.length).keys()];

    let xText = entries.map((entry) => entry.date);

    let xVals = xAxis;
    while (xText.length > 13) {
      const xTextNew = [];
      const xValsNew = [];
      for (let i = 0; i < xText.length; i++) {
        if (i % 2 === 0) {
          xTextNew.push(xText[i]);
          xValsNew.push(xVals[i]);
        }
      }
      xText = xTextNew;
      xVals = xValsNew;
    }

    const issueScores: number[] = [];
    const sleepScores: number[] = [];
    const dietScores: number[] = [];
    const stressScores: number[] = [];
    entries.forEach((entry) => {
      issueScores.push(entry.issue.score);
      sleepScores.push(entry.parameters[0].score);
      dietScores.push(entry.parameters[1].score);
      stressScores.push(entry.parameters[2].score);
    });

    plotData = [
      {
        x: xAxis,
        y: issueScores,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'black' },
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
        marker: { color: 'red' },
        name: 'Stress score',
      },
    ];

    plotLayout = {
      title: 'Scores',
      yaxis: { range: [-10, 110], title: 'Score' },
      xaxis: {
        title: 'Date',
        tickmode: 'array',
        tickvals: xVals,
        ticktext: xText,
        tickangle: 30,
      },
      showlegend: true,
    };
  } else {
    plotData = undefined;
    plotLayout = undefined;
  }

  return (
    <>
      {entries !== undefined &&
        plotData !== undefined &&
        plotLayout !== undefined && (
          <section className='col-span-10 col-start-2'>
            <h2>Issue and parameter graph:</h2>
            <Plot data={plotData} layout={plotLayout}></Plot>
          </section>
        )}
    </>
  );
};

export default LineGraph;
