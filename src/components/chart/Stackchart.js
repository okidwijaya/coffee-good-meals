import React, {useEffect, useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'];

function Stackchart({rawdata}) {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [done, setDone] = useState(false);
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  // const [options, setOptions] = useState();
  console.log('Dataed Raw', labels, data);
  useEffect(() => {
    console.log('1', data, labels);
    rawdata.forEach((element) => {
      console.log('element', element);
      const arrData = data;
      arrData.push(element.income);
      setData(arrData);
      const arrLabels = labels;
      arrLabels.push(element.day);
      setLabels(arrLabels);
    });
    setDone(true);
    console.log('2', data, labels);
  }, []);
  // return <></>;
  if (done) {
    console.log('data.length > 0 && labels.length >0');
  }
  return (
    <>
      {done ? (
        <Bar
          options={options}
          data={{
            labels,
            datasets: [
              {
                label: 'Income',
                data,
                backgroundColor: 'rgba(106, 64, 41, 1)',
              },
            ],
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Stackchart;
