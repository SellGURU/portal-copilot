/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect, useState } from 'react';

const CustomCanvasChart = () => {
  const canvasRef = useRef(null);
  const [tooltip, setTooltip] = useState<any>(null);

  useEffect(() => {
    const canvas:any = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const dataPoints = [140, 156, 143, 142, 150, 160]; // Example data
    const labels = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    const colors = {
        
      background: ['#FC5474', '#F39C12', '#2ECC71'], // Red, Yellow, Green
      line: '#FFD700',
      points: '#FF6384',
    };

    // Chart dimensions and padding
    const chartWidth = 500;
    const chartHeight = 120;
    const padding = 40;

    // Determine Y scale (between min and max)
    const maxValue = 200;
    const minValue = 100;

    const yScale = chartHeight / (maxValue - minValue);
    const xSpacing = chartWidth / (dataPoints.length - 1);

    // Draw background gradient
    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
      gradient.addColorStop(0, colors.background[2]); // Green
      gradient.addColorStop(0.5, colors.background[1]); // Yellow
      gradient.addColorStop(1, colors.background[0]); // Red

      ctx.fillStyle = gradient;
      ctx.fillRect(padding, 0, chartWidth, chartHeight);
    };

    // Draw the line chart
    const drawLineChart = () => {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = colors.line;

      dataPoints.forEach((value, index) => {
        const x = padding + index * xSpacing;
        const y = chartHeight - (value - minValue) * yScale;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();
    };

    // Draw points on the chart
    const drawPoints = () => {
      dataPoints.forEach((value, index) => {
        const x = padding + index * xSpacing;
        const y = chartHeight - (value - minValue) * yScale;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2, true);
        ctx.fillStyle = colors.points;
        ctx.fill();
      });
    };

    // Draw X-axis labels (Months)
    const drawLabels = () => {
      ctx.fillStyle = '#fff';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';

      labels.forEach((label, index) => {
        const x = padding + index * xSpacing;
        const y = chartHeight + 20;
        ctx.fillText(label, x, y);
      });
    };

    // Check for hover and display tooltip
    const handleHover = (event:any) => {
      const { offsetX, offsetY } = event.nativeEvent;
      const canvasRect = canvas.getBoundingClientRect();

      dataPoints.forEach((value, index) => {
        const x = padding + index * xSpacing;
        const y = chartHeight - (value - minValue) * yScale;

        if (
          offsetX > x - 5 &&
          offsetX < x + 5 &&
          offsetY > y - 5 &&
          offsetY < y + 5
        ) {
          setTooltip({
            x: x + canvasRect.left,
            y: y + canvasRect.top - 20,
            value: `${value} mg/dL`,
          });
        }
      });
    };

    const clearTooltip = () => setTooltip(null);

    // Clear canvas
    const clearCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    // Draw everything
    const drawChart = () => {
      clearCanvas();
      drawBackground();
      drawLineChart();
      drawPoints();
      drawLabels();
    };

    drawChart();

    // Add event listeners for hover
    canvas.addEventListener('mousemove', handleHover);
    canvas.addEventListener('mouseleave', clearTooltip);

    return () => {
      canvas.removeEventListener('mousemove', handleHover);
      canvas.removeEventListener('mouseleave', clearTooltip);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <canvas
        ref={canvasRef}
        width={600}
        height={150}
        style={{ background: '#1c1c1c' }}
      />
      {tooltip && (
        <div
          style={{
            position: 'absolute',
            left: tooltip.x,
            top: tooltip.y,
            background: 'rgba(0,0,0,0.7)',
            padding: '5px 10px',
            color: '#fff',
            borderRadius: '5px',
            pointerEvents: 'none',
            fontSize: '12px',
          }}
        >
          {tooltip.value}
        </div>
      )}
    </div>
  );
};

export default CustomCanvasChart;