/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChartOptions, Plugin } from 'chart.js';

// Register necessary components from Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

interface PerformanceChartProps {
  labels: string[];  // X-axis labels
  dataPoints: number[];  // Data for the line chart
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ labels, dataPoints }) => {
  // Chart Data
  const data = {
    labels: labels, // Labels passed as props
    datasets: [
      {
        label: 'Performance',
        data: dataPoints, // Data points passed as props
        fill: false,
        borderColor: 'blue',
        tension: 0.3, // Smooth curve
      },
    ],
  };

  // Chart Options
  const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  // Plugin to draw background layers for "Perfect", "Good", and "Need Focus"
  const backgroundLayerPlugin: Plugin<'line'> = {
    id: 'backgroundLayer',
    beforeDraw: (chart) => {
      const { ctx, chartArea: { top, bottom, left, right }, scales: { y } } = chart;

      // Function to draw layers with colors
      const drawLayer = (yMin: number, yMax: number, color: string) => {
        ctx.save();
        ctx.fillStyle = color;
        ctx.fillRect(left, y.getPixelForValue(yMax), right - left, y.getPixelForValue(yMin) - y.getPixelForValue(yMax));
        ctx.restore();
      };

      // Draw "Perfect" Layer (80-100)
      drawLayer(80, 100, 'rgba(0, 255, 0, 0.2)'); // Green for Perfect

      // Draw "Good" Layer (60-80)
      drawLayer(60, 80, 'rgba(255, 255, 0, 0.2)'); // Yellow for Good

      // Draw "Need Focus" Layer (0-60)
      drawLayer(0, 60, 'rgba(255, 0, 0, 0.2)'); // Red for Need Focus
    },
  };

  return (
    <div style={{ width: '800px', height: '400px' }}>
      <h2>Performance Chart</h2>
      <Line data={data} options={options} plugins={[backgroundLayerPlugin]} />
    </div>
  );
};

export default PerformanceChart;