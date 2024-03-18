import { Data, Layout } from 'plotly.js';
// import { Entry } from '../types';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

const LineGraph = () => {
  let plotData: Data[] | undefined;
  let plotLayout: Partial<Layout> | undefined;

  const entries = useSelector((state: RootState) => state.entries.values);

  if (entries !== undefined) {
    // Define plot params
    const xAxis: number[] = [...Array(entries.length).keys()];

    let xText = entries.map((entry) => entry.date);

    let xVals = xAxis;
    while (xText.length > 10) {
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
      autosize: true,
      margin: {
        l: 40,
        r: 10,
        b: 80,
        t: 10,
      },
      yaxis: { range: [-10, 110], title: 'Score' },
      xaxis: {
        title: 'Date',
        tickmode: 'array',
        tickvals: xVals,
        ticktext: xText,
        tickangle: 50,
      },
      plot_bgcolor: '#00CFA0',
      paper_bgcolor: '#00CFA0',
      font: {
        color: '#E8FEF5',
      },
      showlegend: true,
      legend: {
        x: 0,
        xanchor: 'left',
        y: 1.3,
      },
    };
  } else {
    plotData = undefined;
    plotLayout = undefined;
  }
  return (
    <>
      <section className='component'>
        <h2>Issue and parameter scores</h2>
        {entries !== undefined &&
          plotData !== undefined &&
          plotLayout !== undefined && (
            <div className='rounded bg-section p-1' id='plot__section'>
              <Plot
                data={plotData}
                layout={plotLayout}
                useResizeHandler={true}
                className='w-full'
              ></Plot>
            </div>
          )}
      </section>
    </>
  );
};

export default LineGraph;
