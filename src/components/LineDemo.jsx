import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { display: false },
      min: 10,
      max: 26,
      ticks: {
        stepSize: 3,
      },
    },
  },
};

const labels = ["April 04", "April 07", "April 10", "April 13", "April 16"];

export const data = {
  labels,
  datasets: [
    {
      lineTension: 0.2,
      data: [17.2, 20, 19.6, 20.5, 18.4, 22.4],
      fill: "start",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;

        const gradient = ctx.createLinearGradient(0, 0, 0, 108);

        gradient.addColorStop(0, "rgba(0, 197, 226, 0.56)");
        gradient.addColorStop(0.5, "rgba(0, 197, 226, 0.2)");
        gradient.addColorStop(1, "rgba(0, 197, 226, 0)");
        return gradient;
      },
      pointBackgroundColor: "rgba(0, 197, 226, 0.56)",
      borderWidth: 1,
      borderColor: "rgba(0, 197, 226, 0.56)",
    },
  ],
};

export function LineDemo() {
  console.log(data);
  return <Line options={options} data={data} />;
}
