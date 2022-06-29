import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
    },
  },
};

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export const data = {
  labels,
  datasets: [
    {
      barThickness: 40,
      data: [2, 5, 3, 4, 5],
      backgroundColor: "rgba(90, 0, 255, 0.52)",
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
